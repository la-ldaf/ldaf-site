import type { Meta, StoryObj } from "@storybook/svelte";

import AnnouncementBanner from "$lib/components/AnnouncementBanner";

const meta = {
  title: "Components/AnnouncementBanner",
  component: AnnouncementBanner,
  tags: ["autodocs"],
} satisfies Meta<AnnouncementBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
