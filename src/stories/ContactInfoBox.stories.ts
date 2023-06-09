import type { Meta, StoryObj } from "@storybook/svelte";

import ContactInfoBox from "$lib/components/ContactInfoBox";

const meta = {
  title: "Components/ContactInfoBox",
  component: ContactInfoBox,
  tags: ["autodocs"],
} satisfies Meta<ContactInfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default args can be found in the Link wrapper LinkView.svelte
export const Default: Story = {
  args: {
    address: {
      sys: {
        id: "1",
        environmentId: "",
        spaceId: "",
      },
      contentfulMetadata: { tags: [] },
      name: "Sample Office",
      streetAddress1: "123 Main Street",
      streetAddress2: "Suite 456",
      city: "City",
      state: "ST",
      zip: "12345",
    },
    contacts: [
      {
        sys: { id: "1", environmentId: "", spaceId: "" },
        contentfulMetadata: { tags: [] },
        entityName: "Contact Person",
        phone: "(123) 456-7890",
        phoneExt: "123",
        email: "contact@example.com",
      },
    ],
  },
};
