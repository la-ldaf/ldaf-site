export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroImageCollection?: Maybe<HeroImageCollection>;
  testRichTextCollection?: Maybe<TestRichTextCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeroImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTestRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Short summary of the page topic. Appears in the first paragraph [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/briefSummary) */
export type BriefSummary = Entry & {
  __typename?: 'BriefSummary';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BriefSummaryLinkingCollections>;
  summaryText?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Short summary of the page topic. Appears in the first paragraph [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/briefSummary) */
export type BriefSummaryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Short summary of the page topic. Appears in the first paragraph [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/briefSummary) */
export type BriefSummarySummaryTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BriefSummaryCollection = {
  __typename?: 'BriefSummaryCollection';
  items: Array<Maybe<BriefSummary>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BriefSummaryFilter = {
  AND?: InputMaybe<Array<InputMaybe<BriefSummaryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BriefSummaryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  summaryText?: InputMaybe<Scalars['String']>;
  summaryText_contains?: InputMaybe<Scalars['String']>;
  summaryText_exists?: InputMaybe<Scalars['Boolean']>;
  summaryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summaryText_not?: InputMaybe<Scalars['String']>;
  summaryText_not_contains?: InputMaybe<Scalars['String']>;
  summaryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BriefSummaryLinkingCollections = {
  __typename?: 'BriefSummaryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
};


export type BriefSummaryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BriefSummaryLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BriefSummaryOrder {
  SummaryTextAsc = 'summaryText_ASC',
  SummaryTextDesc = 'summaryText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** a bulleted list of things [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/bulletedList) */
export type BulletedList = Entry & {
  __typename?: 'BulletedList';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BulletedListLinkingCollections>;
  listName?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
};


/** a bulleted list of things [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/bulletedList) */
export type BulletedListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** a bulleted list of things [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/bulletedList) */
export type BulletedListListNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BulletedListCollection = {
  __typename?: 'BulletedListCollection';
  items: Array<Maybe<BulletedList>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BulletedListFilter = {
  AND?: InputMaybe<Array<InputMaybe<BulletedListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BulletedListFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  listName_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listName_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listName_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listName_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type BulletedListLinkingCollections = {
  __typename?: 'BulletedListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  listWithTitleCollection?: Maybe<ListWithTitleCollection>;
};


export type BulletedListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BulletedListLinkingCollectionsListWithTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BulletedListOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Headline for block-level content, such as paragraphs, tables or cards within the body of the page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contentBlockHeader) */
export type ContentBlockHeader = Entry & {
  __typename?: 'ContentBlockHeader';
  contentfulMetadata: ContentfulMetadata;
  headlineText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ContentBlockHeaderLinkingCollections>;
  sys: Sys;
};


/** Headline for block-level content, such as paragraphs, tables or cards within the body of the page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contentBlockHeader) */
export type ContentBlockHeaderHeadlineTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Headline for block-level content, such as paragraphs, tables or cards within the body of the page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contentBlockHeader) */
export type ContentBlockHeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentBlockHeaderCollection = {
  __typename?: 'ContentBlockHeaderCollection';
  items: Array<Maybe<ContentBlockHeader>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentBlockHeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlockHeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlockHeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headlineText?: InputMaybe<Scalars['String']>;
  headlineText_contains?: InputMaybe<Scalars['String']>;
  headlineText_exists?: InputMaybe<Scalars['Boolean']>;
  headlineText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headlineText_not?: InputMaybe<Scalars['String']>;
  headlineText_not_contains?: InputMaybe<Scalars['String']>;
  headlineText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentBlockHeaderLinkingCollections = {
  __typename?: 'ContentBlockHeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  listWithTitleCollection?: Maybe<ListWithTitleCollection>;
};


export type ContentBlockHeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockHeaderLinkingCollectionsListWithTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentBlockHeaderOrder {
  HeadlineTextAsc = 'headlineText_ASC',
  HeadlineTextDesc = 'headlineText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLink = Entry & {
  __typename?: 'DraftNavigationLink';
  contentfulMetadata: ContentfulMetadata;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<DraftNavigationLinkLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
};


/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLinkLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type DraftNavigationLinkCollection = {
  __typename?: 'DraftNavigationLinkCollection';
  items: Array<Maybe<DraftNavigationLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DraftNavigationLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<DraftNavigationLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DraftNavigationLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DraftNavigationLinkLinkingCollections = {
  __typename?: 'DraftNavigationLinkLinkingCollections';
  draftNavigationMenuCollection?: Maybe<DraftNavigationMenuCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type DraftNavigationLinkLinkingCollectionsDraftNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DraftNavigationLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum DraftNavigationLinkOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenu = Entry & {
  __typename?: 'DraftNavigationMenu';
  childrenCollection?: Maybe<DraftNavigationMenuChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DraftNavigationMenuLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type DraftNavigationMenuChildrenCollection = {
  __typename?: 'DraftNavigationMenuChildrenCollection';
  items: Array<Maybe<DraftNavigationMenuChildrenItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DraftNavigationMenuChildrenItem = DraftNavigationLink | DraftNavigationMenu;

export type DraftNavigationMenuCollection = {
  __typename?: 'DraftNavigationMenuCollection';
  items: Array<Maybe<DraftNavigationMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DraftNavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<DraftNavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DraftNavigationMenuFilter>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DraftNavigationMenuLinkingCollections = {
  __typename?: 'DraftNavigationMenuLinkingCollections';
  draftNavigationMenuCollection?: Maybe<DraftNavigationMenuCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type DraftNavigationMenuLinkingCollectionsDraftNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DraftNavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum DraftNavigationMenuOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Large (h1) headline on top of web page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/headline) */
export type Headline = Entry & {
  __typename?: 'Headline';
  contentfulMetadata: ContentfulMetadata;
  headlineText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeadlineLinkingCollections>;
  sys: Sys;
};


/** Large (h1) headline on top of web page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/headline) */
export type HeadlineHeadlineTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Large (h1) headline on top of web page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/headline) */
export type HeadlineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeadlineCollection = {
  __typename?: 'HeadlineCollection';
  items: Array<Maybe<Headline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeadlineFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headlineText?: InputMaybe<Scalars['String']>;
  headlineText_contains?: InputMaybe<Scalars['String']>;
  headlineText_exists?: InputMaybe<Scalars['Boolean']>;
  headlineText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headlineText_not?: InputMaybe<Scalars['String']>;
  headlineText_not_contains?: InputMaybe<Scalars['String']>;
  headlineText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HeadlineLinkingCollections = {
  __typename?: 'HeadlineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeadlineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeadlineOrder {
  HeadlineTextAsc = 'headlineText_ASC',
  HeadlineTextDesc = 'headlineText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImage = Entry & {
  __typename?: 'HeroImage';
  contentfulMetadata: ContentfulMetadata;
  imageSource?: Maybe<Asset>;
  linkedFrom?: Maybe<HeroImageLinkingCollections>;
  sys: Sys;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageImageSourceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroImageCollection = {
  __typename?: 'HeroImageCollection';
  items: Array<Maybe<HeroImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroImageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageSource_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type HeroImageLinkingCollections = {
  __typename?: 'HeroImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
};


export type HeroImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroImageLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroImageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Single bulleted list with descriptive header [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitle = Entry & {
  __typename?: 'ListWithTitle';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ListWithTitleLinkingCollections>;
  sys: Sys;
  titledList?: Maybe<BulletedList>;
  titledListName?: Maybe<ContentBlockHeader>;
};


/** Single bulleted list with descriptive header [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Single bulleted list with descriptive header [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleTitledListArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Single bulleted list with descriptive header [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleTitledListNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ListWithTitleCollection = {
  __typename?: 'ListWithTitleCollection';
  items: Array<Maybe<ListWithTitle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ListWithTitleFilter = {
  AND?: InputMaybe<Array<InputMaybe<ListWithTitleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ListWithTitleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  titledList?: InputMaybe<CfBulletedListNestedFilter>;
  titledListName?: InputMaybe<CfContentBlockHeaderNestedFilter>;
  titledListName_exists?: InputMaybe<Scalars['Boolean']>;
  titledList_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ListWithTitleLinkingCollections = {
  __typename?: 'ListWithTitleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ListWithTitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ListWithTitleOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePage = Entry & {
  __typename?: 'OfficePage';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<OfficePageLinkingCollections>;
  officeHero?: Maybe<HeroImage>;
  officePageTitle?: Maybe<Scalars['String']>;
  officeSubhead?: Maybe<PageSubheader>;
  officeSummary?: Maybe<BriefSummary>;
  serviceCategoryTitle?: Maybe<Scalars['String']>;
  serviceList?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
};


/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageOfficeHeroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageOfficePageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageOfficeSubheadArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageOfficeSummaryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageServiceCategoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Home page. for LDAF offices [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageServiceListArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type OfficePageCollection = {
  __typename?: 'OfficePageCollection';
  items: Array<Maybe<OfficePage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type OfficePageFilter = {
  AND?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  officeHero?: InputMaybe<CfHeroImageNestedFilter>;
  officeHero_exists?: InputMaybe<Scalars['Boolean']>;
  officePageTitle?: InputMaybe<Scalars['String']>;
  officePageTitle_contains?: InputMaybe<Scalars['String']>;
  officePageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  officePageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  officePageTitle_not?: InputMaybe<Scalars['String']>;
  officePageTitle_not_contains?: InputMaybe<Scalars['String']>;
  officePageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  officeSubhead?: InputMaybe<CfPageSubheaderNestedFilter>;
  officeSubhead_exists?: InputMaybe<Scalars['Boolean']>;
  officeSummary?: InputMaybe<CfBriefSummaryNestedFilter>;
  officeSummary_exists?: InputMaybe<Scalars['Boolean']>;
  serviceCategoryTitle?: InputMaybe<Scalars['String']>;
  serviceCategoryTitle_contains?: InputMaybe<Scalars['String']>;
  serviceCategoryTitle_exists?: InputMaybe<Scalars['Boolean']>;
  serviceCategoryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceCategoryTitle_not?: InputMaybe<Scalars['String']>;
  serviceCategoryTitle_not_contains?: InputMaybe<Scalars['String']>;
  serviceCategoryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceList_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type OfficePageLinkingCollections = {
  __typename?: 'OfficePageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type OfficePageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum OfficePageOrder {
  OfficePageTitleAsc = 'officePageTitle_ASC',
  OfficePageTitleDesc = 'officePageTitle_DESC',
  ServiceCategoryTitleAsc = 'serviceCategoryTitle_ASC',
  ServiceCategoryTitleDesc = 'serviceCategoryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Headline for content sections within body of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSectionHeadline) */
export type PageSectionHeadline = Entry & {
  __typename?: 'PageSectionHeadline';
  contentfulMetadata: ContentfulMetadata;
  headlineText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageSectionHeadlineLinkingCollections>;
  sys: Sys;
};


/** Headline for content sections within body of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSectionHeadline) */
export type PageSectionHeadlineHeadlineTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Headline for content sections within body of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSectionHeadline) */
export type PageSectionHeadlineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageSectionHeadlineCollection = {
  __typename?: 'PageSectionHeadlineCollection';
  items: Array<Maybe<PageSectionHeadline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageSectionHeadlineFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionHeadlineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionHeadlineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headlineText?: InputMaybe<Scalars['String']>;
  headlineText_contains?: InputMaybe<Scalars['String']>;
  headlineText_exists?: InputMaybe<Scalars['Boolean']>;
  headlineText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headlineText_not?: InputMaybe<Scalars['String']>;
  headlineText_not_contains?: InputMaybe<Scalars['String']>;
  headlineText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionHeadlineLinkingCollections = {
  __typename?: 'PageSectionHeadlineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageSectionHeadlineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageSectionHeadlineOrder {
  HeadlineTextAsc = 'headlineText_ASC',
  HeadlineTextDesc = 'headlineText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Short, descriptive subheading beneath page title [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSubheader) */
export type PageSubheader = Entry & {
  __typename?: 'PageSubheader';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageSubheaderLinkingCollections>;
  subheadText?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Short, descriptive subheading beneath page title [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSubheader) */
export type PageSubheaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Short, descriptive subheading beneath page title [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSubheader) */
export type PageSubheaderSubheadTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageSubheaderCollection = {
  __typename?: 'PageSubheaderCollection';
  items: Array<Maybe<PageSubheader>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageSubheaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSubheaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSubheaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subheadText?: InputMaybe<Scalars['String']>;
  subheadText_contains?: InputMaybe<Scalars['String']>;
  subheadText_exists?: InputMaybe<Scalars['Boolean']>;
  subheadText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheadText_not?: InputMaybe<Scalars['String']>;
  subheadText_not_contains?: InputMaybe<Scalars['String']>;
  subheadText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSubheaderLinkingCollections = {
  __typename?: 'PageSubheaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
};


export type PageSubheaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageSubheaderLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageSubheaderOrder {
  SubheadTextAsc = 'subheadText_ASC',
  SubheadTextDesc = 'subheadText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  briefSummary?: Maybe<BriefSummary>;
  briefSummaryCollection?: Maybe<BriefSummaryCollection>;
  bulletedList?: Maybe<BulletedList>;
  bulletedListCollection?: Maybe<BulletedListCollection>;
  contentBlockHeader?: Maybe<ContentBlockHeader>;
  contentBlockHeaderCollection?: Maybe<ContentBlockHeaderCollection>;
  draftNavigationLink?: Maybe<DraftNavigationLink>;
  draftNavigationLinkCollection?: Maybe<DraftNavigationLinkCollection>;
  draftNavigationMenu?: Maybe<DraftNavigationMenu>;
  draftNavigationMenuCollection?: Maybe<DraftNavigationMenuCollection>;
  entryCollection?: Maybe<EntryCollection>;
  headline?: Maybe<Headline>;
  headlineCollection?: Maybe<HeadlineCollection>;
  heroImage?: Maybe<HeroImage>;
  heroImageCollection?: Maybe<HeroImageCollection>;
  listWithTitle?: Maybe<ListWithTitle>;
  listWithTitleCollection?: Maybe<ListWithTitleCollection>;
  officePage?: Maybe<OfficePage>;
  officePageCollection?: Maybe<OfficePageCollection>;
  pageSectionHeadline?: Maybe<PageSectionHeadline>;
  pageSectionHeadlineCollection?: Maybe<PageSectionHeadlineCollection>;
  pageSubheader?: Maybe<PageSubheader>;
  pageSubheaderCollection?: Maybe<PageSubheaderCollection>;
  testRichText?: Maybe<TestRichText>;
  testRichTextCollection?: Maybe<TestRichTextCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBriefSummaryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBriefSummaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BriefSummaryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BriefSummaryFilter>;
};


export type QueryBulletedListArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBulletedListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BulletedListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BulletedListFilter>;
};


export type QueryContentBlockHeaderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentBlockHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlockHeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlockHeaderFilter>;
};


export type QueryDraftNavigationLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDraftNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DraftNavigationLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DraftNavigationLinkFilter>;
};


export type QueryDraftNavigationMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDraftNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DraftNavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DraftNavigationMenuFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryHeadlineArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeadlineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeadlineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeadlineFilter>;
};


export type QueryHeroImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroImageFilter>;
};


export type QueryListWithTitleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryListWithTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ListWithTitleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ListWithTitleFilter>;
};


export type QueryOfficePageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<OfficePageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OfficePageFilter>;
};


export type QueryPageSectionHeadlineArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageSectionHeadlineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionHeadlineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSectionHeadlineFilter>;
};


export type QueryPageSubheaderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageSubheaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageSubheaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSubheaderFilter>;
};


export type QueryTestRichTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTestRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestRichTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestRichTextFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichText = Entry & {
  __typename?: 'TestRichText';
  body?: Maybe<TestRichTextBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TestRichTextLinkingCollections>;
  mainImage?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextMainImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestRichTextBody = {
  __typename?: 'TestRichTextBody';
  json: Scalars['JSON'];
  links: TestRichTextBodyLinks;
};

export type TestRichTextBodyAssets = {
  __typename?: 'TestRichTextBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TestRichTextBodyEntries = {
  __typename?: 'TestRichTextBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TestRichTextBodyLinks = {
  __typename?: 'TestRichTextBodyLinks';
  assets: TestRichTextBodyAssets;
  entries: TestRichTextBodyEntries;
};

export type TestRichTextCollection = {
  __typename?: 'TestRichTextCollection';
  items: Array<Maybe<TestRichText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestRichTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestRichTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestRichTextFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TestRichTextLinkingCollections = {
  __typename?: 'TestRichTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestRichTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestRichTextOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CfBriefSummaryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBriefSummaryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBriefSummaryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  summaryText?: InputMaybe<Scalars['String']>;
  summaryText_contains?: InputMaybe<Scalars['String']>;
  summaryText_exists?: InputMaybe<Scalars['Boolean']>;
  summaryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summaryText_not?: InputMaybe<Scalars['String']>;
  summaryText_not_contains?: InputMaybe<Scalars['String']>;
  summaryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfBulletedListNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBulletedListNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBulletedListNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  listName_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listName_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listName_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listName_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContentBlockHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContentBlockHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContentBlockHeaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headlineText?: InputMaybe<Scalars['String']>;
  headlineText_contains?: InputMaybe<Scalars['String']>;
  headlineText_exists?: InputMaybe<Scalars['Boolean']>;
  headlineText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headlineText_not?: InputMaybe<Scalars['String']>;
  headlineText_not_contains?: InputMaybe<Scalars['String']>;
  headlineText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHeroImageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroImageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageSource_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageSubheaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageSubheaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageSubheaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subheadText?: InputMaybe<Scalars['String']>;
  subheadText_contains?: InputMaybe<Scalars['String']>;
  subheadText_exists?: InputMaybe<Scalars['Boolean']>;
  subheadText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheadText_not?: InputMaybe<Scalars['String']>;
  subheadText_not_contains?: InputMaybe<Scalars['String']>;
  subheadText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};
