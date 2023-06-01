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
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroImageCollection?: Maybe<HeroImageCollection>;
  testRichTextCollection?: Maybe<TestRichTextCollection>;
};


export type AssetLinkingCollectionsDocumentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissions = Entry & {
  __typename?: 'BoardsAndCommissions';
  additionalInformation?: Maybe<BoardsAndCommissionsAdditionalInformation>;
  contactBc?: Maybe<ContactEntry>;
  contactUs?: Maybe<BoardsAndCommissionsContactUs>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BoardsAndCommissionsLinkingCollections>;
  meetings?: Maybe<BoardsAndCommissionsMeetings>;
  membership?: Maybe<BoardsAndCommissionsMembership>;
  overview?: Maybe<BoardsAndCommissionsOverview>;
  subHeadBc?: Maybe<PageSubheader>;
  subheading?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsAdditionalInformationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsContactBcArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsContactUsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsMeetingsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsMembershipArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsOverviewArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsSubHeadBcArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BoardsAndCommissionsAdditionalInformation = {
  __typename?: 'BoardsAndCommissionsAdditionalInformation';
  json: Scalars['JSON'];
  links: BoardsAndCommissionsAdditionalInformationLinks;
};

export type BoardsAndCommissionsAdditionalInformationAssets = {
  __typename?: 'BoardsAndCommissionsAdditionalInformationAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BoardsAndCommissionsAdditionalInformationEntries = {
  __typename?: 'BoardsAndCommissionsAdditionalInformationEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BoardsAndCommissionsAdditionalInformationLinks = {
  __typename?: 'BoardsAndCommissionsAdditionalInformationLinks';
  assets: BoardsAndCommissionsAdditionalInformationAssets;
  entries: BoardsAndCommissionsAdditionalInformationEntries;
};

export type BoardsAndCommissionsCollection = {
  __typename?: 'BoardsAndCommissionsCollection';
  items: Array<Maybe<BoardsAndCommissions>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BoardsAndCommissionsContactUs = {
  __typename?: 'BoardsAndCommissionsContactUs';
  json: Scalars['JSON'];
  links: BoardsAndCommissionsContactUsLinks;
};

export type BoardsAndCommissionsContactUsAssets = {
  __typename?: 'BoardsAndCommissionsContactUsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BoardsAndCommissionsContactUsEntries = {
  __typename?: 'BoardsAndCommissionsContactUsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BoardsAndCommissionsContactUsLinks = {
  __typename?: 'BoardsAndCommissionsContactUsLinks';
  assets: BoardsAndCommissionsContactUsAssets;
  entries: BoardsAndCommissionsContactUsEntries;
};

export type BoardsAndCommissionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BoardsAndCommissionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BoardsAndCommissionsFilter>>>;
  additionalInformation_contains?: InputMaybe<Scalars['String']>;
  additionalInformation_exists?: InputMaybe<Scalars['Boolean']>;
  additionalInformation_not_contains?: InputMaybe<Scalars['String']>;
  contactBc?: InputMaybe<CfContactEntryNestedFilter>;
  contactBc_exists?: InputMaybe<Scalars['Boolean']>;
  contactUs_contains?: InputMaybe<Scalars['String']>;
  contactUs_exists?: InputMaybe<Scalars['Boolean']>;
  contactUs_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  meetings_contains?: InputMaybe<Scalars['String']>;
  meetings_exists?: InputMaybe<Scalars['Boolean']>;
  meetings_not_contains?: InputMaybe<Scalars['String']>;
  membership_contains?: InputMaybe<Scalars['String']>;
  membership_exists?: InputMaybe<Scalars['Boolean']>;
  membership_not_contains?: InputMaybe<Scalars['String']>;
  overview_contains?: InputMaybe<Scalars['String']>;
  overview_exists?: InputMaybe<Scalars['Boolean']>;
  overview_not_contains?: InputMaybe<Scalars['String']>;
  subHeadBc?: InputMaybe<CfPageSubheaderNestedFilter>;
  subHeadBc_exists?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BoardsAndCommissionsLinkingCollections = {
  __typename?: 'BoardsAndCommissionsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BoardsAndCommissionsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BoardsAndCommissionsMeetings = {
  __typename?: 'BoardsAndCommissionsMeetings';
  json: Scalars['JSON'];
  links: BoardsAndCommissionsMeetingsLinks;
};

export type BoardsAndCommissionsMeetingsAssets = {
  __typename?: 'BoardsAndCommissionsMeetingsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BoardsAndCommissionsMeetingsEntries = {
  __typename?: 'BoardsAndCommissionsMeetingsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BoardsAndCommissionsMeetingsLinks = {
  __typename?: 'BoardsAndCommissionsMeetingsLinks';
  assets: BoardsAndCommissionsMeetingsAssets;
  entries: BoardsAndCommissionsMeetingsEntries;
};

export type BoardsAndCommissionsMembership = {
  __typename?: 'BoardsAndCommissionsMembership';
  json: Scalars['JSON'];
  links: BoardsAndCommissionsMembershipLinks;
};

export type BoardsAndCommissionsMembershipAssets = {
  __typename?: 'BoardsAndCommissionsMembershipAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BoardsAndCommissionsMembershipEntries = {
  __typename?: 'BoardsAndCommissionsMembershipEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BoardsAndCommissionsMembershipLinks = {
  __typename?: 'BoardsAndCommissionsMembershipLinks';
  assets: BoardsAndCommissionsMembershipAssets;
  entries: BoardsAndCommissionsMembershipEntries;
};

export enum BoardsAndCommissionsOrder {
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

export type BoardsAndCommissionsOverview = {
  __typename?: 'BoardsAndCommissionsOverview';
  json: Scalars['JSON'];
  links: BoardsAndCommissionsOverviewLinks;
};

export type BoardsAndCommissionsOverviewAssets = {
  __typename?: 'BoardsAndCommissionsOverviewAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BoardsAndCommissionsOverviewEntries = {
  __typename?: 'BoardsAndCommissionsOverviewEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BoardsAndCommissionsOverviewLinks = {
  __typename?: 'BoardsAndCommissionsOverviewLinks';
  assets: BoardsAndCommissionsOverviewAssets;
  entries: BoardsAndCommissionsOverviewEntries;
};

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
};


export type BriefSummaryLinkingCollectionsEntryCollectionArgs = {
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
  bulletListContent?: Maybe<BulletedListBulletListContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BulletedListLinkingCollections>;
  sys: Sys;
};


/** a bulleted list of things [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/bulletedList) */
export type BulletedListBulletListContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** a bulleted list of things [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/bulletedList) */
export type BulletedListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BulletedListBulletListContent = {
  __typename?: 'BulletedListBulletListContent';
  json: Scalars['JSON'];
  links: BulletedListBulletListContentLinks;
};

export type BulletedListBulletListContentAssets = {
  __typename?: 'BulletedListBulletListContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BulletedListBulletListContentEntries = {
  __typename?: 'BulletedListBulletListContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BulletedListBulletListContentLinks = {
  __typename?: 'BulletedListBulletListContentLinks';
  assets: BulletedListBulletListContentAssets;
  entries: BulletedListBulletListContentEntries;
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
  bulletListContent_contains?: InputMaybe<Scalars['String']>;
  bulletListContent_exists?: InputMaybe<Scalars['Boolean']>;
  bulletListContent_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type BulletedListLinkingCollections = {
  __typename?: 'BulletedListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BulletedListLinkingCollectionsEntryCollectionArgs = {
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

/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToAction = Entry & {
  __typename?: 'CallToAction';
  callToActionMessage?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  ctaLink?: Maybe<Scalars['String']>;
  ctaName?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CallToActionLinkingCollections>;
  sys: Sys;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCallToActionMessageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCtaNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CallToActionCollection = {
  __typename?: 'CallToActionCollection';
  items: Array<Maybe<CallToAction>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CallToActionFilter = {
  AND?: InputMaybe<Array<InputMaybe<CallToActionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CallToActionFilter>>>;
  callToActionMessage?: InputMaybe<Scalars['String']>;
  callToActionMessage_contains?: InputMaybe<Scalars['String']>;
  callToActionMessage_exists?: InputMaybe<Scalars['Boolean']>;
  callToActionMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  callToActionMessage_not?: InputMaybe<Scalars['String']>;
  callToActionMessage_not_contains?: InputMaybe<Scalars['String']>;
  callToActionMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']>;
  ctaLink_contains?: InputMaybe<Scalars['String']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaName?: InputMaybe<Scalars['String']>;
  ctaName_contains?: InputMaybe<Scalars['String']>;
  ctaName_exists?: InputMaybe<Scalars['Boolean']>;
  ctaName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaName_not?: InputMaybe<Scalars['String']>;
  ctaName_not_contains?: InputMaybe<Scalars['String']>;
  ctaName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText?: InputMaybe<Scalars['String']>;
  linkText_contains?: InputMaybe<Scalars['String']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText_not?: InputMaybe<Scalars['String']>;
  linkText_not_contains?: InputMaybe<Scalars['String']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CallToActionLinkingCollections = {
  __typename?: 'CallToActionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type CallToActionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CallToActionLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CallToActionOrder {
  CallToActionMessageAsc = 'callToActionMessage_ASC',
  CallToActionMessageDesc = 'callToActionMessage_DESC',
  CtaNameAsc = 'ctaName_ASC',
  CtaNameDesc = 'ctaName_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type Category = Entry & {
  __typename?: 'Category';
  categoryDescription?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  categorySynonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  linkedSubcategoriesCollection?: Maybe<CategoryLinkedSubcategoriesCollection>;
  sys: Sys;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryCategoryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryCategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryCategorySynonymsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryLinkedSubcategoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  categoryDescription?: InputMaybe<Scalars['String']>;
  categoryDescription_contains?: InputMaybe<Scalars['String']>;
  categoryDescription_exists?: InputMaybe<Scalars['Boolean']>;
  categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryDescription_not?: InputMaybe<Scalars['String']>;
  categoryDescription_not_contains?: InputMaybe<Scalars['String']>;
  categoryDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryName?: InputMaybe<Scalars['String']>;
  categoryName_contains?: InputMaybe<Scalars['String']>;
  categoryName_exists?: InputMaybe<Scalars['Boolean']>;
  categoryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryName_not?: InputMaybe<Scalars['String']>;
  categoryName_not_contains?: InputMaybe<Scalars['String']>;
  categoryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkedSubcategories?: InputMaybe<CfCategoryNestedFilter>;
  linkedSubcategoriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CategoryLinkedSubcategoriesCollection = {
  __typename?: 'CategoryLinkedSubcategoriesCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  categoryCollection?: Maybe<CategoryCollection>;
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type CategoryLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CategoryLinkingCollectionsDocumentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CategoryLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CategoryOrder {
  CategoryDescriptionAsc = 'categoryDescription_ASC',
  CategoryDescriptionDesc = 'categoryDescription_DESC',
  CategoryNameAsc = 'categoryName_ASC',
  CategoryNameDesc = 'categoryName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntry = Entry & {
  __typename?: 'ContactEntry';
  city?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ContactEntryLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  nameAndNumberCollection?: Maybe<ContactEntryNameAndNumberCollection>;
  phoneNumber?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  suiteFloorEtc?: Maybe<Scalars['String']>;
  sys: Sys;
  zipCode?: Maybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryCityArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryNameAndNumberCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryStateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryStreetAddressArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntrySuiteFloorEtcArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryZipCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContactEntryCollection = {
  __typename?: 'ContactEntryCollection';
  items: Array<Maybe<ContactEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContactEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactEntryFilter>>>;
  city?: InputMaybe<Scalars['String']>;
  city_contains?: InputMaybe<Scalars['String']>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city_not?: InputMaybe<Scalars['String']>;
  city_not_contains?: InputMaybe<Scalars['String']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  nameAndNumber?: InputMaybe<CfPhoneNumberNestedFilter>;
  nameAndNumberCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Scalars['String']>;
  state_contains?: InputMaybe<Scalars['String']>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_not?: InputMaybe<Scalars['String']>;
  state_not_contains?: InputMaybe<Scalars['String']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  streetAddress?: InputMaybe<Scalars['String']>;
  streetAddress_contains?: InputMaybe<Scalars['String']>;
  streetAddress_exists?: InputMaybe<Scalars['Boolean']>;
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  streetAddress_not?: InputMaybe<Scalars['String']>;
  streetAddress_not_contains?: InputMaybe<Scalars['String']>;
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  suiteFloorEtc?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_contains?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_exists?: InputMaybe<Scalars['Boolean']>;
  suiteFloorEtc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  suiteFloorEtc_not?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_not_contains?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  zipCode?: InputMaybe<Scalars['String']>;
  zipCode_contains?: InputMaybe<Scalars['String']>;
  zipCode_exists?: InputMaybe<Scalars['Boolean']>;
  zipCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zipCode_not?: InputMaybe<Scalars['String']>;
  zipCode_not_contains?: InputMaybe<Scalars['String']>;
  zipCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactEntryLinkingCollections = {
  __typename?: 'ContactEntryLinkingCollections';
  boardsAndCommissionsCollection?: Maybe<BoardsAndCommissionsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
};


export type ContactEntryLinkingCollectionsBoardsAndCommissionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContactEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContactEntryLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContactEntryLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContactEntryLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContactEntryNameAndNumberCollection = {
  __typename?: 'ContactEntryNameAndNumberCollection';
  items: Array<Maybe<PhoneNumber>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ContactEntryOrder {
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  StreetAddressAsc = 'streetAddress_ASC',
  StreetAddressDesc = 'streetAddress_DESC',
  SuiteFloorEtcAsc = 'suiteFloorEtc_ASC',
  SuiteFloorEtcDesc = 'suiteFloorEtc_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ZipCodeAsc = 'zipCode_ASC',
  ZipCodeDesc = 'zipCode_DESC'
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
};


export type ContentBlockHeaderLinkingCollectionsEntryCollectionArgs = {
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

/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapper = Entry & {
  __typename?: 'DocumentWrapper';
  contentfulMetadata: ContentfulMetadata;
  docWrapperName?: Maybe<Scalars['String']>;
  documentCategoryCollection?: Maybe<DocumentWrapperDocumentCategoryCollection>;
  documentDescription?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<DocumentWrapperLinkingCollections>;
  sys: Sys;
  wrappedDocumentName?: Maybe<Asset>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperDocWrapperNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperDocumentCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperDocumentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapperWrappedDocumentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type DocumentWrapperCollection = {
  __typename?: 'DocumentWrapperCollection';
  items: Array<Maybe<DocumentWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DocumentWrapperDocumentCategoryCollection = {
  __typename?: 'DocumentWrapperDocumentCategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type DocumentWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<DocumentWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentWrapperFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  docWrapperName?: InputMaybe<Scalars['String']>;
  docWrapperName_contains?: InputMaybe<Scalars['String']>;
  docWrapperName_exists?: InputMaybe<Scalars['Boolean']>;
  docWrapperName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  docWrapperName_not?: InputMaybe<Scalars['String']>;
  docWrapperName_not_contains?: InputMaybe<Scalars['String']>;
  docWrapperName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  documentCategory?: InputMaybe<CfCategoryNestedFilter>;
  documentCategoryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  documentDescription?: InputMaybe<Scalars['String']>;
  documentDescription_contains?: InputMaybe<Scalars['String']>;
  documentDescription_exists?: InputMaybe<Scalars['Boolean']>;
  documentDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  documentDescription_not?: InputMaybe<Scalars['String']>;
  documentDescription_not_contains?: InputMaybe<Scalars['String']>;
  documentDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  wrappedDocumentName_exists?: InputMaybe<Scalars['Boolean']>;
};

export type DocumentWrapperLinkingCollections = {
  __typename?: 'DocumentWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type DocumentWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DocumentWrapperLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

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
  altField?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fotogCredit?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Asset>;
  imageTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeroImageLinkingCollections>;
  sys: Sys;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageAltFieldArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageFotogCreditArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageImageSourceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
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
  altField?: InputMaybe<Scalars['String']>;
  altField_contains?: InputMaybe<Scalars['String']>;
  altField_exists?: InputMaybe<Scalars['Boolean']>;
  altField_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altField_not?: InputMaybe<Scalars['String']>;
  altField_not_contains?: InputMaybe<Scalars['String']>;
  altField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fotogCredit?: InputMaybe<Scalars['String']>;
  fotogCredit_contains?: InputMaybe<Scalars['String']>;
  fotogCredit_exists?: InputMaybe<Scalars['Boolean']>;
  fotogCredit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fotogCredit_not?: InputMaybe<Scalars['String']>;
  fotogCredit_not_contains?: InputMaybe<Scalars['String']>;
  fotogCredit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageSource_exists?: InputMaybe<Scalars['Boolean']>;
  imageTitle?: InputMaybe<Scalars['String']>;
  imageTitle_contains?: InputMaybe<Scalars['String']>;
  imageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  imageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageTitle_not?: InputMaybe<Scalars['String']>;
  imageTitle_not_contains?: InputMaybe<Scalars['String']>;
  imageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HeroImageLinkingCollections = {
  __typename?: 'HeroImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeroImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

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

/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitle = Entry & {
  __typename?: 'ListWithTitle';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ListWithTitleLinkingCollections>;
  listTitle?: Maybe<Scalars['String']>;
  paragraphOrList?: Maybe<ListWithTitleParagraphOrList>;
  sys: Sys;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleListTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleParagraphOrListArgs = {
  locale?: InputMaybe<Scalars['String']>;
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
  listTitle?: InputMaybe<Scalars['String']>;
  listTitle_contains?: InputMaybe<Scalars['String']>;
  listTitle_exists?: InputMaybe<Scalars['Boolean']>;
  listTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listTitle_not?: InputMaybe<Scalars['String']>;
  listTitle_not_contains?: InputMaybe<Scalars['String']>;
  listTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraphOrList_contains?: InputMaybe<Scalars['String']>;
  paragraphOrList_exists?: InputMaybe<Scalars['Boolean']>;
  paragraphOrList_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type ListWithTitleLinkingCollections = {
  __typename?: 'ListWithTitleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type ListWithTitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ListWithTitleLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ListWithTitleOrder {
  ListTitleAsc = 'listTitle_ASC',
  ListTitleDesc = 'listTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ListWithTitleParagraphOrList = {
  __typename?: 'ListWithTitleParagraphOrList';
  json: Scalars['JSON'];
  links: ListWithTitleParagraphOrListLinks;
};

export type ListWithTitleParagraphOrListAssets = {
  __typename?: 'ListWithTitleParagraphOrListAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ListWithTitleParagraphOrListEntries = {
  __typename?: 'ListWithTitleParagraphOrListEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ListWithTitleParagraphOrListLinks = {
  __typename?: 'ListWithTitleParagraphOrListLinks';
  assets: ListWithTitleParagraphOrListAssets;
  entries: ListWithTitleParagraphOrListEntries;
};

/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePage = Entry & {
  __typename?: 'OfficePage';
  contactInfo?: Maybe<ContactEntry>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<OfficePageDescription>;
  linkedFrom?: Maybe<OfficePageLinkingCollections>;
  metadata?: Maybe<PageMetadata>;
  officePageTitle?: Maybe<Scalars['String']>;
  servicesAndPrograms?: Maybe<OfficePageServicesAndPrograms>;
  subheader?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageContactInfoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageOfficePageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageServicesAndProgramsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageSubheaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type OfficePageCollection = {
  __typename?: 'OfficePageCollection';
  items: Array<Maybe<OfficePage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type OfficePageDescription = {
  __typename?: 'OfficePageDescription';
  json: Scalars['JSON'];
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
};

export type OfficePageFilter = {
  AND?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  contactInfo?: InputMaybe<CfContactEntryNestedFilter>;
  contactInfo_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<CfPageMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']>;
  officePageTitle?: InputMaybe<Scalars['String']>;
  officePageTitle_contains?: InputMaybe<Scalars['String']>;
  officePageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  officePageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  officePageTitle_not?: InputMaybe<Scalars['String']>;
  officePageTitle_not_contains?: InputMaybe<Scalars['String']>;
  officePageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  servicesAndPrograms_contains?: InputMaybe<Scalars['String']>;
  servicesAndPrograms_exists?: InputMaybe<Scalars['Boolean']>;
  servicesAndPrograms_not_contains?: InputMaybe<Scalars['String']>;
  subheader?: InputMaybe<Scalars['String']>;
  subheader_contains?: InputMaybe<Scalars['String']>;
  subheader_exists?: InputMaybe<Scalars['Boolean']>;
  subheader_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheader_not?: InputMaybe<Scalars['String']>;
  subheader_not_contains?: InputMaybe<Scalars['String']>;
  subheader_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  SubheaderAsc = 'subheader_ASC',
  SubheaderDesc = 'subheader_DESC',
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
  json: Scalars['JSON'];
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
};

/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionName = Entry & {
  __typename?: 'OrganizationalSectionName';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<OrganizationalSectionNameLinkingCollections>;
  officeEmail?: Maybe<Scalars['String']>;
  sectionName?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionNameLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionNameOfficeEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionNameSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type OrganizationalSectionNameCollection = {
  __typename?: 'OrganizationalSectionNameCollection';
  items: Array<Maybe<OrganizationalSectionName>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type OrganizationalSectionNameFilter = {
  AND?: InputMaybe<Array<InputMaybe<OrganizationalSectionNameFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OrganizationalSectionNameFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  officeEmail?: InputMaybe<Scalars['String']>;
  officeEmail_contains?: InputMaybe<Scalars['String']>;
  officeEmail_exists?: InputMaybe<Scalars['Boolean']>;
  officeEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  officeEmail_not?: InputMaybe<Scalars['String']>;
  officeEmail_not_contains?: InputMaybe<Scalars['String']>;
  officeEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionName?: InputMaybe<Scalars['String']>;
  sectionName_contains?: InputMaybe<Scalars['String']>;
  sectionName_exists?: InputMaybe<Scalars['Boolean']>;
  sectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionName_not?: InputMaybe<Scalars['String']>;
  sectionName_not_contains?: InputMaybe<Scalars['String']>;
  sectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type OrganizationalSectionNameLinkingCollections = {
  __typename?: 'OrganizationalSectionNameLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type OrganizationalSectionNameLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum OrganizationalSectionNameOrder {
  OfficeEmailAsc = 'officeEmail_ASC',
  OfficeEmailDesc = 'officeEmail_DESC',
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadata = Entry & {
  __typename?: 'PageMetadata';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageMetadataLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageMetadataCollection = {
  __typename?: 'PageMetadataCollection';
  items: Array<Maybe<PageMetadata>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaTitle_contains?: InputMaybe<Scalars['String']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageMetadataLinkingCollections = {
  __typename?: 'PageMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
};


export type PageMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageMetadataLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageMetadataOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
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
  boardsAndCommissionsCollection?: Maybe<BoardsAndCommissionsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type PageSubheaderLinkingCollectionsBoardsAndCommissionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageSubheaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageSubheaderLinkingCollectionsServiceEntryCollectionArgs = {
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

/** The phone number of any office, program, board, commission or individual at LDAF [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/phoneNumber) */
export type PhoneNumber = Entry & {
  __typename?: 'PhoneNumber';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PhoneNumberLinkingCollections>;
  personWithPhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** The phone number of any office, program, board, commission or individual at LDAF [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/phoneNumber) */
export type PhoneNumberLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The phone number of any office, program, board, commission or individual at LDAF [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/phoneNumber) */
export type PhoneNumberPersonWithPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The phone number of any office, program, board, commission or individual at LDAF [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/phoneNumber) */
export type PhoneNumberPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PhoneNumberCollection = {
  __typename?: 'PhoneNumberCollection';
  items: Array<Maybe<PhoneNumber>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PhoneNumberFilter = {
  AND?: InputMaybe<Array<InputMaybe<PhoneNumberFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PhoneNumberFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  personWithPhoneNumber?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_contains?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  personWithPhoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  personWithPhoneNumber_not?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PhoneNumberLinkingCollections = {
  __typename?: 'PhoneNumberLinkingCollections';
  contactEntryCollection?: Maybe<ContactEntryCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PhoneNumberLinkingCollectionsContactEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PhoneNumberLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PhoneNumberOrder {
  PersonWithPhoneNumberAsc = 'personWithPhoneNumber_ASC',
  PersonWithPhoneNumberDesc = 'personWithPhoneNumber_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This is the official name of the LDAF program  as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/programName) */
export type ProgramName = Entry & {
  __typename?: 'ProgramName';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProgramNameLinkingCollections>;
  programEmail?: Maybe<Scalars['String']>;
  sectionName?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** This is the official name of the LDAF program  as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/programName) */
export type ProgramNameLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the official name of the LDAF program  as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/programName) */
export type ProgramNameProgramEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the official name of the LDAF program  as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/programName) */
export type ProgramNameSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProgramNameCollection = {
  __typename?: 'ProgramNameCollection';
  items: Array<Maybe<ProgramName>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProgramNameFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProgramNameFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProgramNameFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  programEmail?: InputMaybe<Scalars['String']>;
  programEmail_contains?: InputMaybe<Scalars['String']>;
  programEmail_exists?: InputMaybe<Scalars['Boolean']>;
  programEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  programEmail_not?: InputMaybe<Scalars['String']>;
  programEmail_not_contains?: InputMaybe<Scalars['String']>;
  programEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionName?: InputMaybe<Scalars['String']>;
  sectionName_contains?: InputMaybe<Scalars['String']>;
  sectionName_exists?: InputMaybe<Scalars['Boolean']>;
  sectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionName_not?: InputMaybe<Scalars['String']>;
  sectionName_not_contains?: InputMaybe<Scalars['String']>;
  sectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ProgramNameLinkingCollections = {
  __typename?: 'ProgramNameLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProgramNameLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProgramNameOrder {
  ProgramEmailAsc = 'programEmail_ASC',
  ProgramEmailDesc = 'programEmail_DESC',
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
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
  boardsAndCommissions?: Maybe<BoardsAndCommissions>;
  boardsAndCommissionsCollection?: Maybe<BoardsAndCommissionsCollection>;
  briefSummary?: Maybe<BriefSummary>;
  briefSummaryCollection?: Maybe<BriefSummaryCollection>;
  bulletedList?: Maybe<BulletedList>;
  bulletedListCollection?: Maybe<BulletedListCollection>;
  callToAction?: Maybe<CallToAction>;
  callToActionCollection?: Maybe<CallToActionCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  contactEntry?: Maybe<ContactEntry>;
  contactEntryCollection?: Maybe<ContactEntryCollection>;
  contentBlockHeader?: Maybe<ContentBlockHeader>;
  contentBlockHeaderCollection?: Maybe<ContentBlockHeaderCollection>;
  documentWrapper?: Maybe<DocumentWrapper>;
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
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
  organizationalSectionName?: Maybe<OrganizationalSectionName>;
  organizationalSectionNameCollection?: Maybe<OrganizationalSectionNameCollection>;
  pageMetadata?: Maybe<PageMetadata>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  pageSectionHeadline?: Maybe<PageSectionHeadline>;
  pageSectionHeadlineCollection?: Maybe<PageSectionHeadlineCollection>;
  pageSubheader?: Maybe<PageSubheader>;
  pageSubheaderCollection?: Maybe<PageSubheaderCollection>;
  phoneNumber?: Maybe<PhoneNumber>;
  phoneNumberCollection?: Maybe<PhoneNumberCollection>;
  programName?: Maybe<ProgramName>;
  programNameCollection?: Maybe<ProgramNameCollection>;
  serviceEntry?: Maybe<ServiceEntry>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
  serviceEntryFieldLabel?: Maybe<ServiceEntryFieldLabel>;
  serviceEntryFieldLabelCollection?: Maybe<ServiceEntryFieldLabelCollection>;
  serviceEntryFieldSet?: Maybe<ServiceEntryFieldSet>;
  serviceEntryFieldSetCollection?: Maybe<ServiceEntryFieldSetCollection>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
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


export type QueryBoardsAndCommissionsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBoardsAndCommissionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BoardsAndCommissionsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoardsAndCommissionsFilter>;
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


export type QueryCallToActionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCallToActionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CallToActionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallToActionFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryFilter>;
};


export type QueryContactEntryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContactEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContactEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactEntryFilter>;
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


export type QueryDocumentWrapperArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDocumentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<DocumentWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DocumentWrapperFilter>;
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


export type QueryOrganizationalSectionNameArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryOrganizationalSectionNameCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<OrganizationalSectionNameOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationalSectionNameFilter>;
};


export type QueryPageMetadataArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageMetadataFilter>;
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


export type QueryPhoneNumberArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPhoneNumberCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PhoneNumberOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhoneNumberFilter>;
};


export type QueryProgramNameArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProgramNameCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProgramNameOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProgramNameFilter>;
};


export type QueryServiceEntryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceEntryFilter>;
};


export type QueryServiceEntryFieldLabelArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryServiceEntryFieldLabelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryFieldLabelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceEntryFieldLabelFilter>;
};


export type QueryServiceEntryFieldSetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryServiceEntryFieldSetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryFieldSetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceEntryFieldSetFilter>;
};


export type QueryServiceGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ServiceGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceGroupFilter>;
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

/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntry = Entry & {
  __typename?: 'ServiceEntry';
  applicationMethods?: Maybe<Scalars['String']>;
  applicationProcess?: Maybe<ServiceEntryApplicationProcess>;
  contactInformationCollection?: Maybe<ServiceEntryContactInformationCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceEntryDescription>;
  entryTitle?: Maybe<Scalars['String']>;
  linkedDocumentCollection?: Maybe<ServiceEntryLinkedDocumentCollection>;
  linkedFrom?: Maybe<ServiceEntryLinkingCollections>;
  requirements?: Maybe<ServiceEntryRequirements>;
  serviceCategoryCollection?: Maybe<ServiceEntryServiceCategoryCollection>;
  serviceCtaCollection?: Maybe<ServiceEntryServiceCtaCollection>;
  serviceDescriptionsCollection?: Maybe<ServiceEntryServiceDescriptionsCollection>;
  serviceSubhead?: Maybe<PageSubheader>;
  subheading?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryApplicationMethodsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryApplicationProcessArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryContactInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryLinkedDocumentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryRequirementsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceDescriptionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceSubheadArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntrySubheadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ServiceEntryApplicationProcess = {
  __typename?: 'ServiceEntryApplicationProcess';
  json: Scalars['JSON'];
  links: ServiceEntryApplicationProcessLinks;
};

export type ServiceEntryApplicationProcessAssets = {
  __typename?: 'ServiceEntryApplicationProcessAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceEntryApplicationProcessEntries = {
  __typename?: 'ServiceEntryApplicationProcessEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceEntryApplicationProcessLinks = {
  __typename?: 'ServiceEntryApplicationProcessLinks';
  assets: ServiceEntryApplicationProcessAssets;
  entries: ServiceEntryApplicationProcessEntries;
};

export type ServiceEntryCollection = {
  __typename?: 'ServiceEntryCollection';
  items: Array<Maybe<ServiceEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceEntryContactInformationCollection = {
  __typename?: 'ServiceEntryContactInformationCollection';
  items: Array<Maybe<ContactEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceEntryDescription = {
  __typename?: 'ServiceEntryDescription';
  json: Scalars['JSON'];
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
};

/** Describes the kind of information you are supplying in the accompanying service info field [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldLabel) */
export type ServiceEntryFieldLabel = Entry & {
  __typename?: 'ServiceEntryFieldLabel';
  contentfulMetadata: ContentfulMetadata;
  fieldLabel?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedFrom?: Maybe<ServiceEntryFieldLabelLinkingCollections>;
  sys: Sys;
};


/** Describes the kind of information you are supplying in the accompanying service info field [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldLabel) */
export type ServiceEntryFieldLabelFieldLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Describes the kind of information you are supplying in the accompanying service info field [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldLabel) */
export type ServiceEntryFieldLabelLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceEntryFieldLabelCollection = {
  __typename?: 'ServiceEntryFieldLabelCollection';
  items: Array<Maybe<ServiceEntryFieldLabel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceEntryFieldLabelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceEntryFieldLabelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceEntryFieldLabelFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fieldLabel_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fieldLabel_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fieldLabel_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fieldLabel_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryFieldLabelLinkingCollections = {
  __typename?: 'ServiceEntryFieldLabelLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceEntryFieldLabelLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ServiceEntryFieldLabelOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSet = Entry & {
  __typename?: 'ServiceEntryFieldSet';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ServiceEntryFieldSetLinkingCollections>;
  serviceEntryFieldName?: Maybe<Scalars['String']>;
  serviceFieldInput?: Maybe<ServiceEntryFieldSetServiceFieldInput>;
  serviceInfoType?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetServiceEntryFieldNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetServiceFieldInputArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetServiceInfoTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ServiceEntryFieldSetCollection = {
  __typename?: 'ServiceEntryFieldSetCollection';
  items: Array<Maybe<ServiceEntryFieldSet>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceEntryFieldSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceEntryFieldSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceEntryFieldSetFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  serviceEntryFieldName?: InputMaybe<Scalars['String']>;
  serviceEntryFieldName_contains?: InputMaybe<Scalars['String']>;
  serviceEntryFieldName_exists?: InputMaybe<Scalars['Boolean']>;
  serviceEntryFieldName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceEntryFieldName_not?: InputMaybe<Scalars['String']>;
  serviceEntryFieldName_not_contains?: InputMaybe<Scalars['String']>;
  serviceEntryFieldName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceFieldInput_contains?: InputMaybe<Scalars['String']>;
  serviceFieldInput_exists?: InputMaybe<Scalars['Boolean']>;
  serviceFieldInput_not_contains?: InputMaybe<Scalars['String']>;
  serviceInfoType?: InputMaybe<Scalars['String']>;
  serviceInfoType_contains?: InputMaybe<Scalars['String']>;
  serviceInfoType_exists?: InputMaybe<Scalars['Boolean']>;
  serviceInfoType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceInfoType_not?: InputMaybe<Scalars['String']>;
  serviceInfoType_not_contains?: InputMaybe<Scalars['String']>;
  serviceInfoType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryFieldSetLinkingCollections = {
  __typename?: 'ServiceEntryFieldSetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceEntryFieldSetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ServiceEntryFieldSetOrder {
  ServiceEntryFieldNameAsc = 'serviceEntryFieldName_ASC',
  ServiceEntryFieldNameDesc = 'serviceEntryFieldName_DESC',
  ServiceInfoTypeAsc = 'serviceInfoType_ASC',
  ServiceInfoTypeDesc = 'serviceInfoType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ServiceEntryFieldSetServiceFieldInput = {
  __typename?: 'ServiceEntryFieldSetServiceFieldInput';
  json: Scalars['JSON'];
  links: ServiceEntryFieldSetServiceFieldInputLinks;
};

export type ServiceEntryFieldSetServiceFieldInputAssets = {
  __typename?: 'ServiceEntryFieldSetServiceFieldInputAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceEntryFieldSetServiceFieldInputEntries = {
  __typename?: 'ServiceEntryFieldSetServiceFieldInputEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceEntryFieldSetServiceFieldInputLinks = {
  __typename?: 'ServiceEntryFieldSetServiceFieldInputLinks';
  assets: ServiceEntryFieldSetServiceFieldInputAssets;
  entries: ServiceEntryFieldSetServiceFieldInputEntries;
};

export type ServiceEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceEntryFilter>>>;
  applicationMethods?: InputMaybe<Scalars['String']>;
  applicationMethods_contains?: InputMaybe<Scalars['String']>;
  applicationMethods_exists?: InputMaybe<Scalars['Boolean']>;
  applicationMethods_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  applicationMethods_not?: InputMaybe<Scalars['String']>;
  applicationMethods_not_contains?: InputMaybe<Scalars['String']>;
  applicationMethods_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  applicationProcess_contains?: InputMaybe<Scalars['String']>;
  applicationProcess_exists?: InputMaybe<Scalars['Boolean']>;
  applicationProcess_not_contains?: InputMaybe<Scalars['String']>;
  contactInformation?: InputMaybe<CfContactEntryNestedFilter>;
  contactInformationCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  entryTitle?: InputMaybe<Scalars['String']>;
  entryTitle_contains?: InputMaybe<Scalars['String']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedDocument?: InputMaybe<CfDocumentWrapperNestedFilter>;
  linkedDocumentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  requirements_contains?: InputMaybe<Scalars['String']>;
  requirements_exists?: InputMaybe<Scalars['Boolean']>;
  requirements_not_contains?: InputMaybe<Scalars['String']>;
  serviceCategory?: InputMaybe<CfCategoryNestedFilter>;
  serviceCategoryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  serviceCta?: InputMaybe<CfCallToActionNestedFilter>;
  serviceCtaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  serviceDescriptions?: InputMaybe<CfListWithTitleNestedFilter>;
  serviceDescriptionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  serviceSubhead?: InputMaybe<CfPageSubheaderNestedFilter>;
  serviceSubhead_exists?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryLinkedDocumentCollection = {
  __typename?: 'ServiceEntryLinkedDocumentCollection';
  items: Array<Maybe<DocumentWrapper>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceEntryLinkingCollections = {
  __typename?: 'ServiceEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
};


export type ServiceEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ServiceEntryLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ServiceEntryOrder {
  ApplicationMethodsAsc = 'applicationMethods_ASC',
  ApplicationMethodsDesc = 'applicationMethods_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
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

export type ServiceEntryRequirements = {
  __typename?: 'ServiceEntryRequirements';
  json: Scalars['JSON'];
  links: ServiceEntryRequirementsLinks;
};

export type ServiceEntryRequirementsAssets = {
  __typename?: 'ServiceEntryRequirementsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceEntryRequirementsEntries = {
  __typename?: 'ServiceEntryRequirementsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceEntryRequirementsLinks = {
  __typename?: 'ServiceEntryRequirementsLinks';
  assets: ServiceEntryRequirementsAssets;
  entries: ServiceEntryRequirementsEntries;
};

export type ServiceEntryServiceCategoryCollection = {
  __typename?: 'ServiceEntryServiceCategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceEntryServiceCtaCollection = {
  __typename?: 'ServiceEntryServiceCtaCollection';
  items: Array<Maybe<CallToAction>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceEntryServiceDescriptionsCollection = {
  __typename?: 'ServiceEntryServiceDescriptionsCollection';
  items: Array<Maybe<ListWithTitle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroup = Entry & {
  __typename?: 'ServiceGroup';
  additionalResources?: Maybe<ServiceGroupAdditionalResources>;
  contactInfoCollection?: Maybe<ServiceGroupContactInfoCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceGroupDescription>;
  linkedFrom?: Maybe<ServiceGroupLinkingCollections>;
  rulesAndRegulations?: Maybe<ServiceGroupRulesAndRegulations>;
  serviceEntriesCollection?: Maybe<ServiceGroupServiceEntriesCollection>;
  subheading?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupAdditionalResourcesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupContactInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupRulesAndRegulationsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupServiceEntriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ServiceGroupAdditionalResources = {
  __typename?: 'ServiceGroupAdditionalResources';
  json: Scalars['JSON'];
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
};

export type ServiceGroupCollection = {
  __typename?: 'ServiceGroupCollection';
  items: Array<Maybe<ServiceGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceGroupContactInfoCollection = {
  __typename?: 'ServiceGroupContactInfoCollection';
  items: Array<Maybe<ContactEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceGroupDescription = {
  __typename?: 'ServiceGroupDescription';
  json: Scalars['JSON'];
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
};

export type ServiceGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceGroupFilter>>>;
  additionalResources_contains?: InputMaybe<Scalars['String']>;
  additionalResources_exists?: InputMaybe<Scalars['Boolean']>;
  additionalResources_not_contains?: InputMaybe<Scalars['String']>;
  contactInfo?: InputMaybe<CfContactEntryNestedFilter>;
  contactInfoCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  rulesAndRegulations_contains?: InputMaybe<Scalars['String']>;
  rulesAndRegulations_exists?: InputMaybe<Scalars['Boolean']>;
  rulesAndRegulations_not_contains?: InputMaybe<Scalars['String']>;
  serviceEntries?: InputMaybe<CfServiceEntryNestedFilter>;
  serviceEntriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceGroupLinkingCollections = {
  __typename?: 'ServiceGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ServiceGroupOrder {
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

export type ServiceGroupRulesAndRegulations = {
  __typename?: 'ServiceGroupRulesAndRegulations';
  json: Scalars['JSON'];
  links: ServiceGroupRulesAndRegulationsLinks;
};

export type ServiceGroupRulesAndRegulationsAssets = {
  __typename?: 'ServiceGroupRulesAndRegulationsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceGroupRulesAndRegulationsEntries = {
  __typename?: 'ServiceGroupRulesAndRegulationsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceGroupRulesAndRegulationsLinks = {
  __typename?: 'ServiceGroupRulesAndRegulationsLinks';
  assets: ServiceGroupRulesAndRegulationsAssets;
  entries: ServiceGroupRulesAndRegulationsEntries;
};

export type ServiceGroupServiceEntriesCollection = {
  __typename?: 'ServiceGroupServiceEntriesCollection';
  items: Array<Maybe<ServiceEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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

export type CfCallToActionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCallToActionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCallToActionNestedFilter>>>;
  callToActionMessage?: InputMaybe<Scalars['String']>;
  callToActionMessage_contains?: InputMaybe<Scalars['String']>;
  callToActionMessage_exists?: InputMaybe<Scalars['Boolean']>;
  callToActionMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  callToActionMessage_not?: InputMaybe<Scalars['String']>;
  callToActionMessage_not_contains?: InputMaybe<Scalars['String']>;
  callToActionMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']>;
  ctaLink_contains?: InputMaybe<Scalars['String']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaName?: InputMaybe<Scalars['String']>;
  ctaName_contains?: InputMaybe<Scalars['String']>;
  ctaName_exists?: InputMaybe<Scalars['Boolean']>;
  ctaName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaName_not?: InputMaybe<Scalars['String']>;
  ctaName_not_contains?: InputMaybe<Scalars['String']>;
  ctaName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText?: InputMaybe<Scalars['String']>;
  linkText_contains?: InputMaybe<Scalars['String']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText_not?: InputMaybe<Scalars['String']>;
  linkText_not_contains?: InputMaybe<Scalars['String']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  categoryDescription?: InputMaybe<Scalars['String']>;
  categoryDescription_contains?: InputMaybe<Scalars['String']>;
  categoryDescription_exists?: InputMaybe<Scalars['Boolean']>;
  categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryDescription_not?: InputMaybe<Scalars['String']>;
  categoryDescription_not_contains?: InputMaybe<Scalars['String']>;
  categoryDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryName?: InputMaybe<Scalars['String']>;
  categoryName_contains?: InputMaybe<Scalars['String']>;
  categoryName_exists?: InputMaybe<Scalars['Boolean']>;
  categoryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryName_not?: InputMaybe<Scalars['String']>;
  categoryName_not_contains?: InputMaybe<Scalars['String']>;
  categoryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categorySynonyms_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkedSubcategoriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContactEntryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContactEntryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContactEntryNestedFilter>>>;
  city?: InputMaybe<Scalars['String']>;
  city_contains?: InputMaybe<Scalars['String']>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city_not?: InputMaybe<Scalars['String']>;
  city_not_contains?: InputMaybe<Scalars['String']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  nameAndNumberCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Scalars['String']>;
  state_contains?: InputMaybe<Scalars['String']>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_not?: InputMaybe<Scalars['String']>;
  state_not_contains?: InputMaybe<Scalars['String']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  streetAddress?: InputMaybe<Scalars['String']>;
  streetAddress_contains?: InputMaybe<Scalars['String']>;
  streetAddress_exists?: InputMaybe<Scalars['Boolean']>;
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  streetAddress_not?: InputMaybe<Scalars['String']>;
  streetAddress_not_contains?: InputMaybe<Scalars['String']>;
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  suiteFloorEtc?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_contains?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_exists?: InputMaybe<Scalars['Boolean']>;
  suiteFloorEtc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  suiteFloorEtc_not?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_not_contains?: InputMaybe<Scalars['String']>;
  suiteFloorEtc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  zipCode?: InputMaybe<Scalars['String']>;
  zipCode_contains?: InputMaybe<Scalars['String']>;
  zipCode_exists?: InputMaybe<Scalars['Boolean']>;
  zipCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zipCode_not?: InputMaybe<Scalars['String']>;
  zipCode_not_contains?: InputMaybe<Scalars['String']>;
  zipCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfDocumentWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfDocumentWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfDocumentWrapperNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  docWrapperName?: InputMaybe<Scalars['String']>;
  docWrapperName_contains?: InputMaybe<Scalars['String']>;
  docWrapperName_exists?: InputMaybe<Scalars['Boolean']>;
  docWrapperName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  docWrapperName_not?: InputMaybe<Scalars['String']>;
  docWrapperName_not_contains?: InputMaybe<Scalars['String']>;
  docWrapperName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  documentCategoryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  documentDescription?: InputMaybe<Scalars['String']>;
  documentDescription_contains?: InputMaybe<Scalars['String']>;
  documentDescription_exists?: InputMaybe<Scalars['Boolean']>;
  documentDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  documentDescription_not?: InputMaybe<Scalars['String']>;
  documentDescription_not_contains?: InputMaybe<Scalars['String']>;
  documentDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  wrappedDocumentName_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CfListWithTitleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfListWithTitleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfListWithTitleNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  listTitle?: InputMaybe<Scalars['String']>;
  listTitle_contains?: InputMaybe<Scalars['String']>;
  listTitle_exists?: InputMaybe<Scalars['Boolean']>;
  listTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listTitle_not?: InputMaybe<Scalars['String']>;
  listTitle_not_contains?: InputMaybe<Scalars['String']>;
  listTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraphOrList_contains?: InputMaybe<Scalars['String']>;
  paragraphOrList_exists?: InputMaybe<Scalars['Boolean']>;
  paragraphOrList_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaTitle_contains?: InputMaybe<Scalars['String']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type CfPhoneNumberNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPhoneNumberNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPhoneNumberNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  personWithPhoneNumber?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_contains?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  personWithPhoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  personWithPhoneNumber_not?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  personWithPhoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfServiceEntryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfServiceEntryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfServiceEntryNestedFilter>>>;
  applicationMethods?: InputMaybe<Scalars['String']>;
  applicationMethods_contains?: InputMaybe<Scalars['String']>;
  applicationMethods_exists?: InputMaybe<Scalars['Boolean']>;
  applicationMethods_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  applicationMethods_not?: InputMaybe<Scalars['String']>;
  applicationMethods_not_contains?: InputMaybe<Scalars['String']>;
  applicationMethods_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  applicationProcess_contains?: InputMaybe<Scalars['String']>;
  applicationProcess_exists?: InputMaybe<Scalars['Boolean']>;
  applicationProcess_not_contains?: InputMaybe<Scalars['String']>;
  contactInformationCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  entryTitle?: InputMaybe<Scalars['String']>;
  entryTitle_contains?: InputMaybe<Scalars['String']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedDocumentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  requirements_contains?: InputMaybe<Scalars['String']>;
  requirements_exists?: InputMaybe<Scalars['Boolean']>;
  requirements_not_contains?: InputMaybe<Scalars['String']>;
  serviceCategoryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  serviceCtaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  serviceDescriptionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  serviceSubhead_exists?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};
