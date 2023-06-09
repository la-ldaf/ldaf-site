import type { Meta, StoryObj } from "@storybook/svelte";

import Breadcrumb from "$lib/components/Breadcrumb";
import breadcrumbTestContent from "$lib/components/Breadcrumb/__tests__/BreadcrumbTestContent";

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
    path: breadcrumbTestContent,
    currentPageTitle: "Current",
  },
};
