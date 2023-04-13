import sampleImage from "../sample.jpg";
import sampleImageBlurhash, {
  width as sampleImageWidth,
  height as sampleImageHeight,
  mean as sampleImageMean,
} from "../sample.jpg?blurhash";
import type { Meta, StoryObj } from "@storybook/svelte";

import Image from "$lib/components/Image";
import BlurhashRendererDecorator from "./decorators/BlurhashRendererDecorator.svelte";
import RootIntersectionObserverDecorator from "./decorators/RootIntersectionObserverDecorator.svelte";

const srcOptions = { "sample image": sampleImage, "no image": undefined };
const blurhashOptions = { "sample image blurhash": sampleImageBlurhash, "no blurhash": undefined };
const meanOptions = { "sample image mean color": sampleImageMean, "no mean color": undefined };

const meta = {
  title: "Image",
  component: Image,
  // @ts-expect-error Unclear how to resolve SvelteComponent <=> SvelteStoryResult type mismatch.
  decorators: [() => BlurhashRendererDecorator, () => RootIntersectionObserverDecorator],
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "select",
      default: "sample image",
      options: Object.keys(srcOptions),
      mapping: srcOptions,
    },
    blurhash: {
      control: "select",
      options: Object.keys(blurhashOptions),
      mapping: blurhashOptions,
    },
    mean: {
      control: "select",
      options: Object.keys(meanOptions),
      mapping: meanOptions,
    },
    class: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
} satisfies Meta<Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "",
    src: sampleImage,
    blurhash: sampleImageBlurhash,
    width: sampleImageWidth,
    height: sampleImageHeight,
    mean: sampleImageMean,
  },
};
