import type { Meta, StoryObj } from "@storybook/svelte";

import SideNav from "$lib/components/SideNav";
import sideNavTestContent from "$lib/components/SideNav/__tests__/SideNavTestContent";

const meta = {
  title: "Components/SideNav",
  component: SideNav,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2196-25149&t=LKG4pYn1641ykJEl-4",
    },
  },
} satisfies Meta<SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tree: sideNavTestContent,
  },
};
