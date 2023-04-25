import type { Meta, StoryObj } from "@storybook/svelte";

import IntersectionObserverStory from "./IntersectionObserverStory.svelte";

const meta = {
  title: "Examples/IntersectionObserver",
  component: IntersectionObserverStory,
  tags: [],
  argTypes: {},
} satisfies Meta<IntersectionObserverStory>;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};

export default meta;
