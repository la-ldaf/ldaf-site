export const load = async ({ parent }) => {
  const { pageMetadataMap } = await parent();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const matchedPageMetadata = [...pageMetadataMap].find(([_, page]) => {
    return page.url === "/about/organization";
  });
  if (matchedPageMetadata && matchedPageMetadata.length === 2) {
    return { pageMetadata: matchedPageMetadata[1] };
  }
};
