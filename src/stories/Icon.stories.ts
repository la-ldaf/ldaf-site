import type { Meta, StoryObj } from "@storybook/svelte";

import Icon from "$lib/components/Icon";
import icons from "$lib/components/Icon/icons";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "Example/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(icons),
    },
    size: {
      control: { type: "select" },
      options: [undefined, 3, 4, 5, 6, 7, 8, 9],
    },
  },
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const sharedProps = { name: "accessibility_new", alt: "Accessbility New" };

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Small: Story = {
  args: {
    ...sharedProps,
    size: undefined,
  },
};

export const Medium: Story = {
  args: {
    ...sharedProps,
    size: 6,
  },
};

export const Large: Story = {
  args: {
    ...sharedProps,
    size: 9,
  },
};
