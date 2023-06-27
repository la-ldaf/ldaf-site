import type { Meta, StoryObj } from "@storybook/svelte";

import ContactCard from "$lib/components/ContactCard";

import OfficePageTestContent from "../routes/about/organization/[slug]/__tests__/OfficePageTestContent";

const meta = {
  title: "Components/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/oGKbyCnCRRdNzLYbiags93/LDAF-Component-Library-USWDS-3.0.2?type=design&node-id=2836-8572&t=S7mXyVT1E3IbZMMx-4",
    },
  },
} satisfies Meta<ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: OfficePageTestContent.mailingAddress,
    contacts: OfficePageTestContent.contactsCollection.items,
  },
};
