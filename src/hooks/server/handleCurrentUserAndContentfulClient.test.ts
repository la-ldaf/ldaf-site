import { describe, vi, it, beforeEach, type MockedFunction } from "vitest";
import setup from "$lib/__tests__/util/setup";
import type { Handle, RequestEvent } from "@sveltejs/kit";
import getRequestEvent from "$lib/__tests__/util/getRequestEvent";
import { createClient as createKVClient } from "$lib/services/server/kv/__mocks__";
import { getHandleCurrentUserAndContentfulClient } from "./handleCurrentUserAndContentfulClient";

const CONTENTFUL_DELIVERY_API_TOKEN = "CONTENTFUL_DELIVERY_API_TOKEN";
const CONTENTFUL_PREVIEW_API_TOKEN = "CONTENTFUL_PREVIEW_API_TOKEN";
const CONTENTFUL_SPACE_ID = "CONTENTFUL_SPACE_ID";
const CONTENTFUL_MANAGEMENT_API_ENDPOINT = "http://CONTENTFUL_MANAGEMENT_API_ENDPOINT";
const env = {
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_MANAGEMENT_API_ENDPOINT,
};

const ldafUserToken = "LDAF_USER_TOKEN";

const testUser = {
  email: "test@example.com",
  name: "test example",
  avatarURL: "http://example.com",
  managementAPIToken: "MANAGEMENT_TOKEN",
};

const { managementAPIToken, ...testUserLocal } = testUser;

const fetch: MockedFunction<typeof globalThis.fetch> = vi.fn();

type Resolve = Parameters<Handle>[0]["resolve"];
const resolve: Resolve = vi.fn(() => new Response("foobar"));

type Ctx = {
  event: RequestEvent;
  response: Response;
};

const describeRequestFor = (
  what: string,
  handle: (ctx: Partial<Ctx>) => void | Promise<void>,
  test: () => void | Promise<void>,
) => {
  describe(`when requesting ${what}`, async () => {
    const ctx: Partial<Ctx> = {};
    setup(async () => {
      await handle(ctx);
    });
    beforeEach<Ctx>((c) => {
      Object.assign(c, ctx);
    });
    itResolvesEvent();
    await test();
  });
};

const describeRequestsFor = (
  handlers: Record<string, (ctx: Partial<Ctx>) => Promise<void>>,
  test: () => void | Promise<void>,
) => {
  Object.entries(handlers).forEach(([label, handler]) => {
    describeRequestFor(label, handler, test);
  });
};

const getHandler =
  (options: Parameters<typeof getRequestEvent>[0] = {}) =>
  async (ctx: Partial<Ctx>) => {
    ctx.event = getRequestEvent({ fetch, ...options });
    ctx.response = await getHandleCurrentUserAndContentfulClient({ env })({
      event: ctx.event,
      resolve,
    });
  };

const itResolvesEvent = () =>
  it<Ctx>("resolves event", (ctx) => expect(resolve).toHaveBeenCalledOnceWith(ctx.event));

const itRespondsWithStatus = (status: number) =>
  it<Ctx>(`responds with ${status}`, (ctx) => {
    expect(ctx.response.status).toEqual(status);
  });

const itUsesKVClient = () =>
  it<Ctx>(`uses KV client`, (ctx) => expect(ctx.event.locals.getKVClient).toHaveBeenCalled());

const itDoesntUseKVClient = () =>
  it<Ctx>(`doesn't use KV client`, (ctx) =>
    expect(ctx.event.locals.getKVClient).not.toHaveBeenCalled());

const itInitializesNormalContentfulClient = () =>
  it<Ctx>("initializes normal contentful client", (ctx) =>
    expect(ctx.event.locals.contentfulClient).toMatchObject({
      options: { preview: false, token: CONTENTFUL_DELIVERY_API_TOKEN },
    }));

const itInitializesPreviewContentfulClient = () =>
  it<Ctx>("initializes preview contentful client", (ctx) =>
    expect(ctx.event.locals.contentfulClient).toMatchObject({
      options: { preview: true, token: CONTENTFUL_PREVIEW_API_TOKEN },
    }));

const itDoesntAuthorizeWithContentful = () =>
  it("doesn't call Contentful API", () => expect(fetch).not.toHaveBeenCalled());

const itAuthorizesWithContentful = () =>
  it("authorizes with Contentful", () =>
    expect(fetch).toHaveBeenCalledOnceWith(
      `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/spaces/${CONTENTFUL_SPACE_ID}`,
      {
        headers: {
          Authorization: `Bearer ${managementAPIToken}`,
        },
      },
    ));

const itDoesntHavePreviewAuthenticationError = () =>
  it<Ctx>("doesn't have preview authentication error", (ctx) =>
    expect(ctx.event.locals.previewAuthenticationError).toBeUndefined());

const itHasPreviewAuthenticationError = ({
  status = 401,
  message,
}: { status?: number; message?: string | undefined } = {}) =>
  it<Ctx>("has preview authentication error", (ctx) =>
    expect(ctx.event.locals.previewAuthenticationError).toMatchObject({
      status,
      ...(message ? { message } : {}),
    }));

const itHasCurrentUserLocal = () =>
  it<Ctx>("has current user local", (ctx) =>
    expect(ctx.event.locals.currentUser).toEqual(testUserLocal));

const itDoesntHaveCurrentUserLocal = () =>
  it<Ctx>("doesn't have current user local", (ctx) =>
    expect(ctx.event.locals.currentUser).toBeUndefined());

const itRequestsUserFromKV = () =>
  it<Ctx>("requests user from KV", async ({ event }) =>
    expect((await event.locals.getKVClient()).getUserInfoByToken).toHaveBeenCalledOnceWith(
      ldafUserToken,
    ));

const itDeletesUserFromKV = () =>
  it<Ctx>("deletes user record in KV", async ({ event }) =>
    expect((await event.locals.getKVClient()).deleteUserInfoByToken).toHaveBeenCalledOnceWith(
      ldafUserToken,
    ));

const itDeletesCookie = () =>
  it<Ctx>("deletes cookie", ({ event }) =>
    expect(event.cookies.delete).toHaveBeenCalledWith("ldafUserToken"));

describe("with an unauthenticated user", () => {
  describeRequestsFor(
    {
      "public content": getHandler(),
      "login page": getHandler({ url: "http://localhost/login?preview=true" }),
      "logout page": getHandler({ url: "http://localhost/logout?preview=true" }),
    },
    () => {
      itRespondsWithStatus(200);
      itInitializesNormalContentfulClient();
      itDoesntAuthorizeWithContentful();
      itDoesntHavePreviewAuthenticationError();
      itDoesntHaveCurrentUserLocal();
    },
  );

  describeRequestFor(
    "preview content",
    getHandler({ url: "http://localhost?preview=true" }),
    () => {
      itRespondsWithStatus(401);
      itInitializesNormalContentfulClient();
      itDoesntAuthorizeWithContentful();
      itDoesntUseKVClient();
      itHasPreviewAuthenticationError();
    },
  );
});

describe("with a successfully authenticated user", () => {
  const getAuthenticatedHandler =
    (options: Parameters<typeof getHandler>[0] = {}) =>
    async (ctx: Partial<Ctx>) => {
      const kvClient = await createKVClient();
      kvClient.getUserInfoByToken.mockReturnValueOnce(Promise.resolve(testUser));
      fetch.mockReturnValueOnce(Promise.resolve(new Response(JSON.stringify(testUser))));
      return getHandler({
        cookies: { ldafUserToken },
        locals: { getKVClient: vi.fn(async () => kvClient) },
        ...options,
      })(ctx);
    };

  describeRequestsFor(
    {
      "public content": getAuthenticatedHandler(),
      "login page": getAuthenticatedHandler({ url: "http://localhost/login?preview=true" }),
      "logout page": getAuthenticatedHandler({ url: "http://localhost/logout?preview=true" }),
    },
    () => {
      itRespondsWithStatus(200);
      itInitializesNormalContentfulClient();
      itUsesKVClient();
      itRequestsUserFromKV();
      itHasCurrentUserLocal();
      itDoesntAuthorizeWithContentful();
    },
  );

  describeRequestFor(
    "preview content",
    getAuthenticatedHandler({ url: "http://localhost?preview=true" }),
    () => {
      itRespondsWithStatus(200);
      itInitializesPreviewContentfulClient();
      itUsesKVClient();
      itRequestsUserFromKV();
      itHasCurrentUserLocal();
      itAuthorizesWithContentful();
    },
  );
});

describe("with a user with a token that doesn't exist in KV", () => {
  const getAuthenticatedHandler =
    (options: Parameters<typeof getHandler>[0] = {}) =>
    async (ctx: Partial<Ctx>) => {
      const kvClient = await createKVClient();
      kvClient.getUserInfoByToken.mockImplementation(() => {
        throw new Error("unexpected call");
      });
      kvClient.getUserInfoByToken.mockReturnValueOnce(Promise.resolve(null));
      await getHandler({
        cookies: { ldafUserToken },
        locals: { getKVClient: vi.fn(async () => kvClient) },
        ...options,
      })(ctx);
    };

  describeRequestsFor(
    {
      "public content": getAuthenticatedHandler(),
      "login page": getAuthenticatedHandler({ url: "http://localhost/login?preview=true" }),
      "logout page": getAuthenticatedHandler({ url: "http://localhost/logout?preview=true" }),
    },
    () => {
      itRespondsWithStatus(200);
      itInitializesNormalContentfulClient();
      itUsesKVClient();
      itRequestsUserFromKV();
      itDeletesCookie();
      itDoesntHaveCurrentUserLocal();
      itDoesntAuthorizeWithContentful();
    },
  );

  describeRequestFor(
    "preview content",
    getAuthenticatedHandler({ url: "http://localhost?preview=true" }),
    () => {
      itRespondsWithStatus(401);
      itInitializesNormalContentfulClient();
      itUsesKVClient();
      itRequestsUserFromKV();
      itDeletesCookie();
      itDoesntHaveCurrentUserLocal();
      itDoesntAuthorizeWithContentful();
    },
  );
});

describe("with a user with a token that exists in KV but is not valid in Contentful", () => {
  const getAuthenticatedHandler =
    (options: Parameters<typeof getHandler>[0] = {}) =>
    async (ctx: Partial<Ctx>) => {
      const kvClient = await createKVClient();
      kvClient.getUserInfoByToken.mockReturnValueOnce(Promise.resolve(testUser));
      fetch.mockReturnValueOnce(Promise.resolve(new Response("401 Unauthorized", { status: 401 })));
      await getHandler({
        cookies: { ldafUserToken },
        locals: { getKVClient: vi.fn(async () => kvClient) },
        ...options,
      })(ctx);
    };
  describeRequestsFor(
    {
      "public content": getAuthenticatedHandler(),
      "login page": getAuthenticatedHandler({ url: "http://localhost/login?preview=true" }),
      "logout page": getAuthenticatedHandler({ url: "http://localhost/logout?preview=true" }),
    },
    () => {
      itRespondsWithStatus(200);
      itInitializesNormalContentfulClient();
      itUsesKVClient();
      itRequestsUserFromKV();
      itHasCurrentUserLocal();
      itDoesntAuthorizeWithContentful();
    },
  );
  describeRequestFor(
    "preview content",
    getAuthenticatedHandler({ url: "http://localhost?preview=true" }),
    () => {
      itRespondsWithStatus(401);
      itInitializesNormalContentfulClient();
      itUsesKVClient();
      itRequestsUserFromKV();
      itAuthorizesWithContentful();
      itDeletesCookie();
      itDeletesUserFromKV();
      itDoesntHaveCurrentUserLocal();
    },
  );
});
