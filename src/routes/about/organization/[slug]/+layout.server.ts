export const load = async () => ({
  breadcrumbs: [
    { id: "0", title: "Breadcrumb", link: "/" },
    { id: "1", title: "Breadcrumb", link: "/" },
    { id: "2", title: "Breadcrumb", link: "/" },
  ],
  sidenav: [
    { id: "0", title: "SideNav Link", link: "/", isCurrent: false },
    {
      id: "1",
      title: "SideNav Link",
      link: "/",
      isCurrent: false,
      children: [
        { id: "0", title: "Child Link", link: "/", isCurrent: false },
        { id: "1", title: "Child Link", link: "/", isCurrent: false },
        { id: "2", title: "Child Link", link: "/", isCurrent: false },
        { id: "3", title: "Child Link", link: "/", isCurrent: false },
        { id: "4", title: "Child Link", link: "/", isCurrent: false },
        { id: "5", title: "Child Link", link: "/", isCurrent: false },
      ],
    },
    { id: "2", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "3", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "4", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "5", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "6", title: "SideNav Link", link: "/", isCurrent: false },
  ],
});
