import type { Meta, StoryObj } from "@storybook/svelte";

import Search from "$lib/components/Search.svelte";
import { sizes } from "$lib/components/searchOptions";

const meta = {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: sizes,
    },
  },
} satisfies Meta<Search>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultStory = {
  args: {},
};

export const Default: Story = defaultStory;

export const Small: Story = {
  ...defaultStory,
  args: {
    size: "small",
  },
};

export const Big: Story = {
  ...defaultStory,
  args: {
    size: "big",
  },
};
