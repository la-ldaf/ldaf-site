<script lang="ts">
  import classNames from "$lib/util/classNames";
  import chunk from "$lib/util/chunk";
  import Link from "$lib/components/Link";

  // We're supplying `name` once in props and once as <slot/>, but we're only using it as <slot/>.
  type $$Props = {
    id: string;
    link?: string;
    name: string;
    isCurrent?: boolean;
    megaMenuColumns?: number;
    children?: $$Props[];
  };

  export let id = "";
  export let link = "";
  export const name = "";
  export let isCurrent = false;
  export let megaMenuColumns = 0;
  export let children: $$Props[] = [];

  let isParent = (children?.length ?? 0) > 0;
  let isExpanded = false;

  // Divide nav items into columns.
  // TODO: We may want to let the CMS determine the position of each item in the future.
  let megaMenu: $$Props[][] = [];
  if (megaMenuColumns > 0) {
    const columnLength = Math.ceil(children.length / megaMenuColumns);
    megaMenu = chunk(children, columnLength);
  }

  const toggleSubMenu = (show?: boolean) => {
    if (typeof show !== "undefined") isExpanded = show;
    else isExpanded = !isExpanded;
  };

  // By default focusout on the container will trigger for all its children, but using 'self'
  //   doesn't resolve the issue since the container element isn't the one with the focus.
  // This workaround will ignore the event if the new focused element is a child of the container.
  // Based on this REPL: https://svelte.dev/repl/4c5dfd34cc634774bd242725f0fc2dab?version=3.46.4
  const handleDropdownFocusLoss = ({
    target,
    relatedTarget,
    currentTarget,
  }: FocusEvent & { currentTarget: EventTarget & HTMLDivElement }) => {
    if (relatedTarget instanceof HTMLElement && currentTarget?.contains(relatedTarget)) return;
    toggleSubMenu(false);
  };

  // We can't use on:click since it only triggers if the mousedown and mouseup events occur on the
  //   same target, and on mobile the collapse of an accordion when it loses focus happens on
  //   mousedown, sometimes shifting the elements so that mouseup misses the target.
  // Instead, we'll use both mousedown and keydown to ensure everything functions accessibly on
  //   both desktop and mobile screen sizes.
  const handleDropdownKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") toggleSubMenu();
  };
</script>

{#if isParent}
  <div on:focusout={handleDropdownFocusLoss}>
    <button
      type="button"
      class={classNames("usa-accordion__button usa-nav__link", isCurrent && "usa-current")}
      aria-expanded={isExpanded}
      aria-controls="extended-mega-nav-section-{id}"
      on:keydown={handleDropdownKeyDown}
      on:mousedown={() => toggleSubMenu()}
    >
      <!-- Extra <span/> elements in the this template are necessary for expand icons to load. -->
      <span><slot /></span>
    </button>
    {#if megaMenu.length > 0}
      <!-- Mega Menu Layout-->
      <div
        id="extended-mega-nav-section-{id}"
        class="usa-nav__submenu usa-megamenu"
        hidden={!isExpanded}
      >
        <div class="grid-row grid-gap-4">
          {#each megaMenu as column, i (i)}
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
    {:else}
      <!-- Basic Menu Layout -->
      <ul id="extended-mega-nav-section-{id}" class="usa-nav__submenu" hidden={!isExpanded}>
        {#each children as { id, link, name } (id)}
          <li class="usa-nav__submenu-item">
            <Link href={link}>{name}</Link>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{:else}
  <!-- Basic Nav Link -->
  <Link href={link} class={classNames("usa-nav-link", isCurrent && "usa-current")}
    ><span><slot /></span></Link
  >
{/if}
