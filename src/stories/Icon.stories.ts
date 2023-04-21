import type { Meta, StoryObj } from "@storybook/svelte";

import Icon from "./IconStory.svelte";
import { names as iconNames } from "$icons";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: iconNames,
    },
    size: {
      control: { type: "select" },
      options: [undefined, 3, 4, 5, 6, 7, 8, 9],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2196-11369&t=w7ksKxV0kX4Da0k0-4",
    },
  },
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const sharedProps = { name: "accessibility_new", alt: "Accessibility New" };

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
