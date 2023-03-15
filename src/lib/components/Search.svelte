<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import classNames from "$lib/classNames";
  import getID from "$lib/getID";
  import searchIcon from "@uswds/uswds/img/usa-icons-bg/search--white.svg";
  import type { Size } from "./searchOptions";

  export let size: Size = "default";

  export let name = "search";

  export let label = "Search";

  export let inputID: string = getID();

  export let disabled = false;

  let searchTerm = "";

  type SearchEvent = { searchTerm: string };

  const dispatch = createEventDispatcher<{
    input: SearchEvent;
    submit: SearchEvent;
  }>();

  const onInput = () => dispatch("input", { searchTerm });
  const onSearch = (e: Event) => {
    e.preventDefault();
    dispatch("submit", { searchTerm });
  };
</script>

<form
  class={classNames(
    "usa-search",
    { default: "", small: "usa-search--small", big: "usa-search--big" }[size]
  )}
  role="search"
  on:submit={onSearch}
>
  <label class="usa-sr-only" for={inputID}>{label}</label>
  <input
    class="usa-input"
    id={inputID}
    type="search"
    bind:value={searchTerm}
    on:input={onInput}
    {disabled}
    aria-disabled={disabled}
    {name}
  />
  <button type="submit" class="usa-button usa-search__submit" {disabled}>
    {#if size !== "small"}<span class="usa-search__submit-text">{label}</span>{/if}<img
      src={searchIcon}
      class="usa-search__submit-icon"
      alt={label}
    />
  </button>
</form>

<style lang="scss">
  @use "uswds-core" with (
    $theme-font-path: $theme-font-path,
    $theme-image-path: $theme-image-path,
    $theme-show-notifications: false
  );
  @use "usa-search";
</style>
