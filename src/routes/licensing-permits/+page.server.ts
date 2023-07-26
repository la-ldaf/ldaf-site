export const load = async ({ parent }) => {
  const { pageMetadataMap } = await parent();
  const matchedPageMetadata = [...pageMetadataMap].find(([_, page]) => {
    return page.url === "/licensing-permits";
  });
  if (matchedPageMetadata && matchedPageMetadata.length === 2) {
    return { pageMetadata: matchedPageMetadata[1] };
  }
};
