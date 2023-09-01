import type { Meta, StoryObj } from "@storybook/svelte";

import ResourceLinks from "$lib/components/ResourceLinks";

const meta = {
  title: "Components/ResourceLinks",
  component: ResourceLinks,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<ResourceLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [...new Array(9).keys()]
      .map((i) => i + 1)
      .map((i) => ({
        href: "#",
        title: `Resource link ${i}`,
        description: `This is the description for the resource link in the ${i} position.`,
      })),
  },
};
