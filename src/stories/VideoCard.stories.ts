import type { Meta, StoryObj } from "@storybook/svelte";

import VideoCard from "$lib/components/VideoCard";
import VideoCardTestContent from "$lib/components/VideoCard/__tests__/VideoCardTestContent";

const meta = {
  title: "Components/VideoCard",
  component: VideoCard,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=3190-10800&mode=design&t=oKKByvS1AfF0tbxM-4",
    },
  },
} satisfies Meta<VideoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: VideoCardTestContent,
};
