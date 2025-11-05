export type SideNavItem = {
  id: string;
  title: string;
  link: string;
  children?: SideNavItem[];
};
