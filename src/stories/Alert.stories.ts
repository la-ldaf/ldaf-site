import type { Meta, StoryObj } from "@storybook/svelte";

import { variants } from "$lib/components/Alert";
import Alert from "./AlertView.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants,
    },
    noIcon: {
      control: { type: "boolean" },
    },
    slim: {
      control: { type: "boolean" },
    },
    siteAlert: {
      description:
        "Note: this should only be `true` for alerts that are the `info` or `error` variant",
      control: { type: "boolean" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2195:3329&mode=dev",
    },
  },
} satisfies Meta<Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Informational: Story = {
  args: {},
};

export const Error: Story = {
  args: { variant: "error", heading: "Emergency", slottedContent: "Something dangerous..." },
};

export const Success: Story = {
  args: { variant: "success", heading: "Success!", slottedContent: "Good job" },
};

export const Warning: Story = {
  args: { variant: "warning", heading: "Something's up", slottedContent: "How's how to fix it..." },
};

export const Slim: Story = {
  args: {
    slim: true,
  },
};

export const NoIcon: Story = {
  args: {
    noIcon: true,
  },
};

export const SiteWideInfo: Story = {
  args: {
    siteAlert: true,
    variant: "info",
    heading: "Just so you know...",
    slottedContent: "Here's some global information to display across the site.",
  },
};

export const SideWideEmergency: Story = {
  args: {
    variant: "error",
    siteAlert: true,
    heading: "Oh no",
    slottedContent: "Something is down across the site",
  },
};
