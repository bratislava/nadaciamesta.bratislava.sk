import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AboutUs = {
  __typename?: 'AboutUs';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  sections?: Maybe<Array<Maybe<ComponentBasicComponentsAboutUsSection>>>;
  updated_at: Scalars['DateTime']['output'];
};

export type AboutUsInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  sections?: InputMaybe<Array<InputMaybe<ComponentBasicComponentsAboutUsSectionInput>>>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type BlogPostAggregator = {
  __typename?: 'BlogPostAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  aggregate?: Maybe<BlogPostAggregator>;
  groupBy?: Maybe<BlogPostGroupBy>;
  values?: Maybe<Array<Maybe<BlogPost>>>;
};

export type BlogPostConnectionAuthor = {
  __typename?: 'BlogPostConnectionAuthor';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type BlogPostConnectionContent = {
  __typename?: 'BlogPostConnectionContent';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type BlogPostConnectionCreated_At = {
  __typename?: 'BlogPostConnectionCreated_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogPostConnectionDescription = {
  __typename?: 'BlogPostConnectionDescription';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type BlogPostConnectionId = {
  __typename?: 'BlogPostConnectionId';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type BlogPostConnectionImage = {
  __typename?: 'BlogPostConnectionImage';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type BlogPostConnectionPublished_At = {
  __typename?: 'BlogPostConnectionPublished_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogPostConnectionSlug = {
  __typename?: 'BlogPostConnectionSlug';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type BlogPostConnectionTitle = {
  __typename?: 'BlogPostConnectionTitle';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type BlogPostConnectionUpdated_At = {
  __typename?: 'BlogPostConnectionUpdated_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogPostGroupBy = {
  __typename?: 'BlogPostGroupBy';
  author?: Maybe<Array<Maybe<BlogPostConnectionAuthor>>>;
  content?: Maybe<Array<Maybe<BlogPostConnectionContent>>>;
  created_at?: Maybe<Array<Maybe<BlogPostConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<BlogPostConnectionDescription>>>;
  id?: Maybe<Array<Maybe<BlogPostConnectionId>>>;
  image?: Maybe<Array<Maybe<BlogPostConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<BlogPostConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<BlogPostConnectionSlug>>>;
  title?: Maybe<Array<Maybe<BlogPostConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<BlogPostConnectionUpdated_At>>>;
};

export type BlogPostInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentBasicComponentsAboutUsSection = {
  __typename?: 'ComponentBasicComponentsAboutUsSection';
  detail?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentBasicComponentsAboutUsSectionFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentBasicComponentsAboutUsSectionInput = {
  detail?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name_including_degrees: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type Contacts = {
  __typename?: 'Contacts';
  created_at: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  full_name_including_degrees: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<UploadFile>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type ContactsAggregator = {
  __typename?: 'ContactsAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  aggregate?: Maybe<ContactsAggregator>;
  groupBy?: Maybe<ContactsGroupBy>;
  values?: Maybe<Array<Maybe<Contacts>>>;
};

export type ContactsConnectionCreated_At = {
  __typename?: 'ContactsConnectionCreated_at';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactsConnectionEmail = {
  __typename?: 'ContactsConnectionEmail';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ContactsConnectionFull_Name_Including_Degrees = {
  __typename?: 'ContactsConnectionFull_name_including_degrees';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ContactsConnectionId = {
  __typename?: 'ContactsConnectionId';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type ContactsConnectionPhone = {
  __typename?: 'ContactsConnectionPhone';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ContactsConnectionPhoto = {
  __typename?: 'ContactsConnectionPhoto';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type ContactsConnectionRole = {
  __typename?: 'ContactsConnectionRole';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ContactsConnectionUpdated_At = {
  __typename?: 'ContactsConnectionUpdated_at';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactsGroupBy = {
  __typename?: 'ContactsGroupBy';
  created_at?: Maybe<Array<Maybe<ContactsConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<ContactsConnectionEmail>>>;
  full_name_including_degrees?: Maybe<Array<Maybe<ContactsConnectionFull_Name_Including_Degrees>>>;
  id?: Maybe<Array<Maybe<ContactsConnectionId>>>;
  phone?: Maybe<Array<Maybe<ContactsConnectionPhone>>>;
  photo?: Maybe<Array<Maybe<ContactsConnectionPhoto>>>;
  role?: Maybe<Array<Maybe<ContactsConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<ContactsConnectionUpdated_At>>>;
};

export type DocumentInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  file?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type Documents = {
  __typename?: 'Documents';
  archived?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['DateTime']['output'];
  file?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  published_at?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type DocumentsAggregator = {
  __typename?: 'DocumentsAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  aggregate?: Maybe<DocumentsAggregator>;
  groupBy?: Maybe<DocumentsGroupBy>;
  values?: Maybe<Array<Maybe<Documents>>>;
};

export type DocumentsConnectionArchived = {
  __typename?: 'DocumentsConnectionArchived';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['Boolean']['output']>;
};

export type DocumentsConnectionCreated_At = {
  __typename?: 'DocumentsConnectionCreated_at';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentsConnectionFile = {
  __typename?: 'DocumentsConnectionFile';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type DocumentsConnectionId = {
  __typename?: 'DocumentsConnectionId';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type DocumentsConnectionPublished_At = {
  __typename?: 'DocumentsConnectionPublished_at';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentsConnectionTitle = {
  __typename?: 'DocumentsConnectionTitle';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type DocumentsConnectionUpdated_At = {
  __typename?: 'DocumentsConnectionUpdated_at';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentsGroupBy = {
  __typename?: 'DocumentsGroupBy';
  archived?: Maybe<Array<Maybe<DocumentsConnectionArchived>>>;
  created_at?: Maybe<Array<Maybe<DocumentsConnectionCreated_At>>>;
  file?: Maybe<Array<Maybe<DocumentsConnectionFile>>>;
  id?: Maybe<Array<Maybe<DocumentsConnectionId>>>;
  published_at?: Maybe<Array<Maybe<DocumentsConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<DocumentsConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<DocumentsConnectionUpdated_At>>>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
  mime: Scalars['String']['input'];
  name: Scalars['String']['input'];
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  size: Scalars['Float']['input'];
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  url: Scalars['String']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type General = {
  __typename?: 'General';
  address?: Maybe<Scalars['String']['output']>;
  bank_account_iban?: Maybe<Scalars['String']['output']>;
  bank_account_url?: Maybe<Scalars['String']['output']>;
  copyright_text?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  facebook_link?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instagram_link?: Maybe<Scalars['String']['output']>;
  newsletter_text?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type GeneralInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_account_iban?: InputMaybe<Scalars['String']['input']>;
  bank_account_url?: InputMaybe<Scalars['String']['input']>;
  copyright_text?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook_link?: InputMaybe<Scalars['String']['input']>;
  instagram_link?: InputMaybe<Scalars['String']['input']>;
  newsletter_text?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type GrantInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type Grants = {
  __typename?: 'Grants';
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  program?: Maybe<TagProgram>;
  published_at?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type GrantsFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type GrantsAggregator = {
  __typename?: 'GrantsAggregator';
  avg?: Maybe<GrantsAggregatorAvg>;
  count?: Maybe<Scalars['Int']['output']>;
  max?: Maybe<GrantsAggregatorMax>;
  min?: Maybe<GrantsAggregatorMin>;
  sum?: Maybe<GrantsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GrantsAggregatorAvg = {
  __typename?: 'GrantsAggregatorAvg';
  order?: Maybe<Scalars['Float']['output']>;
};

export type GrantsAggregatorMax = {
  __typename?: 'GrantsAggregatorMax';
  order?: Maybe<Scalars['Float']['output']>;
};

export type GrantsAggregatorMin = {
  __typename?: 'GrantsAggregatorMin';
  order?: Maybe<Scalars['Float']['output']>;
};

export type GrantsAggregatorSum = {
  __typename?: 'GrantsAggregatorSum';
  order?: Maybe<Scalars['Float']['output']>;
};

export type GrantsConnection = {
  __typename?: 'GrantsConnection';
  aggregate?: Maybe<GrantsAggregator>;
  groupBy?: Maybe<GrantsGroupBy>;
  values?: Maybe<Array<Maybe<Grants>>>;
};

export type GrantsConnectionCreated_At = {
  __typename?: 'GrantsConnectionCreated_at';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type GrantsConnectionDescription = {
  __typename?: 'GrantsConnectionDescription';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type GrantsConnectionId = {
  __typename?: 'GrantsConnectionId';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type GrantsConnectionLink = {
  __typename?: 'GrantsConnectionLink';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type GrantsConnectionOrder = {
  __typename?: 'GrantsConnectionOrder';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['Int']['output']>;
};

export type GrantsConnectionProgram = {
  __typename?: 'GrantsConnectionProgram';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type GrantsConnectionPublished_At = {
  __typename?: 'GrantsConnectionPublished_at';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type GrantsConnectionTitle = {
  __typename?: 'GrantsConnectionTitle';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type GrantsConnectionUpdated_At = {
  __typename?: 'GrantsConnectionUpdated_at';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type GrantsGroupBy = {
  __typename?: 'GrantsGroupBy';
  created_at?: Maybe<Array<Maybe<GrantsConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<GrantsConnectionDescription>>>;
  id?: Maybe<Array<Maybe<GrantsConnectionId>>>;
  link?: Maybe<Array<Maybe<GrantsConnectionLink>>>;
  order?: Maybe<Array<Maybe<GrantsConnectionOrder>>>;
  program?: Maybe<Array<Maybe<GrantsConnectionProgram>>>;
  published_at?: Maybe<Array<Maybe<GrantsConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<GrantsConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<GrantsConnectionUpdated_At>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type InputId = {
  id: Scalars['ID']['input'];
};

export type LandingPage = {
  __typename?: 'LandingPage';
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  featured_projects_bottom?: Maybe<Array<Maybe<Project>>>;
  featured_projects_top?: Maybe<Array<Maybe<Project>>>;
  grants_button_text?: Maybe<Scalars['String']['output']>;
  grants_text?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type LandingPageFeatured_Projects_BottomArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type LandingPageFeatured_Projects_TopArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type LandingPageInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured_projects_bottom?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featured_projects_top?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  grants_button_text?: InputMaybe<Scalars['String']['input']>;
  grants_text?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type Legal = {
  __typename?: 'Legal';
  created_at: Scalars['DateTime']['output'];
  gdpr?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  project_detail_disclaimer?: Maybe<Scalars['String']['output']>;
  published_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type LegalInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  gdpr?: InputMaybe<Scalars['String']['input']>;
  project_detail_disclaimer?: InputMaybe<Scalars['String']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type Morph = AboutUs | BlogPost | BlogPostAggregator | BlogPostConnection | BlogPostConnectionAuthor | BlogPostConnectionContent | BlogPostConnectionCreated_At | BlogPostConnectionDescription | BlogPostConnectionId | BlogPostConnectionImage | BlogPostConnectionPublished_At | BlogPostConnectionSlug | BlogPostConnectionTitle | BlogPostConnectionUpdated_At | BlogPostGroupBy | ComponentBasicComponentsAboutUsSection | Contacts | ContactsAggregator | ContactsConnection | ContactsConnectionCreated_At | ContactsConnectionEmail | ContactsConnectionFull_Name_Including_Degrees | ContactsConnectionId | ContactsConnectionPhone | ContactsConnectionPhoto | ContactsConnectionRole | ContactsConnectionUpdated_At | ContactsGroupBy | Documents | DocumentsAggregator | DocumentsConnection | DocumentsConnectionArchived | DocumentsConnectionCreated_At | DocumentsConnectionFile | DocumentsConnectionId | DocumentsConnectionPublished_At | DocumentsConnectionTitle | DocumentsConnectionUpdated_At | DocumentsGroupBy | General | Grants | GrantsAggregator | GrantsAggregatorAvg | GrantsAggregatorMax | GrantsAggregatorMin | GrantsAggregatorSum | GrantsConnection | GrantsConnectionCreated_At | GrantsConnectionDescription | GrantsConnectionId | GrantsConnectionLink | GrantsConnectionOrder | GrantsConnectionProgram | GrantsConnectionPublished_At | GrantsConnectionTitle | GrantsConnectionUpdated_At | GrantsGroupBy | I18NLocale | LandingPage | Legal | Project | ProjectAggregator | ProjectConnection | ProjectConnectionAmount | ProjectConnectionAppliciant | ProjectConnectionCreated_At | ProjectConnectionDescription | ProjectConnectionId | ProjectConnectionLegal_Form | ProjectConnectionProgram | ProjectConnectionPublished_At | ProjectConnectionTitle | ProjectConnectionUpdated_At | ProjectConnectionYear | ProjectGroupBy | TagCategory | TagCategoryAggregator | TagCategoryConnection | TagCategoryConnectionCreated_At | TagCategoryConnectionId | TagCategoryConnectionName | TagCategoryConnectionUpdated_At | TagCategoryGroupBy | TagDistrict | TagDistrictAggregator | TagDistrictConnection | TagDistrictConnectionCreated_At | TagDistrictConnectionId | TagDistrictConnectionName | TagDistrictConnectionUpdated_At | TagDistrictGroupBy | TagGoal | TagGoalAggregator | TagGoalConnection | TagGoalConnectionCreated_At | TagGoalConnectionId | TagGoalConnectionName | TagGoalConnectionUpdated_At | TagGoalGroupBy | TagLegalForm | TagLegalFormAggregator | TagLegalFormConnection | TagLegalFormConnectionCreated_At | TagLegalFormConnectionId | TagLegalFormConnectionName | TagLegalFormConnectionUpdated_At | TagLegalFormGroupBy | TagProgram | TagProgramAggregator | TagProgramConnection | TagProgramConnectionCreated_At | TagProgramConnectionId | TagProgramConnectionName | TagProgramConnectionUpdated_At | TagProgramGroupBy | TagSupportField | TagSupportFieldAggregator | TagSupportFieldConnection | TagSupportFieldConnectionCreated_At | TagSupportFieldConnectionId | TagSupportFieldConnectionName | TagSupportFieldConnectionUpdated_At | TagSupportFieldGroupBy | TagYear | TagYearAggregator | TagYearConnection | TagYearConnectionCreated_At | TagYearConnectionId | TagYearConnectionName | TagYearConnectionUpdated_At | TagYearGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateBlogPostPayload | CreateContactPayload | CreateDocumentPayload | CreateGrantPayload | CreateProjectPayload | CreateRolePayload | CreateTagCategoryPayload | CreateTagDistrictPayload | CreateTagGoalPayload | CreateTagLegalFormPayload | CreateTagProgramPayload | CreateTagSupportFieldPayload | CreateTagYearPayload | CreateUserPayload | DeleteAboutUsPayload | DeleteBlogPostPayload | DeleteContactPayload | DeleteDocumentPayload | DeleteFilePayload | DeleteGeneralPayload | DeleteGrantPayload | DeleteLandingPagePayload | DeleteLegalPayload | DeleteProjectPayload | DeleteRolePayload | DeleteTagCategoryPayload | DeleteTagDistrictPayload | DeleteTagGoalPayload | DeleteTagLegalFormPayload | DeleteTagProgramPayload | DeleteTagSupportFieldPayload | DeleteTagYearPayload | DeleteUserPayload | UpdateAboutUsPayload | UpdateBlogPostPayload | UpdateContactPayload | UpdateDocumentPayload | UpdateGeneralPayload | UpdateGrantPayload | UpdateLandingPagePayload | UpdateLegalPayload | UpdateProjectPayload | UpdateRolePayload | UpdateTagCategoryPayload | UpdateTagDistrictPayload | UpdateTagGoalPayload | UpdateTagLegalFormPayload | UpdateTagProgramPayload | UpdateTagSupportFieldPayload | UpdateTagYearPayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createBlogPost?: Maybe<CreateBlogPostPayload>;
  createContact?: Maybe<CreateContactPayload>;
  createDocument?: Maybe<CreateDocumentPayload>;
  createGrant?: Maybe<CreateGrantPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTagCategory?: Maybe<CreateTagCategoryPayload>;
  createTagDistrict?: Maybe<CreateTagDistrictPayload>;
  createTagGoal?: Maybe<CreateTagGoalPayload>;
  createTagLegalForm?: Maybe<CreateTagLegalFormPayload>;
  createTagProgram?: Maybe<CreateTagProgramPayload>;
  createTagSupportField?: Maybe<CreateTagSupportFieldPayload>;
  createTagYear?: Maybe<CreateTagYearPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteAboutUs?: Maybe<DeleteAboutUsPayload>;
  deleteBlogPost?: Maybe<DeleteBlogPostPayload>;
  deleteContact?: Maybe<DeleteContactPayload>;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGeneral?: Maybe<DeleteGeneralPayload>;
  deleteGrant?: Maybe<DeleteGrantPayload>;
  deleteLandingPage?: Maybe<DeleteLandingPagePayload>;
  deleteLegal?: Maybe<DeleteLegalPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTagCategory?: Maybe<DeleteTagCategoryPayload>;
  deleteTagDistrict?: Maybe<DeleteTagDistrictPayload>;
  deleteTagGoal?: Maybe<DeleteTagGoalPayload>;
  deleteTagLegalForm?: Maybe<DeleteTagLegalFormPayload>;
  deleteTagProgram?: Maybe<DeleteTagProgramPayload>;
  deleteTagSupportField?: Maybe<DeleteTagSupportFieldPayload>;
  deleteTagYear?: Maybe<DeleteTagYearPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutUs?: Maybe<UpdateAboutUsPayload>;
  updateBlogPost?: Maybe<UpdateBlogPostPayload>;
  updateContact?: Maybe<UpdateContactPayload>;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  updateFileInfo: UploadFile;
  updateGeneral?: Maybe<UpdateGeneralPayload>;
  updateGrant?: Maybe<UpdateGrantPayload>;
  updateLandingPage?: Maybe<UpdateLandingPagePayload>;
  updateLegal?: Maybe<UpdateLegalPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTagCategory?: Maybe<UpdateTagCategoryPayload>;
  updateTagDistrict?: Maybe<UpdateTagDistrictPayload>;
  updateTagGoal?: Maybe<UpdateTagGoalPayload>;
  updateTagLegalForm?: Maybe<UpdateTagLegalFormPayload>;
  updateTagProgram?: Maybe<UpdateTagProgramPayload>;
  updateTagSupportField?: Maybe<UpdateTagSupportFieldPayload>;
  updateTagYear?: Maybe<UpdateTagYearPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateBlogPostArgs = {
  input?: InputMaybe<CreateBlogPostInput>;
};


export type MutationCreateContactArgs = {
  input?: InputMaybe<CreateContactInput>;
};


export type MutationCreateDocumentArgs = {
  input?: InputMaybe<CreateDocumentInput>;
};


export type MutationCreateGrantArgs = {
  input?: InputMaybe<CreateGrantInput>;
};


export type MutationCreateProjectArgs = {
  input?: InputMaybe<CreateProjectInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateTagCategoryArgs = {
  input?: InputMaybe<CreateTagCategoryInput>;
};


export type MutationCreateTagDistrictArgs = {
  input?: InputMaybe<CreateTagDistrictInput>;
};


export type MutationCreateTagGoalArgs = {
  input?: InputMaybe<CreateTagGoalInput>;
};


export type MutationCreateTagLegalFormArgs = {
  input?: InputMaybe<CreateTagLegalFormInput>;
};


export type MutationCreateTagProgramArgs = {
  input?: InputMaybe<CreateTagProgramInput>;
};


export type MutationCreateTagSupportFieldArgs = {
  input?: InputMaybe<CreateTagSupportFieldInput>;
};


export type MutationCreateTagYearArgs = {
  input?: InputMaybe<CreateTagYearInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteBlogPostArgs = {
  input?: InputMaybe<DeleteBlogPostInput>;
};


export type MutationDeleteContactArgs = {
  input?: InputMaybe<DeleteContactInput>;
};


export type MutationDeleteDocumentArgs = {
  input?: InputMaybe<DeleteDocumentInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteGrantArgs = {
  input?: InputMaybe<DeleteGrantInput>;
};


export type MutationDeleteProjectArgs = {
  input?: InputMaybe<DeleteProjectInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteTagCategoryArgs = {
  input?: InputMaybe<DeleteTagCategoryInput>;
};


export type MutationDeleteTagDistrictArgs = {
  input?: InputMaybe<DeleteTagDistrictInput>;
};


export type MutationDeleteTagGoalArgs = {
  input?: InputMaybe<DeleteTagGoalInput>;
};


export type MutationDeleteTagLegalFormArgs = {
  input?: InputMaybe<DeleteTagLegalFormInput>;
};


export type MutationDeleteTagProgramArgs = {
  input?: InputMaybe<DeleteTagProgramInput>;
};


export type MutationDeleteTagSupportFieldArgs = {
  input?: InputMaybe<DeleteTagSupportFieldInput>;
};


export type MutationDeleteTagYearArgs = {
  input?: InputMaybe<DeleteTagYearInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutUsArgs = {
  input?: InputMaybe<UpdateAboutUsInput>;
};


export type MutationUpdateBlogPostArgs = {
  input?: InputMaybe<UpdateBlogPostInput>;
};


export type MutationUpdateContactArgs = {
  input?: InputMaybe<UpdateContactInput>;
};


export type MutationUpdateDocumentArgs = {
  input?: InputMaybe<UpdateDocumentInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: FileInfoInput;
};


export type MutationUpdateGeneralArgs = {
  input?: InputMaybe<UpdateGeneralInput>;
};


export type MutationUpdateGrantArgs = {
  input?: InputMaybe<UpdateGrantInput>;
};


export type MutationUpdateLandingPageArgs = {
  input?: InputMaybe<UpdateLandingPageInput>;
};


export type MutationUpdateLegalArgs = {
  input?: InputMaybe<UpdateLegalInput>;
};


export type MutationUpdateProjectArgs = {
  input?: InputMaybe<UpdateProjectInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateTagCategoryArgs = {
  input?: InputMaybe<UpdateTagCategoryInput>;
};


export type MutationUpdateTagDistrictArgs = {
  input?: InputMaybe<UpdateTagDistrictInput>;
};


export type MutationUpdateTagGoalArgs = {
  input?: InputMaybe<UpdateTagGoalInput>;
};


export type MutationUpdateTagLegalFormArgs = {
  input?: InputMaybe<UpdateTagLegalFormInput>;
};


export type MutationUpdateTagProgramArgs = {
  input?: InputMaybe<UpdateTagProgramInput>;
};


export type MutationUpdateTagSupportFieldArgs = {
  input?: InputMaybe<UpdateTagSupportFieldInput>;
};


export type MutationUpdateTagYearArgs = {
  input?: InputMaybe<UpdateTagYearInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

export type Project = {
  __typename?: 'Project';
  amount?: Maybe<Scalars['String']['output']>;
  appliciant: Scalars['String']['output'];
  categories?: Maybe<Array<Maybe<TagCategory>>>;
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  districts?: Maybe<Array<Maybe<TagDistrict>>>;
  goals?: Maybe<Array<Maybe<TagGoal>>>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<UploadFile>>>;
  legal_form?: Maybe<TagLegalForm>;
  program?: Maybe<TagProgram>;
  published_at?: Maybe<Scalars['DateTime']['output']>;
  support_fields?: Maybe<Array<Maybe<TagSupportField>>>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  year?: Maybe<TagYear>;
};


export type ProjectCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type ProjectDistrictsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type ProjectGoalsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type ProjectImagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type ProjectSupport_FieldsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate?: Maybe<ProjectAggregator>;
  groupBy?: Maybe<ProjectGroupBy>;
  values?: Maybe<Array<Maybe<Project>>>;
};

export type ProjectConnectionAmount = {
  __typename?: 'ProjectConnectionAmount';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ProjectConnectionAppliciant = {
  __typename?: 'ProjectConnectionAppliciant';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ProjectConnectionCreated_At = {
  __typename?: 'ProjectConnectionCreated_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectConnectionDescription = {
  __typename?: 'ProjectConnectionDescription';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type ProjectConnectionLegal_Form = {
  __typename?: 'ProjectConnectionLegal_form';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type ProjectConnectionProgram = {
  __typename?: 'ProjectConnectionProgram';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type ProjectConnectionPublished_At = {
  __typename?: 'ProjectConnectionPublished_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectConnectionTitle = {
  __typename?: 'ProjectConnectionTitle';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type ProjectConnectionUpdated_At = {
  __typename?: 'ProjectConnectionUpdated_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectConnectionYear = {
  __typename?: 'ProjectConnectionYear';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  amount?: Maybe<Array<Maybe<ProjectConnectionAmount>>>;
  appliciant?: Maybe<Array<Maybe<ProjectConnectionAppliciant>>>;
  created_at?: Maybe<Array<Maybe<ProjectConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ProjectConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ProjectConnectionId>>>;
  legal_form?: Maybe<Array<Maybe<ProjectConnectionLegal_Form>>>;
  program?: Maybe<Array<Maybe<ProjectConnectionProgram>>>;
  published_at?: Maybe<Array<Maybe<ProjectConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<ProjectConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ProjectConnectionUpdated_At>>>;
  year?: Maybe<Array<Maybe<ProjectConnectionYear>>>;
};

export type ProjectInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  appliciant: Scalars['String']['input'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  legal_form?: InputMaybe<Scalars['ID']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  support_fields?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title: Scalars['String']['input'];
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  year?: InputMaybe<Scalars['ID']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutUs?: Maybe<AboutUs>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  blogPostsConnection?: Maybe<BlogPostConnection>;
  contact?: Maybe<Contacts>;
  contacts?: Maybe<Array<Maybe<Contacts>>>;
  contactsConnection?: Maybe<ContactsConnection>;
  document?: Maybe<Documents>;
  documents?: Maybe<Array<Maybe<Documents>>>;
  documentsConnection?: Maybe<DocumentsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  general?: Maybe<General>;
  grant?: Maybe<Grants>;
  grants?: Maybe<Array<Maybe<Grants>>>;
  grantsConnection?: Maybe<GrantsConnection>;
  landingPage?: Maybe<LandingPage>;
  legal?: Maybe<Legal>;
  me?: Maybe<UsersPermissionsMe>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  projectsConnection?: Maybe<ProjectConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  tagCategories?: Maybe<Array<Maybe<TagCategory>>>;
  tagCategoriesConnection?: Maybe<TagCategoryConnection>;
  tagCategory?: Maybe<TagCategory>;
  tagDistrict?: Maybe<TagDistrict>;
  tagDistricts?: Maybe<Array<Maybe<TagDistrict>>>;
  tagDistrictsConnection?: Maybe<TagDistrictConnection>;
  tagGoal?: Maybe<TagGoal>;
  tagGoals?: Maybe<Array<Maybe<TagGoal>>>;
  tagGoalsConnection?: Maybe<TagGoalConnection>;
  tagLegalForm?: Maybe<TagLegalForm>;
  tagLegalForms?: Maybe<Array<Maybe<TagLegalForm>>>;
  tagLegalFormsConnection?: Maybe<TagLegalFormConnection>;
  tagProgram?: Maybe<TagProgram>;
  tagPrograms?: Maybe<Array<Maybe<TagProgram>>>;
  tagProgramsConnection?: Maybe<TagProgramConnection>;
  tagSupportField?: Maybe<TagSupportField>;
  tagSupportFields?: Maybe<Array<Maybe<TagSupportField>>>;
  tagSupportFieldsConnection?: Maybe<TagSupportFieldConnection>;
  tagYear?: Maybe<TagYear>;
  tagYears?: Maybe<Array<Maybe<TagYear>>>;
  tagYearsConnection?: Maybe<TagYearConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryAboutUsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBlogPostArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBlogPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryBlogPostsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryContactArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryContactsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryDocumentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGeneralArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGrantArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGrantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGrantsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryLandingPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLegalArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryProjectsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagCategoryArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagDistrictArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagDistrictsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagDistrictsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagGoalArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagGoalsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagGoalsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagLegalFormArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagLegalFormsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagLegalFormsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagProgramArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagProgramsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagProgramsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagSupportFieldArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagSupportFieldsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagSupportFieldsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagYearArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagYearsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryTagYearsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TagCategoryAggregator = {
  __typename?: 'TagCategoryAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TagCategoryConnection = {
  __typename?: 'TagCategoryConnection';
  aggregate?: Maybe<TagCategoryAggregator>;
  groupBy?: Maybe<TagCategoryGroupBy>;
  values?: Maybe<Array<Maybe<TagCategory>>>;
};

export type TagCategoryConnectionCreated_At = {
  __typename?: 'TagCategoryConnectionCreated_at';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagCategoryConnectionId = {
  __typename?: 'TagCategoryConnectionId';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type TagCategoryConnectionName = {
  __typename?: 'TagCategoryConnectionName';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type TagCategoryConnectionUpdated_At = {
  __typename?: 'TagCategoryConnectionUpdated_at';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagCategoryGroupBy = {
  __typename?: 'TagCategoryGroupBy';
  created_at?: Maybe<Array<Maybe<TagCategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagCategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<TagCategoryConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagCategoryConnectionUpdated_At>>>;
};

export type TagCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type TagDistrict = {
  __typename?: 'TagDistrict';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TagDistrictAggregator = {
  __typename?: 'TagDistrictAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TagDistrictConnection = {
  __typename?: 'TagDistrictConnection';
  aggregate?: Maybe<TagDistrictAggregator>;
  groupBy?: Maybe<TagDistrictGroupBy>;
  values?: Maybe<Array<Maybe<TagDistrict>>>;
};

export type TagDistrictConnectionCreated_At = {
  __typename?: 'TagDistrictConnectionCreated_at';
  connection?: Maybe<TagDistrictConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagDistrictConnectionId = {
  __typename?: 'TagDistrictConnectionId';
  connection?: Maybe<TagDistrictConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type TagDistrictConnectionName = {
  __typename?: 'TagDistrictConnectionName';
  connection?: Maybe<TagDistrictConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type TagDistrictConnectionUpdated_At = {
  __typename?: 'TagDistrictConnectionUpdated_at';
  connection?: Maybe<TagDistrictConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagDistrictGroupBy = {
  __typename?: 'TagDistrictGroupBy';
  created_at?: Maybe<Array<Maybe<TagDistrictConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagDistrictConnectionId>>>;
  name?: Maybe<Array<Maybe<TagDistrictConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagDistrictConnectionUpdated_At>>>;
};

export type TagDistrictInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type TagGoal = {
  __typename?: 'TagGoal';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TagGoalAggregator = {
  __typename?: 'TagGoalAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TagGoalConnection = {
  __typename?: 'TagGoalConnection';
  aggregate?: Maybe<TagGoalAggregator>;
  groupBy?: Maybe<TagGoalGroupBy>;
  values?: Maybe<Array<Maybe<TagGoal>>>;
};

export type TagGoalConnectionCreated_At = {
  __typename?: 'TagGoalConnectionCreated_at';
  connection?: Maybe<TagGoalConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagGoalConnectionId = {
  __typename?: 'TagGoalConnectionId';
  connection?: Maybe<TagGoalConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type TagGoalConnectionName = {
  __typename?: 'TagGoalConnectionName';
  connection?: Maybe<TagGoalConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type TagGoalConnectionUpdated_At = {
  __typename?: 'TagGoalConnectionUpdated_at';
  connection?: Maybe<TagGoalConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagGoalGroupBy = {
  __typename?: 'TagGoalGroupBy';
  created_at?: Maybe<Array<Maybe<TagGoalConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagGoalConnectionId>>>;
  name?: Maybe<Array<Maybe<TagGoalConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagGoalConnectionUpdated_At>>>;
};

export type TagGoalInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type TagLegalForm = {
  __typename?: 'TagLegalForm';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TagLegalFormAggregator = {
  __typename?: 'TagLegalFormAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TagLegalFormConnection = {
  __typename?: 'TagLegalFormConnection';
  aggregate?: Maybe<TagLegalFormAggregator>;
  groupBy?: Maybe<TagLegalFormGroupBy>;
  values?: Maybe<Array<Maybe<TagLegalForm>>>;
};

export type TagLegalFormConnectionCreated_At = {
  __typename?: 'TagLegalFormConnectionCreated_at';
  connection?: Maybe<TagLegalFormConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagLegalFormConnectionId = {
  __typename?: 'TagLegalFormConnectionId';
  connection?: Maybe<TagLegalFormConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type TagLegalFormConnectionName = {
  __typename?: 'TagLegalFormConnectionName';
  connection?: Maybe<TagLegalFormConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type TagLegalFormConnectionUpdated_At = {
  __typename?: 'TagLegalFormConnectionUpdated_at';
  connection?: Maybe<TagLegalFormConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagLegalFormGroupBy = {
  __typename?: 'TagLegalFormGroupBy';
  created_at?: Maybe<Array<Maybe<TagLegalFormConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagLegalFormConnectionId>>>;
  name?: Maybe<Array<Maybe<TagLegalFormConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagLegalFormConnectionUpdated_At>>>;
};

export type TagLegalFormInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type TagProgram = {
  __typename?: 'TagProgram';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TagProgramAggregator = {
  __typename?: 'TagProgramAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TagProgramConnection = {
  __typename?: 'TagProgramConnection';
  aggregate?: Maybe<TagProgramAggregator>;
  groupBy?: Maybe<TagProgramGroupBy>;
  values?: Maybe<Array<Maybe<TagProgram>>>;
};

export type TagProgramConnectionCreated_At = {
  __typename?: 'TagProgramConnectionCreated_at';
  connection?: Maybe<TagProgramConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagProgramConnectionId = {
  __typename?: 'TagProgramConnectionId';
  connection?: Maybe<TagProgramConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type TagProgramConnectionName = {
  __typename?: 'TagProgramConnectionName';
  connection?: Maybe<TagProgramConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type TagProgramConnectionUpdated_At = {
  __typename?: 'TagProgramConnectionUpdated_at';
  connection?: Maybe<TagProgramConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagProgramGroupBy = {
  __typename?: 'TagProgramGroupBy';
  created_at?: Maybe<Array<Maybe<TagProgramConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagProgramConnectionId>>>;
  name?: Maybe<Array<Maybe<TagProgramConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagProgramConnectionUpdated_At>>>;
};

export type TagProgramInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type TagSupportField = {
  __typename?: 'TagSupportField';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TagSupportFieldAggregator = {
  __typename?: 'TagSupportFieldAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TagSupportFieldConnection = {
  __typename?: 'TagSupportFieldConnection';
  aggregate?: Maybe<TagSupportFieldAggregator>;
  groupBy?: Maybe<TagSupportFieldGroupBy>;
  values?: Maybe<Array<Maybe<TagSupportField>>>;
};

export type TagSupportFieldConnectionCreated_At = {
  __typename?: 'TagSupportFieldConnectionCreated_at';
  connection?: Maybe<TagSupportFieldConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagSupportFieldConnectionId = {
  __typename?: 'TagSupportFieldConnectionId';
  connection?: Maybe<TagSupportFieldConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type TagSupportFieldConnectionName = {
  __typename?: 'TagSupportFieldConnectionName';
  connection?: Maybe<TagSupportFieldConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type TagSupportFieldConnectionUpdated_At = {
  __typename?: 'TagSupportFieldConnectionUpdated_at';
  connection?: Maybe<TagSupportFieldConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagSupportFieldGroupBy = {
  __typename?: 'TagSupportFieldGroupBy';
  created_at?: Maybe<Array<Maybe<TagSupportFieldConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagSupportFieldConnectionId>>>;
  name?: Maybe<Array<Maybe<TagSupportFieldConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagSupportFieldConnectionUpdated_At>>>;
};

export type TagSupportFieldInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type TagYear = {
  __typename?: 'TagYear';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TagYearAggregator = {
  __typename?: 'TagYearAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TagYearConnection = {
  __typename?: 'TagYearConnection';
  aggregate?: Maybe<TagYearAggregator>;
  groupBy?: Maybe<TagYearGroupBy>;
  values?: Maybe<Array<Maybe<TagYear>>>;
};

export type TagYearConnectionCreated_At = {
  __typename?: 'TagYearConnectionCreated_at';
  connection?: Maybe<TagYearConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagYearConnectionId = {
  __typename?: 'TagYearConnectionId';
  connection?: Maybe<TagYearConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type TagYearConnectionName = {
  __typename?: 'TagYearConnectionName';
  connection?: Maybe<TagYearConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type TagYearConnectionUpdated_At = {
  __typename?: 'TagYearConnectionUpdated_at';
  connection?: Maybe<TagYearConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type TagYearGroupBy = {
  __typename?: 'TagYearGroupBy';
  created_at?: Maybe<Array<Maybe<TagYearConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagYearConnectionId>>>;
  name?: Maybe<Array<Maybe<TagYearConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagYearConnectionUpdated_At>>>;
};

export type TagYearInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']['output']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']['output']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']['output']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']['output']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  username: Scalars['String']['input'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  controller: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  policy?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String']['output'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']['output']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']['output']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateBlogPostInput = {
  data?: InputMaybe<BlogPostInput>;
};

export type CreateBlogPostPayload = {
  __typename?: 'createBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type CreateContactInput = {
  data?: InputMaybe<ContactInput>;
};

export type CreateContactPayload = {
  __typename?: 'createContactPayload';
  contact?: Maybe<Contacts>;
};

export type CreateDocumentInput = {
  data?: InputMaybe<DocumentInput>;
};

export type CreateDocumentPayload = {
  __typename?: 'createDocumentPayload';
  document?: Maybe<Documents>;
};

export type CreateGrantInput = {
  data?: InputMaybe<GrantInput>;
};

export type CreateGrantPayload = {
  __typename?: 'createGrantPayload';
  grant?: Maybe<Grants>;
};

export type CreateProjectInput = {
  data?: InputMaybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Project>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTagCategoryInput = {
  data?: InputMaybe<TagCategoryInput>;
};

export type CreateTagCategoryPayload = {
  __typename?: 'createTagCategoryPayload';
  tagCategory?: Maybe<TagCategory>;
};

export type CreateTagDistrictInput = {
  data?: InputMaybe<TagDistrictInput>;
};

export type CreateTagDistrictPayload = {
  __typename?: 'createTagDistrictPayload';
  tagDistrict?: Maybe<TagDistrict>;
};

export type CreateTagGoalInput = {
  data?: InputMaybe<TagGoalInput>;
};

export type CreateTagGoalPayload = {
  __typename?: 'createTagGoalPayload';
  tagGoal?: Maybe<TagGoal>;
};

export type CreateTagLegalFormInput = {
  data?: InputMaybe<TagLegalFormInput>;
};

export type CreateTagLegalFormPayload = {
  __typename?: 'createTagLegalFormPayload';
  tagLegalForm?: Maybe<TagLegalForm>;
};

export type CreateTagProgramInput = {
  data?: InputMaybe<TagProgramInput>;
};

export type CreateTagProgramPayload = {
  __typename?: 'createTagProgramPayload';
  tagProgram?: Maybe<TagProgram>;
};

export type CreateTagSupportFieldInput = {
  data?: InputMaybe<TagSupportFieldInput>;
};

export type CreateTagSupportFieldPayload = {
  __typename?: 'createTagSupportFieldPayload';
  tagSupportField?: Maybe<TagSupportField>;
};

export type CreateTagYearInput = {
  data?: InputMaybe<TagYearInput>;
};

export type CreateTagYearPayload = {
  __typename?: 'createTagYearPayload';
  tagYear?: Maybe<TagYear>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAboutUsPayload = {
  __typename?: 'deleteAboutUsPayload';
  aboutUs?: Maybe<AboutUs>;
};

export type DeleteBlogPostInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteBlogPostPayload = {
  __typename?: 'deleteBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type DeleteContactInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteContactPayload = {
  __typename?: 'deleteContactPayload';
  contact?: Maybe<Contacts>;
};

export type DeleteDocumentInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteDocumentPayload = {
  __typename?: 'deleteDocumentPayload';
  document?: Maybe<Documents>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGeneralPayload = {
  __typename?: 'deleteGeneralPayload';
  general?: Maybe<General>;
};

export type DeleteGrantInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteGrantPayload = {
  __typename?: 'deleteGrantPayload';
  grant?: Maybe<Grants>;
};

export type DeleteLandingPagePayload = {
  __typename?: 'deleteLandingPagePayload';
  landingPage?: Maybe<LandingPage>;
};

export type DeleteLegalPayload = {
  __typename?: 'deleteLegalPayload';
  legal?: Maybe<Legal>;
};

export type DeleteProjectInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Project>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTagCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagCategoryPayload = {
  __typename?: 'deleteTagCategoryPayload';
  tagCategory?: Maybe<TagCategory>;
};

export type DeleteTagDistrictInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagDistrictPayload = {
  __typename?: 'deleteTagDistrictPayload';
  tagDistrict?: Maybe<TagDistrict>;
};

export type DeleteTagGoalInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagGoalPayload = {
  __typename?: 'deleteTagGoalPayload';
  tagGoal?: Maybe<TagGoal>;
};

export type DeleteTagLegalFormInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagLegalFormPayload = {
  __typename?: 'deleteTagLegalFormPayload';
  tagLegalForm?: Maybe<TagLegalForm>;
};

export type DeleteTagProgramInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagProgramPayload = {
  __typename?: 'deleteTagProgramPayload';
  tagProgram?: Maybe<TagProgram>;
};

export type DeleteTagSupportFieldInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagSupportFieldPayload = {
  __typename?: 'deleteTagSupportFieldPayload';
  tagSupportField?: Maybe<TagSupportField>;
};

export type DeleteTagYearInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagYearPayload = {
  __typename?: 'deleteTagYearPayload';
  tagYear?: Maybe<TagYear>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAboutUsInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  sections?: InputMaybe<Array<InputMaybe<EditComponentBasicComponentsAboutUsSectionInput>>>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditBlogPostInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditComponentBasicComponentsAboutUsSectionInput = {
  detail?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditContactInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name_including_degrees?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditDocumentInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  file?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type EditGeneralInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_account_iban?: InputMaybe<Scalars['String']['input']>;
  bank_account_url?: InputMaybe<Scalars['String']['input']>;
  copyright_text?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook_link?: InputMaybe<Scalars['String']['input']>;
  instagram_link?: InputMaybe<Scalars['String']['input']>;
  newsletter_text?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditGrantInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditLandingPageInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured_projects_bottom?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featured_projects_top?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  grants_button_text?: InputMaybe<Scalars['String']['input']>;
  grants_text?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditLegalInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  gdpr?: InputMaybe<Scalars['String']['input']>;
  project_detail_disclaimer?: InputMaybe<Scalars['String']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditProjectInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  appliciant?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  districts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  legal_form?: InputMaybe<Scalars['ID']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  published_at?: InputMaybe<Scalars['DateTime']['input']>;
  support_fields?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  year?: InputMaybe<Scalars['ID']['input']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type EditTagCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditTagDistrictInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditTagGoalInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditTagLegalFormInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditTagProgramInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditTagSupportFieldInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditTagYearInput = {
  created_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  updated_by?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAboutUsInput = {
  data?: InputMaybe<EditAboutUsInput>;
};

export type UpdateAboutUsPayload = {
  __typename?: 'updateAboutUsPayload';
  aboutUs?: Maybe<AboutUs>;
};

export type UpdateBlogPostInput = {
  data?: InputMaybe<EditBlogPostInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateBlogPostPayload = {
  __typename?: 'updateBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type UpdateContactInput = {
  data?: InputMaybe<EditContactInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateContactPayload = {
  __typename?: 'updateContactPayload';
  contact?: Maybe<Contacts>;
};

export type UpdateDocumentInput = {
  data?: InputMaybe<EditDocumentInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateDocumentPayload = {
  __typename?: 'updateDocumentPayload';
  document?: Maybe<Documents>;
};

export type UpdateGeneralInput = {
  data?: InputMaybe<EditGeneralInput>;
};

export type UpdateGeneralPayload = {
  __typename?: 'updateGeneralPayload';
  general?: Maybe<General>;
};

export type UpdateGrantInput = {
  data?: InputMaybe<EditGrantInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateGrantPayload = {
  __typename?: 'updateGrantPayload';
  grant?: Maybe<Grants>;
};

export type UpdateLandingPageInput = {
  data?: InputMaybe<EditLandingPageInput>;
};

export type UpdateLandingPagePayload = {
  __typename?: 'updateLandingPagePayload';
  landingPage?: Maybe<LandingPage>;
};

export type UpdateLegalInput = {
  data?: InputMaybe<EditLegalInput>;
};

export type UpdateLegalPayload = {
  __typename?: 'updateLegalPayload';
  legal?: Maybe<Legal>;
};

export type UpdateProjectInput = {
  data?: InputMaybe<EditProjectInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Project>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTagCategoryInput = {
  data?: InputMaybe<EditTagCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagCategoryPayload = {
  __typename?: 'updateTagCategoryPayload';
  tagCategory?: Maybe<TagCategory>;
};

export type UpdateTagDistrictInput = {
  data?: InputMaybe<EditTagDistrictInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagDistrictPayload = {
  __typename?: 'updateTagDistrictPayload';
  tagDistrict?: Maybe<TagDistrict>;
};

export type UpdateTagGoalInput = {
  data?: InputMaybe<EditTagGoalInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagGoalPayload = {
  __typename?: 'updateTagGoalPayload';
  tagGoal?: Maybe<TagGoal>;
};

export type UpdateTagLegalFormInput = {
  data?: InputMaybe<EditTagLegalFormInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagLegalFormPayload = {
  __typename?: 'updateTagLegalFormPayload';
  tagLegalForm?: Maybe<TagLegalForm>;
};

export type UpdateTagProgramInput = {
  data?: InputMaybe<EditTagProgramInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagProgramPayload = {
  __typename?: 'updateTagProgramPayload';
  tagProgram?: Maybe<TagProgram>;
};

export type UpdateTagSupportFieldInput = {
  data?: InputMaybe<EditTagSupportFieldInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagSupportFieldPayload = {
  __typename?: 'updateTagSupportFieldPayload';
  tagSupportField?: Maybe<TagSupportField>;
};

export type UpdateTagYearInput = {
  data?: InputMaybe<EditTagYearInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagYearPayload = {
  __typename?: 'updateTagYearPayload';
  tagYear?: Maybe<TagYear>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { __typename?: 'Query', contacts?: Array<{ __typename?: 'Contacts', id: string, full_name_including_degrees: string, role?: string | null, email?: string | null, phone?: string | null, photo?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null> | null, general?: { __typename?: 'General', address?: string | null, bank_account_url?: string | null, bank_account_iban?: string | null } | null };

export type GrantsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GrantsPageQuery = { __typename?: 'Query', general?: { __typename?: 'General', newsletter_text?: string | null } | null, grants?: Array<{ __typename?: 'Grants', id: string, order?: number | null, title: string, description?: string | null, link?: string | null, program?: { __typename?: 'TagProgram', name: string } | null, files?: Array<{ __typename?: 'UploadFile', id: string, url: string, name: string } | null> | null } | null> | null, tagPrograms?: Array<{ __typename?: 'TagProgram', name: string } | null> | null };

export type GdprPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GdprPageQuery = { __typename?: 'Query', legal?: { __typename?: 'Legal', gdpr?: string | null } | null };

export type DocumentsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentsPageQuery = { __typename?: 'Query', general?: { __typename?: 'General', newsletter_text?: string | null } | null, documents?: Array<{ __typename?: 'Documents', id: string, title: string, created_at: any, archived?: boolean | null, file?: { __typename?: 'UploadFile', url: string, ext?: string | null, size: number } | null } | null> | null };

export type AboutUsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutUsPageQuery = { __typename?: 'Query', aboutUs?: { __typename?: 'AboutUs', sections?: Array<{ __typename?: 'ComponentBasicComponentsAboutUsSection', id: string, title?: string | null, detail?: string | null, files?: Array<{ __typename?: 'UploadFile', id: string, name: string, ext?: string | null, size: number, url: string, created_at: any } | null> | null } | null> | null } | null };

export type LandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPageQuery = { __typename?: 'Query', landingPage?: { __typename?: 'LandingPage', grants_text?: string | null, featured_projects_top?: Array<{ __typename?: 'Project', id: string, images?: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, formats?: any | null } | null> | null } | null> | null, featured_projects_bottom?: Array<{ __typename?: 'Project', id: string, images?: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, formats?: any | null } | null> | null } | null> | null } | null };

export type HeaderAndFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderAndFooterQuery = { __typename?: 'Query', general?: { __typename?: 'General', copyright_text?: string | null, phone?: string | null, email?: string | null, facebook_link?: string | null, instagram_link?: string | null } | null };

export type ProjectQueryVariables = Exact<{
  pid: Scalars['ID']['input'];
}>;


export type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, title: string, description?: string | null, categories?: Array<{ __typename?: 'TagCategory', id: string, name: string } | null> | null, year?: { __typename?: 'TagYear', id: string, name: string } | null, districts?: Array<{ __typename?: 'TagDistrict', id: string, name: string } | null> | null, legal_form?: { __typename?: 'TagLegalForm', id: string, name: string } | null, program?: { __typename?: 'TagProgram', id: string, name: string } | null, support_fields?: Array<{ __typename?: 'TagSupportField', id: string, name: string } | null> | null, goals?: Array<{ __typename?: 'TagGoal', id: string, name: string } | null> | null, images?: Array<{ __typename?: 'UploadFile', id: string, alternativeText?: string | null, url: string, formats?: any | null } | null> | null } | null, legal?: { __typename?: 'Legal', project_detail_disclaimer?: string | null } | null };

export type ProjectsTotalCountQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  district?: InputMaybe<Scalars['String']['input']>;
  supportFields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  legalForms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ProjectsTotalCountQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string } | null> | null };

export type ProjectsQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  district?: InputMaybe<Scalars['String']['input']>;
  supportFields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  legalForms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title: string, description?: string | null, images?: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null> | null, categories?: Array<{ __typename?: 'TagCategory', name: string } | null> | null, year?: { __typename?: 'TagYear', name: string } | null, districts?: Array<{ __typename?: 'TagDistrict', name: string } | null> | null, legal_form?: { __typename?: 'TagLegalForm', name: string } | null, program?: { __typename?: 'TagProgram', name: string } | null, support_fields?: Array<{ __typename?: 'TagSupportField', name: string } | null> | null, goals?: Array<{ __typename?: 'TagGoal', name: string } | null> | null } | null> | null };

export type ProjectsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsPageQuery = { __typename?: 'Query', tagCategories?: Array<{ __typename?: 'TagCategory', name: string } | null> | null, tagDistricts?: Array<{ __typename?: 'TagDistrict', name: string } | null> | null, tagGoals?: Array<{ __typename?: 'TagGoal', name: string } | null> | null, tagLegalForms?: Array<{ __typename?: 'TagLegalForm', name: string } | null> | null, tagPrograms?: Array<{ __typename?: 'TagProgram', name: string } | null> | null, tagSupportFields?: Array<{ __typename?: 'TagSupportField', name: string } | null> | null, tagYears?: Array<{ __typename?: 'TagYear', name: string } | null> | null };

export type BlogPostsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsPageQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, title: string, description: string, slug: string, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null> | null };

export type BlogPostsBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type BlogPostsBySlugQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, title: string, description: string, content: string, slug: string, author: string, created_at: any, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null> | null };


export const ContactPageDocument = gql`
    query ContactPage {
  contacts {
    id
    full_name_including_degrees
    role
    email
    phone
    photo {
      url
      formats
    }
  }
  general {
    address
    bank_account_url
    bank_account_iban
  }
}
    `;
export const GrantsPageDocument = gql`
    query GrantsPage {
  general {
    newsletter_text
  }
  grants {
    id
    order
    title
    description
    link
    program {
      name
    }
    files {
      id
      url
      name
    }
  }
  tagPrograms {
    name
  }
}
    `;
export const GdprPageDocument = gql`
    query GdprPage {
  legal {
    gdpr
  }
}
    `;
export const DocumentsPageDocument = gql`
    query DocumentsPage {
  general {
    newsletter_text
  }
  documents(sort: "created_at:desc") {
    id
    title
    created_at
    archived
    file {
      url
      ext
      size
    }
  }
}
    `;
export const AboutUsPageDocument = gql`
    query AboutUsPage {
  aboutUs {
    sections {
      id
      title
      detail
      files {
        id
        name
        ext
        size
        url
        created_at
      }
    }
  }
}
    `;
export const LandingPageDocument = gql`
    query LandingPage {
  landingPage {
    grants_text
    featured_projects_top {
      id
      images {
        alternativeText
        url
        formats
      }
    }
    featured_projects_bottom {
      id
      images {
        alternativeText
        url
        formats
      }
    }
  }
}
    `;
export const HeaderAndFooterDocument = gql`
    query HeaderAndFooter {
  general {
    copyright_text
    phone
    email
    facebook_link
    instagram_link
  }
}
    `;
export const ProjectDocument = gql`
    query Project($pid: ID!) {
  project(id: $pid) {
    id
    title
    description
    categories {
      id
      name
    }
    year {
      id
      name
    }
    districts {
      id
      name
    }
    legal_form {
      id
      name
    }
    program {
      id
      name
    }
    support_fields {
      id
      name
    }
    goals {
      id
      name
    }
    images {
      id
      alternativeText
      url
      formats
    }
  }
  legal {
    project_detail_disclaimer
  }
}
    `;
export const ProjectsTotalCountDocument = gql`
    query ProjectsTotalCount($query: String, $year: String, $program: [String], $categories: [String], $district: String, $supportFields: [String], $goals: [String], $legalForms: [String]) {
  projects(
    where: {year: {name_eq: $year}, program: {name_eq: $program}, categories: {name_in: $categories}, districts: {name_eq: $district}, support_fields: {name_in: $supportFields}, goals: {name_in: $goals}, legal_form: {name_in: $legalForms}, _or: [{title_contains: $query}, {appliciant_contains: $query}]}
  ) {
    id
  }
}
    `;
export const ProjectsDocument = gql`
    query Projects($query: String, $limit: Int, $offset: Int, $year: String, $program: [String], $categories: [String], $district: String, $supportFields: [String], $goals: [String], $legalForms: [String]) {
  projects(
    limit: $limit
    start: $offset
    where: {year: {name_eq: $year}, program: {name_eq: $program}, categories: {name_in: $categories}, districts: {name_eq: $district}, support_fields: {name_in: $supportFields}, goals: {name_in: $goals}, legal_form: {name_in: $legalForms}, _or: [{title_contains: $query}, {appliciant_contains: $query}]}
  ) {
    id
    title
    description
    images {
      url
      alternativeText
      formats
    }
    categories {
      name
    }
    year {
      name
    }
    districts {
      name
    }
    legal_form {
      name
    }
    program {
      name
    }
    support_fields {
      name
    }
    goals {
      name
    }
  }
}
    `;
export const ProjectsPageDocument = gql`
    query ProjectsPage {
  tagCategories {
    name
  }
  tagDistricts {
    name
  }
  tagGoals {
    name
  }
  tagLegalForms {
    name
  }
  tagPrograms {
    name
  }
  tagSupportFields {
    name
  }
  tagYears {
    name
  }
}
    `;
export const BlogPostsPageDocument = gql`
    query BlogPostsPage {
  blogPosts(sort: "created_at:desc") {
    id
    title
    description
    slug
    image {
      url
      alternativeText
      formats
    }
  }
}
    `;
export const BlogPostsBySlugDocument = gql`
    query BlogPostsBySlug($slug: String!) {
  blogPosts(where: {slug: $slug}) {
    id
    title
    description
    content
    slug
    author
    created_at
    image {
      url
      alternativeText
      formats
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ContactPage(variables?: ContactPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContactPageQuery>(ContactPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContactPage', 'query', variables);
    },
    GrantsPage(variables?: GrantsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GrantsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GrantsPageQuery>(GrantsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GrantsPage', 'query', variables);
    },
    GdprPage(variables?: GdprPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GdprPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GdprPageQuery>(GdprPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GdprPage', 'query', variables);
    },
    DocumentsPage(variables?: DocumentsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DocumentsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DocumentsPageQuery>(DocumentsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DocumentsPage', 'query', variables);
    },
    AboutUsPage(variables?: AboutUsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AboutUsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutUsPageQuery>(AboutUsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AboutUsPage', 'query', variables);
    },
    LandingPage(variables?: LandingPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LandingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageQuery>(LandingPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LandingPage', 'query', variables);
    },
    HeaderAndFooter(variables?: HeaderAndFooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HeaderAndFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HeaderAndFooterQuery>(HeaderAndFooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HeaderAndFooter', 'query', variables);
    },
    Project(variables: ProjectQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectQuery>(ProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Project', 'query', variables);
    },
    ProjectsTotalCount(variables?: ProjectsTotalCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProjectsTotalCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsTotalCountQuery>(ProjectsTotalCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectsTotalCount', 'query', variables);
    },
    Projects(variables?: ProjectsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsQuery>(ProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Projects', 'query', variables);
    },
    ProjectsPage(variables?: ProjectsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProjectsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsPageQuery>(ProjectsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectsPage', 'query', variables);
    },
    BlogPostsPage(variables?: BlogPostsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BlogPostsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostsPageQuery>(BlogPostsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogPostsPage', 'query', variables);
    },
    BlogPostsBySlug(variables: BlogPostsBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BlogPostsBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostsBySlugQuery>(BlogPostsBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogPostsBySlug', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;