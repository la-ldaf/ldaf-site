import type { Meta, StoryObj } from "@storybook/svelte";

import Breadcrumb from "$lib/components/Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default args can be found in the Link wrapper LinkView.svelte
export const Default: Story = {
  args: {
    path: [
      { id: "0", title: "Home", link: "/" },
      { id: "1", title: "About", link: "/about" },
    ],
    currentPageTitle: "Current",
  },
};
