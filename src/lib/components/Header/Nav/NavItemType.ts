// Ideally this would sit within NavItem.svelte, but the way that exporting types works in Svelte
//   clashes with that approach.
export type NavItemProps = {
  id: string;
  link?: string;
  isCurrent?: boolean;
  megaMenuColumns?: number;
  children?: NavItemType[];
};

// Whole reason for this hullabaloo is that we want a type for the component props as well as a
//   type for the data structure for a list of nav items. The data structure houses what will
//   become <slot/> content as `name`, but that field shouldn't be included in the component props.
export type NavItemType = NavItemProps & { name?: string };

export default NavItemType;
