import type { Meta, StoryObj } from "@storybook/svelte";

import Breadcrumb from "$lib/components/Breadcrumb";
import breadcrumbTestContent from "$lib/components/Breadcrumb/__tests__/BreadcrumbTestContent";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2196-3694&t=LKG4pYn1641ykJEl-4",
    },
  },
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
