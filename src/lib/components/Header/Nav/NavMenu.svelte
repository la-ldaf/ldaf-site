<script lang="ts">
  import Button from "$lib/components/Button";
  import Link from "$lib/components/Link";
  import chunk from "lodash/chunk";
  import classNames from "$lib/util/classNames";
  import { createEventDispatcher } from "svelte";
  import { afterNavigate } from "$app/navigation";

  import type { NavMenuProps, NavLinkType } from "./types";
  type $$Props = NavMenuProps;

  const dispatch = createEventDispatcher<{
    toggle: null;
    close: null;
  }>();

  export let id = "";
  export let current = false;
  export let columns = 1;
  export let children: NavLinkType[] = [];
  export let expanded = false;

  $: buttonClassNames = classNames("usa-accordion__button usa-nav__link", current && "usa-current");

  // If we want more than one column, evenly divide the nav items into mega menu columns.
  // TODO: We may want to let the CMS determine the position of each item in the future.
  let megaMenuColumns: NavLinkType[][] = [];
  $: {
    if (columns > 1) {
      // Calculate the maximum length of columns (maximum number of items in a column) and provide
      //   to chunk as the size (second) parameter.
      megaMenuColumns = chunk(children, Math.ceil(children.length / columns));
    }
  }

  // We can't use on:click since it only triggers if the mousedown and mouseup events occur on the
  //   same target, and on mobile the collapse of an accordion when it loses focus happens on
  //   mousedown, sometimes shifting the elements so that mouseup misses the target.
  // Instead, we'll use both mousedown and keydown to ensure everything functions accessibly on
  //   both desktop and mobile screen sizes.
  const handleKeyDown = (event: KeyboardEvent) =>
    (event.key === "Enter" || event.key === " ") && dispatch("toggle");
  const handleMouseDown = () => dispatch("toggle");

  // By default focusout on the container will trigger for all its children, but using 'self'
  //   doesn't resolve the issue since the container element isn't the one with the focus.
  // This workaround will ignore the event if the new focused element is a child of the container.
  // Based on this REPL: https://svelte.dev/repl/4c5dfd34cc634774bd242725f0fc2dab?version=3.46.4
  const handleDropdownFocusLoss = ({
    relatedTarget,
    currentTarget,
  }: FocusEvent & { currentTarget: EventTarget & HTMLDivElement }) => {
    if (relatedTarget instanceof HTMLElement && currentTarget?.contains(relatedTarget)) return;
    dispatch("close");
  };

  // Safari doesn't assign focus to <button> and <a> elements, so the focusout event doesn't close
  //   menus unless the user is keyboard navigating.
  // These additional checks should be redundant on other browsers but will ensure we close the menu
  //   in Safari when the user clicks out or navigates to a new page.
  let menuElement: HTMLDivElement;
  const handleMouseDownOnBody = ({ target }: MouseEvent) => {
    if (expanded) {
      if (menuElement && target instanceof HTMLElement && menuElement.contains(target)) return;
      dispatch("close");
    }
  };
  afterNavigate(() => expanded && dispatch("close"));
</script>

<svelte:body on:mousedown={handleMouseDownOnBody} />

<!-- TODO: This div is necessary for handling focus loss, but it breaks the styling for a menu
           being marked with an underline as the active / current nav item. -->
<div bind:this={menuElement} on:focusout={handleDropdownFocusLoss}>
  <Button
    class={buttonClassNames}
    aria-expanded={expanded}
    aria-controls="extended-mega-nav-section-{id}"
    on:keydown={handleKeyDown}
    on:mousedown={handleMouseDown}
  >
    <!-- Extra <span/> element is necessary for expand icons to load. -->
    <span><slot /></span>
  </Button>
  {#if columns <= 1}
    <!-- Basic Menu Layout-->
    <ul id="extended-mega-nav-section-{id}" class="usa-nav__submenu" hidden={!expanded}>
      {#each children as { id, link, name } (id)}
        <li class="usa-nav__submenu-item">
          <Link href={link}>{name}</Link>
        </li>
      {/each}
    </ul>
  {:else}
    <!-- Mega Menu Layout -->
    <div
      id="extended-mega-nav-section-{id}"
      class="usa-nav__submenu usa-megamenu"
      hidden={!expanded}
    >
      <div class="grid-row grid-gap-4">
        {#each megaMenuColumns as column, i (i)}
          <div class="usa-col">
            <ul class="usa-nav__submenu-list">
              {#each column as { id, link, name } (id)}
                <li class="usa-nav__submenu-item">
                  <Link href={link}>{name}</Link>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
