export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/**
 * A unique page that aggregates links to other content on the site using tags. Whichever tags are being used to aggregate content should also be applied to an Aggregation entry.
 * Currently we only support the Licensing and Permits aggregation page.
 * Aggregation pages are "hard-coded" in the codebase, so the URL cannot be changed. Licensing and Permits lives directly under the root at /licensing-permits, so please do not change the "Parent" field on the "Page Details" entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/aggregation)
 */
export type Aggregation = Entry & _Node & {
  __typename?: 'Aggregation';
  _id: Scalars['ID']['output'];
  body?: Maybe<AggregationBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AggregationLinkingCollections>;
  pageMetadata?: Maybe<PageMetadata>;
  subhead?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/**
 * A unique page that aggregates links to other content on the site using tags. Whichever tags are being used to aggregate content should also be applied to an Aggregation entry.
 * Currently we only support the Licensing and Permits aggregation page.
 * Aggregation pages are "hard-coded" in the codebase, so the URL cannot be changed. Licensing and Permits lives directly under the root at /licensing-permits, so please do not change the "Parent" field on the "Page Details" entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/aggregation)
 */
export type AggregationBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A unique page that aggregates links to other content on the site using tags. Whichever tags are being used to aggregate content should also be applied to an Aggregation entry.
 * Currently we only support the Licensing and Permits aggregation page.
 * Aggregation pages are "hard-coded" in the codebase, so the URL cannot be changed. Licensing and Permits lives directly under the root at /licensing-permits, so please do not change the "Parent" field on the "Page Details" entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/aggregation)
 */
export type AggregationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/**
 * A unique page that aggregates links to other content on the site using tags. Whichever tags are being used to aggregate content should also be applied to an Aggregation entry.
 * Currently we only support the Licensing and Permits aggregation page.
 * Aggregation pages are "hard-coded" in the codebase, so the URL cannot be changed. Licensing and Permits lives directly under the root at /licensing-permits, so please do not change the "Parent" field on the "Page Details" entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/aggregation)
 */
export type AggregationPageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/**
 * A unique page that aggregates links to other content on the site using tags. Whichever tags are being used to aggregate content should also be applied to an Aggregation entry.
 * Currently we only support the Licensing and Permits aggregation page.
 * Aggregation pages are "hard-coded" in the codebase, so the URL cannot be changed. Licensing and Permits lives directly under the root at /licensing-permits, so please do not change the "Parent" field on the "Page Details" entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/aggregation)
 */
export type AggregationSubheadArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A unique page that aggregates links to other content on the site using tags. Whichever tags are being used to aggregate content should also be applied to an Aggregation entry.
 * Currently we only support the Licensing and Permits aggregation page.
 * Aggregation pages are "hard-coded" in the codebase, so the URL cannot be changed. Licensing and Permits lives directly under the root at /licensing-permits, so please do not change the "Parent" field on the "Page Details" entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/aggregation)
 */
export type AggregationTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AggregationBody = {
  __typename?: 'AggregationBody';
  json: Scalars['JSON']['output'];
  links: AggregationBodyLinks;
};

export type AggregationBodyAssets = {
  __typename?: 'AggregationBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AggregationBodyEntries = {
  __typename?: 'AggregationBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AggregationBodyLinks = {
  __typename?: 'AggregationBodyLinks';
  assets: AggregationBodyAssets;
  entries: AggregationBodyEntries;
  resources: AggregationBodyResources;
};

export type AggregationBodyResources = {
  __typename?: 'AggregationBodyResources';
  block: Array<AggregationBodyResourcesBlock>;
  hyperlink: Array<AggregationBodyResourcesHyperlink>;
  inline: Array<AggregationBodyResourcesInline>;
};

export type AggregationBodyResourcesBlock = ResourceLink & {
  __typename?: 'AggregationBodyResourcesBlock';
  sys: ResourceSys;
};

export type AggregationBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'AggregationBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type AggregationBodyResourcesInline = ResourceLink & {
  __typename?: 'AggregationBodyResourcesInline';
  sys: ResourceSys;
};

export type AggregationCollection = {
  __typename?: 'AggregationCollection';
  items: Array<Maybe<Aggregation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AggregationFilter = {
  AND?: InputMaybe<Array<InputMaybe<AggregationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AggregationFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subhead?: InputMaybe<Scalars['String']['input']>;
  subhead_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subhead_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subhead_not?: InputMaybe<Scalars['String']['input']>;
  subhead_not_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AggregationLinkingCollections = {
  __typename?: 'AggregationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AggregationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AggregationOrder {
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
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

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  errorCollection?: Maybe<ErrorCollection>;
  heroImageCollection?: Maybe<HeroImageCollection>;
  imageWrapperCollection?: Maybe<ImageWrapperCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  testRichTextCollection?: Maybe<TestRichTextCollection>;
};


export type AssetLinkingCollectionsDocumentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsErrorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHeroImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsImageWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTestRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** Button that takes users to the action they want to do next to complete their task, such as going to another web page or downloading a PDF. Includes a URL and link label. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToAction = Entry & _Node & {
  __typename?: 'CallToAction';
  _id: Scalars['ID']['output'];
  callToActionDestination?: Maybe<CallToActionCallToActionDestination>;
  contentfulMetadata: ContentfulMetadata;
  ctaInternalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CallToActionLinkingCollections>;
  sys: Sys;
};


/** Button that takes users to the action they want to do next to complete their task, such as going to another web page or downloading a PDF. Includes a URL and link label. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCallToActionDestinationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button that takes users to the action they want to do next to complete their task, such as going to another web page or downloading a PDF. Includes a URL and link label. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button that takes users to the action they want to do next to complete their task, such as going to another web page or downloading a PDF. Includes a URL and link label. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CallToActionCallToActionDestination = {
  __typename?: 'CallToActionCallToActionDestination';
  json: Scalars['JSON']['output'];
  links: CallToActionCallToActionDestinationLinks;
};

export type CallToActionCallToActionDestinationAssets = {
  __typename?: 'CallToActionCallToActionDestinationAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CallToActionCallToActionDestinationEntries = {
  __typename?: 'CallToActionCallToActionDestinationEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CallToActionCallToActionDestinationLinks = {
  __typename?: 'CallToActionCallToActionDestinationLinks';
  assets: CallToActionCallToActionDestinationAssets;
  entries: CallToActionCallToActionDestinationEntries;
  resources: CallToActionCallToActionDestinationResources;
};

export type CallToActionCallToActionDestinationResources = {
  __typename?: 'CallToActionCallToActionDestinationResources';
  block: Array<CallToActionCallToActionDestinationResourcesBlock>;
  hyperlink: Array<CallToActionCallToActionDestinationResourcesHyperlink>;
  inline: Array<CallToActionCallToActionDestinationResourcesInline>;
};

export type CallToActionCallToActionDestinationResourcesBlock = ResourceLink & {
  __typename?: 'CallToActionCallToActionDestinationResourcesBlock';
  sys: ResourceSys;
};

export type CallToActionCallToActionDestinationResourcesHyperlink = ResourceLink & {
  __typename?: 'CallToActionCallToActionDestinationResourcesHyperlink';
  sys: ResourceSys;
};

export type CallToActionCallToActionDestinationResourcesInline = ResourceLink & {
  __typename?: 'CallToActionCallToActionDestinationResourcesInline';
  sys: ResourceSys;
};

export type CallToActionCollection = {
  __typename?: 'CallToActionCollection';
  items: Array<Maybe<CallToAction>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CallToActionFilter = {
  AND?: InputMaybe<Array<InputMaybe<CallToActionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CallToActionFilter>>>;
  callToActionDestination_contains?: InputMaybe<Scalars['String']['input']>;
  callToActionDestination_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToActionDestination_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaInternalName?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_contains?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaInternalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaInternalName_not?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CallToActionLinkingCollections = {
  __typename?: 'CallToActionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  promoBannerWithCtaCollection?: Maybe<PromoBannerWithCtaCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type CallToActionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CallToActionLinkingCollectionsPromoBannerWithCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CallToActionLinkingCollectionsPromoBannerWithCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CallToActionLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CallToActionLinkingCollectionsServiceEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CallToActionLinkingCollectionsPromoBannerWithCtaCollectionOrder {
  PromoInternalNameAsc = 'promoInternalName_ASC',
  PromoInternalNameDesc = 'promoInternalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsServiceEntryCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionOrder {
  CtaInternalNameAsc = 'ctaInternalName_ASC',
  CtaInternalNameDesc = 'ctaInternalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type Contact = Entry & _Node & {
  __typename?: 'Contact';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  entityName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContactLinkingCollections>;
  location?: Maybe<ContentTypeLocation>;
  phone?: Maybe<Scalars['String']['output']>;
  phoneExt?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type ContactEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type ContactEntityNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type ContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type ContactLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ContentTypeLocationFilter>;
};


/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type ContactPhoneArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type ContactPhoneExtArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContactCollection = {
  __typename?: 'ContactCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entityName?: InputMaybe<Scalars['String']['input']>;
  entityName_contains?: InputMaybe<Scalars['String']['input']>;
  entityName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entityName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entityName_not?: InputMaybe<Scalars['String']['input']>;
  entityName_not_contains?: InputMaybe<Scalars['String']['input']>;
  entityName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<CfContentTypeLocationNestedFilter>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneExt?: InputMaybe<Scalars['String']['input']>;
  phoneExt_contains?: InputMaybe<Scalars['String']['input']>;
  phoneExt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneExt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneExt_not?: InputMaybe<Scalars['String']['input']>;
  phoneExt_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneExt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContactLinkingCollections = {
  __typename?: 'ContactLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventEntryCollection?: Maybe<EventEntryCollection>;
  newsCollection?: Maybe<NewsCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
  pressReleaseCollection?: Maybe<PressReleaseCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
};


export type ContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsEventEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsEventEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsOfficePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsPressReleaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsPressReleaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsServiceEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsServiceGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContactLinkingCollectionsEventEntryCollectionOrder {
  EventDateAndTimeAsc = 'eventDateAndTime_ASC',
  EventDateAndTimeDesc = 'eventDateAndTime_DESC',
  EventDescriptionAsc = 'eventDescription_ASC',
  EventDescriptionDesc = 'eventDescription_DESC',
  EventSummaryAsc = 'eventSummary_ASC',
  EventSummaryDesc = 'eventSummary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTitleAsc = 'shortTitle_ASC',
  ShortTitleDesc = 'shortTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContactLinkingCollectionsNewsCollectionOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ContactLinkingCollectionsOfficePageCollectionOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContactLinkingCollectionsPressReleaseCollectionOrder {
  ContactsHedAsc = 'contactsHed_ASC',
  ContactsHedDesc = 'contactsHed_DESC',
  PrTitleAsc = 'prTitle_ASC',
  PrTitleDesc = 'prTitle_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  StandardTextAsc = 'standardText_ASC',
  StandardTextDesc = 'standardText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContactLinkingCollectionsServiceEntryCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContactLinkingCollectionsServiceGroupCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum ContactOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntityNameAsc = 'entityName_ASC',
  EntityNameDesc = 'entityName_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocation = Entry & _Node & {
  __typename?: 'ContentTypeLocation';
  _id: Scalars['ID']['output'];
  city?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentTypeLocationLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress1?: Maybe<Scalars['String']['output']>;
  streetAddress2?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  zip?: Maybe<Scalars['String']['output']>;
};


/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocationCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocationNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocationStateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocationStreetAddress1Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocationStreetAddress2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A physical address, such as a mailing address or an event location. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/location) */
export type ContentTypeLocationZipArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentTypeLocationCollection = {
  __typename?: 'ContentTypeLocationCollection';
  items: Array<Maybe<ContentTypeLocation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentTypeLocationFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentTypeLocationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentTypeLocationFilter>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_contains?: InputMaybe<Scalars['String']['input']>;
  state_exists?: InputMaybe<Scalars['Boolean']['input']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state_not?: InputMaybe<Scalars['String']['input']>;
  state_not_contains?: InputMaybe<Scalars['String']['input']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress1_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress2_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  zip?: InputMaybe<Scalars['String']['input']>;
  zip_contains?: InputMaybe<Scalars['String']['input']>;
  zip_exists?: InputMaybe<Scalars['Boolean']['input']>;
  zip_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zip_not?: InputMaybe<Scalars['String']['input']>;
  zip_not_contains?: InputMaybe<Scalars['String']['input']>;
  zip_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentTypeLocationLinkingCollections = {
  __typename?: 'ContentTypeLocationLinkingCollections';
  contactCollection?: Maybe<ContactCollection>;
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
};


export type ContentTypeLocationLinkingCollectionsContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeLocationLinkingCollectionsContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentTypeLocationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentTypeLocationLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeLocationLinkingCollectionsOfficePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentTypeLocationLinkingCollectionsContactCollectionOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntityNameAsc = 'entityName_ASC',
  EntityNameDesc = 'entityName_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContentTypeLocationLinkingCollectionsOfficePageCollectionOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContentTypeLocationOrder {
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  StreetAddress1Asc = 'streetAddress1_ASC',
  StreetAddress1Desc = 'streetAddress1_DESC',
  StreetAddress2Asc = 'streetAddress2_ASC',
  StreetAddress2Desc = 'streetAddress2_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ZipAsc = 'zip_ASC',
  ZipDesc = 'zip_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapper = Entry & _Node & {
  __typename?: 'DocumentWrapper';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  docWrapperName?: Maybe<Scalars['String']['output']>;
  documentDescription?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<DocumentWrapperLinkingCollections>;
  sys: Sys;
  wrappedDocumentName?: Maybe<Asset>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperDocWrapperNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperDocumentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperWrappedDocumentNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentWrapperCollection = {
  __typename?: 'DocumentWrapperCollection';
  items: Array<Maybe<DocumentWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DocumentWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<DocumentWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentWrapperFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  docWrapperName?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_contains?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  docWrapperName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  docWrapperName_not?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_not_contains?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  documentDescription?: InputMaybe<Scalars['String']['input']>;
  documentDescription_contains?: InputMaybe<Scalars['String']['input']>;
  documentDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  documentDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  documentDescription_not?: InputMaybe<Scalars['String']['input']>;
  documentDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  documentDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  wrappedDocumentName_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentWrapperLinkingCollections = {
  __typename?: 'DocumentWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventEntryCollection?: Maybe<EventEntryCollection>;
};


export type DocumentWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentWrapperLinkingCollectionsEventEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DocumentWrapperLinkingCollectionsEventEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DocumentWrapperLinkingCollectionsEventEntryCollectionOrder {
  EventDateAndTimeAsc = 'eventDateAndTime_ASC',
  EventDateAndTimeDesc = 'eventDateAndTime_DESC',
  EventDescriptionAsc = 'eventDescription_ASC',
  EventDescriptionDesc = 'eventDescription_DESC',
  EventSummaryAsc = 'eventSummary_ASC',
  EventSummaryDesc = 'eventSummary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTitleAsc = 'shortTitle_ASC',
  ShortTitleDesc = 'shortTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DocumentWrapperOrder {
  DocWrapperNameAsc = 'docWrapperName_ASC',
  DocWrapperNameDesc = 'docWrapperName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLink = Entry & _Node & {
  __typename?: 'DraftNavigationLink';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<DraftNavigationLinkLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
};


/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLinkLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A draft of how we will structure individual navigation links that can appear either in the main menu in the header, in a submenu under the main menu in the header, or in a section sidebar. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLink) */
export type DraftNavigationLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DraftNavigationLinkCollection = {
  __typename?: 'DraftNavigationLinkCollection';
  items: Array<Maybe<DraftNavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DraftNavigationLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<DraftNavigationLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DraftNavigationLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DraftNavigationLinkLinkingCollections = {
  __typename?: 'DraftNavigationLinkLinkingCollections';
  draftNavigationMenuCollection?: Maybe<DraftNavigationMenuCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type DraftNavigationLinkLinkingCollectionsDraftNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DraftNavigationLinkLinkingCollectionsDraftNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DraftNavigationLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DraftNavigationLinkLinkingCollectionsDraftNavigationMenuCollectionOrder {
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
export type DraftNavigationMenu = Entry & _Node & {
  __typename?: 'DraftNavigationMenu';
  _id: Scalars['ID']['output'];
  childrenCollection?: Maybe<DraftNavigationMenuChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DraftNavigationMenuLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DraftNavigationMenuChildrenFilter>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DraftNavigationMenuChildrenCollection = {
  __typename?: 'DraftNavigationMenuChildrenCollection';
  items: Array<Maybe<DraftNavigationMenuChildrenItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DraftNavigationMenuChildrenFilter = {
  AND?: InputMaybe<Array<InputMaybe<DraftNavigationMenuChildrenFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DraftNavigationMenuChildrenFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DraftNavigationMenuChildrenItem = DraftNavigationLink | DraftNavigationMenu;

export type DraftNavigationMenuCollection = {
  __typename?: 'DraftNavigationMenuCollection';
  items: Array<Maybe<DraftNavigationMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DraftNavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<DraftNavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DraftNavigationMenuFilter>>>;
  children?: InputMaybe<CfchildrenMultiTypeNestedFilter>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DraftNavigationMenuLinkingCollections = {
  __typename?: 'DraftNavigationMenuLinkingCollections';
  draftNavigationMenuCollection?: Maybe<DraftNavigationMenuCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type DraftNavigationMenuLinkingCollectionsDraftNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DraftNavigationMenuLinkingCollectionsDraftNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DraftNavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DraftNavigationMenuLinkingCollectionsDraftNavigationMenuCollectionOrder {
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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

/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type Error = Entry & _Node & {
  __typename?: 'Error';
  _id: Scalars['ID']['output'];
  body?: Maybe<ErrorBody>;
  contentfulMetadata: ContentfulMetadata;
  errorCode?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ErrorLinkingCollections>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  subhead?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type ErrorBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type ErrorErrorCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type ErrorHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type ErrorImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type ErrorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type ErrorMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content for error pages, such as 404 Not Found and 500 Internal Server Error. In order to ensure a faster user experience, content changes to these entries are _not_ reflected immediately and may take up to a few days to appear. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/error) */
export type ErrorSubheadArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ErrorBody = {
  __typename?: 'ErrorBody';
  json: Scalars['JSON']['output'];
  links: ErrorBodyLinks;
};

export type ErrorBodyAssets = {
  __typename?: 'ErrorBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ErrorBodyEntries = {
  __typename?: 'ErrorBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ErrorBodyLinks = {
  __typename?: 'ErrorBodyLinks';
  assets: ErrorBodyAssets;
  entries: ErrorBodyEntries;
  resources: ErrorBodyResources;
};

export type ErrorBodyResources = {
  __typename?: 'ErrorBodyResources';
  block: Array<ErrorBodyResourcesBlock>;
  hyperlink: Array<ErrorBodyResourcesHyperlink>;
  inline: Array<ErrorBodyResourcesInline>;
};

export type ErrorBodyResourcesBlock = ResourceLink & {
  __typename?: 'ErrorBodyResourcesBlock';
  sys: ResourceSys;
};

export type ErrorBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ErrorBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ErrorBodyResourcesInline = ResourceLink & {
  __typename?: 'ErrorBodyResourcesInline';
  sys: ResourceSys;
};

export type ErrorCollection = {
  __typename?: 'ErrorCollection';
  items: Array<Maybe<Error>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ErrorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ErrorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ErrorFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  errorCode?: InputMaybe<Scalars['Int']['input']>;
  errorCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  errorCode_gt?: InputMaybe<Scalars['Int']['input']>;
  errorCode_gte?: InputMaybe<Scalars['Int']['input']>;
  errorCode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  errorCode_lt?: InputMaybe<Scalars['Int']['input']>;
  errorCode_lte?: InputMaybe<Scalars['Int']['input']>;
  errorCode_not?: InputMaybe<Scalars['Int']['input']>;
  errorCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subhead?: InputMaybe<Scalars['String']['input']>;
  subhead_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subhead_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subhead_not?: InputMaybe<Scalars['String']['input']>;
  subhead_not_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ErrorLinkingCollections = {
  __typename?: 'ErrorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ErrorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ErrorOrder {
  ErrorCodeAsc = 'errorCode_ASC',
  ErrorCodeDesc = 'errorCode_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntry = Entry & _Node & {
  __typename?: 'EventEntry';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  eventDateAndTime?: Maybe<Scalars['DateTime']['output']>;
  eventDescription?: Maybe<Scalars['String']['output']>;
  eventDocumentsCollection?: Maybe<EventEntryEventDocumentsCollection>;
  eventRichTextDescription?: Maybe<EventEntryEventRichTextDescription>;
  eventSummary?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EventEntryLinkingCollections>;
  shortTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventDateAndTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventDocumentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventEntryEventDocumentsFilter>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventRichTextDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventSummaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryShortTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntrySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EventEntryCollection = {
  __typename?: 'EventEntryCollection';
  items: Array<Maybe<EventEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventEntryEventDocumentsCollection = {
  __typename?: 'EventEntryEventDocumentsCollection';
  items: Array<Maybe<EventEntryEventDocumentsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventEntryEventDocumentsFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventEntryEventDocumentsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventEntryEventDocumentsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type EventEntryEventDocumentsItem = Contact | DocumentWrapper;

export type EventEntryEventRichTextDescription = {
  __typename?: 'EventEntryEventRichTextDescription';
  json: Scalars['JSON']['output'];
  links: EventEntryEventRichTextDescriptionLinks;
};

export type EventEntryEventRichTextDescriptionAssets = {
  __typename?: 'EventEntryEventRichTextDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EventEntryEventRichTextDescriptionEntries = {
  __typename?: 'EventEntryEventRichTextDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EventEntryEventRichTextDescriptionLinks = {
  __typename?: 'EventEntryEventRichTextDescriptionLinks';
  assets: EventEntryEventRichTextDescriptionAssets;
  entries: EventEntryEventRichTextDescriptionEntries;
  resources: EventEntryEventRichTextDescriptionResources;
};

export type EventEntryEventRichTextDescriptionResources = {
  __typename?: 'EventEntryEventRichTextDescriptionResources';
  block: Array<EventEntryEventRichTextDescriptionResourcesBlock>;
  hyperlink: Array<EventEntryEventRichTextDescriptionResourcesHyperlink>;
  inline: Array<EventEntryEventRichTextDescriptionResourcesInline>;
};

export type EventEntryEventRichTextDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'EventEntryEventRichTextDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type EventEntryEventRichTextDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'EventEntryEventRichTextDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type EventEntryEventRichTextDescriptionResourcesInline = ResourceLink & {
  __typename?: 'EventEntryEventRichTextDescriptionResourcesInline';
  sys: ResourceSys;
};

export type EventEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventEntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventDateAndTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventDateAndTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  eventDateAndTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  eventDescription?: InputMaybe<Scalars['String']['input']>;
  eventDescription_contains?: InputMaybe<Scalars['String']['input']>;
  eventDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventDescription_not?: InputMaybe<Scalars['String']['input']>;
  eventDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventDocuments?: InputMaybe<CfeventDocumentsMultiTypeNestedFilter>;
  eventDocumentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventRichTextDescription_contains?: InputMaybe<Scalars['String']['input']>;
  eventRichTextDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventRichTextDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventSummary?: InputMaybe<Scalars['String']['input']>;
  eventSummary_contains?: InputMaybe<Scalars['String']['input']>;
  eventSummary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventSummary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventSummary_not?: InputMaybe<Scalars['String']['input']>;
  eventSummary_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventSummary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortTitle?: InputMaybe<Scalars['String']['input']>;
  shortTitle_contains?: InputMaybe<Scalars['String']['input']>;
  shortTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortTitle_not?: InputMaybe<Scalars['String']['input']>;
  shortTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EventEntryLinkingCollections = {
  __typename?: 'EventEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  newsCollection?: Maybe<NewsCollection>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  pressReleaseCollection?: Maybe<PressReleaseCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type EventEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EventEntryLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventEntryLinkingCollectionsNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EventEntryLinkingCollectionsPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventEntryLinkingCollectionsPageMetadataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EventEntryLinkingCollectionsPressReleaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventEntryLinkingCollectionsPressReleaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EventEntryLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventEntryLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EventEntryLinkingCollectionsNewsCollectionOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum EventEntryLinkingCollectionsPageMetadataCollectionOrder {
  ExternalRedirectAsc = 'externalRedirect_ASC',
  ExternalRedirectDesc = 'externalRedirect_DESC',
  IsRootAsc = 'isRoot_ASC',
  IsRootDesc = 'isRoot_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
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

export enum EventEntryLinkingCollectionsPressReleaseCollectionOrder {
  ContactsHedAsc = 'contactsHed_ASC',
  ContactsHedDesc = 'contactsHed_DESC',
  PrTitleAsc = 'prTitle_ASC',
  PrTitleDesc = 'prTitle_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  StandardTextAsc = 'standardText_ASC',
  StandardTextDesc = 'standardText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EventEntryLinkingCollectionsTopTierCollectionOrder {
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum EventEntryOrder {
  EventDateAndTimeAsc = 'eventDateAndTime_ASC',
  EventDateAndTimeDesc = 'eventDateAndTime_DESC',
  EventDescriptionAsc = 'eventDescription_ASC',
  EventDescriptionDesc = 'eventDescription_DESC',
  EventSummaryAsc = 'eventSummary_ASC',
  EventSummaryDesc = 'eventSummary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTitleAsc = 'shortTitle_ASC',
  ShortTitleDesc = 'shortTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Big wide image intended for the top of a page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImage = Entry & _Node & {
  __typename?: 'HeroImage';
  _id: Scalars['ID']['output'];
  altField?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fotogCredit?: Maybe<Scalars['String']['output']>;
  imageSource?: Maybe<Asset>;
  imageTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeroImageLinkingCollections>;
  sys: Sys;
};


/** Big wide image intended for the top of a page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageAltFieldArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Big wide image intended for the top of a page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageFotogCreditArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Big wide image intended for the top of a page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageImageSourceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Big wide image intended for the top of a page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Big wide image intended for the top of a page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroImageCollection = {
  __typename?: 'HeroImageCollection';
  items: Array<Maybe<HeroImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroImageFilter>>>;
  altField?: InputMaybe<Scalars['String']['input']>;
  altField_contains?: InputMaybe<Scalars['String']['input']>;
  altField_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altField_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altField_not?: InputMaybe<Scalars['String']['input']>;
  altField_not_contains?: InputMaybe<Scalars['String']['input']>;
  altField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fotogCredit?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_contains?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fotogCredit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fotogCredit_not?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_not_contains?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageSource_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageTitle?: InputMaybe<Scalars['String']['input']>;
  imageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  imageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageTitle_not?: InputMaybe<Scalars['String']['input']>;
  imageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HeroImageLinkingCollections = {
  __typename?: 'HeroImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  newsArticleCollection?: Maybe<NewsArticleCollection>;
  newsCollection?: Maybe<NewsCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type HeroImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroImageLinkingCollectionsNewsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroImageLinkingCollectionsNewsArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroImageLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroImageLinkingCollectionsNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroImageLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroImageLinkingCollectionsServiceGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroImageLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroImageLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroImageLinkingCollectionsNewsArticleCollectionOrder {
  AuthorNameAsc = 'authorName_ASC',
  AuthorNameDesc = 'authorName_DESC',
  NewsArticleSubheadAsc = 'newsArticleSubhead_ASC',
  NewsArticleSubheadDesc = 'newsArticleSubhead_DESC',
  NewsArticleTitleAsc = 'newsArticleTitle_ASC',
  NewsArticleTitleDesc = 'newsArticleTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroImageLinkingCollectionsNewsCollectionOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum HeroImageLinkingCollectionsServiceGroupCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum HeroImageLinkingCollectionsTopTierCollectionOrder {
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum HeroImageOrder {
  AltFieldAsc = 'altField_ASC',
  AltFieldDesc = 'altField_DESC',
  FotogCreditAsc = 'fotogCredit_ASC',
  FotogCreditDesc = 'fotogCredit_DESC',
  ImageTitleAsc = 'imageTitle_ASC',
  ImageTitleDesc = 'imageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type Home = Entry & _Node & {
  __typename?: 'Home';
  _id: Scalars['ID']['output'];
  commissionerBackground?: Maybe<ImageWrapper>;
  commissionerByline?: Maybe<Scalars['String']['output']>;
  commissionerGreeting?: Maybe<HomeCommissionerGreeting>;
  commissionerHeadshot?: Maybe<ImageWrapper>;
  contentfulMetadata: ContentfulMetadata;
  featuredServiceCardsCollection?: Maybe<HomeFeaturedServiceCardsCollection>;
  heroVideo?: Maybe<VideoWrapper>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  pageMetadata?: Maybe<PageMetadata>;
  popularResourcesListCollection?: Maybe<HomePopularResourcesListCollection>;
  promotionalCardsCollection?: Maybe<HomePromotionalCardsCollection>;
  sys: Sys;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeCommissionerBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImageWrapperFilter>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeCommissionerBylineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeCommissionerGreetingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeCommissionerHeadshotArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImageWrapperFilter>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeFeaturedServiceCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomeFeaturedServiceCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceGroupFilter>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeHeroVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VideoWrapperFilter>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomePageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomePopularResourcesListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomePopularResourcesListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceGroupFilter>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomePromotionalCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomePromotionalCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromoBannerWithCtaFilter>;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  items: Array<Maybe<Home>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomeCommissionerGreeting = {
  __typename?: 'HomeCommissionerGreeting';
  json: Scalars['JSON']['output'];
  links: HomeCommissionerGreetingLinks;
};

export type HomeCommissionerGreetingAssets = {
  __typename?: 'HomeCommissionerGreetingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HomeCommissionerGreetingEntries = {
  __typename?: 'HomeCommissionerGreetingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HomeCommissionerGreetingLinks = {
  __typename?: 'HomeCommissionerGreetingLinks';
  assets: HomeCommissionerGreetingAssets;
  entries: HomeCommissionerGreetingEntries;
  resources: HomeCommissionerGreetingResources;
};

export type HomeCommissionerGreetingResources = {
  __typename?: 'HomeCommissionerGreetingResources';
  block: Array<HomeCommissionerGreetingResourcesBlock>;
  hyperlink: Array<HomeCommissionerGreetingResourcesHyperlink>;
  inline: Array<HomeCommissionerGreetingResourcesInline>;
};

export type HomeCommissionerGreetingResourcesBlock = ResourceLink & {
  __typename?: 'HomeCommissionerGreetingResourcesBlock';
  sys: ResourceSys;
};

export type HomeCommissionerGreetingResourcesHyperlink = ResourceLink & {
  __typename?: 'HomeCommissionerGreetingResourcesHyperlink';
  sys: ResourceSys;
};

export type HomeCommissionerGreetingResourcesInline = ResourceLink & {
  __typename?: 'HomeCommissionerGreetingResourcesInline';
  sys: ResourceSys;
};

export type HomeFeaturedServiceCardsCollection = {
  __typename?: 'HomeFeaturedServiceCardsCollection';
  items: Array<Maybe<ServiceGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HomeFeaturedServiceCardsCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export type HomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  commissionerBackground?: InputMaybe<CfImageWrapperNestedFilter>;
  commissionerBackground_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commissionerByline?: InputMaybe<Scalars['String']['input']>;
  commissionerByline_contains?: InputMaybe<Scalars['String']['input']>;
  commissionerByline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commissionerByline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commissionerByline_not?: InputMaybe<Scalars['String']['input']>;
  commissionerByline_not_contains?: InputMaybe<Scalars['String']['input']>;
  commissionerByline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commissionerGreeting_contains?: InputMaybe<Scalars['String']['input']>;
  commissionerGreeting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commissionerGreeting_not_contains?: InputMaybe<Scalars['String']['input']>;
  commissionerHeadshot?: InputMaybe<CfImageWrapperNestedFilter>;
  commissionerHeadshot_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredServiceCards?: InputMaybe<CfServiceGroupNestedFilter>;
  featuredServiceCardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroVideo?: InputMaybe<CfVideoWrapperNestedFilter>;
  heroVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popularResourcesList?: InputMaybe<CfServiceGroupNestedFilter>;
  popularResourcesListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promotionalCards?: InputMaybe<CfPromoBannerWithCtaNestedFilter>;
  promotionalCardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type HomeLinkingCollections = {
  __typename?: 'HomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HomeOrder {
  CommissionerBylineAsc = 'commissionerByline_ASC',
  CommissionerBylineDesc = 'commissionerByline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomePopularResourcesListCollection = {
  __typename?: 'HomePopularResourcesListCollection';
  items: Array<Maybe<ServiceGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HomePopularResourcesListCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export type HomePromotionalCardsCollection = {
  __typename?: 'HomePromotionalCardsCollection';
  items: Array<Maybe<PromoBannerWithCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HomePromotionalCardsCollectionOrder {
  PromoInternalNameAsc = 'promoInternalName_ASC',
  PromoInternalNameDesc = 'promoInternalName_DESC',
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
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** "wrapper" for image files to add categorization, credit and alt text metadata [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/imageWrapper) */
export type ImageWrapper = Entry & _Node & {
  __typename?: 'ImageWrapper';
  _id: Scalars['ID']['output'];
  altText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ImageWrapperLinkingCollections>;
  linkedImage?: Maybe<Asset>;
  sys: Sys;
};


/** "wrapper" for image files to add categorization, credit and alt text metadata [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/imageWrapper) */
export type ImageWrapperAltTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** "wrapper" for image files to add categorization, credit and alt text metadata [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/imageWrapper) */
export type ImageWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** "wrapper" for image files to add categorization, credit and alt text metadata [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/imageWrapper) */
export type ImageWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** "wrapper" for image files to add categorization, credit and alt text metadata [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/imageWrapper) */
export type ImageWrapperLinkedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWrapperCollection = {
  __typename?: 'ImageWrapperCollection';
  items: Array<Maybe<ImageWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImageWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageWrapperFilter>>>;
  altText?: InputMaybe<Scalars['String']['input']>;
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  altText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altText_not?: InputMaybe<Scalars['String']['input']>;
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageWrapperLinkingCollections = {
  __typename?: 'ImageWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  promoBannerWithCtaCollection?: Maybe<PromoBannerWithCtaCollection>;
};


export type ImageWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageWrapperLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImageWrapperLinkingCollectionsHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageWrapperLinkingCollectionsPromoBannerWithCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImageWrapperLinkingCollectionsPromoBannerWithCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImageWrapperLinkingCollectionsHomeCollectionOrder {
  CommissionerBylineAsc = 'commissionerByline_ASC',
  CommissionerBylineDesc = 'commissionerByline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageWrapperLinkingCollectionsPromoBannerWithCtaCollectionOrder {
  PromoInternalNameAsc = 'promoInternalName_ASC',
  PromoInternalNameDesc = 'promoInternalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageWrapperOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Used to provide some structure to menus in the header and footer. The items in the menus in the header will be auto-generated (so this will only allow you to order the top menus, e.g. Animals, then Plants and crops, etc.), while the items in menus in the footer should be written out as Menu Item entries. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menu) */
export type Menu = Entry & _Node & {
  __typename?: 'Menu';
  _id: Scalars['ID']['output'];
  childrenCollection?: Maybe<MenuChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MenuLinkingCollections>;
  menuType?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Used to provide some structure to menus in the header and footer. The items in the menus in the header will be auto-generated (so this will only allow you to order the top menus, e.g. Animals, then Plants and crops, etc.), while the items in menus in the footer should be written out as Menu Item entries. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menu) */
export type MenuChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuChildrenFilter>;
};


/** Used to provide some structure to menus in the header and footer. The items in the menus in the header will be auto-generated (so this will only allow you to order the top menus, e.g. Animals, then Plants and crops, etc.), while the items in menus in the footer should be written out as Menu Item entries. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menu) */
export type MenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Used to provide some structure to menus in the header and footer. The items in the menus in the header will be auto-generated (so this will only allow you to order the top menus, e.g. Animals, then Plants and crops, etc.), while the items in menus in the footer should be written out as Menu Item entries. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menu) */
export type MenuMenuTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Used to provide some structure to menus in the header and footer. The items in the menus in the header will be auto-generated (so this will only allow you to order the top menus, e.g. Animals, then Plants and crops, etc.), while the items in menus in the footer should be written out as Menu Item entries. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menu) */
export type MenuTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MenuChildrenCollection = {
  __typename?: 'MenuChildrenCollection';
  items: Array<Maybe<MenuChildrenItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuChildrenFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuChildrenFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuChildrenFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuChildrenItem = Menu | MenuItem | TopTier;

export type MenuCollection = {
  __typename?: 'MenuCollection';
  items: Array<Maybe<Menu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  children?: InputMaybe<CfchildrenMultiTypeNestedFilter>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  menuType?: InputMaybe<Scalars['String']['input']>;
  menuType_contains?: InputMaybe<Scalars['String']['input']>;
  menuType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  menuType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuType_not?: InputMaybe<Scalars['String']['input']>;
  menuType_not_contains?: InputMaybe<Scalars['String']['input']>;
  menuType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** A single internal or external link to be included in a Menu. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuItem) */
export type MenuItem = Entry & _Node & {
  __typename?: 'MenuItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  externalLink?: Maybe<Scalars['String']['output']>;
  internalLink?: Maybe<PageMetadata>;
  linkedFrom?: Maybe<MenuItemLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A single internal or external link to be included in a Menu. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuItem) */
export type MenuItemExternalLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A single internal or external link to be included in a Menu. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuItem) */
export type MenuItemInternalLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** A single internal or external link to be included in a Menu. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuItem) */
export type MenuItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A single internal or external link to be included in a Menu. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuItem) */
export type MenuItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemCollection = {
  __typename?: 'MenuItemCollection';
  items: Array<Maybe<MenuItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  externalLink_contains?: InputMaybe<Scalars['String']['input']>;
  externalLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalLink_not?: InputMaybe<Scalars['String']['input']>;
  externalLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalLink?: InputMaybe<CfPageMetadataNestedFilter>;
  internalLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuItemLinkingCollections = {
  __typename?: 'MenuItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  menuCollection?: Maybe<MenuCollection>;
};


export type MenuItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuItemLinkingCollectionsMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuItemLinkingCollectionsMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MenuItemLinkingCollectionsMenuCollectionOrder {
  MenuTypeAsc = 'menuType_ASC',
  MenuTypeDesc = 'menuType_DESC',
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

export enum MenuItemOrder {
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
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

export type MenuLinkingCollections = {
  __typename?: 'MenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  menuCollection?: Maybe<MenuCollection>;
};


export type MenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuLinkingCollectionsMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuLinkingCollectionsMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MenuLinkingCollectionsMenuCollectionOrder {
  MenuTypeAsc = 'menuType_ASC',
  MenuTypeDesc = 'menuType_DESC',
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

export enum MenuOrder {
  MenuTypeAsc = 'menuType_ASC',
  MenuTypeDesc = 'menuType_DESC',
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

/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type News = Entry & _Node & {
  __typename?: 'News';
  _id: Scalars['ID']['output'];
  body?: Maybe<NewsBody>;
  byline?: Maybe<Scalars['String']['output']>;
  contactInformationCollection?: Maybe<NewsContactInformationCollection>;
  contentfulMetadata: ContentfulMetadata;
  heroImage?: Maybe<HeroImage>;
  linkedFrom?: Maybe<NewsLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  publicationDate?: Maybe<Scalars['DateTime']['output']>;
  relatedEventsCollection?: Maybe<NewsRelatedEventsCollection>;
  relatedLinks?: Maybe<NewsRelatedLinks>;
  relatedNewsCollection?: Maybe<NewsRelatedNewsCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  subhead?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsBylineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsContactInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsContactInformationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroImageFilter>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsPublicationDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsRelatedEventsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsRelatedEventsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventEntryFilter>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsRelatedLinksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsRelatedNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsRelatedNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsFilter>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsSubheadArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A press release or news article. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/news) */
export type NewsTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticle = Entry & _Node & {
  __typename?: 'NewsArticle';
  _id: Scalars['ID']['output'];
  authorName?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NewsArticleLinkingCollections>;
  linkedNewsContent?: Maybe<Entry>;
  newsArticleSubhead?: Maybe<Scalars['String']['output']>;
  newsArticleTitle?: Maybe<Scalars['String']['output']>;
  newsHeroImage?: Maybe<HeroImage>;
  newsItemBody?: Maybe<NewsItemContent>;
  sys: Sys;
};


/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticleAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticleLinkedNewsContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticleNewsArticleSubheadArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticleNewsArticleTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticleNewsHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroImageFilter>;
};


/** Site-based news content. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsArticle) */
export type NewsArticleNewsItemBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NewsItemContentFilter>;
};

export type NewsArticleCollection = {
  __typename?: 'NewsArticleCollection';
  items: Array<Maybe<NewsArticle>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NewsArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsArticleFilter>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorName_contains?: InputMaybe<Scalars['String']['input']>;
  authorName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorName_not?: InputMaybe<Scalars['String']['input']>;
  authorName_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkedNewsContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsArticleSubhead?: InputMaybe<Scalars['String']['input']>;
  newsArticleSubhead_contains?: InputMaybe<Scalars['String']['input']>;
  newsArticleSubhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsArticleSubhead_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsArticleSubhead_not?: InputMaybe<Scalars['String']['input']>;
  newsArticleSubhead_not_contains?: InputMaybe<Scalars['String']['input']>;
  newsArticleSubhead_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsArticleTitle?: InputMaybe<Scalars['String']['input']>;
  newsArticleTitle_contains?: InputMaybe<Scalars['String']['input']>;
  newsArticleTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsArticleTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsArticleTitle_not?: InputMaybe<Scalars['String']['input']>;
  newsArticleTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  newsArticleTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsHeroImage?: InputMaybe<CfHeroImageNestedFilter>;
  newsHeroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsItemBody?: InputMaybe<CfNewsItemContentNestedFilter>;
  newsItemBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NewsArticleLinkingCollections = {
  __typename?: 'NewsArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NewsArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NewsArticleOrder {
  AuthorNameAsc = 'authorName_ASC',
  AuthorNameDesc = 'authorName_DESC',
  NewsArticleSubheadAsc = 'newsArticleSubhead_ASC',
  NewsArticleSubheadDesc = 'newsArticleSubhead_DESC',
  NewsArticleTitleAsc = 'newsArticleTitle_ASC',
  NewsArticleTitleDesc = 'newsArticleTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NewsBody = {
  __typename?: 'NewsBody';
  json: Scalars['JSON']['output'];
  links: NewsBodyLinks;
};

export type NewsBodyAssets = {
  __typename?: 'NewsBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NewsBodyEntries = {
  __typename?: 'NewsBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NewsBodyLinks = {
  __typename?: 'NewsBodyLinks';
  assets: NewsBodyAssets;
  entries: NewsBodyEntries;
  resources: NewsBodyResources;
};

export type NewsBodyResources = {
  __typename?: 'NewsBodyResources';
  block: Array<NewsBodyResourcesBlock>;
  hyperlink: Array<NewsBodyResourcesHyperlink>;
  inline: Array<NewsBodyResourcesInline>;
};

export type NewsBodyResourcesBlock = ResourceLink & {
  __typename?: 'NewsBodyResourcesBlock';
  sys: ResourceSys;
};

export type NewsBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'NewsBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type NewsBodyResourcesInline = ResourceLink & {
  __typename?: 'NewsBodyResourcesInline';
  sys: ResourceSys;
};

export type NewsCollection = {
  __typename?: 'NewsCollection';
  items: Array<Maybe<News>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NewsContactInformationCollection = {
  __typename?: 'NewsContactInformationCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NewsContactInformationCollectionOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntityNameAsc = 'entityName_ASC',
  EntityNameDesc = 'entityName_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NewsFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  byline?: InputMaybe<Scalars['String']['input']>;
  byline_contains?: InputMaybe<Scalars['String']['input']>;
  byline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  byline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byline_not?: InputMaybe<Scalars['String']['input']>;
  byline_not_contains?: InputMaybe<Scalars['String']['input']>;
  byline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactInformation?: InputMaybe<CfContactNestedFilter>;
  contactInformationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroImage?: InputMaybe<CfHeroImageNestedFilter>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publicationDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publicationDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedEvents?: InputMaybe<CfEventEntryNestedFilter>;
  relatedEventsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  relatedLinks_contains?: InputMaybe<Scalars['String']['input']>;
  relatedLinks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  relatedLinks_not_contains?: InputMaybe<Scalars['String']['input']>;
  relatedNews?: InputMaybe<CfNewsNestedFilter>;
  relatedNewsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subhead?: InputMaybe<Scalars['String']['input']>;
  subhead_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subhead_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subhead_not?: InputMaybe<Scalars['String']['input']>;
  subhead_not_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Main content of a news article or press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsItemContent) */
export type NewsItemContent = Entry & _Node & {
  __typename?: 'NewsItemContent';
  _id: Scalars['ID']['output'];
  byline?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NewsItemContentLinkingCollections>;
  newsInternalName?: Maybe<Scalars['String']['output']>;
  newsItemBody?: Maybe<NewsItemContentNewsItemBody>;
  sys: Sys;
};


/** Main content of a news article or press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsItemContent) */
export type NewsItemContentBylineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Main content of a news article or press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsItemContent) */
export type NewsItemContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Main content of a news article or press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsItemContent) */
export type NewsItemContentNewsInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Main content of a news article or press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/newsItemContent) */
export type NewsItemContentNewsItemBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NewsItemContentCollection = {
  __typename?: 'NewsItemContentCollection';
  items: Array<Maybe<NewsItemContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NewsItemContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsItemContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsItemContentFilter>>>;
  byline?: InputMaybe<Scalars['String']['input']>;
  byline_contains?: InputMaybe<Scalars['String']['input']>;
  byline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  byline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byline_not?: InputMaybe<Scalars['String']['input']>;
  byline_not_contains?: InputMaybe<Scalars['String']['input']>;
  byline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  newsInternalName?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_contains?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsInternalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsInternalName_not?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsItemBody_contains?: InputMaybe<Scalars['String']['input']>;
  newsItemBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsItemBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NewsItemContentLinkingCollections = {
  __typename?: 'NewsItemContentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  newsArticleCollection?: Maybe<NewsArticleCollection>;
  pressReleaseCollection?: Maybe<PressReleaseCollection>;
};


export type NewsItemContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsItemContentLinkingCollectionsNewsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsItemContentLinkingCollectionsNewsArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsItemContentLinkingCollectionsPressReleaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsItemContentLinkingCollectionsPressReleaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NewsItemContentLinkingCollectionsNewsArticleCollectionOrder {
  AuthorNameAsc = 'authorName_ASC',
  AuthorNameDesc = 'authorName_DESC',
  NewsArticleSubheadAsc = 'newsArticleSubhead_ASC',
  NewsArticleSubheadDesc = 'newsArticleSubhead_DESC',
  NewsArticleTitleAsc = 'newsArticleTitle_ASC',
  NewsArticleTitleDesc = 'newsArticleTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NewsItemContentLinkingCollectionsPressReleaseCollectionOrder {
  ContactsHedAsc = 'contactsHed_ASC',
  ContactsHedDesc = 'contactsHed_DESC',
  PrTitleAsc = 'prTitle_ASC',
  PrTitleDesc = 'prTitle_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  StandardTextAsc = 'standardText_ASC',
  StandardTextDesc = 'standardText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NewsItemContentNewsItemBody = {
  __typename?: 'NewsItemContentNewsItemBody';
  json: Scalars['JSON']['output'];
  links: NewsItemContentNewsItemBodyLinks;
};

export type NewsItemContentNewsItemBodyAssets = {
  __typename?: 'NewsItemContentNewsItemBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NewsItemContentNewsItemBodyEntries = {
  __typename?: 'NewsItemContentNewsItemBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NewsItemContentNewsItemBodyLinks = {
  __typename?: 'NewsItemContentNewsItemBodyLinks';
  assets: NewsItemContentNewsItemBodyAssets;
  entries: NewsItemContentNewsItemBodyEntries;
  resources: NewsItemContentNewsItemBodyResources;
};

export type NewsItemContentNewsItemBodyResources = {
  __typename?: 'NewsItemContentNewsItemBodyResources';
  block: Array<NewsItemContentNewsItemBodyResourcesBlock>;
  hyperlink: Array<NewsItemContentNewsItemBodyResourcesHyperlink>;
  inline: Array<NewsItemContentNewsItemBodyResourcesInline>;
};

export type NewsItemContentNewsItemBodyResourcesBlock = ResourceLink & {
  __typename?: 'NewsItemContentNewsItemBodyResourcesBlock';
  sys: ResourceSys;
};

export type NewsItemContentNewsItemBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'NewsItemContentNewsItemBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type NewsItemContentNewsItemBodyResourcesInline = ResourceLink & {
  __typename?: 'NewsItemContentNewsItemBodyResourcesInline';
  sys: ResourceSys;
};

export enum NewsItemContentOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  NewsInternalNameAsc = 'newsInternalName_ASC',
  NewsInternalNameDesc = 'newsInternalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NewsLinkingCollections = {
  __typename?: 'NewsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  newsCollection?: Maybe<NewsCollection>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type NewsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsLinkingCollectionsNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsLinkingCollectionsNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsLinkingCollectionsPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsLinkingCollectionsPageMetadataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsLinkingCollectionsServiceGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NewsLinkingCollectionsNewsCollectionOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum NewsLinkingCollectionsPageMetadataCollectionOrder {
  ExternalRedirectAsc = 'externalRedirect_ASC',
  ExternalRedirectDesc = 'externalRedirect_DESC',
  IsRootAsc = 'isRoot_ASC',
  IsRootDesc = 'isRoot_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
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

export enum NewsLinkingCollectionsServiceGroupCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum NewsLinkingCollectionsTopTierCollectionOrder {
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum NewsOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type NewsRelatedEventsCollection = {
  __typename?: 'NewsRelatedEventsCollection';
  items: Array<Maybe<EventEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NewsRelatedEventsCollectionOrder {
  EventDateAndTimeAsc = 'eventDateAndTime_ASC',
  EventDateAndTimeDesc = 'eventDateAndTime_DESC',
  EventDescriptionAsc = 'eventDescription_ASC',
  EventDescriptionDesc = 'eventDescription_DESC',
  EventSummaryAsc = 'eventSummary_ASC',
  EventSummaryDesc = 'eventSummary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTitleAsc = 'shortTitle_ASC',
  ShortTitleDesc = 'shortTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NewsRelatedLinks = {
  __typename?: 'NewsRelatedLinks';
  json: Scalars['JSON']['output'];
  links: NewsRelatedLinksLinks;
};

export type NewsRelatedLinksAssets = {
  __typename?: 'NewsRelatedLinksAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NewsRelatedLinksEntries = {
  __typename?: 'NewsRelatedLinksEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NewsRelatedLinksLinks = {
  __typename?: 'NewsRelatedLinksLinks';
  assets: NewsRelatedLinksAssets;
  entries: NewsRelatedLinksEntries;
  resources: NewsRelatedLinksResources;
};

export type NewsRelatedLinksResources = {
  __typename?: 'NewsRelatedLinksResources';
  block: Array<NewsRelatedLinksResourcesBlock>;
  hyperlink: Array<NewsRelatedLinksResourcesHyperlink>;
  inline: Array<NewsRelatedLinksResourcesInline>;
};

export type NewsRelatedLinksResourcesBlock = ResourceLink & {
  __typename?: 'NewsRelatedLinksResourcesBlock';
  sys: ResourceSys;
};

export type NewsRelatedLinksResourcesHyperlink = ResourceLink & {
  __typename?: 'NewsRelatedLinksResourcesHyperlink';
  sys: ResourceSys;
};

export type NewsRelatedLinksResourcesInline = ResourceLink & {
  __typename?: 'NewsRelatedLinksResourcesInline';
  sys: ResourceSys;
};

export type NewsRelatedNewsCollection = {
  __typename?: 'NewsRelatedNewsCollection';
  items: Array<Maybe<News>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NewsRelatedNewsCollectionOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePage = Entry & _Node & {
  __typename?: 'OfficePage';
  _id: Scalars['ID']['output'];
  contactsCollection?: Maybe<OfficePageContactsCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<OfficePageDescription>;
  linkedFrom?: Maybe<OfficePageLinkingCollections>;
  mailingAddress?: Maybe<ContentTypeLocation>;
  pageMetadata?: Maybe<PageMetadata>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  servicesAndPrograms?: Maybe<OfficePageServicesAndPrograms>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageContactsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OfficePageContactsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageMailingAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ContentTypeLocationFilter>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePagePageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePagePageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageServicesAndProgramsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OfficePageCollection = {
  __typename?: 'OfficePageCollection';
  items: Array<Maybe<OfficePage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OfficePageContactsCollection = {
  __typename?: 'OfficePageContactsCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum OfficePageContactsCollectionOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntityNameAsc = 'entityName_ASC',
  EntityNameDesc = 'entityName_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type OfficePageDescription = {
  __typename?: 'OfficePageDescription';
  json: Scalars['JSON']['output'];
  links: OfficePageDescriptionLinks;
};

export type OfficePageDescriptionAssets = {
  __typename?: 'OfficePageDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type OfficePageDescriptionEntries = {
  __typename?: 'OfficePageDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type OfficePageDescriptionLinks = {
  __typename?: 'OfficePageDescriptionLinks';
  assets: OfficePageDescriptionAssets;
  entries: OfficePageDescriptionEntries;
  resources: OfficePageDescriptionResources;
};

export type OfficePageDescriptionResources = {
  __typename?: 'OfficePageDescriptionResources';
  block: Array<OfficePageDescriptionResourcesBlock>;
  hyperlink: Array<OfficePageDescriptionResourcesHyperlink>;
  inline: Array<OfficePageDescriptionResourcesInline>;
};

export type OfficePageDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'OfficePageDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type OfficePageDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'OfficePageDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type OfficePageDescriptionResourcesInline = ResourceLink & {
  __typename?: 'OfficePageDescriptionResourcesInline';
  sys: ResourceSys;
};

export type OfficePageFilter = {
  AND?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  contacts?: InputMaybe<CfContactNestedFilter>;
  contactsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  mailingAddress?: InputMaybe<CfContentTypeLocationNestedFilter>;
  mailingAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  servicesAndPrograms_contains?: InputMaybe<Scalars['String']['input']>;
  servicesAndPrograms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  servicesAndPrograms_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type OfficePageLinkingCollections = {
  __typename?: 'OfficePageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type OfficePageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum OfficePageOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type OfficePageServicesAndPrograms = {
  __typename?: 'OfficePageServicesAndPrograms';
  json: Scalars['JSON']['output'];
  links: OfficePageServicesAndProgramsLinks;
};

export type OfficePageServicesAndProgramsAssets = {
  __typename?: 'OfficePageServicesAndProgramsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type OfficePageServicesAndProgramsEntries = {
  __typename?: 'OfficePageServicesAndProgramsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type OfficePageServicesAndProgramsLinks = {
  __typename?: 'OfficePageServicesAndProgramsLinks';
  assets: OfficePageServicesAndProgramsAssets;
  entries: OfficePageServicesAndProgramsEntries;
  resources: OfficePageServicesAndProgramsResources;
};

export type OfficePageServicesAndProgramsResources = {
  __typename?: 'OfficePageServicesAndProgramsResources';
  block: Array<OfficePageServicesAndProgramsResourcesBlock>;
  hyperlink: Array<OfficePageServicesAndProgramsResourcesHyperlink>;
  inline: Array<OfficePageServicesAndProgramsResourcesInline>;
};

export type OfficePageServicesAndProgramsResourcesBlock = ResourceLink & {
  __typename?: 'OfficePageServicesAndProgramsResourcesBlock';
  sys: ResourceSys;
};

export type OfficePageServicesAndProgramsResourcesHyperlink = ResourceLink & {
  __typename?: 'OfficePageServicesAndProgramsResourcesHyperlink';
  sys: ResourceSys;
};

export type OfficePageServicesAndProgramsResourcesInline = ResourceLink & {
  __typename?: 'OfficePageServicesAndProgramsResourcesInline';
  sys: ResourceSys;
};

/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadata = Entry & _Node & {
  __typename?: 'PageMetadata';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  externalRedirect?: Maybe<Scalars['String']['output']>;
  internalRedirect?: Maybe<PageMetadataInternalRedirect>;
  isRoot?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<PageMetadataLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<PageMetadata>;
  recentNewsCollection?: Maybe<PageMetadataRecentNewsCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataExternalRedirectArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataInternalRedirectArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataIsRootArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataParentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataRecentNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Options to control what the page does, where it lives, and how people can find it. Includes URL, menu linking, description that shows up in search engines, and redirects. A page will not appear on the site unless it has a corresponding Page details entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageMetadataCollection = {
  __typename?: 'PageMetadataCollection';
  items: Array<Maybe<PageMetadata>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalRedirect?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_contains?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalRedirect_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalRedirect_not?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalRedirect_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot_not?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent?: InputMaybe<CfPageMetadataNestedFilter>;
  parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recentNewsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageMetadataInternalRedirect = EventEntry | News | PageMetadata;

export type PageMetadataLinkingCollections = {
  __typename?: 'PageMetadataLinkingCollections';
  aggregationCollection?: Maybe<AggregationCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  menuItemCollection?: Maybe<MenuItemCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  pressReleaseCollection?: Maybe<PressReleaseCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type PageMetadataLinkingCollectionsAggregationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsAggregationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsOfficePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsPageMetadataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsPressReleaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsPressReleaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsServiceGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageMetadataLinkingCollectionsAggregationCollectionOrder {
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
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

export enum PageMetadataLinkingCollectionsHomeCollectionOrder {
  CommissionerBylineAsc = 'commissionerByline_ASC',
  CommissionerBylineDesc = 'commissionerByline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageMetadataLinkingCollectionsMenuItemCollectionOrder {
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
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

export enum PageMetadataLinkingCollectionsOfficePageCollectionOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageMetadataLinkingCollectionsPageMetadataCollectionOrder {
  ExternalRedirectAsc = 'externalRedirect_ASC',
  ExternalRedirectDesc = 'externalRedirect_DESC',
  IsRootAsc = 'isRoot_ASC',
  IsRootDesc = 'isRoot_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
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

export enum PageMetadataLinkingCollectionsPressReleaseCollectionOrder {
  ContactsHedAsc = 'contactsHed_ASC',
  ContactsHedDesc = 'contactsHed_DESC',
  PrTitleAsc = 'prTitle_ASC',
  PrTitleDesc = 'prTitle_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  StandardTextAsc = 'standardText_ASC',
  StandardTextDesc = 'standardText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageMetadataLinkingCollectionsServiceGroupCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum PageMetadataLinkingCollectionsTopTierCollectionOrder {
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum PageMetadataOrder {
  ExternalRedirectAsc = 'externalRedirect_ASC',
  ExternalRedirectDesc = 'externalRedirect_DESC',
  IsRootAsc = 'isRoot_ASC',
  IsRootDesc = 'isRoot_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
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

export type PageMetadataRecentNewsCollection = {
  __typename?: 'PageMetadataRecentNewsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressRelease = Entry & _Node & {
  __typename?: 'PressRelease';
  _id: Scalars['ID']['output'];
  contactsHed?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  eventOrArticle?: Maybe<PressReleaseEventOrArticle>;
  linkedFrom?: Maybe<PressReleaseLinkingCollections>;
  prContactsCollection?: Maybe<PressReleasePrContactsCollection>;
  prMetadata?: Maybe<PageMetadata>;
  prTitle?: Maybe<Scalars['String']['output']>;
  pressReleaseBody?: Maybe<PressReleasePressReleaseBody>;
  releaseDate?: Maybe<Scalars['DateTime']['output']>;
  standardText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleaseContactsHedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleaseEventOrArticleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleaseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleasePrContactsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PressReleasePrContactsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleasePrMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleasePrTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleasePressReleaseBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleaseReleaseDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Includes standard fields for a press release [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pressRelease) */
export type PressReleaseStandardTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PressReleaseCollection = {
  __typename?: 'PressReleaseCollection';
  items: Array<Maybe<PressRelease>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PressReleaseEventOrArticle = EventEntry | NewsItemContent;

export type PressReleaseFilter = {
  AND?: InputMaybe<Array<InputMaybe<PressReleaseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PressReleaseFilter>>>;
  contactsHed?: InputMaybe<Scalars['String']['input']>;
  contactsHed_contains?: InputMaybe<Scalars['String']['input']>;
  contactsHed_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactsHed_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactsHed_not?: InputMaybe<Scalars['String']['input']>;
  contactsHed_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactsHed_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventOrArticle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  prContacts?: InputMaybe<CfContactNestedFilter>;
  prContactsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  prMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  prMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  prTitle?: InputMaybe<Scalars['String']['input']>;
  prTitle_contains?: InputMaybe<Scalars['String']['input']>;
  prTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  prTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  prTitle_not?: InputMaybe<Scalars['String']['input']>;
  prTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  prTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pressReleaseBody_contains?: InputMaybe<Scalars['String']['input']>;
  pressReleaseBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pressReleaseBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  releaseDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  releaseDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  standardText?: InputMaybe<Scalars['String']['input']>;
  standardText_contains?: InputMaybe<Scalars['String']['input']>;
  standardText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  standardText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  standardText_not?: InputMaybe<Scalars['String']['input']>;
  standardText_not_contains?: InputMaybe<Scalars['String']['input']>;
  standardText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PressReleaseLinkingCollections = {
  __typename?: 'PressReleaseLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PressReleaseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PressReleaseOrder {
  ContactsHedAsc = 'contactsHed_ASC',
  ContactsHedDesc = 'contactsHed_DESC',
  PrTitleAsc = 'prTitle_ASC',
  PrTitleDesc = 'prTitle_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  StandardTextAsc = 'standardText_ASC',
  StandardTextDesc = 'standardText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PressReleasePrContactsCollection = {
  __typename?: 'PressReleasePrContactsCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PressReleasePrContactsCollectionOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntityNameAsc = 'entityName_ASC',
  EntityNameDesc = 'entityName_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PressReleasePressReleaseBody = {
  __typename?: 'PressReleasePressReleaseBody';
  json: Scalars['JSON']['output'];
  links: PressReleasePressReleaseBodyLinks;
};

export type PressReleasePressReleaseBodyAssets = {
  __typename?: 'PressReleasePressReleaseBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PressReleasePressReleaseBodyEntries = {
  __typename?: 'PressReleasePressReleaseBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PressReleasePressReleaseBodyLinks = {
  __typename?: 'PressReleasePressReleaseBodyLinks';
  assets: PressReleasePressReleaseBodyAssets;
  entries: PressReleasePressReleaseBodyEntries;
  resources: PressReleasePressReleaseBodyResources;
};

export type PressReleasePressReleaseBodyResources = {
  __typename?: 'PressReleasePressReleaseBodyResources';
  block: Array<PressReleasePressReleaseBodyResourcesBlock>;
  hyperlink: Array<PressReleasePressReleaseBodyResourcesHyperlink>;
  inline: Array<PressReleasePressReleaseBodyResourcesInline>;
};

export type PressReleasePressReleaseBodyResourcesBlock = ResourceLink & {
  __typename?: 'PressReleasePressReleaseBodyResourcesBlock';
  sys: ResourceSys;
};

export type PressReleasePressReleaseBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'PressReleasePressReleaseBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type PressReleasePressReleaseBodyResourcesInline = ResourceLink & {
  __typename?: 'PressReleasePressReleaseBodyResourcesInline';
  sys: ResourceSys;
};

/** Mostly for the front page. Designed for large clickable images. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/promoBannerWithCta) */
export type PromoBannerWithCta = Entry & _Node & {
  __typename?: 'PromoBannerWithCta';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PromoBannerWithCtaLinkingCollections>;
  promoCta?: Maybe<CallToAction>;
  promoHeroImage?: Maybe<ImageWrapper>;
  promoInternalName?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Mostly for the front page. Designed for large clickable images. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/promoBannerWithCta) */
export type PromoBannerWithCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mostly for the front page. Designed for large clickable images. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/promoBannerWithCta) */
export type PromoBannerWithCtaPromoCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CallToActionFilter>;
};


/** Mostly for the front page. Designed for large clickable images. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/promoBannerWithCta) */
export type PromoBannerWithCtaPromoHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ImageWrapperFilter>;
};


/** Mostly for the front page. Designed for large clickable images. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/promoBannerWithCta) */
export type PromoBannerWithCtaPromoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PromoBannerWithCtaCollection = {
  __typename?: 'PromoBannerWithCtaCollection';
  items: Array<Maybe<PromoBannerWithCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PromoBannerWithCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<PromoBannerWithCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PromoBannerWithCtaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  promoCta?: InputMaybe<CfCallToActionNestedFilter>;
  promoCta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promoHeroImage?: InputMaybe<CfImageWrapperNestedFilter>;
  promoHeroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promoInternalName?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_contains?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promoInternalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  promoInternalName_not?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PromoBannerWithCtaLinkingCollections = {
  __typename?: 'PromoBannerWithCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};


export type PromoBannerWithCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PromoBannerWithCtaLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PromoBannerWithCtaLinkingCollectionsHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PromoBannerWithCtaLinkingCollectionsHomeCollectionOrder {
  CommissionerBylineAsc = 'commissionerByline_ASC',
  CommissionerBylineDesc = 'commissionerByline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PromoBannerWithCtaOrder {
  PromoInternalNameAsc = 'promoInternalName_ASC',
  PromoInternalNameDesc = 'promoInternalName_DESC',
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
  _node?: Maybe<_Node>;
  aggregation?: Maybe<Aggregation>;
  aggregationCollection?: Maybe<AggregationCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  callToAction?: Maybe<CallToAction>;
  callToActionCollection?: Maybe<CallToActionCollection>;
  contact?: Maybe<Contact>;
  contactCollection?: Maybe<ContactCollection>;
  contentTypeLocation?: Maybe<ContentTypeLocation>;
  contentTypeLocationCollection?: Maybe<ContentTypeLocationCollection>;
  documentWrapper?: Maybe<DocumentWrapper>;
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
  draftNavigationLink?: Maybe<DraftNavigationLink>;
  draftNavigationLinkCollection?: Maybe<DraftNavigationLinkCollection>;
  draftNavigationMenu?: Maybe<DraftNavigationMenu>;
  draftNavigationMenuCollection?: Maybe<DraftNavigationMenuCollection>;
  entryCollection?: Maybe<EntryCollection>;
  error?: Maybe<Error>;
  errorCollection?: Maybe<ErrorCollection>;
  eventEntry?: Maybe<EventEntry>;
  eventEntryCollection?: Maybe<EventEntryCollection>;
  heroImage?: Maybe<HeroImage>;
  heroImageCollection?: Maybe<HeroImageCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  imageWrapper?: Maybe<ImageWrapper>;
  imageWrapperCollection?: Maybe<ImageWrapperCollection>;
  menu?: Maybe<Menu>;
  menuCollection?: Maybe<MenuCollection>;
  menuItem?: Maybe<MenuItem>;
  menuItemCollection?: Maybe<MenuItemCollection>;
  news?: Maybe<News>;
  newsArticle?: Maybe<NewsArticle>;
  newsArticleCollection?: Maybe<NewsArticleCollection>;
  newsCollection?: Maybe<NewsCollection>;
  newsItemContent?: Maybe<NewsItemContent>;
  newsItemContentCollection?: Maybe<NewsItemContentCollection>;
  officePage?: Maybe<OfficePage>;
  officePageCollection?: Maybe<OfficePageCollection>;
  pageMetadata?: Maybe<PageMetadata>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  pressRelease?: Maybe<PressRelease>;
  pressReleaseCollection?: Maybe<PressReleaseCollection>;
  promoBannerWithCta?: Maybe<PromoBannerWithCta>;
  promoBannerWithCtaCollection?: Maybe<PromoBannerWithCtaCollection>;
  serviceEntry?: Maybe<ServiceEntry>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  testRichText?: Maybe<TestRichText>;
  testRichTextCollection?: Maybe<TestRichTextCollection>;
  topTier?: Maybe<TopTier>;
  topTierCollection?: Maybe<TopTierCollection>;
  videoWrapper?: Maybe<VideoWrapper>;
  videoWrapperCollection?: Maybe<VideoWrapperCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAggregationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAggregationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AggregationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AggregationFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCallToActionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCallToActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CallToActionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CallToActionFilter>;
};


export type QueryContactArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


export type QueryContentTypeLocationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentTypeLocationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeLocationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentTypeLocationFilter>;
};


export type QueryDocumentWrapperArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDocumentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DocumentWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DocumentWrapperFilter>;
};


export type QueryDraftNavigationLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDraftNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DraftNavigationLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DraftNavigationLinkFilter>;
};


export type QueryDraftNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDraftNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DraftNavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DraftNavigationMenuFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryErrorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryErrorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ErrorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ErrorFilter>;
};


export type QueryEventEntryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventEntryFilter>;
};


export type QueryHeroImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroImageFilter>;
};


export type QueryHomeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomeFilter>;
};


export type QueryImageWrapperArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryImageWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImageWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ImageWrapperFilter>;
};


export type QueryMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuFilter>;
};


export type QueryMenuItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuItemFilter>;
};


export type QueryNewsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNewsArticleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNewsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsArticleFilter>;
};


export type QueryNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsFilter>;
};


export type QueryNewsItemContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNewsItemContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NewsItemContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsItemContentFilter>;
};


export type QueryOfficePageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OfficePageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OfficePageFilter>;
};


export type QueryPageMetadataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


export type QueryPressReleaseArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPressReleaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PressReleaseOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PressReleaseFilter>;
};


export type QueryPromoBannerWithCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPromoBannerWithCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PromoBannerWithCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromoBannerWithCtaFilter>;
};


export type QueryServiceEntryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryFilter>;
};


export type QueryServiceGroupArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceGroupFilter>;
};


export type QueryTestRichTextArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTestRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestRichTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestRichTextFilter>;
};


export type QueryTopTierArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopTierOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopTierFilter>;
};


export type QueryVideoWrapperArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVideoWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoWrapperFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Content that will show up as an accordion on a Core content page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntry = Entry & _Node & {
  __typename?: 'ServiceEntry';
  _id: Scalars['ID']['output'];
  contactInformationCollection?: Maybe<ServiceEntryContactInformationCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceEntryDescription>;
  entryTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ServiceEntryLinkingCollections>;
  serviceCtaCollection?: Maybe<ServiceEntryServiceCtaCollection>;
  sys: Sys;
};


/** Content that will show up as an accordion on a Core content page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryContactInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryContactInformationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


/** Content that will show up as an accordion on a Core content page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content that will show up as an accordion on a Core content page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content that will show up as an accordion on a Core content page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Content that will show up as an accordion on a Core content page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryServiceCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CallToActionFilter>;
};

export type ServiceEntryCollection = {
  __typename?: 'ServiceEntryCollection';
  items: Array<Maybe<ServiceEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceEntryContactInformationCollection = {
  __typename?: 'ServiceEntryContactInformationCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ServiceEntryContactInformationCollectionOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntityNameAsc = 'entityName_ASC',
  EntityNameDesc = 'entityName_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ServiceEntryDescription = {
  __typename?: 'ServiceEntryDescription';
  json: Scalars['JSON']['output'];
  links: ServiceEntryDescriptionLinks;
};

export type ServiceEntryDescriptionAssets = {
  __typename?: 'ServiceEntryDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceEntryDescriptionEntries = {
  __typename?: 'ServiceEntryDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceEntryDescriptionLinks = {
  __typename?: 'ServiceEntryDescriptionLinks';
  assets: ServiceEntryDescriptionAssets;
  entries: ServiceEntryDescriptionEntries;
  resources: ServiceEntryDescriptionResources;
};

export type ServiceEntryDescriptionResources = {
  __typename?: 'ServiceEntryDescriptionResources';
  block: Array<ServiceEntryDescriptionResourcesBlock>;
  hyperlink: Array<ServiceEntryDescriptionResourcesHyperlink>;
  inline: Array<ServiceEntryDescriptionResourcesInline>;
};

export type ServiceEntryDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'ServiceEntryDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type ServiceEntryDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'ServiceEntryDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type ServiceEntryDescriptionResourcesInline = ResourceLink & {
  __typename?: 'ServiceEntryDescriptionResourcesInline';
  sys: ResourceSys;
};

export type ServiceEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceEntryFilter>>>;
  contactInformation?: InputMaybe<CfContactNestedFilter>;
  contactInformationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceCta?: InputMaybe<CfCallToActionNestedFilter>;
  serviceCtaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryLinkingCollections = {
  __typename?: 'ServiceEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
};


export type ServiceEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceEntryLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryLinkingCollectionsServiceGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServiceEntryLinkingCollectionsServiceGroupCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum ServiceEntryOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ServiceEntryServiceCtaCollection = {
  __typename?: 'ServiceEntryServiceCtaCollection';
  items: Array<Maybe<CallToAction>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ServiceEntryServiceCtaCollectionOrder {
  CtaInternalNameAsc = 'ctaInternalName_ASC',
  CtaInternalNameDesc = 'ctaInternalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroup = Entry & _Node & {
  __typename?: 'ServiceGroup';
  _id: Scalars['ID']['output'];
  additionalResources?: Maybe<ServiceGroupAdditionalResources>;
  contactInfoCollection?: Maybe<ServiceGroupContactInfoCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceGroupDescription>;
  heroImage?: Maybe<HeroImage>;
  imageGalleryCollection?: Maybe<AssetCollection>;
  imageGalleryTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ServiceGroupLinkingCollections>;
  pageMetadata?: Maybe<PageMetadata>;
  recentNewsCollection?: Maybe<ServiceGroupRecentNewsCollection>;
  serviceEntriesCollection?: Maybe<ServiceGroupServiceEntriesCollection>;
  serviceListName?: Maybe<Scalars['String']['output']>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  video?: Maybe<VideoWrapper>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupAdditionalResourcesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupContactInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceGroupContactInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroImageFilter>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupImageGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupImageGalleryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupPageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupRecentNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceGroupRecentNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsFilter>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupServiceEntriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceGroupServiceEntriesFilter>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupServiceListNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Web page that usually contains a group of service entries, but doesn't have to. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VideoWrapperFilter>;
};

export type ServiceGroupAdditionalResources = {
  __typename?: 'ServiceGroupAdditionalResources';
  json: Scalars['JSON']['output'];
  links: ServiceGroupAdditionalResourcesLinks;
};

export type ServiceGroupAdditionalResourcesAssets = {
  __typename?: 'ServiceGroupAdditionalResourcesAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceGroupAdditionalResourcesEntries = {
  __typename?: 'ServiceGroupAdditionalResourcesEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceGroupAdditionalResourcesLinks = {
  __typename?: 'ServiceGroupAdditionalResourcesLinks';
  assets: ServiceGroupAdditionalResourcesAssets;
  entries: ServiceGroupAdditionalResourcesEntries;
  resources: ServiceGroupAdditionalResourcesResources;
};

export type ServiceGroupAdditionalResourcesResources = {
  __typename?: 'ServiceGroupAdditionalResourcesResources';
  block: Array<ServiceGroupAdditionalResourcesResourcesBlock>;
  hyperlink: Array<ServiceGroupAdditionalResourcesResourcesHyperlink>;
  inline: Array<ServiceGroupAdditionalResourcesResourcesInline>;
};

export type ServiceGroupAdditionalResourcesResourcesBlock = ResourceLink & {
  __typename?: 'ServiceGroupAdditionalResourcesResourcesBlock';
  sys: ResourceSys;
};

export type ServiceGroupAdditionalResourcesResourcesHyperlink = ResourceLink & {
  __typename?: 'ServiceGroupAdditionalResourcesResourcesHyperlink';
  sys: ResourceSys;
};

export type ServiceGroupAdditionalResourcesResourcesInline = ResourceLink & {
  __typename?: 'ServiceGroupAdditionalResourcesResourcesInline';
  sys: ResourceSys;
};

export type ServiceGroupCollection = {
  __typename?: 'ServiceGroupCollection';
  items: Array<Maybe<ServiceGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceGroupContactInfoCollection = {
  __typename?: 'ServiceGroupContactInfoCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ServiceGroupContactInfoCollectionOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntityNameAsc = 'entityName_ASC',
  EntityNameDesc = 'entityName_DESC',
  PhoneExtAsc = 'phoneExt_ASC',
  PhoneExtDesc = 'phoneExt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ServiceGroupDescription = {
  __typename?: 'ServiceGroupDescription';
  json: Scalars['JSON']['output'];
  links: ServiceGroupDescriptionLinks;
};

export type ServiceGroupDescriptionAssets = {
  __typename?: 'ServiceGroupDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceGroupDescriptionEntries = {
  __typename?: 'ServiceGroupDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceGroupDescriptionLinks = {
  __typename?: 'ServiceGroupDescriptionLinks';
  assets: ServiceGroupDescriptionAssets;
  entries: ServiceGroupDescriptionEntries;
  resources: ServiceGroupDescriptionResources;
};

export type ServiceGroupDescriptionResources = {
  __typename?: 'ServiceGroupDescriptionResources';
  block: Array<ServiceGroupDescriptionResourcesBlock>;
  hyperlink: Array<ServiceGroupDescriptionResourcesHyperlink>;
  inline: Array<ServiceGroupDescriptionResourcesInline>;
};

export type ServiceGroupDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'ServiceGroupDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type ServiceGroupDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'ServiceGroupDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type ServiceGroupDescriptionResourcesInline = ResourceLink & {
  __typename?: 'ServiceGroupDescriptionResourcesInline';
  sys: ResourceSys;
};

export type ServiceGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceGroupFilter>>>;
  additionalResources_contains?: InputMaybe<Scalars['String']['input']>;
  additionalResources_exists?: InputMaybe<Scalars['Boolean']['input']>;
  additionalResources_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactInfo?: InputMaybe<CfContactNestedFilter>;
  contactInfoCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<CfHeroImageNestedFilter>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageGalleryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageGalleryTitle?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageGalleryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageGalleryTitle_not?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recentNews?: InputMaybe<CfNewsNestedFilter>;
  recentNewsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceEntries?: InputMaybe<CfserviceEntriesMultiTypeNestedFilter>;
  serviceEntriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceListName?: InputMaybe<Scalars['String']['input']>;
  serviceListName_contains?: InputMaybe<Scalars['String']['input']>;
  serviceListName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceListName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceListName_not?: InputMaybe<Scalars['String']['input']>;
  serviceListName_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceListName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  video?: InputMaybe<CfVideoWrapperNestedFilter>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceGroupLinkingCollections = {
  __typename?: 'ServiceGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type ServiceGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceGroupLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceGroupLinkingCollectionsHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceGroupLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceGroupLinkingCollectionsServiceGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceGroupLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceGroupLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServiceGroupLinkingCollectionsHomeCollectionOrder {
  CommissionerBylineAsc = 'commissionerByline_ASC',
  CommissionerBylineDesc = 'commissionerByline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ServiceGroupLinkingCollectionsServiceGroupCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum ServiceGroupLinkingCollectionsTopTierCollectionOrder {
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum ServiceGroupOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export type ServiceGroupRecentNewsCollection = {
  __typename?: 'ServiceGroupRecentNewsCollection';
  items: Array<Maybe<News>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ServiceGroupRecentNewsCollectionOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type ServiceGroupServiceEntriesCollection = {
  __typename?: 'ServiceGroupServiceEntriesCollection';
  items: Array<Maybe<ServiceGroupServiceEntriesItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceGroupServiceEntriesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceGroupServiceEntriesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceGroupServiceEntriesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceGroupServiceEntriesItem = ServiceEntry | ServiceGroup;

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichText = Entry & _Node & {
  __typename?: 'TestRichText';
  _id: Scalars['ID']['output'];
  body?: Maybe<TestRichTextBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TestRichTextLinkingCollections>;
  mainImage?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextMainImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Example content type with some rich text. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/testRichText) */
export type TestRichTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TestRichTextBody = {
  __typename?: 'TestRichTextBody';
  json: Scalars['JSON']['output'];
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
  resources: TestRichTextBodyResources;
};

export type TestRichTextBodyResources = {
  __typename?: 'TestRichTextBodyResources';
  block: Array<TestRichTextBodyResourcesBlock>;
  hyperlink: Array<TestRichTextBodyResourcesHyperlink>;
  inline: Array<TestRichTextBodyResourcesInline>;
};

export type TestRichTextBodyResourcesBlock = ResourceLink & {
  __typename?: 'TestRichTextBodyResourcesBlock';
  sys: ResourceSys;
};

export type TestRichTextBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'TestRichTextBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type TestRichTextBodyResourcesInline = ResourceLink & {
  __typename?: 'TestRichTextBodyResourcesInline';
  sys: ResourceSys;
};

export type TestRichTextCollection = {
  __typename?: 'TestRichTextCollection';
  items: Array<Maybe<TestRichText>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TestRichTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestRichTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestRichTextFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestRichTextLinkingCollections = {
  __typename?: 'TestRichTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestRichTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTier = Entry & _Node & {
  __typename?: 'TopTier';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TopTierDescription>;
  featuredServiceListCollection?: Maybe<TopTierFeaturedServiceListCollection>;
  heroImage?: Maybe<HeroImage>;
  linkedFrom?: Maybe<TopTierLinkingCollections>;
  pageMetadata?: Maybe<PageMetadata>;
  recentNewsCollection?: Maybe<TopTierRecentNewsCollection>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  upcomingEventsCollection?: Maybe<TopTierUpcomingEventsCollection>;
  video?: Maybe<VideoWrapper>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierFeaturedServiceListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopTierFeaturedServiceListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceGroupFilter>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroImageFilter>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierPageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierRecentNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopTierRecentNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsFilter>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierUpcomingEventsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopTierUpcomingEventsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventEntryFilter>;
};


/** Landing pages for the main sections of the site. They highlight the most important services or tasks (Core content). They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VideoWrapperFilter>;
};

export type TopTierCollection = {
  __typename?: 'TopTierCollection';
  items: Array<Maybe<TopTier>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopTierDescription = {
  __typename?: 'TopTierDescription';
  json: Scalars['JSON']['output'];
  links: TopTierDescriptionLinks;
};

export type TopTierDescriptionAssets = {
  __typename?: 'TopTierDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopTierDescriptionEntries = {
  __typename?: 'TopTierDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopTierDescriptionLinks = {
  __typename?: 'TopTierDescriptionLinks';
  assets: TopTierDescriptionAssets;
  entries: TopTierDescriptionEntries;
  resources: TopTierDescriptionResources;
};

export type TopTierDescriptionResources = {
  __typename?: 'TopTierDescriptionResources';
  block: Array<TopTierDescriptionResourcesBlock>;
  hyperlink: Array<TopTierDescriptionResourcesHyperlink>;
  inline: Array<TopTierDescriptionResourcesInline>;
};

export type TopTierDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TopTierDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TopTierDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TopTierDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TopTierDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TopTierDescriptionResourcesInline';
  sys: ResourceSys;
};

export type TopTierFeaturedServiceListCollection = {
  __typename?: 'TopTierFeaturedServiceListCollection';
  items: Array<Maybe<ServiceGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TopTierFeaturedServiceListCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export type TopTierFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopTierFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopTierFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredServiceList?: InputMaybe<CfServiceGroupNestedFilter>;
  featuredServiceListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<CfHeroImageNestedFilter>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recentNews?: InputMaybe<CfNewsNestedFilter>;
  recentNewsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upcomingEvents?: InputMaybe<CfEventEntryNestedFilter>;
  upcomingEventsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  video?: InputMaybe<CfVideoWrapperNestedFilter>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopTierLinkingCollections = {
  __typename?: 'TopTierLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  menuCollection?: Maybe<MenuCollection>;
};


export type TopTierLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TopTierLinkingCollectionsMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopTierLinkingCollectionsMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TopTierLinkingCollectionsMenuCollectionOrder {
  MenuTypeAsc = 'menuType_ASC',
  MenuTypeDesc = 'menuType_DESC',
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

export enum TopTierOrder {
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export type TopTierRecentNewsCollection = {
  __typename?: 'TopTierRecentNewsCollection';
  items: Array<Maybe<News>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TopTierRecentNewsCollectionOrder {
  BylineAsc = 'byline_ASC',
  BylineDesc = 'byline_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type TopTierUpcomingEventsCollection = {
  __typename?: 'TopTierUpcomingEventsCollection';
  items: Array<Maybe<EventEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TopTierUpcomingEventsCollectionOrder {
  EventDateAndTimeAsc = 'eventDateAndTime_ASC',
  EventDateAndTimeDesc = 'eventDateAndTime_DESC',
  EventDescriptionAsc = 'eventDescription_ASC',
  EventDescriptionDesc = 'eventDescription_DESC',
  EventSummaryAsc = 'eventSummary_ASC',
  EventSummaryDesc = 'eventSummary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTitleAsc = 'shortTitle_ASC',
  ShortTitleDesc = 'shortTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapper = Entry & _Node & {
  __typename?: 'VideoWrapper';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<VideoWrapperLinkingCollections>;
  sys: Sys;
  videoLongerStory?: Maybe<VideoWrapperVideoLongerStory>;
  videoSlug?: Maybe<Scalars['String']['output']>;
  videoSubhead?: Maybe<Scalars['String']['output']>;
  videoTitle?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapperInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapperVideoLongerStoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapperVideoSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapperVideoSubheadArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapperVideoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapperVideoUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type VideoWrapperCollection = {
  __typename?: 'VideoWrapperCollection';
  items: Array<Maybe<VideoWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VideoWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoWrapperFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  videoLongerStory_contains?: InputMaybe<Scalars['String']['input']>;
  videoLongerStory_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoLongerStory_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoSlug?: InputMaybe<Scalars['String']['input']>;
  videoSlug_contains?: InputMaybe<Scalars['String']['input']>;
  videoSlug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoSlug_not?: InputMaybe<Scalars['String']['input']>;
  videoSlug_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoSubhead?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_contains?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoSubhead_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoSubhead_not?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoTitle?: InputMaybe<Scalars['String']['input']>;
  videoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  videoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoTitle_not?: InputMaybe<Scalars['String']['input']>;
  videoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  videoUrl_contains?: InputMaybe<Scalars['String']['input']>;
  videoUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl_not?: InputMaybe<Scalars['String']['input']>;
  videoUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoWrapperLinkingCollections = {
  __typename?: 'VideoWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type VideoWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoWrapperLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperLinkingCollectionsHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoWrapperLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperLinkingCollectionsServiceGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoWrapperLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VideoWrapperLinkingCollectionsHomeCollectionOrder {
  CommissionerBylineAsc = 'commissionerByline_ASC',
  CommissionerBylineDesc = 'commissionerByline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoWrapperLinkingCollectionsServiceGroupCollectionOrder {
  ImageGalleryTitleAsc = 'imageGalleryTitle_ASC',
  ImageGalleryTitleDesc = 'imageGalleryTitle_DESC',
  ServiceListNameAsc = 'serviceListName_ASC',
  ServiceListNameDesc = 'serviceListName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum VideoWrapperLinkingCollectionsTopTierCollectionOrder {
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
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

export enum VideoWrapperOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VideoSlugAsc = 'videoSlug_ASC',
  VideoSlugDesc = 'videoSlug_DESC',
  VideoSubheadAsc = 'videoSubhead_ASC',
  VideoSubheadDesc = 'videoSubhead_DESC',
  VideoTitleAsc = 'videoTitle_ASC',
  VideoTitleDesc = 'videoTitle_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC'
}

export type VideoWrapperVideoLongerStory = {
  __typename?: 'VideoWrapperVideoLongerStory';
  json: Scalars['JSON']['output'];
  links: VideoWrapperVideoLongerStoryLinks;
};

export type VideoWrapperVideoLongerStoryAssets = {
  __typename?: 'VideoWrapperVideoLongerStoryAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type VideoWrapperVideoLongerStoryEntries = {
  __typename?: 'VideoWrapperVideoLongerStoryEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type VideoWrapperVideoLongerStoryLinks = {
  __typename?: 'VideoWrapperVideoLongerStoryLinks';
  assets: VideoWrapperVideoLongerStoryAssets;
  entries: VideoWrapperVideoLongerStoryEntries;
  resources: VideoWrapperVideoLongerStoryResources;
};

export type VideoWrapperVideoLongerStoryResources = {
  __typename?: 'VideoWrapperVideoLongerStoryResources';
  block: Array<VideoWrapperVideoLongerStoryResourcesBlock>;
  hyperlink: Array<VideoWrapperVideoLongerStoryResourcesHyperlink>;
  inline: Array<VideoWrapperVideoLongerStoryResourcesInline>;
};

export type VideoWrapperVideoLongerStoryResourcesBlock = ResourceLink & {
  __typename?: 'VideoWrapperVideoLongerStoryResourcesBlock';
  sys: ResourceSys;
};

export type VideoWrapperVideoLongerStoryResourcesHyperlink = ResourceLink & {
  __typename?: 'VideoWrapperVideoLongerStoryResourcesHyperlink';
  sys: ResourceSys;
};

export type VideoWrapperVideoLongerStoryResourcesInline = ResourceLink & {
  __typename?: 'VideoWrapperVideoLongerStoryResourcesInline';
  sys: ResourceSys;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfCallToActionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCallToActionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCallToActionNestedFilter>>>;
  callToActionDestination_contains?: InputMaybe<Scalars['String']['input']>;
  callToActionDestination_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToActionDestination_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaInternalName?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_contains?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaInternalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaInternalName_not?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaInternalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContactNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContactNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContactNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entityName?: InputMaybe<Scalars['String']['input']>;
  entityName_contains?: InputMaybe<Scalars['String']['input']>;
  entityName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entityName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entityName_not?: InputMaybe<Scalars['String']['input']>;
  entityName_not_contains?: InputMaybe<Scalars['String']['input']>;
  entityName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneExt?: InputMaybe<Scalars['String']['input']>;
  phoneExt_contains?: InputMaybe<Scalars['String']['input']>;
  phoneExt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneExt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneExt_not?: InputMaybe<Scalars['String']['input']>;
  phoneExt_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneExt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContentTypeLocationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContentTypeLocationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContentTypeLocationNestedFilter>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_contains?: InputMaybe<Scalars['String']['input']>;
  state_exists?: InputMaybe<Scalars['Boolean']['input']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state_not?: InputMaybe<Scalars['String']['input']>;
  state_not_contains?: InputMaybe<Scalars['String']['input']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress1_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress2_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  zip?: InputMaybe<Scalars['String']['input']>;
  zip_contains?: InputMaybe<Scalars['String']['input']>;
  zip_exists?: InputMaybe<Scalars['Boolean']['input']>;
  zip_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zip_not?: InputMaybe<Scalars['String']['input']>;
  zip_not_contains?: InputMaybe<Scalars['String']['input']>;
  zip_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfEventEntryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEventEntryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEventEntryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventDateAndTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventDateAndTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  eventDateAndTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateAndTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  eventDescription?: InputMaybe<Scalars['String']['input']>;
  eventDescription_contains?: InputMaybe<Scalars['String']['input']>;
  eventDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventDescription_not?: InputMaybe<Scalars['String']['input']>;
  eventDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventDocumentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventRichTextDescription_contains?: InputMaybe<Scalars['String']['input']>;
  eventRichTextDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventRichTextDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventSummary?: InputMaybe<Scalars['String']['input']>;
  eventSummary_contains?: InputMaybe<Scalars['String']['input']>;
  eventSummary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventSummary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventSummary_not?: InputMaybe<Scalars['String']['input']>;
  eventSummary_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventSummary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortTitle?: InputMaybe<Scalars['String']['input']>;
  shortTitle_contains?: InputMaybe<Scalars['String']['input']>;
  shortTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortTitle_not?: InputMaybe<Scalars['String']['input']>;
  shortTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHeroImageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroImageNestedFilter>>>;
  altField?: InputMaybe<Scalars['String']['input']>;
  altField_contains?: InputMaybe<Scalars['String']['input']>;
  altField_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altField_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altField_not?: InputMaybe<Scalars['String']['input']>;
  altField_not_contains?: InputMaybe<Scalars['String']['input']>;
  altField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fotogCredit?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_contains?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fotogCredit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fotogCredit_not?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_not_contains?: InputMaybe<Scalars['String']['input']>;
  fotogCredit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageSource_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageTitle?: InputMaybe<Scalars['String']['input']>;
  imageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  imageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageTitle_not?: InputMaybe<Scalars['String']['input']>;
  imageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfImageWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfImageWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfImageWrapperNestedFilter>>>;
  altText?: InputMaybe<Scalars['String']['input']>;
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  altText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altText_not?: InputMaybe<Scalars['String']['input']>;
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNewsItemContentNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNewsItemContentNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNewsItemContentNestedFilter>>>;
  byline?: InputMaybe<Scalars['String']['input']>;
  byline_contains?: InputMaybe<Scalars['String']['input']>;
  byline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  byline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byline_not?: InputMaybe<Scalars['String']['input']>;
  byline_not_contains?: InputMaybe<Scalars['String']['input']>;
  byline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  newsInternalName?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_contains?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsInternalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsInternalName_not?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  newsInternalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsItemBody_contains?: InputMaybe<Scalars['String']['input']>;
  newsItemBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsItemBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNewsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNewsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNewsNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  byline?: InputMaybe<Scalars['String']['input']>;
  byline_contains?: InputMaybe<Scalars['String']['input']>;
  byline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  byline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  byline_not?: InputMaybe<Scalars['String']['input']>;
  byline_not_contains?: InputMaybe<Scalars['String']['input']>;
  byline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactInformationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publicationDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publicationDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publicationDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedEventsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  relatedLinks_contains?: InputMaybe<Scalars['String']['input']>;
  relatedLinks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  relatedLinks_not_contains?: InputMaybe<Scalars['String']['input']>;
  relatedNewsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subhead?: InputMaybe<Scalars['String']['input']>;
  subhead_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subhead_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subhead_not?: InputMaybe<Scalars['String']['input']>;
  subhead_not_contains?: InputMaybe<Scalars['String']['input']>;
  subhead_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalRedirect?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_contains?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalRedirect_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalRedirect_not?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalRedirect_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalRedirect_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot_not?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recentNewsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPromoBannerWithCtaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPromoBannerWithCtaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPromoBannerWithCtaNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  promoCta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promoHeroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promoInternalName?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_contains?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promoInternalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  promoInternalName_not?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  promoInternalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfServiceGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfServiceGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfServiceGroupNestedFilter>>>;
  additionalResources_contains?: InputMaybe<Scalars['String']['input']>;
  additionalResources_exists?: InputMaybe<Scalars['Boolean']['input']>;
  additionalResources_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactInfoCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageGalleryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageGalleryTitle?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageGalleryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageGalleryTitle_not?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageGalleryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recentNewsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceEntriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceListName?: InputMaybe<Scalars['String']['input']>;
  serviceListName_contains?: InputMaybe<Scalars['String']['input']>;
  serviceListName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceListName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceListName_not?: InputMaybe<Scalars['String']['input']>;
  serviceListName_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceListName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfVideoWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfVideoWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfVideoWrapperNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  videoLongerStory_contains?: InputMaybe<Scalars['String']['input']>;
  videoLongerStory_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoLongerStory_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoSlug?: InputMaybe<Scalars['String']['input']>;
  videoSlug_contains?: InputMaybe<Scalars['String']['input']>;
  videoSlug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoSlug_not?: InputMaybe<Scalars['String']['input']>;
  videoSlug_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoSubhead?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_contains?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoSubhead_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoSubhead_not?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoSubhead_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoTitle?: InputMaybe<Scalars['String']['input']>;
  videoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  videoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoTitle_not?: InputMaybe<Scalars['String']['input']>;
  videoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  videoUrl_contains?: InputMaybe<Scalars['String']['input']>;
  videoUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUrl_not?: InputMaybe<Scalars['String']['input']>;
  videoUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfchildrenMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfchildrenMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfchildrenMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfeventDocumentsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfeventDocumentsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfeventDocumentsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CfserviceEntriesMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfserviceEntriesMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfserviceEntriesMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};
