import type { Meta, StoryObj } from "@storybook/svelte";

import DotGovBanner from "$lib/components/DotGovBanner";

const meta = {
  title: "Components/DotGovBanner",
  component: DotGovBanner,
  tags: ["autodocs"],
} satisfies Meta<DotGovBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
