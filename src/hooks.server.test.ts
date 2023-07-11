import type { Cookies, Handle, RequestEvent } from "@sveltejs/kit";
import {
  vi,
  expect,
  it,
  describe,
  beforeAll,
  afterAll,
  beforeEach,
  type MockedObject,
  type MockedFunction,
} from "vitest";

const env = {
  CONTENTFUL_MANAGEMENT_API_ENDPOINT: "http://localhost/contentful",
  CONTENTFUL_SPACE_ID: "SPACE_ID",
  CONTENTFUL_DELIVERY_API_TOKEN: "DELIVERY_TOKEN",
  CONTENTFUL_PREVIEW_API_TOKEN: "PREVIEW_TOKEN",
  KV_URL: "redis://localhost/kv",
};

const {
  CONTENTFUL_DELIVERY_API_TOKEN,
  CONTENTFUL_PREVIEW_API_TOKEN,
  CONTENTFUL_MANAGEMENT_API_ENDPOINT,
  CONTENTFUL_SPACE_ID,
  KV_URL,
} = env;

vi.doMock("$env/static/private", () => env);

const fetch = vi.fn();

import {
  client as redisClient,
  createClient as createRedisClient,
} from "$lib/__tests__/mocks/redis";

vi.doMock("redis", () => ({ createClient: createRedisClient }));

import {
  getRequestEvent,
  getRequestEventCookies,
  getURLAndRequest,
} from "$lib/__tests__/mocks/requestEvent";

const { handleToken } = await import("./hooks.server");

type Resolve = Parameters<Handle>[0]["resolve"];

type LocalTestContextWithoutResponse = {
  fetch: MockedFunction<typeof globalThis.fetch> | typeof globalThis.fetch;
  resolve: MockedFunction<Resolve> | Resolve;
  event: RequestEvent;
  cookies: MockedObject<Cookies> | Cookies;
};

type LocalTestContext = LocalTestContextWithoutResponse & {
  response: Response;
};

const expectRedisToHaveBeenInitializedWith = (
  ...expectedArgs: Parameters<typeof createRedisClient>
) => {
  expect(createRedisClient).toHaveBeenCalledOnceWith(...expectedArgs);
  expect(redisClient.connect).toHaveBeenCalledOnceWith();
};

const testUser = {
  email: "test@example.com",
  name: "test example",
  avatarURL: "http://example.com",
  managementAPIToken: "MANAGEMENT_TOKEN",
};

const { managementAPIToken, ...testUserLocal } = testUser;

const ldafUserToken = "LDAF_USER_TOKEN";

const setupCookies = (
  ctx: Partial<LocalTestContext>,
  {
    cookies: cookiesShorthand,
    mocks,
  }: { cookies?: Record<string, string>; mocks?: Partial<MockedObject<Cookies>> } = {}
) => {
  const actualMocks = cookiesShorthand
    ? {
        get: vi.fn((name: string) => cookiesShorthand[name] ?? mocks?.get?.(name)),
        ...mocks,
      }
    : mocks;
  ctx.cookies = getRequestEventCookies(actualMocks);
};

const setupRequestEvent = (ctx: Partial<LocalTestContext>, { url }: { url?: string } = {}) => {
  ctx.event = getRequestEvent({
    fetch,
    cookies: ctx.cookies,
    ...(url ? getURLAndRequest(url) : {}),
  });
};

const setupCookiesAndEvent = (
  ctx: LocalTestContextWithoutResponse,
  {
    cookies,
    cookieMocks,
    url,
  }: {
    cookies?: Record<string, string>;
    cookieMocks?: Partial<MockedObject<Cookies>>;
    url?: string;
  }
) => {
  setupCookies(ctx, { cookies, mocks: cookieMocks });
  setupRequestEvent(ctx, { url });
};

const mockRedisResponse = (value: string | null = JSON.stringify(testUser)) =>
  redisClient.get.mockReturnValueOnce(Promise.resolve(value));

const defaultContentfulResponse = new Response(
  JSON.stringify({
    name: "Default Contentful Space",
  })
);
const mockContentfulSpaceResponse = (value: Response = defaultContentfulResponse) =>
  fetch.mockReturnValueOnce(Promise.resolve(value));

const itResolvesEvent = () =>
  it<LocalTestContext>("resolves event", (ctx) =>
    expect(ctx.resolve).toHaveBeenCalledOnceWith(ctx.event));

const itRespondsWithStatus = (status: number) =>
  it<LocalTestContext>(`responds with ${status}`, (ctx) =>
    expect(ctx.response.status).toEqual(status));

const itInitializesNormalContentfulClient = () =>
  it<LocalTestContext>("initializes normal contentful client", (ctx) =>
    expect(ctx.event.locals.contentfulClient).toMatchObject({
      options: { preview: false, token: CONTENTFUL_DELIVERY_API_TOKEN },
    }));

const itInitializesPreviewContentfulClient = () =>
  it<LocalTestContext>("initializes preview contentful client", (ctx) =>
    expect(ctx.event.locals.contentfulClient).toMatchObject({
      options: { preview: true, token: CONTENTFUL_PREVIEW_API_TOKEN },
    }));

const itDoesntCallContentful = () =>
  it("doesn't call Contentful API", () => expect(fetch).not.toHaveBeenCalled());

const itAuthorizesWithContentful = () =>
  it("authorizes with Contentful", () =>
    expect(fetch).toHaveBeenCalledOnceWith(
      `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/spaces/${CONTENTFUL_SPACE_ID}`,
      {
        headers: {
          Authorization: `Bearer ${managementAPIToken}`,
        },
      }
    ));

const itDoesntHavePreviewAuthenticationError = () =>
  it<LocalTestContext>("doesn't have preview authentication error", (ctx) =>
    expect(ctx.event.locals.previewAuthenticationError).toBeUndefined());

const itHasPreviewAuthenticationError = ({
  status = 401,
  message,
}: { status?: number; message?: string | undefined } = {}) =>
  it<LocalTestContext>("has preview authentication error", (ctx) =>
    expect(ctx.event.locals.previewAuthenticationError).toMatchObject({
      status,
      ...(message ? { message } : {}),
    }));

const itHasCurrentUserLocal = () =>
  it<LocalTestContext>("has current user local", (ctx) =>
    expect(ctx.event.locals.currentUser).toEqual(testUserLocal));

const itDoesntHaveCurrentUserLocal = () =>
  it<LocalTestContext>("doesn't have current user local", (ctx) =>
    expect(ctx.event.locals.currentUser).toBeUndefined());

const itInitializesRedis = () =>
  it("initializes redis", () =>
    expectRedisToHaveBeenInitializedWith({ url: KV_URL, socket: { tls: false } }));

const itDoesntInitializeRedis = () =>
  it("doesn't initialize redis", () => expect(createRedisClient).not.toHaveBeenCalled());

const itRequestsUserFromRedis = () =>
  it("requests user from redis", () =>
    expect(redisClient.get).toHaveBeenCalledOnceWith(`ldafUserInfoByToken:${ldafUserToken}`));

const itDeletesRedisUser = () =>
  it("deletes user record in redis", () =>
    expect(redisClient.del).toHaveBeenCalledOnceWith(`ldafUserInfoByToken:${ldafUserToken}`));

const itDeletesCookie = () =>
  it<LocalTestContextWithoutResponse>("deletes cookie", ({ event }) =>
    expect(event.cookies.delete).toHaveBeenCalledWith("ldafUserToken"));

const itWorksNormally = () => {
  itRespondsWithStatus(200);
  itInitializesNormalContentfulClient();
  itDoesntCallContentful();
  itDoesntHavePreviewAuthenticationError();
};

const describeRequestFor = (
  what: string,
  setup: (initialContext: LocalTestContextWithoutResponse) => Response | Promise<Response>,
  test: () => void | Promise<void>
) => {
  let initialContext: Partial<LocalTestContext>;
  describe(`when requesting ${what}`, async () => {
    beforeAll(async () => {
      const resolve: MockedFunction<Resolve> = vi.fn(async (..._) => new Response("success!"));
      initialContext = { resolve };
      setupCookies(initialContext);
      setupRequestEvent(initialContext);
      initialContext.response = await setup(initialContext as LocalTestContextWithoutResponse);
    });
    beforeEach<LocalTestContext>((ctx) => {
      Object.assign(ctx, initialContext);
    });
    afterAll(() => {
      vi.restoreAllMocks();
    });
    itResolvesEvent();
    await test();
  });
};

const describeExemptPreviewRequests = (
  getSetup: (url: string) => (ctx: LocalTestContextWithoutResponse) => Response | Promise<Response>,
  expectedBehavior: () => void
) =>
  describe("exempt preview requests", () => {
    describeRequestFor("login page", getSetup("http://localhost/login?preview"), expectedBehavior);
    describeRequestFor(
      "logout page",
      getSetup("http://localhost/logout?preview"),
      expectedBehavior
    );
  });

describe("handleToken", () => {
  describe("with an unauthenticated user", () => {
    const getSetup = (url?: string) => (ctx: LocalTestContextWithoutResponse) => {
      setupRequestEvent(ctx, { url });
      const { resolve, event } = ctx;
      return handleToken({ resolve, event });
    };

    const expectedNormalBehavior = () => {
      itWorksNormally();
      itDoesntInitializeRedis();
      itDoesntHaveCurrentUserLocal();
    };

    describeRequestFor("public content", getSetup(), expectedNormalBehavior);

    describeRequestFor("preview content", getSetup("http://localhost?preview"), () => {
      itRespondsWithStatus(401);
      itInitializesNormalContentfulClient();
      itDoesntCallContentful();
      itHasPreviewAuthenticationError();
      itDoesntInitializeRedis();
    });

    describeExemptPreviewRequests(getSetup, expectedNormalBehavior);
  });

  describe("with a successfully authenticated user", () => {
    const getSetup = (url?: string) => (ctx: LocalTestContextWithoutResponse) => {
      setupCookiesAndEvent(ctx, { cookies: { ldafUserToken }, url });
      mockRedisResponse();
      mockContentfulSpaceResponse();
      const { resolve, event } = ctx;
      return handleToken({ resolve, event });
    };

    const expectedNormalBehavior = () => {
      itWorksNormally();
      itInitializesRedis();
      itRequestsUserFromRedis();
      itHasCurrentUserLocal();
    };

    describeRequestFor("public content", getSetup(), expectedNormalBehavior);

    describeExemptPreviewRequests(getSetup, expectedNormalBehavior);

    describeRequestFor("preview content", getSetup("http://localhost?preview"), () => {
      itRespondsWithStatus(200);
      itInitializesPreviewContentfulClient();
      itRequestsUserFromRedis();
      itHasCurrentUserLocal();
      itAuthorizesWithContentful();
    });
  });

  describe("with a user with a token that doesn't exist in Redis", () => {
    const getSetup = (url?: string) => (ctx: LocalTestContextWithoutResponse) => {
      setupCookiesAndEvent(ctx, { cookies: { ldafUserToken }, url });
      mockRedisResponse(null);
      const { resolve, event } = ctx;
      return handleToken({ resolve, event });
    };

    const expectedNormalBehavior = () => {
      itWorksNormally();
      itRequestsUserFromRedis();
      itDeletesCookie();
      itDoesntHaveCurrentUserLocal();
      itDoesntCallContentful();
    };

    describeRequestFor("public content", getSetup(), expectedNormalBehavior);

    describeExemptPreviewRequests(getSetup, expectedNormalBehavior);

    describeRequestFor("preview content", getSetup("http://localhost?preview"), () => {
      itRespondsWithStatus(401);
      itInitializesRedis();
      itInitializesNormalContentfulClient();
      itDoesntCallContentful();
      itHasPreviewAuthenticationError();
      itDeletesCookie();
      itDoesntHaveCurrentUserLocal();
    });
  });

  describe("with a user with a token that exists in Redis but is not valid in Contentful", () => {
    const getSetup = (url?: string) => (ctx: LocalTestContextWithoutResponse) => {
      setupCookiesAndEvent(ctx, { cookies: { ldafUserToken }, url });
      mockRedisResponse();
      mockContentfulSpaceResponse(
        new Response("401 Unauthorized", {
          status: 401,
        })
      );
      const { resolve, event } = ctx;
      return handleToken({ resolve, event });
    };

    const expectedNormalBehavior = () => {
      itWorksNormally();
      itRequestsUserFromRedis();
      itHasCurrentUserLocal();
      itDoesntCallContentful();
    };

    describeRequestFor("public content", getSetup(), expectedNormalBehavior);

    describeExemptPreviewRequests(getSetup, expectedNormalBehavior);

    describeRequestFor("preview content", getSetup("http://localhost?preview"), () => {
      itRespondsWithStatus(401);
      itRequestsUserFromRedis();
      itInitializesNormalContentfulClient();
      itAuthorizesWithContentful();
      itDeletesRedisUser();
      itDeletesCookie();
    });
  });
});
