import type { Meta, StoryObj } from "@storybook/svelte";

import Tag from "$lib/components/Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2196-28748&mode=design&t=VJZqauXMe61U0NvQ-4",
    },
  },
} satisfies Meta<Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Big: Story = {
  args: { big: true },
};
