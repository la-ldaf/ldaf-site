import type { Meta, StoryObj } from "@storybook/svelte";

import ContactInfoBox from "$lib/components/ContactInfoBox";

import OfficePageTestContent from "../routes/about/organization/[slug]/__tests__/OfficePageTestContent";

const meta = {
  title: "Components/ContactInfoBox",
  component: ContactInfoBox,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2836-8572&t=S7mXyVT1E3IbZMMx-4",
    },
  },
} satisfies Meta<ContactInfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: OfficePageTestContent.mailingAddress,
    contacts: OfficePageTestContent.contactsCollection.items,
  },
};
