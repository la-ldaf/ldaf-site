import type { Meta, StoryObj } from "@storybook/svelte";

import ProseDecorator from "./decorators/Prose.svelte";
import Link from "./LinkView.svelte";

const meta = {
  title: "Example/Link",
  component: Link,
  // @ts-expect-error Unclear how to resolve SvelteComponent <=> SvelteStoryResult type mismatch.
  // TODO: Check back on this once they have a TS example: https://storybook.js.org/docs/svelte/writing-stories/decorators#global-decorators
  decorators: [() => ProseDecorator],
  tags: ["autodocs"],
} satisfies Meta<Link>;

export default meta;
type Story = StoryObj<typeof meta>;

const externalLink = "https://designsystem.digital.gov";

// Default args can be found in the Link wrapper LinkView.svelte
export const Default: Story = {
  args: {},
};
export const External: Story = {
  args: { href: externalLink, external: true },
};
export const Alternate: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: { alternate: true },
};
export const ExternalAlternate: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: { href: externalLink, external: true, alternate: true },
};
