export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: unknown; output: unknown; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: unknown; output: unknown; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: unknown; output: unknown; }
};

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
  heroImageCollection?: Maybe<HeroImageCollection>;
  imageWrapperCollection?: Maybe<ImageWrapperCollection>;
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
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsAdditionalInformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsContactBcArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsContactUsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsMeetingsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsMembershipArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsOverviewArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsSubHeadBcArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BoardsAndCommissionsAdditionalInformation = {
  __typename?: 'BoardsAndCommissionsAdditionalInformation';
  json: Scalars['JSON']['output'];
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BoardsAndCommissionsContactUs = {
  __typename?: 'BoardsAndCommissionsContactUs';
  json: Scalars['JSON']['output'];
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
  additionalInformation_contains?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  additionalInformation_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactBc?: InputMaybe<CfContactEntryNestedFilter>;
  contactBc_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactUs_contains?: InputMaybe<Scalars['String']['input']>;
  contactUs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactUs_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  meetings_contains?: InputMaybe<Scalars['String']['input']>;
  meetings_exists?: InputMaybe<Scalars['Boolean']['input']>;
  meetings_not_contains?: InputMaybe<Scalars['String']['input']>;
  membership_contains?: InputMaybe<Scalars['String']['input']>;
  membership_exists?: InputMaybe<Scalars['Boolean']['input']>;
  membership_not_contains?: InputMaybe<Scalars['String']['input']>;
  overview_contains?: InputMaybe<Scalars['String']['input']>;
  overview_exists?: InputMaybe<Scalars['Boolean']['input']>;
  overview_not_contains?: InputMaybe<Scalars['String']['input']>;
  subHeadBc?: InputMaybe<CfPageSubheaderNestedFilter>;
  subHeadBc_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
};

export type BoardsAndCommissionsLinkingCollections = {
  __typename?: 'BoardsAndCommissionsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BoardsAndCommissionsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BoardsAndCommissionsMeetings = {
  __typename?: 'BoardsAndCommissionsMeetings';
  json: Scalars['JSON']['output'];
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
  json: Scalars['JSON']['output'];
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
  json: Scalars['JSON']['output'];
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
  summaryText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Short summary of the page topic. Appears in the first paragraph [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/briefSummary) */
export type BriefSummaryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Short summary of the page topic. Appears in the first paragraph [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/briefSummary) */
export type BriefSummarySummaryTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BriefSummaryCollection = {
  __typename?: 'BriefSummaryCollection';
  items: Array<Maybe<BriefSummary>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BriefSummaryFilter = {
  AND?: InputMaybe<Array<InputMaybe<BriefSummaryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BriefSummaryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  summaryText?: InputMaybe<Scalars['String']['input']>;
  summaryText_contains?: InputMaybe<Scalars['String']['input']>;
  summaryText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  summaryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summaryText_not?: InputMaybe<Scalars['String']['input']>;
  summaryText_not_contains?: InputMaybe<Scalars['String']['input']>;
  summaryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BriefSummaryLinkingCollections = {
  __typename?: 'BriefSummaryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BriefSummaryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** a bulleted list of things [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/bulletedList) */
export type BulletedListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BulletedListBulletListContent = {
  __typename?: 'BulletedListBulletListContent';
  json: Scalars['JSON']['output'];
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BulletedListFilter = {
  AND?: InputMaybe<Array<InputMaybe<BulletedListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BulletedListFilter>>>;
  bulletListContent_contains?: InputMaybe<Scalars['String']['input']>;
  bulletListContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bulletListContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type BulletedListLinkingCollections = {
  __typename?: 'BulletedListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BulletedListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  callToActionMessage?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaLink?: Maybe<Scalars['String']['output']>;
  ctaName?: Maybe<Scalars['String']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CallToActionLinkingCollections>;
  sys: Sys;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCallToActionMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCtaNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  callToActionMessage?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_contains?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToActionMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  callToActionMessage_not?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaName?: InputMaybe<Scalars['String']['input']>;
  ctaName_contains?: InputMaybe<Scalars['String']['input']>;
  ctaName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaName_not?: InputMaybe<Scalars['String']['input']>;
  ctaName_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CallToActionLinkingCollections = {
  __typename?: 'CallToActionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type CallToActionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CallToActionLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  categoryDescription?: Maybe<Scalars['String']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  categorySynonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  linkedSubcategoriesCollection?: Maybe<CategoryLinkedSubcategoriesCollection>;
  sys: Sys;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryCategoryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryCategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryCategorySynonymsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The taxonomic classification of this piece of content [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/category) */
export type CategoryLinkedSubcategoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  categoryDescription?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_contains?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryDescription_not?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryName_contains?: InputMaybe<Scalars['String']['input']>;
  categoryName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categoryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryName_not?: InputMaybe<Scalars['String']['input']>;
  categoryName_not_contains?: InputMaybe<Scalars['String']['input']>;
  categoryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkedSubcategories?: InputMaybe<CfCategoryNestedFilter>;
  linkedSubcategoriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CategoryLinkedSubcategoriesCollection = {
  __typename?: 'CategoryLinkedSubcategoriesCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  categoryCollection?: Maybe<CategoryCollection>;
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventEntryCollection?: Maybe<EventEntryCollection>;
  imageWrapperCollection?: Maybe<ImageWrapperCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type CategoryLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsDocumentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsEventEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsImageWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  city?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContactEntryLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  nameAndNumberCollection?: Maybe<ContactEntryNameAndNumberCollection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suiteFloorEtc?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  zipCode?: Maybe<Scalars['String']['output']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryNameAndNumberCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryStateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryStreetAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntrySuiteFloorEtcArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contact information for any office, program, board or commission at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contactEntry) */
export type ContactEntryZipCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContactEntryCollection = {
  __typename?: 'ContactEntryCollection';
  items: Array<Maybe<ContactEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContactEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactEntryFilter>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAndNumber?: InputMaybe<CfPhoneNumberNestedFilter>;
  nameAndNumberCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_contains?: InputMaybe<Scalars['String']['input']>;
  state_exists?: InputMaybe<Scalars['Boolean']['input']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state_not?: InputMaybe<Scalars['String']['input']>;
  state_not_contains?: InputMaybe<Scalars['String']['input']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  streetAddress_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suiteFloorEtc?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_contains?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_exists?: InputMaybe<Scalars['Boolean']['input']>;
  suiteFloorEtc_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suiteFloorEtc_not?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_not_contains?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_contains?: InputMaybe<Scalars['String']['input']>;
  zipCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  zipCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zipCode_not?: InputMaybe<Scalars['String']['input']>;
  zipCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  zipCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactEntryLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactEntryLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactEntryLinkingCollectionsServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactEntryNameAndNumberCollection = {
  __typename?: 'ContactEntryNameAndNumberCollection';
  items: Array<Maybe<PhoneNumber>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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
  headlineText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentBlockHeaderLinkingCollections>;
  sys: Sys;
};


/** Headline for block-level content, such as paragraphs, tables or cards within the body of the page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contentBlockHeader) */
export type ContentBlockHeaderHeadlineTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Headline for block-level content, such as paragraphs, tables or cards within the body of the page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contentBlockHeader) */
export type ContentBlockHeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlockHeaderCollection = {
  __typename?: 'ContentBlockHeaderCollection';
  items: Array<Maybe<ContentBlockHeader>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentBlockHeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlockHeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlockHeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headlineText?: InputMaybe<Scalars['String']['input']>;
  headlineText_contains?: InputMaybe<Scalars['String']['input']>;
  headlineText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineText_not?: InputMaybe<Scalars['String']['input']>;
  headlineText_not_contains?: InputMaybe<Scalars['String']['input']>;
  headlineText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentBlockHeaderLinkingCollections = {
  __typename?: 'ContentBlockHeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContentBlockHeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** "Wrapper" for embedding PDFs, MS Word Docs, spreadsheets and other non-visual, non-web document types. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/documentWrapper) */
export type DocumentWrapper = Entry & {
  __typename?: 'DocumentWrapper';
  contentfulMetadata: ContentfulMetadata;
  docWrapperName?: Maybe<Scalars['String']['output']>;
  documentCategoryCollection?: Maybe<DocumentWrapperDocumentCategoryCollection>;
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
export type DocumentWrapperDocumentCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

export type DocumentWrapperDocumentCategoryCollection = {
  __typename?: 'DocumentWrapperDocumentCategoryCollection';
  items: Array<Maybe<Category>>;
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
  documentCategory?: InputMaybe<CfCategoryNestedFilter>;
  documentCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
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
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentWrapperLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DraftNavigationLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** A draft of how we will structure navigation menus that can appear either as the main menu in the header, a submenu under the main menu in the header, or a section sidebar. Should accept a list of references to either navigation links or child navigation menus. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationMenu) */
export type DraftNavigationMenuChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DraftNavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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

/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntry = Entry & {
  __typename?: 'EventEntry';
  contentfulMetadata: ContentfulMetadata;
  eventCategoryCollection?: Maybe<EventEntryEventCategoryCollection>;
  eventDateAndTime?: Maybe<Scalars['DateTime']['output']>;
  eventDescription?: Maybe<Scalars['String']['output']>;
  eventDocumentsCollection?: Maybe<EventEntryEventDocumentsCollection>;
  inPersonOrOnline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EventEntryLinkingCollections>;
  shortTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventDateAndTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventDocumentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryInPersonOrOnlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Consistent format for adding events to the system [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryShortTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EventEntryCollection = {
  __typename?: 'EventEntryCollection';
  items: Array<Maybe<EventEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventEntryEventCategoryCollection = {
  __typename?: 'EventEntryEventCategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventEntryEventDocumentsCollection = {
  __typename?: 'EventEntryEventDocumentsCollection';
  items: Array<Maybe<DocumentWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventEntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventCategory?: InputMaybe<CfCategoryNestedFilter>;
  eventCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  eventDocuments?: InputMaybe<CfDocumentWrapperNestedFilter>;
  eventDocumentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  inPersonOrOnline?: InputMaybe<Scalars['String']['input']>;
  inPersonOrOnline_contains?: InputMaybe<Scalars['String']['input']>;
  inPersonOrOnline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  inPersonOrOnline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  inPersonOrOnline_not?: InputMaybe<Scalars['String']['input']>;
  inPersonOrOnline_not_contains?: InputMaybe<Scalars['String']['input']>;
  inPersonOrOnline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  sys?: InputMaybe<SysFilter>;
};

export type EventEntryLinkingCollections = {
  __typename?: 'EventEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EventEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EventEntryOrder {
  EventDateAndTimeAsc = 'eventDateAndTime_ASC',
  EventDateAndTimeDesc = 'eventDateAndTime_DESC',
  EventDescriptionAsc = 'eventDescription_ASC',
  EventDescriptionDesc = 'eventDescription_DESC',
  InPersonOrOnlineAsc = 'inPersonOrOnline_ASC',
  InPersonOrOnlineDesc = 'inPersonOrOnline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTitleAsc = 'shortTitle_ASC',
  ShortTitleDesc = 'shortTitle_DESC',
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
  headlineText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeadlineLinkingCollections>;
  sys: Sys;
};


/** Large (h1) headline on top of web page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/headline) */
export type HeadlineHeadlineTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Large (h1) headline on top of web page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/headline) */
export type HeadlineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeadlineCollection = {
  __typename?: 'HeadlineCollection';
  items: Array<Maybe<Headline>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeadlineFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headlineText?: InputMaybe<Scalars['String']['input']>;
  headlineText_contains?: InputMaybe<Scalars['String']['input']>;
  headlineText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineText_not?: InputMaybe<Scalars['String']['input']>;
  headlineText_not_contains?: InputMaybe<Scalars['String']['input']>;
  headlineText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HeadlineLinkingCollections = {
  __typename?: 'HeadlineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeadlineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  altField?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fotogCredit?: Maybe<Scalars['String']['output']>;
  imageSource?: Maybe<Asset>;
  imageTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeroImageLinkingCollections>;
  sys: Sys;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageAltFieldArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageFotogCreditArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageImageSourceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
export type HeroImageImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Big wide image on top of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
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
};


export type HeroImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
export type ImageWrapper = Entry & {
  __typename?: 'ImageWrapper';
  altText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  imageCategory?: Maybe<Category>;
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
export type ImageWrapperImageCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
  imageCategory?: InputMaybe<CfCategoryNestedFilter>;
  imageCategory_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
};


export type ImageWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

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

/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitle = Entry & {
  __typename?: 'ListWithTitle';
  contentfulMetadata: ContentfulMetadata;
  dropdownChoices?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ListWithTitleLinkingCollections>;
  paragraphOrList?: Maybe<ListWithTitleParagraphOrList>;
  sys: Sys;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleDropdownChoicesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleParagraphOrListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ListWithTitleCollection = {
  __typename?: 'ListWithTitleCollection';
  items: Array<Maybe<ListWithTitle>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ListWithTitleFilter = {
  AND?: InputMaybe<Array<InputMaybe<ListWithTitleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ListWithTitleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dropdownChoices?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_contains?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dropdownChoices_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dropdownChoices_not?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_not_contains?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphOrList_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphOrList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphOrList_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ListWithTitleLinkingCollections = {
  __typename?: 'ListWithTitleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type ListWithTitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ListWithTitleLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ListWithTitleOrder {
  DropdownChoicesAsc = 'dropdownChoices_ASC',
  DropdownChoicesDesc = 'dropdownChoices_DESC',
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

export type ListWithTitleParagraphOrList = {
  __typename?: 'ListWithTitleParagraphOrList';
  json: Scalars['JSON']['output'];
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
  officePageTitle?: Maybe<Scalars['String']['output']>;
  servicesAndPrograms?: Maybe<OfficePageServicesAndPrograms>;
  subheader?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageContactInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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
export type OfficePageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageOfficePageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageServicesAndProgramsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePageSubheaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OfficePageCollection = {
  __typename?: 'OfficePageCollection';
  items: Array<Maybe<OfficePage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

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
};

export type OfficePageFilter = {
  AND?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OfficePageFilter>>>;
  contactInfo?: InputMaybe<CfContactEntryNestedFilter>;
  contactInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<CfPageMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  officePageTitle?: InputMaybe<Scalars['String']['input']>;
  officePageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  officePageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  officePageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  officePageTitle_not?: InputMaybe<Scalars['String']['input']>;
  officePageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  officePageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  servicesAndPrograms_contains?: InputMaybe<Scalars['String']['input']>;
  servicesAndPrograms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  servicesAndPrograms_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheader?: InputMaybe<Scalars['String']['input']>;
  subheader_contains?: InputMaybe<Scalars['String']['input']>;
  subheader_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheader_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheader_not?: InputMaybe<Scalars['String']['input']>;
  subheader_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheader_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
};

/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionName = Entry & {
  __typename?: 'OrganizationalSectionName';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<OrganizationalSectionNameLinkingCollections>;
  officeEmail?: Maybe<Scalars['String']['output']>;
  sectionName?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionNameLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionNameOfficeEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the name of the office, division, program, board or commission as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/organizationalSectionName) */
export type OrganizationalSectionNameSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationalSectionNameCollection = {
  __typename?: 'OrganizationalSectionNameCollection';
  items: Array<Maybe<OrganizationalSectionName>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OrganizationalSectionNameFilter = {
  AND?: InputMaybe<Array<InputMaybe<OrganizationalSectionNameFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OrganizationalSectionNameFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  officeEmail?: InputMaybe<Scalars['String']['input']>;
  officeEmail_contains?: InputMaybe<Scalars['String']['input']>;
  officeEmail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  officeEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  officeEmail_not?: InputMaybe<Scalars['String']['input']>;
  officeEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  officeEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  sectionName_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName_not?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type OrganizationalSectionNameLinkingCollections = {
  __typename?: 'OrganizationalSectionNameLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type OrganizationalSectionNameLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageMetadataLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataSlugArgs = {
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
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageMetadataLinkingCollections = {
  __typename?: 'PageMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
};


export type PageMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMetadataLinkingCollectionsOfficePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  headlineText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageSectionHeadlineLinkingCollections>;
  sys: Sys;
};


/** Headline for content sections within body of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSectionHeadline) */
export type PageSectionHeadlineHeadlineTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Headline for content sections within body of page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSectionHeadline) */
export type PageSectionHeadlineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageSectionHeadlineCollection = {
  __typename?: 'PageSectionHeadlineCollection';
  items: Array<Maybe<PageSectionHeadline>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageSectionHeadlineFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionHeadlineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionHeadlineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headlineText?: InputMaybe<Scalars['String']['input']>;
  headlineText_contains?: InputMaybe<Scalars['String']['input']>;
  headlineText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineText_not?: InputMaybe<Scalars['String']['input']>;
  headlineText_not_contains?: InputMaybe<Scalars['String']['input']>;
  headlineText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionHeadlineLinkingCollections = {
  __typename?: 'PageSectionHeadlineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageSectionHeadlineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  subheadText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Short, descriptive subheading beneath page title [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSubheader) */
export type PageSubheaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Short, descriptive subheading beneath page title [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageSubheader) */
export type PageSubheaderSubheadTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageSubheaderCollection = {
  __typename?: 'PageSubheaderCollection';
  items: Array<Maybe<PageSubheader>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageSubheaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSubheaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSubheaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subheadText?: InputMaybe<Scalars['String']['input']>;
  subheadText_contains?: InputMaybe<Scalars['String']['input']>;
  subheadText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheadText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheadText_not?: InputMaybe<Scalars['String']['input']>;
  subheadText_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheadText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSubheaderLinkingCollections = {
  __typename?: 'PageSubheaderLinkingCollections';
  boardsAndCommissionsCollection?: Maybe<BoardsAndCommissionsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
};


export type PageSubheaderLinkingCollectionsBoardsAndCommissionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSubheaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSubheaderLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  personWithPhoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** The phone number of any office, program, board, commission or individual at LDAF [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/phoneNumber) */
export type PhoneNumberLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The phone number of any office, program, board, commission or individual at LDAF [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/phoneNumber) */
export type PhoneNumberPersonWithPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The phone number of any office, program, board, commission or individual at LDAF [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/phoneNumber) */
export type PhoneNumberPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PhoneNumberCollection = {
  __typename?: 'PhoneNumberCollection';
  items: Array<Maybe<PhoneNumber>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PhoneNumberFilter = {
  AND?: InputMaybe<Array<InputMaybe<PhoneNumberFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PhoneNumberFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  personWithPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  personWithPhoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personWithPhoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PhoneNumberLinkingCollections = {
  __typename?: 'PhoneNumberLinkingCollections';
  contactEntryCollection?: Maybe<ContactEntryCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PhoneNumberLinkingCollectionsContactEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PhoneNumberLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  programEmail?: Maybe<Scalars['String']['output']>;
  sectionName?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** This is the official name of the LDAF program  as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/programName) */
export type ProgramNameLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the official name of the LDAF program  as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/programName) */
export type ProgramNameProgramEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the official name of the LDAF program  as it's listed in the org chart [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/programName) */
export type ProgramNameSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProgramNameCollection = {
  __typename?: 'ProgramNameCollection';
  items: Array<Maybe<ProgramName>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProgramNameFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProgramNameFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProgramNameFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  programEmail?: InputMaybe<Scalars['String']['input']>;
  programEmail_contains?: InputMaybe<Scalars['String']['input']>;
  programEmail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  programEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  programEmail_not?: InputMaybe<Scalars['String']['input']>;
  programEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  programEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  sectionName_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName_not?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ProgramNameLinkingCollections = {
  __typename?: 'ProgramNameLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProgramNameLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  eventEntry?: Maybe<EventEntry>;
  eventEntryCollection?: Maybe<EventEntryCollection>;
  headline?: Maybe<Headline>;
  headlineCollection?: Maybe<HeadlineCollection>;
  heroImage?: Maybe<HeroImage>;
  heroImageCollection?: Maybe<HeroImageCollection>;
  imageWrapper?: Maybe<ImageWrapper>;
  imageWrapperCollection?: Maybe<ImageWrapperCollection>;
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


export type QueryBoardsAndCommissionsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBoardsAndCommissionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BoardsAndCommissionsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BoardsAndCommissionsFilter>;
};


export type QueryBriefSummaryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBriefSummaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BriefSummaryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BriefSummaryFilter>;
};


export type QueryBulletedListArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBulletedListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BulletedListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BulletedListFilter>;
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


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


export type QueryContactEntryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactEntryFilter>;
};


export type QueryContentBlockHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentBlockHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlockHeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentBlockHeaderFilter>;
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


export type QueryHeadlineArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeadlineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadlineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeadlineFilter>;
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


export type QueryListWithTitleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryListWithTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ListWithTitleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ListWithTitleFilter>;
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


export type QueryOrganizationalSectionNameArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrganizationalSectionNameCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OrganizationalSectionNameOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrganizationalSectionNameFilter>;
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


export type QueryPageSectionHeadlineArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageSectionHeadlineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionHeadlineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSectionHeadlineFilter>;
};


export type QueryPageSubheaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageSubheaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSubheaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSubheaderFilter>;
};


export type QueryPhoneNumberArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPhoneNumberCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PhoneNumberOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PhoneNumberFilter>;
};


export type QueryProgramNameArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProgramNameCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProgramNameOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProgramNameFilter>;
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


export type QueryServiceEntryFieldLabelArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServiceEntryFieldLabelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryFieldLabelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryFieldLabelFilter>;
};


export type QueryServiceEntryFieldSetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServiceEntryFieldSetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryFieldSetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryFieldSetFilter>;
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

/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntry = Entry & {
  __typename?: 'ServiceEntry';
  applicationMethods?: Maybe<Scalars['String']['output']>;
  applicationProcess?: Maybe<ServiceEntryApplicationProcess>;
  contactInformationCollection?: Maybe<ServiceEntryContactInformationCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceEntryDescription>;
  entryTitle?: Maybe<Scalars['String']['output']>;
  linkedDocumentCollection?: Maybe<ServiceEntryLinkedDocumentCollection>;
  linkedFrom?: Maybe<ServiceEntryLinkingCollections>;
  requirements?: Maybe<ServiceEntryRequirements>;
  serviceCategoryCollection?: Maybe<ServiceEntryServiceCategoryCollection>;
  serviceCtaCollection?: Maybe<ServiceEntryServiceCtaCollection>;
  serviceDescriptionsCollection?: Maybe<ServiceEntryServiceDescriptionsCollection>;
  serviceSubhead?: Maybe<PageSubheader>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryApplicationMethodsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryApplicationProcessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryContactInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryLinkedDocumentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryRequirementsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceDescriptionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceSubheadArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Description of a program's task-related service [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntrySubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceEntryApplicationProcess = {
  __typename?: 'ServiceEntryApplicationProcess';
  json: Scalars['JSON']['output'];
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceEntryContactInformationCollection = {
  __typename?: 'ServiceEntryContactInformationCollection';
  items: Array<Maybe<ContactEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

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
};

/** Describes the kind of information you are supplying in the accompanying service info field [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldLabel) */
export type ServiceEntryFieldLabel = Entry & {
  __typename?: 'ServiceEntryFieldLabel';
  contentfulMetadata: ContentfulMetadata;
  fieldLabel?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<ServiceEntryFieldLabelLinkingCollections>;
  sys: Sys;
};


/** Describes the kind of information you are supplying in the accompanying service info field [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldLabel) */
export type ServiceEntryFieldLabelFieldLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Describes the kind of information you are supplying in the accompanying service info field [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldLabel) */
export type ServiceEntryFieldLabelLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceEntryFieldLabelCollection = {
  __typename?: 'ServiceEntryFieldLabelCollection';
  items: Array<Maybe<ServiceEntryFieldLabel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceEntryFieldLabelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceEntryFieldLabelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceEntryFieldLabelFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fieldLabel_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldLabel_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldLabel_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryFieldLabelLinkingCollections = {
  __typename?: 'ServiceEntryFieldLabelLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceEntryFieldLabelLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  serviceEntryFieldName?: Maybe<Scalars['String']['output']>;
  serviceFieldInput?: Maybe<ServiceEntryFieldSetServiceFieldInput>;
  serviceInfoType?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetServiceEntryFieldNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetServiceFieldInputArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Labeled fields and rich text to describe requirements, steps etc in a service etry [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryFieldSet) */
export type ServiceEntryFieldSetServiceInfoTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceEntryFieldSetCollection = {
  __typename?: 'ServiceEntryFieldSetCollection';
  items: Array<Maybe<ServiceEntryFieldSet>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceEntryFieldSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceEntryFieldSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceEntryFieldSetFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  serviceEntryFieldName?: InputMaybe<Scalars['String']['input']>;
  serviceEntryFieldName_contains?: InputMaybe<Scalars['String']['input']>;
  serviceEntryFieldName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceEntryFieldName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceEntryFieldName_not?: InputMaybe<Scalars['String']['input']>;
  serviceEntryFieldName_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceEntryFieldName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceFieldInput_contains?: InputMaybe<Scalars['String']['input']>;
  serviceFieldInput_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceFieldInput_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceInfoType?: InputMaybe<Scalars['String']['input']>;
  serviceInfoType_contains?: InputMaybe<Scalars['String']['input']>;
  serviceInfoType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceInfoType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceInfoType_not?: InputMaybe<Scalars['String']['input']>;
  serviceInfoType_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceInfoType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryFieldSetLinkingCollections = {
  __typename?: 'ServiceEntryFieldSetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceEntryFieldSetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  json: Scalars['JSON']['output'];
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
  applicationMethods?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_contains?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_exists?: InputMaybe<Scalars['Boolean']['input']>;
  applicationMethods_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  applicationMethods_not?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_not_contains?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  applicationProcess_contains?: InputMaybe<Scalars['String']['input']>;
  applicationProcess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  applicationProcess_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactInformation?: InputMaybe<CfContactEntryNestedFilter>;
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
  linkedDocument?: InputMaybe<CfDocumentWrapperNestedFilter>;
  linkedDocumentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  requirements_contains?: InputMaybe<Scalars['String']['input']>;
  requirements_exists?: InputMaybe<Scalars['Boolean']['input']>;
  requirements_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceCategory?: InputMaybe<CfCategoryNestedFilter>;
  serviceCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceCta?: InputMaybe<CfCallToActionNestedFilter>;
  serviceCtaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceDescriptions?: InputMaybe<CfListWithTitleNestedFilter>;
  serviceDescriptionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceSubhead?: InputMaybe<CfPageSubheaderNestedFilter>;
  serviceSubhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryLinkedDocumentCollection = {
  __typename?: 'ServiceEntryLinkedDocumentCollection';
  items: Array<Maybe<DocumentWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  json: Scalars['JSON']['output'];
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceEntryServiceCtaCollection = {
  __typename?: 'ServiceEntryServiceCtaCollection';
  items: Array<Maybe<CallToAction>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceEntryServiceDescriptionsCollection = {
  __typename?: 'ServiceEntryServiceDescriptionsCollection';
  items: Array<Maybe<ListWithTitle>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupAdditionalResourcesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupContactInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupRulesAndRegulationsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupServiceEntriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contains a group of related service entries [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceGroup) */
export type ServiceGroupTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  items: Array<Maybe<ContactEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

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
};

export type ServiceGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceGroupFilter>>>;
  additionalResources_contains?: InputMaybe<Scalars['String']['input']>;
  additionalResources_exists?: InputMaybe<Scalars['Boolean']['input']>;
  additionalResources_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactInfo?: InputMaybe<CfContactEntryNestedFilter>;
  contactInfoCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  rulesAndRegulations_contains?: InputMaybe<Scalars['String']['input']>;
  rulesAndRegulations_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rulesAndRegulations_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceEntries?: InputMaybe<CfServiceEntryNestedFilter>;
  serviceEntriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
};

export type ServiceGroupLinkingCollections = {
  __typename?: 'ServiceGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  json: Scalars['JSON']['output'];
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
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
export type TestRichText = Entry & {
  __typename?: 'TestRichText';
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

export type CfCallToActionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCallToActionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCallToActionNestedFilter>>>;
  callToActionMessage?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_contains?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToActionMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  callToActionMessage_not?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  callToActionMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaName?: InputMaybe<Scalars['String']['input']>;
  ctaName_contains?: InputMaybe<Scalars['String']['input']>;
  ctaName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaName_not?: InputMaybe<Scalars['String']['input']>;
  ctaName_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  categoryDescription?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_contains?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryDescription_not?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  categoryDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryName_contains?: InputMaybe<Scalars['String']['input']>;
  categoryName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categoryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryName_not?: InputMaybe<Scalars['String']['input']>;
  categoryName_not_contains?: InputMaybe<Scalars['String']['input']>;
  categoryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categorySynonyms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkedSubcategoriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContactEntryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContactEntryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContactEntryNestedFilter>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAndNumberCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_contains?: InputMaybe<Scalars['String']['input']>;
  state_exists?: InputMaybe<Scalars['Boolean']['input']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state_not?: InputMaybe<Scalars['String']['input']>;
  state_not_contains?: InputMaybe<Scalars['String']['input']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  streetAddress_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  streetAddress_not?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suiteFloorEtc?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_contains?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_exists?: InputMaybe<Scalars['Boolean']['input']>;
  suiteFloorEtc_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suiteFloorEtc_not?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_not_contains?: InputMaybe<Scalars['String']['input']>;
  suiteFloorEtc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_contains?: InputMaybe<Scalars['String']['input']>;
  zipCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  zipCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zipCode_not?: InputMaybe<Scalars['String']['input']>;
  zipCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  zipCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfDocumentWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfDocumentWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfDocumentWrapperNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  docWrapperName?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_contains?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  docWrapperName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  docWrapperName_not?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_not_contains?: InputMaybe<Scalars['String']['input']>;
  docWrapperName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  documentCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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

export type CfListWithTitleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfListWithTitleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfListWithTitleNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dropdownChoices?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_contains?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dropdownChoices_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dropdownChoices_not?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_not_contains?: InputMaybe<Scalars['String']['input']>;
  dropdownChoices_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphOrList_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphOrList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphOrList_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageSubheaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageSubheaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageSubheaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subheadText?: InputMaybe<Scalars['String']['input']>;
  subheadText_contains?: InputMaybe<Scalars['String']['input']>;
  subheadText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheadText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheadText_not?: InputMaybe<Scalars['String']['input']>;
  subheadText_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheadText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPhoneNumberNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPhoneNumberNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPhoneNumberNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  personWithPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  personWithPhoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personWithPhoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  personWithPhoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfServiceEntryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfServiceEntryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfServiceEntryNestedFilter>>>;
  applicationMethods?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_contains?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_exists?: InputMaybe<Scalars['Boolean']['input']>;
  applicationMethods_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  applicationMethods_not?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_not_contains?: InputMaybe<Scalars['String']['input']>;
  applicationMethods_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  applicationProcess_contains?: InputMaybe<Scalars['String']['input']>;
  applicationProcess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  applicationProcess_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  linkedDocumentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  requirements_contains?: InputMaybe<Scalars['String']['input']>;
  requirements_exists?: InputMaybe<Scalars['Boolean']['input']>;
  requirements_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceCtaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceDescriptionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceSubhead_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};
