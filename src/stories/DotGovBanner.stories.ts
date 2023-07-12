import type { Meta, StoryObj } from "@storybook/svelte";

import DotGovBanner from "$lib/components/DotGovBanner";

const meta = {
  title: "Components/DotGovBanner",
  component: DotGovBanner,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?node-id=2307:13197&mode=dev",
    },
  },
} satisfies Meta<DotGovBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
