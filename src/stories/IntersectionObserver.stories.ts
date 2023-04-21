import type { Meta, StoryObj } from "@storybook/svelte";

import type IntersectionObserver from "$lib/components/IntersectionObserver";
import IntersectionObserverStory from "./IntersectionObserverStory.svelte";

const meta = {
  title: "IntersectionObserver",
  component: IntersectionObserverStory,
  tags: [],
} satisfies Meta<IntersectionObserver>;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};

export default meta;
