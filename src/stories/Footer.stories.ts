import type { Meta, StoryObj } from "@storybook/svelte";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import Footer from "$lib/components/Footer";

import { footerNavTestContent } from "$lib/components/Footer/__tests__/FooterTestContent";

const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2196-7873&mode=design&t=dBlz2YgjZXvlAEyU-4",
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "desktop",
    },
  },
  args: { navItems: footerNavTestContent },
};

export const Mobile: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2196-7873&mode=design&t=dBlz2YgjZXvlAEyU-4",
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "mobile2",
    },
  },
  args: { navItems: footerNavTestContent },
};
