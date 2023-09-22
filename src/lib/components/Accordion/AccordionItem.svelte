<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import "./AccordionItem.scss";
  import { getAccordionContext } from "./context";
  import Link from "$lib/components/Link";
  import Icon from "$lib/components/Icon";
  import slugify from "$lib/util/slugify";
  import { url as linkIcon } from "$icons/link";
  import slugify from "$lib/util/slugify";

  export let id: string;
  export let title: string | null | undefined = "Title";
  export let onClickAnalyticsHandler: ((expanded: boolean) => void) | null = null;

  let ref: HTMLElement | null = null;

  $: ({ expandedItems, toggle } = getAccordionContext());

  let expanded: boolean;
  $: expanded = $expandedItems[id] ?? false;

  // TODO: Make `titleHref` come from Contentful instead of deriving it here
  const titleHref = title ? slugify(title) : null;

  // TODO fix storybook integration ($app/navigation store currently isn't mocked)
  afterNavigate(() => {
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
  <div class="accordion-deeplink--wrapper">
    <Link class="accordion-deeplink font-body-xs" href={`#${titleHref}`}
      >Link to item <Icon src={linkIcon} title="Link to item" /></Link
    >
  </div>
  <slot />
</div>
