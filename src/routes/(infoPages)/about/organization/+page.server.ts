export const load = async ({ parent }) => {
  const { pageMetadataMap } = await parent();
  const matchedPageMetadata = [...pageMetadataMap].find(([_, page]) => {
    return page.url === "/about/organization";
  });
  if (matchedPageMetadata && matchedPageMetadata.length === 2) {
    return { pageMetadata: matchedPageMetadata[1] };
  }
};
