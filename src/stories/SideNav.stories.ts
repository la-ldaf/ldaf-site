import type { Meta, StoryObj } from "@storybook/svelte";

import SideNav from "$lib/components/SideNav";
import sideNavTestContent from "$lib/components/SideNav/__tests__/SideNavTestContent";

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
    tree: sideNavTestContent,
  },
};
