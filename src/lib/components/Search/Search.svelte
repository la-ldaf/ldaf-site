<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { url as searchIcon } from "$icons/search--white";
  import Button from "$lib/components/Button";
  import classNames from "$lib/util/classNames";
  import type { Size } from "./options";

  export let size: Size = "default";

  export let id: string;
  export let label = "Search";
  export let disabled = false;
  export let inputName = "searchTerm";

  let searchTerm = "";

  type SearchEvent = { searchTerm: string };

  const dispatch = createEventDispatcher<{
    input: SearchEvent;
    submit: SearchEvent;
  }>();

  const onInput = () => dispatch("input", { searchTerm });
  const onSubmit = (e: Event) => {
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
  on:submit={onSubmit}
>
  <label class="usa-sr-only" for={`${id}--input`}>{label}</label>
  <input
    class="usa-input"
    name={inputName}
    id={`${id}--input`}
    type="search"
    bind:value={searchTerm}
    on:input={onInput}
    {disabled}
    aria-disabled={disabled}
  />
  <Button type="submit" class="usa-search__submit" {disabled}>
    {#if size !== "small"}<span class="usa-search__submit-text">{label}</span>{/if}<img
      src={searchIcon}
      class="usa-search__submit-icon"
      alt={label}
    />
  </Button>
</form>
