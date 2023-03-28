import type { Meta, StoryObj } from "@storybook/svelte";

import HeaderNavDecorator from "./decorators/HeaderNav.svelte";
import Nav from "$lib/components/Nav";

const meta = {
  title: "Example/Nav",
  component: Nav,
  // @ts-expect-error Unclear how to resolve SvelteComponent <=> SvelteStoryResult type mismatch.
  // TODO: Check back on this once they have a TS example: https://storybook.js.org/docs/svelte/writing-stories/decorators#global-decorators
  decorators: [() => HeaderNavDecorator],
  tags: ["autodocs"],
} satisfies Meta<Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: "a1b2c3", name: "Nav Item", link: "/nav-item" },
      { id: "d4e5f6", name: "Active Nav Item", link: "/active-nav-item", isCurrent: true },
      {
        id: "g7h8i9",
        name: "SubMenu One",
        children: [
          {
            id: "j0k1l2",
            name: "SubMenu One Child",
            link: "/submenu-one-child",
          },
        ],
      },
      {
        id: "m3n4o5",
        name: "SubMenu Two",
        children: [
          {
            id: "p6q7r8",
            name: "SubMenu Two Child One",
            link: "/submenu-two-child-one",
          },
          {
            id: "t9u0v1",
            name: "SubMenu Two Child Two",
            link: "/submenu-two-child-two",
          },
        ],
      },
    ],
  },
};
