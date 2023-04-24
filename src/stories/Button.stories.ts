import type { Meta, StoryObj } from "@storybook/svelte";

import Button, { variants, types } from "$lib/components/Button";

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

export const Base: Story = {
  args: {
    variant: "base",
  },
};

export const Inverse: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    variant: "inverse",
  },
};

export const TextOnly: Story = {
  args: {
    variant: "text-only",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const OutlineInverse: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    variant: "outline-inverse",
  },
};

export const Big: Story = {
  args: {
    variant: "big",
  },
};

export const BigInverse: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    variant: "big-inverse",
  },
};
