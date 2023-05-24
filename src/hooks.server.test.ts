import type { Cookies, RequestEvent } from "@sveltejs/kit";
import { vi, describe, expect, type Mock } from "vitest";
import { handleToken } from "./hooks.server";
import { CONTENTFUL_MANAGEMENT_API_ENDPOINT, CONTENTFUL_SPACE_ID } from "$env/static/private";

const getRequestEventCookies = (overrides: Partial<Cookies> = {}): Cookies => ({
  get: vi.fn(),
  getAll: vi.fn(),
  set: vi.fn(),
  delete: vi.fn(),
  serialize: vi.fn(),
  ...overrides,
});

const getRequestEvent = (overrides: Partial<RequestEvent> = {}): RequestEvent => ({
  fetch: vi.fn(() => Promise.resolve(new Response())),
  getClientAddress: vi.fn(() => "127.0.0.1"),
  locals: {},
  params: {},
  platform: {},
  request: overrides.request || new Request("http://localhost"),
  setHeaders: vi.fn(),
  url: overrides.url || new URL("http://localhost"),
  isDataRequest: false,
  ...overrides,
  route: {
    id: null,
    ...overrides?.route,
  },
  cookies: getRequestEventCookies(overrides?.cookies),
});

const getURLAndRequest = (url: string) => ({
  url: new URL(url),
  request: new Request(url),
});

const resolve = vi.fn(() => new Response("test body"));

const redisClient = {
  connect: vi.fn(() => Promise.resolve()),
  get: vi.fn(),
  del: vi.fn(),
};

vi.doMock("redis", () => ({ createClient: vi.fn(() => redisClient) }));

import { createClient as createRedisClient } from "redis";

describe("handleToken", () => {
  beforeEach(() => vi.restoreAllMocks());

  describe("with an unauthenticated user", () => {
    it("does nothing for an unauthenticated user who is not trying to view preview content", async () => {
      const event = getRequestEvent();
      await handleToken({ resolve, event });
      expect(resolve).toHaveBeenCalledOnce();
      expect(resolve).toHaveBeenCalledWith(event);
      expect(event.locals.contentfulClient).toMatchObject({
        options: { preview: false },
      });
    });

    it("does not allow unauthenticated users to view preview content", async () => {
      const event = getRequestEvent(getURLAndRequest("http://localhost?preview"));
      await handleToken({ resolve, event });
      expect(resolve).toHaveBeenCalledOnce();
      expect(resolve).toHaveBeenCalledWith(event);
      expect(event.fetch).not.toHaveBeenCalled();
      expect(event.locals).toMatchObject({
        contentfulClient: {
          options: { preview: false },
        },
        previewAuthenticationError: {
          code: 401,
          message: "You must log in to view preview content",
        },
      });
    });

    it("ignores login requests", async () => {
      const event = getRequestEvent(getURLAndRequest("http://localhost/login?preview"));
      await handleToken({ resolve, event });
      expect(resolve).toHaveBeenCalledOnce();
      expect(resolve).toHaveBeenCalledWith(event);
      expect(event.fetch).not.toHaveBeenCalled();
      expect(event.locals).toMatchObject({
        contentfulClient: {
          options: { preview: false },
        },
      });
      expect(event.locals.currentUser).toBeUndefined();
    });

    it("ignores logout requests", async () => {
      const event = getRequestEvent(getURLAndRequest("http://localhost/logout?preview"));
      await handleToken({ resolve, event });
      expect(resolve).toHaveBeenCalledOnce();
      expect(resolve).toHaveBeenCalledWith(event);
      expect(event.fetch).not.toHaveBeenCalled();
      expect(event.locals).toMatchObject({
        contentfulClient: {
          options: { preview: false },
        },
      });
    });
  });

  describe("with a successfully authenticated user", () => {
    const testUser = {
      email: "test@example.com",
      name: "test example",
      avatarURL: "http://example.com",
    };
    let fetch: Mock<Parameters<typeof window.fetch>, ReturnType<typeof window.fetch>>,
      cookies: Cookies;
    beforeEach(() => {
      fetch = vi.fn();
      fetch.mockReturnValueOnce(
        Promise.resolve(
          new Response(
            JSON.stringify({
              email: testUser.email,
              firstName: testUser.name.split(" ")[0],
              lastName: testUser.name.split(" ")[1],
              avatarUrl: testUser.avatarURL,
            })
          )
        )
      );
      fetch.mockReturnValueOnce(
        Promise.resolve(
          new Response(
            JSON.stringify({
              name: "Default Contentful Space",
            })
          )
        )
      );
      cookies = getRequestEventCookies({
        get: (key: string) => ({ ldafUserToken: "testToken" }[key]),
      });
    });

    it("authenticates and gets user info", async () => {
      const event = getRequestEvent({
        fetch,
        cookies,
      });
      await handleToken({ resolve, event });
      expect(resolve).toHaveBeenCalledOnce();
      expect(resolve).toHaveBeenCalledWith(event);
      expect(event.fetch).toHaveBeenCalledOnce();
      expect(event.fetch).toHaveBeenCalledWith(`${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/users/me`, {
        headers: {
          Authorization: `Bearer testToken`,
        },
      });
      expect(event.locals).toMatchObject({
        currentUser: testUser,
        contentfulClient: {
          options: { preview: false },
        },
      });
    });

    it("loads preview client when user requests preview content", async () => {
      const event = getRequestEvent({
        ...getURLAndRequest("http://localhost?preview"),
        fetch,
        cookies,
      });
      await handleToken({ resolve, event });
      expect(resolve).toHaveBeenCalledOnce();
      expect(resolve).toHaveBeenCalledWith(event);
      expect(fetch.mock.calls).toEqual([
        [
          `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/users/me`,
          { headers: { Authorization: `Bearer testToken` } },
        ],
        [
          `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/spaces/${CONTENTFUL_SPACE_ID}`,
          { headers: { Authorization: `Bearer testToken` } },
        ],
      ]);
      expect(event.locals).toMatchObject({
        currentUser: testUser,
        contentfulClient: {
          options: { preview: true },
        },
      });
    });
  });

  describe("with an authenticated user with a bad token", () => {
    let fetch: Mock<Parameters<typeof window.fetch>, ReturnType<typeof window.fetch>>,
      cookies: Cookies;
    beforeEach(() => {
      fetch = vi.fn();
      fetch.mockReturnValueOnce(
        Promise.resolve(new Response("bad token", { status: 401, statusText: "Unauthorized" }))
      );
      cookies = getRequestEventCookies({
        get: (key: string) => ({ ldafUserToken: "testToken" }[key]),
      });
    });

    it("clears the cookie", async () => {
      const event = getRequestEvent({
        cookies,
        fetch,
      });
      await handleToken({ resolve, event });
      expect(resolve).toHaveBeenCalledOnce();
      expect(resolve).toHaveBeenCalledWith(event);
      expect(fetch.mock.calls).toEqual([
        [
          `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/users/me`,
          { headers: { Authorization: `Bearer testToken` } },
        ],
      ]);
      expect(
        (event.cookies.delete as Mock<Parameters<typeof event.cookies.delete>>).mock.calls
      ).toEqual([["ldafUserToken"]]);
    });

    it("returns a 401 if requesting preview content", async () => {
      const event = getRequestEvent({
        ...getURLAndRequest("http://localhost?preview"),
        cookies,
        fetch,
      });
      await handleToken({ resolve, event });
      expect(event.locals).toMatchObject({
        previewAuthenticationError: {
          code: 401,
          message: `Token was invalid; you have been logged out. Please log in again to view preview content.`,
        },
      });
    });
  });
});
