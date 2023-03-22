import type { Meta, StoryObj } from "@storybook/svelte";

import Button, { variants, sizes, types } from "$lib/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants,
    },
    size: {
      control: { type: "select" },
      options: sizes,
    },
    type: {
      control: { type: "select" },
      options: types,
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Base: Story = {
  args: {
    variant: "base",
  },
};

export const AccentCool: Story = {
  args: {
    variant: "accent-cool",
  },
};

export const AccentWarm: Story = {
  args: {
    variant: "accent-warm",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const OutlineInverse: Story = {
  args: {
    variant: "outline-inverse",
  },
};

export const Big: Story = {
  args: {
    size: "big",
  },
};
