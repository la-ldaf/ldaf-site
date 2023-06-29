const sideNavTestContent = [
  { id: "0", title: "SideNav Link 0", link: "/", isCurrent: false },
  {
    id: "1",
    title: "SideNav Link 1",
    link: "/",
    isCurrent: false,
    children: [
      { id: "10", title: "Child Link 0", link: "/", isCurrent: false },
      { id: "11", title: "Child Link 1", link: "/", isCurrent: false },
      { id: "12", title: "Child Link 2", link: "/", isCurrent: false },
      { id: "13", title: "Child Link 3", link: "/", isCurrent: false },
      { id: "14", title: "Child Link 4", link: "/", isCurrent: false },
      { id: "15", title: "Child Link 5", link: "/", isCurrent: false },
    ],
  },
  { id: "2", title: "SideNav Link 2", link: "/", isCurrent: false },
  { id: "3", title: "SideNav Link 3", link: "/", isCurrent: true },
  { id: "4", title: "SideNav Link 4", link: "/", isCurrent: false },
  { id: "5", title: "SideNav Link 5", link: "/", isCurrent: false },
  { id: "6", title: "SideNav Link 6", link: "/", isCurrent: false },
];

export default sideNavTestContent;
