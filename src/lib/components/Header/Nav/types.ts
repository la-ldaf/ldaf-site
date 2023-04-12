// Ideally this would sit within NavItem.svelte, but the way that exporting types works in Svelte
//   clashes with that approach.

type CommonNavItemProps = {
  id: string;
  current?: boolean;
};

export type NavLinkProps = CommonNavItemProps & {
  link?: string;
};

export type NavMenuProps = CommonNavItemProps & {
  megaMenuColumns?: number;
  children?: NavLinkType[];
};

export type NavItemProps = NavLinkProps | NavMenuProps;

// Whole reason for this hullabaloo is that we want a type for the component props as well as a
//   type for the data structure for a list of nav items. The data structure houses what will
//   become <slot/> content as `name`, but that field shouldn't be included in the component props.
export type NavLinkType = NavLinkProps & { name?: string };
export type NavMenuType = NavMenuProps & { name?: string };

export type NavItemType = NavMenuType | NavLinkType;
