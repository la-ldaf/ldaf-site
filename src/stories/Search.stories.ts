import type { Meta, StoryObj } from "@storybook/svelte";

import Search, { sizes } from "$lib/components/Search";

const disabled = { table: { disable: true } };

const meta = {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: sizes,
    },
    id: disabled,
    inputName: disabled,
  },
  args: {
    id: "ldaf-search-example",
  },
} satisfies Meta<Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Big: Story = {
  args: {
    size: "big",
  },
};
