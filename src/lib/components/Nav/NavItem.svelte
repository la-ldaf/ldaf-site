<script lang="ts" context="module">
  export type NavItemType = {
    id: string;
    link?: string;
    name: string;
    isCurrent?: boolean;
    children?: NavItemType[];
  };
</script>

<script lang="ts">
  import classNames from "$lib/classNames";
  import Link from "$lib/components/Link";

  interface $$Props extends Partial<NavItemType> {}

  export let id = "";
  export let link = "";
  export let isCurrent = false;
  export let children: NavItemType[] = [];

  let isParent = (children?.length ?? 0) > 0;
  let isExpanded = false;

  function toggleSubMenu(show?: boolean) {
    if (typeof show !== "undefined") isExpanded = show;
    else isExpanded = !isExpanded;
  }

  // By default focusout on the container will trigger for all its children, but using 'self'
  //   doesn't resolve the issue since the container element isn't the one with the focus.
  // This workaround will ignore the event if the new focused element is a child of the container.
  // Based on this REPL: https://svelte.dev/repl/4c5dfd34cc634774bd242725f0fc2dab?version=3.46.4
  const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }: Event) => {
    if (relatedTarget instanceof HTMLElement && currentTarget?.contains(relatedTarget)) return;
    toggleSubMenu(false);
  };
</script>

{#if isParent}
  <div on:focusout={handleDropdownFocusLoss}>
    <button
      type="button"
      class={classNames("usa-accordion__button usa-nav__link", isCurrent && "usa-current")}
      aria-expanded={isExpanded}
      aria-controls="basic-mega-nav-section-{id}"
      on:click={() => toggleSubMenu()}
    >
      <slot />
    </button>
    <ul id="basic-mega-nav-section-{id}" class="usa-nav__submenu" hidden={!isExpanded}>
      {#each children as { id, link, name } (id)}
        <li class="usa-nav__submenu-item">
          <Link href={link}>{name}</Link>
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <Link href={link} class={classNames("usa-nav-link", isCurrent && "usa-current")}><slot /></Link>
{/if}
