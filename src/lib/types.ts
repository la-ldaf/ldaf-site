import type { Breadcrumbs } from "$lib/components/Breadcrumbs";

export type User = {
  email: string;
  name: string;
  avatarURL: string;
};

export type MetadataMapItem = {
  sys: { id: string };
  __typename?: string;
  title?: string | null;
  slug?: string | null;
  url?: string | null;
  children?: string[];
  breadcrumbs?: Breadcrumbs;
  externalRedirect?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  parent?: {
      __typename?: "PageMetadata";
      sys: {
          __typename?: "Sys";
          id: string;
      };
  } | null;
  internalRedirect?: {
      __typename: "EventEntry";
      slug?: string | null;
      eventDateAndTime?: any | null;
  } | {
      __typename: "News";
      slug?: string | null;
  } | {
      __typename: "PageMetadata";
      sys: {
          __typename?: "Sys";
          id: string;
      };
  } | null;
  [key: string]: string | null | undefined | object | boolean;
}