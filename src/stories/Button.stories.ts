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
    unstyled: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2196-3764&t=HICajhP8FIexorTH-4",
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
  args: {},
};
export const PrimaryAsLink: Story = {
  args: { isLink: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};
// DisabledAsLink not included as you can't disable a link.

export const Base: Story = {
  args: {
    variant: "base",
  },
};
export const BaseAsLink: Story = {
  args: {
    isLink: true,
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
export const InverseAsLink: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    isLink: true,
    variant: "inverse",
  },
};

export const TextOnly: Story = {
  args: {
    variant: "text-only",
  },
};
export const TextOnlyAsLink: Story = {
  args: {
    isLink: true,
    variant: "text-only",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
export const OutlineAsLink: Story = {
  args: {
    isLink: true,
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
export const OutlineInverseAsLink: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    isLink: true,
    variant: "outline-inverse",
  },
};

export const Big: Story = {
  args: {
    variant: "big",
  },
};
export const BigAsLink: Story = {
  args: {
    isLink: true,
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
export const BigInverseAsLink: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    isLink: true,
    variant: "big-inverse",
  },
};

export const Unstyled: Story = {
  args: {
    unstyled: true,
  },
};
export const UnstyledAsLink: Story = {
  args: {
    isLink: true,
    unstyled: true,
  },
};

export const UnstyledInverse: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    variant: "inverse",
    unstyled: true,
  },
};
export const UnstyledInverseAsLink: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    isLink: true,
    variant: "inverse",
    unstyled: true,
  },
};

export const BigUnstyled: Story = {
  args: {
    variant: "big",
    unstyled: true,
  },
};
export const BigUnstyledAsLink: Story = {
  args: {
    isLink: true,
    variant: "big",
    unstyled: true,
  },
};
