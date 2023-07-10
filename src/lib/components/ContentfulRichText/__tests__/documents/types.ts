export type Link = {
  sys: { id: string };
  contentType: string;
  title: string;
  description: string;
  url: string;
  size: number;
  width: number;
  height: number;
};

export type Links = {
  assets: {
    hyperlink: Link[];
    block: Link[];
  };
};
