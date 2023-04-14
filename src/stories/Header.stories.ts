import type { Meta, StoryObj } from "@storybook/svelte";

import Header from "$lib/components/Header";

const ids: string[] = [];
const genId = (): string => {
  const maybeUniq = Math.random().toString(16).slice(2);
  if (ids.includes(maybeUniq)) return genId();
  else return maybeUniq;
};

const generateMenuItems = (n: number, prefix = "Menu 1") =>
  [...Array(n)].map((_, i) => ({
    id: genId(),
    name: `${prefix} Child ${i + 1}`,
    link: `/${prefix.replaceAll(" ", "-").toLowerCase()}-child-${i + 1}`,
  }));

const meta = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: [
      { id: genId(), name: "NavItem", link: "/nav-item" },
      { id: genId(), name: "Active NavItem", link: "/active-nav-item", current: true },
      {
        id: genId(),
        name: "Menu 1",
        children: generateMenuItems(1),
      },
      {
        id: genId(),
        name: "Menu 2",
        children: generateMenuItems(2, "Menu 2"),
      },
      {
        id: genId(),
        name: "MegaMenu 1",
        columns: 2,
        children: generateMenuItems(4, "MegaMenu 1"),
      },
      {
        id: genId(),
        name: "MegaMenu 2",
        columns: 3,
        children: generateMenuItems(7, "MegaMenu 2"),
      },
      {
        id: genId(),
        name: "MegaMenu 3",
        columns: 5,
        children: generateMenuItems(22, "MegaMenu 3"),
      },
    ],
  },
};
