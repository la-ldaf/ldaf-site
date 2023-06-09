import type { Meta, StoryObj } from "@storybook/svelte";

import SideNav from "$lib/components/SideNav";

const meta = {
  title: "Components/SideNav",
  component: SideNav,
  tags: ["autodocs"],
} satisfies Meta<SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default args can be found in the Link wrapper LinkView.svelte
export const Default: Story = {
  args: {
    tree: [
      {
        id: "0",
        title: "Item 0",
        link: "/",
        isCurrent: false,
        children: [
          {
            id: "00",
            title: "Child Item 0",
            link: "/",
            isCurrent: false,
          },
        ],
      },
      { id: "1", title: "Item 1", link: "/", isCurrent: false },
      { id: "2", title: "Item 2", link: "/", isCurrent: true },
    ],
  },
};
