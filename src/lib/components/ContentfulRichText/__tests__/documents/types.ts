type AssetLink = {
  sys: { id: string };
  contentType: string;
  title: string;
  description: string;
  url: string;
  size: number;
};

type ImageAssetLink = AssetLink & {
  contentType: `image/${string}`;
  width: number;
  height: number;
};

export type Link = AssetLink | ImageAssetLink;

export type Links = {
  assets: {
    hyperlink: Link[];
    block: Link[];
  };
};
