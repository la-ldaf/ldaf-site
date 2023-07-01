import "./extendExpect";
import { vi } from "vitest";
import type { Navigation, Page } from "@sveltejs/kit";
import type * as stores from "$app/stores";
import { readable } from "svelte/store";

vi.mock("$app/stores", (): typeof stores => {
  const mockedStores = {
    navigating: readable<Navigation | null>(null),
    page: readable<Page>({
      url: new URL("http://localhost"),
      params: {},
      status: 200,
      error: null,
      route: { id: null },
      form: null,
      data: {},
    }),
    updated: {
      subscribe: readable<boolean>(false).subscribe,
      check: async () => false,
    },
  };

  return {
    getStores: () => mockedStores,
    page: mockedStores.page,
    navigating: mockedStores.navigating,
    updated: mockedStores.updated,
  };
});

vi.mock("$lib/logger/private.server");
vi.mock("$lib/logger/public");
