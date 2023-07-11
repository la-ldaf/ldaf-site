import type { Meta, StoryObj } from "@storybook/svelte";

import Breadcrumbs from "$lib/components/Breadcrumbs";
import breadcrumbsTestContent from "$lib/components/Breadcrumbs/__tests__/BreadcrumbsTestContent";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2196-3694&t=LKG4pYn1641ykJEl-4",
    },
  },
} satisfies Meta<Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: breadcrumbsTestContent,
  },
};
