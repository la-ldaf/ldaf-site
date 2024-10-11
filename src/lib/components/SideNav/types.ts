export type SideNavItemType = {
  id: string;
  title: string;
  link: string;
  children?: SideNavItemType[];
};
