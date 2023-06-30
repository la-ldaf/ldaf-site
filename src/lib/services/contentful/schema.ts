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
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsDocumentWrapperCollectionOrder>>>;
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
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsHeroImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsImageWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsImageWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTestRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsTestRichTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsDocumentWrapperCollectionOrder {
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

export enum AssetLinkingCollectionsHeroImageCollectionOrder {
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

export enum AssetLinkingCollectionsImageWrapperCollectionOrder {
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

export enum AssetLinkingCollectionsTestRichTextCollectionOrder {
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
  contactCollection?: Maybe<BoardsAndCommissionsContactCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BoardsAndCommissionsLinkingCollections>;
  meetings?: Maybe<BoardsAndCommissionsMeetings>;
  membership?: Maybe<BoardsAndCommissionsMembership>;
  overview?: Maybe<BoardsAndCommissionsOverview>;
  pageMetadata?: Maybe<PageMetadata>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsAdditionalInformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Overview pages for Boards, Commissions, Councils, and Task Forces. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/boardsAndCommissions) */
export type BoardsAndCommissionsContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BoardsAndCommissionsContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
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
export type BoardsAndCommissionsPageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
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
  resources: BoardsAndCommissionsAdditionalInformationResources;
};

export type BoardsAndCommissionsAdditionalInformationResources = {
  __typename?: 'BoardsAndCommissionsAdditionalInformationResources';
  block: Array<ResourceLink>;
};

export type BoardsAndCommissionsCollection = {
  __typename?: 'BoardsAndCommissionsCollection';
  items: Array<Maybe<BoardsAndCommissions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BoardsAndCommissionsContactCollection = {
  __typename?: 'BoardsAndCommissionsContactCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BoardsAndCommissionsContactCollectionOrder {
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

export type BoardsAndCommissionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BoardsAndCommissionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BoardsAndCommissionsFilter>>>;
  additionalInformation_contains?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  additionalInformation_not_contains?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<CfContactNestedFilter>;
  contactCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  pageMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  resources: BoardsAndCommissionsMeetingsResources;
};

export type BoardsAndCommissionsMeetingsResources = {
  __typename?: 'BoardsAndCommissionsMeetingsResources';
  block: Array<ResourceLink>;
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
  resources: BoardsAndCommissionsMembershipResources;
};

export type BoardsAndCommissionsMembershipResources = {
  __typename?: 'BoardsAndCommissionsMembershipResources';
  block: Array<ResourceLink>;
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
  resources: BoardsAndCommissionsOverviewResources;
};

export type BoardsAndCommissionsOverviewResources = {
  __typename?: 'BoardsAndCommissionsOverviewResources';
  block: Array<ResourceLink>;
};

/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToAction = Entry & {
  __typename?: 'CallToAction';
  callToActionDestination?: Maybe<CallToActionCallToActionDestination>;
  contentfulMetadata: ContentfulMetadata;
  ctaInternalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CallToActionLinkingCollections>;
  sys: Sys;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCallToActionDestinationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
export type CallToActionCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Button or link to landing page with URL and description [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/callToAction) */
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
  block: Array<ResourceLink>;
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
  order?: InputMaybe<Array<InputMaybe<CategoryLinkedSubcategoriesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
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

export enum CategoryLinkedSubcategoriesCollectionOrder {
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

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  categoryCollection?: Maybe<CategoryCollection>;
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventEntryCollection?: Maybe<EventEntryCollection>;
  imageWrapperCollection?: Maybe<ImageWrapperCollection>;
  promoBannerWithCtaCollection?: Maybe<PromoBannerWithCtaCollection>;
  videoWrapperCollection?: Maybe<VideoWrapperCollection>;
};


export type CategoryLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsDocumentWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsDocumentWrapperCollectionOrder>>>;
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
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsEventEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsImageWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsImageWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsPromoBannerWithCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsPromoBannerWithCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsVideoWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsVideoWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CategoryLinkingCollectionsCategoryCollectionOrder {
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

export enum CategoryLinkingCollectionsDocumentWrapperCollectionOrder {
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

export enum CategoryLinkingCollectionsEventEntryCollectionOrder {
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

export enum CategoryLinkingCollectionsImageWrapperCollectionOrder {
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

export enum CategoryLinkingCollectionsPromoBannerWithCtaCollectionOrder {
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

export enum CategoryLinkingCollectionsVideoWrapperCollectionOrder {
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

/** The name, phone number, and/or email of any person, office, or program at LDAF. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/contact) */
export type Contact = Entry & {
  __typename?: 'Contact';
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  entityName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContactLinkingCollections>;
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
  boardsAndCommissionsCollection?: Maybe<BoardsAndCommissionsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
};


export type ContactLinkingCollectionsBoardsAndCommissionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsBoardsAndCommissionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
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

export enum ContactLinkingCollectionsBoardsAndCommissionsCollectionOrder {
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

export enum ContactLinkingCollectionsServiceEntryCollectionOrder {
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

export enum ContactLinkingCollectionsServiceGroupCollectionOrder {
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
export type ContentTypeLocation = Entry & {
  __typename?: 'ContentTypeLocation';
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
  entryCollection?: Maybe<EntryCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
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
  order?: InputMaybe<Array<InputMaybe<DocumentWrapperDocumentCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
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

export enum DocumentWrapperDocumentCategoryCollectionOrder {
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
  order?: InputMaybe<Array<InputMaybe<DocumentWrapperLinkingCollectionsEventEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentWrapperLinkingCollectionsServiceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DocumentWrapperLinkingCollectionsServiceEntryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DocumentWrapperLinkingCollectionsEventEntryCollectionOrder {
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

export enum DocumentWrapperLinkingCollectionsServiceEntryCollectionOrder {
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

/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLinkOrDraftNavigationMenu) */
export type DraftNavigationLinkOrDraftNavigationMenu = Entry & {
  __typename?: 'DraftNavigationLinkOrDraftNavigationMenu';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DraftNavigationLinkOrDraftNavigationMenuLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLinkOrDraftNavigationMenu) */
export type DraftNavigationLinkOrDraftNavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/draftNavigationLinkOrDraftNavigationMenu) */
export type DraftNavigationLinkOrDraftNavigationMenuTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DraftNavigationLinkOrDraftNavigationMenuCollection = {
  __typename?: 'DraftNavigationLinkOrDraftNavigationMenuCollection';
  items: Array<Maybe<DraftNavigationLinkOrDraftNavigationMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DraftNavigationLinkOrDraftNavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<DraftNavigationLinkOrDraftNavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DraftNavigationLinkOrDraftNavigationMenuFilter>>>;
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

export type DraftNavigationLinkOrDraftNavigationMenuLinkingCollections = {
  __typename?: 'DraftNavigationLinkOrDraftNavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type DraftNavigationLinkOrDraftNavigationMenuLinkingCollectionsEntryCollectionArgs = {
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
  where?: InputMaybe<DraftNavigationLinkOrDraftNavigationMenuFilter>;
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
  children?: InputMaybe<CfDraftNavigationLinkOrDraftNavigationMenuNestedFilter>;
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

/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
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


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryEventCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventEntryEventCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
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
  order?: InputMaybe<Array<InputMaybe<EventEntryEventDocumentsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DocumentWrapperFilter>;
};


/** LDAF events such as board meetings, saddle microchipping events, etc. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/eventEntry) */
export type EventEntryInPersonOrOnlineArgs = {
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

export enum EventEntryEventCategoryCollectionOrder {
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

export type EventEntryEventDocumentsCollection = {
  __typename?: 'EventEntryEventDocumentsCollection';
  items: Array<Maybe<DocumentWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventEntryEventDocumentsCollectionOrder {
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

/** Big wide image intended for the top of a page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/heroImage) */
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
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type HeroImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
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

export enum HeroImageLinkingCollectionsServiceGroupCollectionOrder {
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
export type Home = Entry & {
  __typename?: 'Home';
  alertMessage?: Maybe<HomeAlertMessage>;
  alertTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  featuredServiceCardsCollection?: Maybe<HomeFeaturedServiceCardsCollection>;
  heroVideo?: Maybe<VideoWrapper>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  metadata?: Maybe<PageMetadata>;
  popularResourcesListCollection?: Maybe<HomePopularResourcesListCollection>;
  promotionalCardsCollection?: Maybe<HomePromotionalCardsCollection>;
  sys: Sys;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeAlertMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeAlertTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomeFeaturedServiceCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryOrServiceGroupFilter>;
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
export type HomeMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** The home page for the ldaf.la.gov website [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/home) */
export type HomePopularResourcesListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryOrServiceGroupFilter>;
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

export type HomeAlertMessage = {
  __typename?: 'HomeAlertMessage';
  json: Scalars['JSON']['output'];
  links: HomeAlertMessageLinks;
};

export type HomeAlertMessageAssets = {
  __typename?: 'HomeAlertMessageAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HomeAlertMessageEntries = {
  __typename?: 'HomeAlertMessageEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HomeAlertMessageLinks = {
  __typename?: 'HomeAlertMessageLinks';
  assets: HomeAlertMessageAssets;
  entries: HomeAlertMessageEntries;
  resources: HomeAlertMessageResources;
};

export type HomeAlertMessageResources = {
  __typename?: 'HomeAlertMessageResources';
  block: Array<ResourceLink>;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  items: Array<Maybe<Home>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomeFeaturedServiceCardsCollection = {
  __typename?: 'HomeFeaturedServiceCardsCollection';
  items: Array<Maybe<HomeFeaturedServiceCardsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomeFeaturedServiceCardsItem = ServiceEntry | ServiceGroup;

export type HomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  alertMessage_contains?: InputMaybe<Scalars['String']['input']>;
  alertMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alertMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  alertTitle?: InputMaybe<Scalars['String']['input']>;
  alertTitle_contains?: InputMaybe<Scalars['String']['input']>;
  alertTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alertTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alertTitle_not?: InputMaybe<Scalars['String']['input']>;
  alertTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  alertTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredServiceCards?: InputMaybe<CfServiceEntryOrServiceGroupNestedFilter>;
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
  metadata?: InputMaybe<CfPageMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popularResourcesList?: InputMaybe<CfServiceEntryOrServiceGroupNestedFilter>;
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
  AlertTitleAsc = 'alertTitle_ASC',
  AlertTitleDesc = 'alertTitle_DESC',
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
  items: Array<Maybe<HomePopularResourcesListItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomePopularResourcesListItem = ServiceEntry | ServiceGroup;

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
  where?: InputMaybe<CategoryFilter>;
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
  promoBannerWithCtaCollection?: Maybe<PromoBannerWithCtaCollection>;
};


export type ImageWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
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

/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitle = Entry & {
  __typename?: 'ListWithTitle';
  contentfulMetadata: ContentfulMetadata;
  customLabel?: Maybe<Scalars['String']['output']>;
  dropdownChoices?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ListWithTitleLinkingCollections>;
  paragraphOrList?: Maybe<ListWithTitleParagraphOrList>;
  sys: Sys;
};


/** Single paragraph or bulleted list with descriptive header  [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/listWithTitle) */
export type ListWithTitleCustomLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  customLabel?: InputMaybe<Scalars['String']['input']>;
  customLabel_contains?: InputMaybe<Scalars['String']['input']>;
  customLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  customLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  customLabel_not?: InputMaybe<Scalars['String']['input']>;
  customLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  customLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
};


export type ListWithTitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ListWithTitleOrder {
  CustomLabelAsc = 'customLabel_ASC',
  CustomLabelDesc = 'customLabel_DESC',
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
  resources: ListWithTitleParagraphOrListResources;
};

export type ListWithTitleParagraphOrListResources = {
  __typename?: 'ListWithTitleParagraphOrListResources';
  block: Array<ResourceLink>;
};

/** Used to provide some structure to menus in the header and footer. The items in the menus in the header will be auto-generated (so this will only allow you to order the top menus, e.g. Animals, then Plants and crops, etc.), while the items in menus in the footer should be written out as Menu Item entries. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menu) */
export type Menu = Entry & {
  __typename?: 'Menu';
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
  where?: InputMaybe<MenuOrMenuItemOrTopTierFilter>;
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
  children?: InputMaybe<CfMenuOrMenuItemOrTopTierNestedFilter>;
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
export type MenuItem = Entry & {
  __typename?: 'MenuItem';
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

/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuOrMenuItemOrTopTier) */
export type MenuOrMenuItemOrTopTier = Entry & {
  __typename?: 'MenuOrMenuItemOrTopTier';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MenuOrMenuItemOrTopTierLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuOrMenuItemOrTopTier) */
export type MenuOrMenuItemOrTopTierLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/menuOrMenuItemOrTopTier) */
export type MenuOrMenuItemOrTopTierTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MenuOrMenuItemOrTopTierCollection = {
  __typename?: 'MenuOrMenuItemOrTopTierCollection';
  items: Array<Maybe<MenuOrMenuItemOrTopTier>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuOrMenuItemOrTopTierFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuOrMenuItemOrTopTierFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuOrMenuItemOrTopTierFilter>>>;
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

export type MenuOrMenuItemOrTopTierLinkingCollections = {
  __typename?: 'MenuOrMenuItemOrTopTierLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MenuOrMenuItemOrTopTierLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

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

/** Overview pages for LDAF offices. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/officePage) */
export type OfficePage = Entry & {
  __typename?: 'OfficePage';
  contactsCollection?: Maybe<OfficePageContactsCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<OfficePageDescription>;
  linkedFrom?: Maybe<OfficePageLinkingCollections>;
  mailingAddress?: Maybe<ContentTypeLocation>;
  metadata?: Maybe<PageMetadata>;
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
export type OfficePageMetadataArgs = {
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
  block: Array<ResourceLink>;
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
  metadata?: InputMaybe<CfPageMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  block: Array<ResourceLink>;
};

/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadata = Entry & {
  __typename?: 'PageMetadata';
  contentfulMetadata: ContentfulMetadata;
  externalRedirect?: Maybe<Scalars['String']['output']>;
  internalRedirect?: Maybe<PageMetadata>;
  isRoot?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<PageMetadataLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<PageMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataExternalRedirectArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataInternalRedirectArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataIsRootArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataParentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
export type PageMetadataSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Metadata about a page for setting its URL, for linking to it from menus and other pages, and for setting up a redirect. Also contains additional fields for improving SEO (search engine optimization). A page will not appear on the site unless it has a corresponding Page metadata entry. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/pageMetadata) */
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
  internalRedirect?: InputMaybe<CfPageMetadataNestedFilter>;
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

export type PageMetadataLinkingCollections = {
  __typename?: 'PageMetadataLinkingCollections';
  boardsAndCommissionsCollection?: Maybe<BoardsAndCommissionsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  menuItemCollection?: Maybe<MenuItemCollection>;
  officePageCollection?: Maybe<OfficePageCollection>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type PageMetadataLinkingCollectionsBoardsAndCommissionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsBoardsAndCommissionsCollectionOrder>>>;
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

export enum PageMetadataLinkingCollectionsBoardsAndCommissionsCollectionOrder {
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

export enum PageMetadataLinkingCollectionsHomeCollectionOrder {
  AlertTitleAsc = 'alertTitle_ASC',
  AlertTitleDesc = 'alertTitle_DESC',
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

export enum PageMetadataLinkingCollectionsServiceGroupCollectionOrder {
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

/** Mostly for the front page. Designed for large clickable images. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/promoBannerWithCta) */
export type PromoBannerWithCta = Entry & {
  __typename?: 'PromoBannerWithCta';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PromoBannerWithCtaLinkingCollections>;
  promoCategoryCollection?: Maybe<PromoBannerWithCtaPromoCategoryCollection>;
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
export type PromoBannerWithCtaPromoCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PromoBannerWithCtaPromoCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
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
  promoCategory?: InputMaybe<CfCategoryNestedFilter>;
  promoCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  AlertTitleAsc = 'alertTitle_ASC',
  AlertTitleDesc = 'alertTitle_DESC',
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

export type PromoBannerWithCtaPromoCategoryCollection = {
  __typename?: 'PromoBannerWithCtaPromoCategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PromoBannerWithCtaPromoCategoryCollectionOrder {
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

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  boardsAndCommissions?: Maybe<BoardsAndCommissions>;
  boardsAndCommissionsCollection?: Maybe<BoardsAndCommissionsCollection>;
  callToAction?: Maybe<CallToAction>;
  callToActionCollection?: Maybe<CallToActionCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  contact?: Maybe<Contact>;
  contactCollection?: Maybe<ContactCollection>;
  contentTypeLocation?: Maybe<ContentTypeLocation>;
  contentTypeLocationCollection?: Maybe<ContentTypeLocationCollection>;
  documentWrapper?: Maybe<DocumentWrapper>;
  documentWrapperCollection?: Maybe<DocumentWrapperCollection>;
  draftNavigationLink?: Maybe<DraftNavigationLink>;
  draftNavigationLinkCollection?: Maybe<DraftNavigationLinkCollection>;
  draftNavigationLinkOrDraftNavigationMenu?: Maybe<DraftNavigationLinkOrDraftNavigationMenu>;
  draftNavigationLinkOrDraftNavigationMenuCollection?: Maybe<DraftNavigationLinkOrDraftNavigationMenuCollection>;
  draftNavigationMenu?: Maybe<DraftNavigationMenu>;
  draftNavigationMenuCollection?: Maybe<DraftNavigationMenuCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventEntry?: Maybe<EventEntry>;
  eventEntryCollection?: Maybe<EventEntryCollection>;
  heroImage?: Maybe<HeroImage>;
  heroImageCollection?: Maybe<HeroImageCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  imageWrapper?: Maybe<ImageWrapper>;
  imageWrapperCollection?: Maybe<ImageWrapperCollection>;
  listWithTitle?: Maybe<ListWithTitle>;
  listWithTitleCollection?: Maybe<ListWithTitleCollection>;
  menu?: Maybe<Menu>;
  menuCollection?: Maybe<MenuCollection>;
  menuItem?: Maybe<MenuItem>;
  menuItemCollection?: Maybe<MenuItemCollection>;
  menuOrMenuItemOrTopTier?: Maybe<MenuOrMenuItemOrTopTier>;
  menuOrMenuItemOrTopTierCollection?: Maybe<MenuOrMenuItemOrTopTierCollection>;
  officePage?: Maybe<OfficePage>;
  officePageCollection?: Maybe<OfficePageCollection>;
  pageMetadata?: Maybe<PageMetadata>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  promoBannerWithCta?: Maybe<PromoBannerWithCta>;
  promoBannerWithCtaCollection?: Maybe<PromoBannerWithCtaCollection>;
  serviceEntry?: Maybe<ServiceEntry>;
  serviceEntryCollection?: Maybe<ServiceEntryCollection>;
  serviceEntryOrServiceGroup?: Maybe<ServiceEntryOrServiceGroup>;
  serviceEntryOrServiceGroupCollection?: Maybe<ServiceEntryOrServiceGroupCollection>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  testRichText?: Maybe<TestRichText>;
  testRichTextCollection?: Maybe<TestRichTextCollection>;
  topTier?: Maybe<TopTier>;
  topTierCollection?: Maybe<TopTierCollection>;
  videoWrapper?: Maybe<VideoWrapper>;
  videoWrapperCollection?: Maybe<VideoWrapperCollection>;
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


export type QueryDraftNavigationLinkOrDraftNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDraftNavigationLinkOrDraftNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DraftNavigationLinkOrDraftNavigationMenuFilter>;
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


export type QueryMenuOrMenuItemOrTopTierArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuOrMenuItemOrTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuOrMenuItemOrTopTierFilter>;
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


export type QueryServiceEntryOrServiceGroupArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServiceEntryOrServiceGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryOrServiceGroupFilter>;
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
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntry = Entry & {
  __typename?: 'ServiceEntry';
  contactInformationCollection?: Maybe<ServiceEntryContactInformationCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceEntryDescription>;
  entryTitle?: Maybe<Scalars['String']['output']>;
  linkedDocumentCollection?: Maybe<ServiceEntryLinkedDocumentCollection>;
  linkedFrom?: Maybe<ServiceEntryLinkingCollections>;
  serviceCtaCollection?: Maybe<ServiceEntryServiceCtaCollection>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryContactInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryContactInformationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryLinkedDocumentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryLinkedDocumentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DocumentWrapperFilter>;
};


/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntryServiceCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryServiceCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CallToActionFilter>;
};


/** Service content that will show up as an accordion on a service group page. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntry) */
export type ServiceEntrySubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  block: Array<ResourceLink>;
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
  linkedDocument?: InputMaybe<CfDocumentWrapperNestedFilter>;
  linkedDocumentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceCta?: InputMaybe<CfCallToActionNestedFilter>;
  serviceCtaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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

export enum ServiceEntryLinkedDocumentCollectionOrder {
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

export type ServiceEntryLinkingCollections = {
  __typename?: 'ServiceEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  serviceGroupCollection?: Maybe<ServiceGroupCollection>;
  topTierCollection?: Maybe<TopTierCollection>;
};


export type ServiceEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceEntryLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryLinkingCollectionsHomeCollectionOrder>>>;
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


export type ServiceEntryLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceEntryLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServiceEntryLinkingCollectionsHomeCollectionOrder {
  AlertTitleAsc = 'alertTitle_ASC',
  AlertTitleDesc = 'alertTitle_DESC',
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

export enum ServiceEntryLinkingCollectionsServiceGroupCollectionOrder {
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

export enum ServiceEntryLinkingCollectionsTopTierCollectionOrder {
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

/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryOrServiceGroup) */
export type ServiceEntryOrServiceGroup = Entry & {
  __typename?: 'ServiceEntryOrServiceGroup';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceEntryOrServiceGroupDescription>;
  linkedFrom?: Maybe<ServiceEntryOrServiceGroupLinkingCollections>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryOrServiceGroup) */
export type ServiceEntryOrServiceGroupDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryOrServiceGroup) */
export type ServiceEntryOrServiceGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/serviceEntryOrServiceGroup) */
export type ServiceEntryOrServiceGroupSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceEntryOrServiceGroupCollection = {
  __typename?: 'ServiceEntryOrServiceGroupCollection';
  items: Array<Maybe<ServiceEntryOrServiceGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceEntryOrServiceGroupDescription = {
  __typename?: 'ServiceEntryOrServiceGroupDescription';
  json: Scalars['JSON']['output'];
  links: ServiceEntryOrServiceGroupDescriptionLinks;
};

export type ServiceEntryOrServiceGroupDescriptionAssets = {
  __typename?: 'ServiceEntryOrServiceGroupDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceEntryOrServiceGroupDescriptionEntries = {
  __typename?: 'ServiceEntryOrServiceGroupDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceEntryOrServiceGroupDescriptionLinks = {
  __typename?: 'ServiceEntryOrServiceGroupDescriptionLinks';
  assets: ServiceEntryOrServiceGroupDescriptionAssets;
  entries: ServiceEntryOrServiceGroupDescriptionEntries;
  resources: ServiceEntryOrServiceGroupDescriptionResources;
};

export type ServiceEntryOrServiceGroupDescriptionResources = {
  __typename?: 'ServiceEntryOrServiceGroupDescriptionResources';
  block: Array<ResourceLink>;
};

export type ServiceEntryOrServiceGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceEntryOrServiceGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceEntryOrServiceGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceEntryOrServiceGroupLinkingCollections = {
  __typename?: 'ServiceEntryOrServiceGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceEntryOrServiceGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServiceEntryOrder {
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
export type ServiceGroup = Entry & {
  __typename?: 'ServiceGroup';
  additionalResources?: Maybe<ServiceGroupAdditionalResources>;
  contactInfoCollection?: Maybe<ServiceGroupContactInfoCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServiceGroupDescription>;
  heroImage?: Maybe<HeroImage>;
  linkedFrom?: Maybe<ServiceGroupLinkingCollections>;
  pageMetadata?: Maybe<PageMetadata>;
  serviceEntriesCollection?: Maybe<ServiceGroupServiceEntriesCollection>;
  serviceListName?: Maybe<Scalars['String']['output']>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
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
export type ServiceGroupServiceEntriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryOrServiceGroupFilter>;
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
  block: Array<ResourceLink>;
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
  block: Array<ResourceLink>;
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
  pageMetadata?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceEntries?: InputMaybe<CfServiceEntryOrServiceGroupNestedFilter>;
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
  AlertTitleAsc = 'alertTitle_ASC',
  AlertTitleDesc = 'alertTitle_DESC',
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

export type ServiceGroupServiceEntriesCollection = {
  __typename?: 'ServiceGroupServiceEntriesCollection';
  items: Array<Maybe<ServiceGroupServiceEntriesItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceGroupServiceEntriesItem = ServiceEntry | ServiceGroup;

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
  resources: TestRichTextBodyResources;
};

export type TestRichTextBodyResources = {
  __typename?: 'TestRichTextBodyResources';
  block: Array<ResourceLink>;
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

/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTier = Entry & {
  __typename?: 'TopTier';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TopTierDescription>;
  featuredServiceListCollection?: Maybe<TopTierFeaturedServiceListCollection>;
  heroImage?: Maybe<HeroImage>;
  linkedFrom?: Maybe<TopTierLinkingCollections>;
  metadata?: Maybe<PageMetadata>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  video?: Maybe<VideoWrapper>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierFeaturedServiceListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceEntryOrServiceGroupFilter>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroImageFilter>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
export type TopTierTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top tier navigation pages group related service groups and services together. They also populate the navigation bar on the site. [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/topTier) */
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
  block: Array<ResourceLink>;
};

export type TopTierFeaturedServiceListCollection = {
  __typename?: 'TopTierFeaturedServiceListCollection';
  items: Array<Maybe<TopTierFeaturedServiceListItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopTierFeaturedServiceListItem = ServiceEntry | ServiceGroup;

export type TopTierFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopTierFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopTierFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredServiceList?: InputMaybe<CfServiceEntryOrServiceGroupNestedFilter>;
  featuredServiceListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<CfHeroImageNestedFilter>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<CfPageMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
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

/** Control for embedding video content in a page [See type definition](https://app.contentful.com/spaces/pc5e1rlgfrov/content_types/videoWrapper) */
export type VideoWrapper = Entry & {
  __typename?: 'VideoWrapper';
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<VideoWrapperLinkingCollections>;
  sys: Sys;
  videoCategoryCollection?: Maybe<VideoWrapperVideoCategoryCollection>;
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
export type VideoWrapperVideoCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperVideoCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
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
  videoCategory?: InputMaybe<CfCategoryNestedFilter>;
  videoCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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


export type VideoWrapperLinkingCollectionsTopTierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoWrapperLinkingCollectionsTopTierCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VideoWrapperLinkingCollectionsHomeCollectionOrder {
  AlertTitleAsc = 'alertTitle_ASC',
  AlertTitleDesc = 'alertTitle_DESC',
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

export type VideoWrapperVideoCategoryCollection = {
  __typename?: 'VideoWrapperVideoCategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum VideoWrapperVideoCategoryCollectionOrder {
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
  block: Array<ResourceLink>;
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

export type CfDraftNavigationLinkOrDraftNavigationMenuNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfDraftNavigationLinkOrDraftNavigationMenuNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfDraftNavigationLinkOrDraftNavigationMenuNestedFilter>>>;
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

export type CfMenuOrMenuItemOrTopTierNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuOrMenuItemOrTopTierNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuOrMenuItemOrTopTierNestedFilter>>>;
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
  promoCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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

export type CfServiceEntryOrServiceGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfServiceEntryOrServiceGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfServiceEntryOrServiceGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
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
  videoCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
