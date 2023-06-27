type SideNavItem = {
  id: string;
  title: string;
  link: string;
  isCurrent: boolean;
  children?: SideNavItem[];
};

export default SideNavItem;
