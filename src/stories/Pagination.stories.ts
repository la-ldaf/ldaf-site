import type { Meta, StoryObj } from "@storybook/svelte";
import Pagination from "./PaginationView.svelte";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    currentPage: { type: "number" },
    totalPages: { type: "number" },
  },
} satisfies Meta<Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Beginning: Story = {
  args: {
    currentPage: 1,
    totalPages: 9,
  },
};

export const Middle: Story = {
  args: {
    currentPage: 5,
    totalPages: 9,
  },
};

export const End: Story = {
  args: {
    currentPage: 9,
    totalPages: 9,
  },
};
