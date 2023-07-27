export async function getBlurhashes(data) {
  return Object.fromEntries(
    await Promise.all(
      data?.testRichText?.body?.links.assets.block
        .filter((item) => !!item)
        .flatMap(async (item) => {
          if (!item?.sys?.id || !item?.url || !item?.contentType?.startsWith("image/")) return [];
          const blurhashResponse = await fetch(`/api/v1/blurhash/${encodeURIComponent(item.url)}`);
          if (!blurhashResponse.ok) return [];
          return [item.sys.id, await blurhashResponse.text()];
        }) ?? []
    )
  );
}
