import type { Meta, StoryObj } from "@storybook/svelte";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

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

const navItems = [
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
];

export const Desktop: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2196-12620&t=lgUDTe5jlU40b9EO-4",
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "desktop",
    },
  },
  args: { navItems },
};

export const Mobile: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2196-11223&t=lgUDTe5jlU40b9EO-4",
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "mobile2",
    },
  },
  args: { navItems },
};
