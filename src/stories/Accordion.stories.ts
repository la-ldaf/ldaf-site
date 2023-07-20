import type { Meta, StoryObj } from "@storybook/svelte";

import Accordion from "./AccordionView.svelte";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    multiselectable: {
      control: { type: "boolean" },
    },
    bordered: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default args can be found in the Link wrapper LinkView.svelte
export const Default: Story = {
  args: {},
};
