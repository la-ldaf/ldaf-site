import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import Search from "./Search.svelte";

describe("Search", () => {
  let component: Search;
  beforeEach(() => ({ component } = render(Search, { id: "ldaf-test-search" })));

  it("renders", async () => {
    const form = screen.getByRole("search");
    const input = screen.getByRole("searchbox");
    const button = screen.getByRole("button");
    [form, input, button].forEach((el) => expect(el).toBeInTheDocument());
  });

  const searchTerm = "test";

  it("fires input event", async () => {
    const onInput = vi.fn();
    component.$on("input", onInput);
    await userEvent.type(screen.getByRole("searchbox"), searchTerm);
    expect(onInput).toHaveBeenCalledTimes(searchTerm.length);
    const firstCall = onInput.mock.calls.slice(-1)[0];
    expect(firstCall[0]).toMatchObject({ detail: { searchTerm } });
  });

  const fireSubmitEventWith = async (fireSubmitEvent: () => Promise<void>) => {
    const onSubmit = vi.fn();
    component.$on("submit", onSubmit);
    await userEvent.type(screen.getByRole("searchbox"), searchTerm);
    await fireSubmitEvent();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toMatchObject({ detail: { searchTerm } });
  };

  it("fires submit event with enter key", async () =>
    fireSubmitEventWith(async () => {
      await userEvent.type(screen.getByRole("searchbox"), "{enter}");
    }));

  it("fires submit event with button click", async () =>
    fireSubmitEventWith(async () => {
      await userEvent.click(screen.getByRole("button"));
    }));
});
