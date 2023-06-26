import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

import ContactCard from "./ContactCard.svelte";

describe("ContactCard", () => {
  it("renders", () => {
    render(ContactCard, {
      props: {
        address: undefined,
        contacts: undefined,
      },
    });
    expect(screen.getByText("Contact info")).toBeVisible();
  }),
    it("renders with mailing address", () => {
      render(ContactCard, {
        props: {
          address: {
            name: "Sample Office",
            streetAddress1: "123 Main Street",
            city: "City",
            state: "ST",
            zip: "12345",
          },
          contacts: undefined,
        },
      });
      expect(screen.getByText("Sample Office")).toBeVisible();
      expect(screen.getByText(/123 Main Street/)).toBeVisible();
      expect(screen.getByText(/City, ST 12345/)).toBeVisible();
    });
  it("renders with mailing address with second address line", () => {
    render(ContactCard, {
      props: {
        address: {
          name: "Sample Office",
          streetAddress1: "123 Main Street",
          streetAddress2: "Suite 456",
          city: "City",
          state: "ST",
          zip: "12345",
        },
        contacts: undefined,
      },
    });
    expect(screen.getByText(/123 Main Street, Suite 456/)).toBeVisible();
  });
  it("renders with a contact phone number", () => {
    render(ContactCard, {
      props: {
        address: undefined,
        contacts: [
          {
            sys: { id: "1" },
            entityName: "Contact Person",
            phone: "(123) 456-7890",
          },
        ],
      },
    });
    expect(screen.getByText("Contact Person")).toBeVisible();
    const phoneLink = screen.getByText("(123) 456-7890");
    expect(phoneLink).toBeVisible();
    expect(phoneLink).toHaveAttribute("href", "tel:+11234567890");
  });
  it("renders with a contact phone number with an extension", () => {
    render(ContactCard, {
      props: {
        address: undefined,
        contacts: [
          {
            sys: { id: "1" },
            entityName: "Contact Person",
            phone: "(123) 456-7890",
            phoneExt: "123",
          },
        ],
      },
    });
    const phoneLink = screen.getByText("(123) 456-7890, ext. 123");
    expect(phoneLink).toBeVisible();
    expect(phoneLink).toHaveAttribute("href", "tel:+11234567890;123");
  });
  it("renders with a contact email address", () => {
    render(ContactCard, {
      props: {
        address: undefined,
        contacts: [
          {
            sys: { id: "1" },
            entityName: "Contact Person",
            email: "contact@example.com",
          },
        ],
      },
    });
    const emailLink = screen.getByText("contact@example.com");
    expect(emailLink).toBeVisible();
    expect(emailLink).toHaveAttribute("href", "mailto:contact@example.com");
  });
});
