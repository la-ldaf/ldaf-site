import type { Meta, StoryObj } from "@storybook/svelte";

import VideoCard from "$lib/components/VideoCard";
//import videoCardTestContent from "$lib/components/VideoCard/__tests__/VideoCardTestContent";

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
  args: {
    url: "https://www.youtube.com/watch?v=3HRGzFjA_cU",
    title: "Louisiana Department of Agriculture and Forestry",
    description:
      "The agriculture and forestry sectors are the backbone of Louisiana’s economy and play a role in the lives of all Louisiana’s citizens.\n\nThat’s why we work so hard to fulfill our mission to promote, protect and advance agriculture, forestry and, soil and water resources of Louisiana through our programs and services.",
  },
};
