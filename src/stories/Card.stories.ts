import type { Meta, StoryObj } from "@storybook/svelte";

import Card from "./CardView.svelte";
import { variants } from "$lib/components/Card";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma./file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2196-4072&t=vo32NlfE5S0IJB6g-0",
    },
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const PrimaryCard: Story = {
  args: {
    header: "Primary Card",
    body: "Body text",
    footer: "Action or link",
    showImage: true,
    showFooter: true,
  },
};

export const FlagOrientation: Story = {
  args: {
    header: "Primary Card",
    body: "Body text",
    footer: "Action or link",
    variant: "flag",
    showImage: true,
    showFooter: true,
  },
};

export const SecondaryCard: Story = {
  args: {
    header: "Secondary Card",
    body: "Secondary text",
    footer: "Action or link",
    showImage: false,
    showFooter: true,
  },
};

export const TaskListCard: Story = {
  args: {
    header: "Task List Card",
    body: "Task list text",
    footer: "Action or link",
    showImage: false,
    showFooter: false,
  },
};
