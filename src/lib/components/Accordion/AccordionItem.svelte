<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import "./AccordionItem.scss";
  import { getAccordionContext } from "./context";
  import Link from "$lib/components/Link";
  import Icon from "$lib/components/Icon";
  import { url as linkIcon } from "$icons/link";

  export let id: string;
  export let title: string | null | undefined = "Title";
  export let onClickAnalyticsHandler: ((expanded: boolean) => void) | null = null;

  let ref: HTMLElement | null = null;

  $: ({ expandedItems, toggle } = getAccordionContext());

  let expanded: boolean;
  $: expanded = $expandedItems[id] ?? false;

  // strip out everything except characters, digits,
  // and whitespace, then convert to Kebab case.
  // E.g. "Title 2: This time it's personal"
  // becomes "title-2-this-time-its-personal"
  // TODO: Make `titleHref` come from Contentful instead of deriving it here
  const titleHref = title
    ? title
        .replace(/[^A-Za-z0-9\s]/g, "")
        .toLowerCase()
        .split(" ")
        .join("-")
    : null;

  onMount(() => {
    if ($page.url.hash === `#${titleHref}` && $expandedItems) {
      $expandedItems[id] = true;
    }
  });
</script>

<h3 {...$$restProps} class="usa-accordion__heading" id={titleHref}>
  <button
    bind:this={ref}
    type="button"
    class="usa-accordion__button"
    aria-expanded={expanded}
    aria-controls={id}
    on:click={() => {
      toggle(id);
      if (expanded && ref && ref.getBoundingClientRect().top < 0) {
        ref.scrollIntoView();
      }
    }}
    on:click={() => onClickAnalyticsHandler?.(expanded)}
  >
    {title}
  </button>
</h3>
<div class="usa-accordion__content usa-prose" {id} hidden={!expanded}>
  <Link class="accordion-deeplink" href={`#${titleHref}`}
    >Link to item <Icon src={linkIcon} title="Link to item" /></Link
  >
  <slot />
</div>
