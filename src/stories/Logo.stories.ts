import type { Meta, StoryObj } from "@storybook/svelte";

import Logo, { placements } from "$lib/components/Logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: { type: "select" },
      options: placements,
    },
  },
} satisfies Meta<Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MobileHeaderMain: Story = {
  args: { placement: "mobile-header-main" },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const MobileHeaderMenu: Story = {
  args: { placement: "mobile-header-menu" },
};

export const DesktopHeader: Story = {
  args: { placement: "desktop-header" },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const MobileFooter: Story = {
  args: { placement: "mobile-footer" },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DesktopFooter: Story = {
  args: { placement: "desktop-footer" },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
