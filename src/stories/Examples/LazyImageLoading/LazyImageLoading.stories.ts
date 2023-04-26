import LazyImageLoading from "./LazyImageLoading.svelte";
import BlurhashRendererDecorator from "../../decorators/BlurhashRendererDecorator.svelte";
import type { Meta, StoryObj } from "@storybook/svelte";

const meta = {
  title: "Examples/Lazy Image Loading",
  component: LazyImageLoading,
  // @ts-expect-error Unclear how to resolve SvelteComponent <=> SvelteStoryResult type mismatch.
  decorators: [() => BlurhashRendererDecorator],
} satisfies Meta<LazyImageLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
