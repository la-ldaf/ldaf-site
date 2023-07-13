type SideNavItem = {
  id: string;
  title: string;
  link: string;
  children?: SideNavItem[];
};

export default SideNavItem;
