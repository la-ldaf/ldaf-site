import type { Meta, StoryObj } from "@storybook/svelte";

import AnnouncementBanner from "$lib/components/AnnouncementBanner";

const meta = {
  title: "Components/AnnouncementBanner",
  component: AnnouncementBanner,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2307:13197&mode=dev",
    },
  },
} satisfies Meta<AnnouncementBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
