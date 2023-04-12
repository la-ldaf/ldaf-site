import sampleImage from "../sample.jpg";
import sampleImageBlurhash, {
  width as sampleImageWidth,
  height as sampleImageHeight,
  mean as sampleImageMean,
} from "../sample.jpg?blurhash";
import type { Meta, StoryObj } from "@storybook/svelte";

import Image from "$lib/components/Image";

const meta = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    class: { control: "text" },
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
