const apiEndpoint = "/api/v1/blurhash";

type Options = { fetch: typeof global.fetch };

export const getBlurhash = async (url: string, { fetch }: Options): Promise<string | undefined> => {
  const response = await fetch(`${apiEndpoint}/${encodeURIComponent(url)}`);
  if (!response.ok) return;
  return response.text();
};

type Nullable<T> = T | null | undefined;

type Asset = Nullable<{
  sys?: Nullable<{
    id?: Nullable<string>;
  }>;
  url?: Nullable<string>;
  contentType?: Nullable<string>;
}>;

export const getBlurhashMapFromAssetList = async (
  assets: (Asset | null | undefined)[],
  options: Options
): Promise<Record<string, string>> =>
  Object.fromEntries(
    (
      await Promise.all(
        assets
          .filter((item): item is Asset => !!item)
          .map(async (item) => {
            if (!item?.sys?.id || !item?.url || !item?.contentType?.startsWith("image/")) return [];
            const blurhash = await getBlurhash(item.url, options);
            if (!blurhash) return [];
            return [[item.sys.id, blurhash]];
          })
      )
    ).flat()
  );

type RichTextForBlurhashes = Nullable<{
  body?: Nullable<{
    links?: Nullable<{
      assets?: Nullable<{
        block?: Nullable<(Asset | null | undefined)[]>;
      }>;
    }>;
  }>;
}>;

export const getBlurhashMapFromRichText = async (
  richText: RichTextForBlurhashes,
  options: Options
) => getBlurhashMapFromAssetList(richText?.body?.links?.assets?.block ?? [], options);
