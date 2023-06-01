import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/services/contentful";
import type { OfficePage } from "$lib/services/contentful/schema";

const query = `
{
  officePageCollection {
    items {
      officePageTitle
      subheader
      description { 
        json 
      }
      servicesAndPrograms { 
        json 
      }
      contactInfo {
        ... on ContactEntry {
          name
        }
      }
      metadata {
        ... on PageMetadata {
          slug
        }
      }
    }
  }
}
`;

export async function load({ params }): Promise<OfficePage> {
  const { slug } = params;
  const data = await contentfulFetch(query);
  if (data) {
    const officePages = data?.officePageCollection?.items as OfficePage[];
    const matchedOfficePage = officePages.find((officePage) => officePage.metadata?.slug === slug);
    if (matchedOfficePage) {
      return matchedOfficePage;
    }
  }
  throw error(404);
}
