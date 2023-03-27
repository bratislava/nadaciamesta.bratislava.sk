import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  Time: any;
  Upload: any;
};

export type AboutUs = {
  __typename?: 'AboutUs';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  sections?: Maybe<Array<Maybe<ComponentBasicComponentsAboutUsSection>>>;
  updated_at: Scalars['DateTime'];
};

export type AboutUsInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  sections?: InputMaybe<Array<InputMaybe<ComponentBasicComponentsAboutUsSectionInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  author: Scalars['String'];
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type BlogPostAggregator = {
  __typename?: 'BlogPostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['String']>;
};

export type BlogPostConnectionContent = {
  __typename?: 'BlogPostConnectionContent';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BlogPostConnectionCreated_At = {
  __typename?: 'BlogPostConnectionCreated_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BlogPostConnectionDescription = {
  __typename?: 'BlogPostConnectionDescription';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BlogPostConnectionId = {
  __typename?: 'BlogPostConnectionId';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BlogPostConnectionImage = {
  __typename?: 'BlogPostConnectionImage';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BlogPostConnectionPublished_At = {
  __typename?: 'BlogPostConnectionPublished_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BlogPostConnectionSlug = {
  __typename?: 'BlogPostConnectionSlug';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BlogPostConnectionTitle = {
  __typename?: 'BlogPostConnectionTitle';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BlogPostConnectionUpdated_At = {
  __typename?: 'BlogPostConnectionUpdated_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']>;
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
  author?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ComponentBasicComponentsAboutUsSection = {
  __typename?: 'ComponentBasicComponentsAboutUsSection';
  detail?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentBasicComponentsAboutUsSectionFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentBasicComponentsAboutUsSectionInput = {
  detail?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  full_name_including_degrees: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['ID']>;
  role?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Contacts = {
  __typename?: 'Contacts';
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  full_name_including_degrees: Scalars['String'];
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<UploadFile>;
  role?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type ContactsAggregator = {
  __typename?: 'ContactsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type ContactsConnectionEmail = {
  __typename?: 'ContactsConnectionEmail';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionFull_Name_Including_Degrees = {
  __typename?: 'ContactsConnectionFull_name_including_degrees';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionId = {
  __typename?: 'ContactsConnectionId';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContactsConnectionPhone = {
  __typename?: 'ContactsConnectionPhone';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionPhoto = {
  __typename?: 'ContactsConnectionPhoto';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContactsConnectionRole = {
  __typename?: 'ContactsConnectionRole';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionUpdated_At = {
  __typename?: 'ContactsConnectionUpdated_at';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['DateTime']>;
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
  archived?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  file?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Documents = {
  __typename?: 'Documents';
  archived?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  file?: Maybe<UploadFile>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type DocumentsAggregator = {
  __typename?: 'DocumentsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['Boolean']>;
};

export type DocumentsConnectionCreated_At = {
  __typename?: 'DocumentsConnectionCreated_at';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DocumentsConnectionFile = {
  __typename?: 'DocumentsConnectionFile';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DocumentsConnectionId = {
  __typename?: 'DocumentsConnectionId';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DocumentsConnectionPublished_At = {
  __typename?: 'DocumentsConnectionPublished_at';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DocumentsConnectionTitle = {
  __typename?: 'DocumentsConnectionTitle';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DocumentsConnectionUpdated_At = {
  __typename?: 'DocumentsConnectionUpdated_at';
  connection?: Maybe<DocumentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
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
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type General = {
  __typename?: 'General';
  address?: Maybe<Scalars['String']>;
  bank_account_iban?: Maybe<Scalars['String']>;
  bank_account_url?: Maybe<Scalars['String']>;
  copyright_text?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  facebook_link?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instagram_link?: Maybe<Scalars['String']>;
  newsletter_text?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type GeneralInput = {
  address?: InputMaybe<Scalars['String']>;
  bank_account_iban?: InputMaybe<Scalars['String']>;
  bank_account_url?: InputMaybe<Scalars['String']>;
  copyright_text?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  facebook_link?: InputMaybe<Scalars['String']>;
  instagram_link?: InputMaybe<Scalars['String']>;
  newsletter_text?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type GrantInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  link?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  program?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Grants = {
  __typename?: 'Grants';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  program?: Maybe<TagProgram>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type GrantsFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type GrantsAggregator = {
  __typename?: 'GrantsAggregator';
  avg?: Maybe<GrantsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GrantsAggregatorMax>;
  min?: Maybe<GrantsAggregatorMin>;
  sum?: Maybe<GrantsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GrantsAggregatorAvg = {
  __typename?: 'GrantsAggregatorAvg';
  order?: Maybe<Scalars['Float']>;
};

export type GrantsAggregatorMax = {
  __typename?: 'GrantsAggregatorMax';
  order?: Maybe<Scalars['Float']>;
};

export type GrantsAggregatorMin = {
  __typename?: 'GrantsAggregatorMin';
  order?: Maybe<Scalars['Float']>;
};

export type GrantsAggregatorSum = {
  __typename?: 'GrantsAggregatorSum';
  order?: Maybe<Scalars['Float']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type GrantsConnectionDescription = {
  __typename?: 'GrantsConnectionDescription';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GrantsConnectionId = {
  __typename?: 'GrantsConnectionId';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GrantsConnectionLink = {
  __typename?: 'GrantsConnectionLink';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GrantsConnectionOrder = {
  __typename?: 'GrantsConnectionOrder';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type GrantsConnectionProgram = {
  __typename?: 'GrantsConnectionProgram';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GrantsConnectionPublished_At = {
  __typename?: 'GrantsConnectionPublished_at';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GrantsConnectionTitle = {
  __typename?: 'GrantsConnectionTitle';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GrantsConnectionUpdated_At = {
  __typename?: 'GrantsConnectionUpdated_at';
  connection?: Maybe<GrantsConnection>;
  key?: Maybe<Scalars['DateTime']>;
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
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LandingPage = {
  __typename?: 'LandingPage';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  featured_projects_bottom?: Maybe<Array<Maybe<Project>>>;
  featured_projects_top?: Maybe<Array<Maybe<Project>>>;
  grants_button_text?: Maybe<Scalars['String']>;
  grants_text?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
};


export type LandingPageFeatured_Projects_BottomArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type LandingPageFeatured_Projects_TopArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type LandingPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  featured_projects_bottom?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  featured_projects_top?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  grants_button_text?: InputMaybe<Scalars['String']>;
  grants_text?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Legal = {
  __typename?: 'Legal';
  created_at: Scalars['DateTime'];
  gdpr?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  project_detail_disclaimer?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type LegalInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  gdpr?: InputMaybe<Scalars['String']>;
  project_detail_disclaimer?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
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
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
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
  id: Scalars['ID'];
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
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  amount?: Maybe<Scalars['String']>;
  appliciant: Scalars['String'];
  categories?: Maybe<Array<Maybe<TagCategory>>>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  districts?: Maybe<Array<Maybe<TagDistrict>>>;
  goals?: Maybe<Array<Maybe<TagGoal>>>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<UploadFile>>>;
  legal_form?: Maybe<TagLegalForm>;
  program?: Maybe<TagProgram>;
  published_at?: Maybe<Scalars['DateTime']>;
  support_fields?: Maybe<Array<Maybe<TagSupportField>>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  year?: Maybe<TagYear>;
};


export type ProjectCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ProjectDistrictsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ProjectGoalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ProjectImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ProjectSupport_FieldsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionAppliciant = {
  __typename?: 'ProjectConnectionAppliciant';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionCreated_At = {
  __typename?: 'ProjectConnectionCreated_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionDescription = {
  __typename?: 'ProjectConnectionDescription';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectConnectionLegal_Form = {
  __typename?: 'ProjectConnectionLegal_form';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectConnectionProgram = {
  __typename?: 'ProjectConnectionProgram';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProjectConnectionPublished_At = {
  __typename?: 'ProjectConnectionPublished_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionTitle = {
  __typename?: 'ProjectConnectionTitle';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProjectConnectionUpdated_At = {
  __typename?: 'ProjectConnectionUpdated_at';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProjectConnectionYear = {
  __typename?: 'ProjectConnectionYear';
  connection?: Maybe<ProjectConnection>;
  key?: Maybe<Scalars['ID']>;
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
  amount?: InputMaybe<Scalars['String']>;
  appliciant: Scalars['String'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  districts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  legal_form?: InputMaybe<Scalars['ID']>;
  program?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  support_fields?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  year?: InputMaybe<Scalars['ID']>;
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
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBlogPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBlogPostsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryContactsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryDocumentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGeneralArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGrantArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGrantsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGrantsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryLandingPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLegalArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryProjectsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagDistrictArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagDistrictsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagDistrictsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagGoalArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagGoalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagGoalsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagLegalFormArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagLegalFormsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagLegalFormsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagProgramArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagProgramsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagProgramsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagSupportFieldArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagSupportFieldsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagSupportFieldsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagYearArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagYearsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagYearsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagCategoryAggregator = {
  __typename?: 'TagCategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type TagCategoryConnectionId = {
  __typename?: 'TagCategoryConnectionId';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagCategoryConnectionName = {
  __typename?: 'TagCategoryConnectionName';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagCategoryConnectionUpdated_At = {
  __typename?: 'TagCategoryConnectionUpdated_at';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagCategoryGroupBy = {
  __typename?: 'TagCategoryGroupBy';
  created_at?: Maybe<Array<Maybe<TagCategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagCategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<TagCategoryConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagCategoryConnectionUpdated_At>>>;
};

export type TagCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TagDistrict = {
  __typename?: 'TagDistrict';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagDistrictAggregator = {
  __typename?: 'TagDistrictAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type TagDistrictConnectionId = {
  __typename?: 'TagDistrictConnectionId';
  connection?: Maybe<TagDistrictConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagDistrictConnectionName = {
  __typename?: 'TagDistrictConnectionName';
  connection?: Maybe<TagDistrictConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagDistrictConnectionUpdated_At = {
  __typename?: 'TagDistrictConnectionUpdated_at';
  connection?: Maybe<TagDistrictConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagDistrictGroupBy = {
  __typename?: 'TagDistrictGroupBy';
  created_at?: Maybe<Array<Maybe<TagDistrictConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagDistrictConnectionId>>>;
  name?: Maybe<Array<Maybe<TagDistrictConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagDistrictConnectionUpdated_At>>>;
};

export type TagDistrictInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TagGoal = {
  __typename?: 'TagGoal';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagGoalAggregator = {
  __typename?: 'TagGoalAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type TagGoalConnectionId = {
  __typename?: 'TagGoalConnectionId';
  connection?: Maybe<TagGoalConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagGoalConnectionName = {
  __typename?: 'TagGoalConnectionName';
  connection?: Maybe<TagGoalConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagGoalConnectionUpdated_At = {
  __typename?: 'TagGoalConnectionUpdated_at';
  connection?: Maybe<TagGoalConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagGoalGroupBy = {
  __typename?: 'TagGoalGroupBy';
  created_at?: Maybe<Array<Maybe<TagGoalConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagGoalConnectionId>>>;
  name?: Maybe<Array<Maybe<TagGoalConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagGoalConnectionUpdated_At>>>;
};

export type TagGoalInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TagLegalForm = {
  __typename?: 'TagLegalForm';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagLegalFormAggregator = {
  __typename?: 'TagLegalFormAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type TagLegalFormConnectionId = {
  __typename?: 'TagLegalFormConnectionId';
  connection?: Maybe<TagLegalFormConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagLegalFormConnectionName = {
  __typename?: 'TagLegalFormConnectionName';
  connection?: Maybe<TagLegalFormConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagLegalFormConnectionUpdated_At = {
  __typename?: 'TagLegalFormConnectionUpdated_at';
  connection?: Maybe<TagLegalFormConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagLegalFormGroupBy = {
  __typename?: 'TagLegalFormGroupBy';
  created_at?: Maybe<Array<Maybe<TagLegalFormConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagLegalFormConnectionId>>>;
  name?: Maybe<Array<Maybe<TagLegalFormConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagLegalFormConnectionUpdated_At>>>;
};

export type TagLegalFormInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TagProgram = {
  __typename?: 'TagProgram';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagProgramAggregator = {
  __typename?: 'TagProgramAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type TagProgramConnectionId = {
  __typename?: 'TagProgramConnectionId';
  connection?: Maybe<TagProgramConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagProgramConnectionName = {
  __typename?: 'TagProgramConnectionName';
  connection?: Maybe<TagProgramConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagProgramConnectionUpdated_At = {
  __typename?: 'TagProgramConnectionUpdated_at';
  connection?: Maybe<TagProgramConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagProgramGroupBy = {
  __typename?: 'TagProgramGroupBy';
  created_at?: Maybe<Array<Maybe<TagProgramConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagProgramConnectionId>>>;
  name?: Maybe<Array<Maybe<TagProgramConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagProgramConnectionUpdated_At>>>;
};

export type TagProgramInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TagSupportField = {
  __typename?: 'TagSupportField';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagSupportFieldAggregator = {
  __typename?: 'TagSupportFieldAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type TagSupportFieldConnectionId = {
  __typename?: 'TagSupportFieldConnectionId';
  connection?: Maybe<TagSupportFieldConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagSupportFieldConnectionName = {
  __typename?: 'TagSupportFieldConnectionName';
  connection?: Maybe<TagSupportFieldConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagSupportFieldConnectionUpdated_At = {
  __typename?: 'TagSupportFieldConnectionUpdated_at';
  connection?: Maybe<TagSupportFieldConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagSupportFieldGroupBy = {
  __typename?: 'TagSupportFieldGroupBy';
  created_at?: Maybe<Array<Maybe<TagSupportFieldConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagSupportFieldConnectionId>>>;
  name?: Maybe<Array<Maybe<TagSupportFieldConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagSupportFieldConnectionUpdated_At>>>;
};

export type TagSupportFieldInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TagYear = {
  __typename?: 'TagYear';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagYearAggregator = {
  __typename?: 'TagYearAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['DateTime']>;
};

export type TagYearConnectionId = {
  __typename?: 'TagYearConnectionId';
  connection?: Maybe<TagYearConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagYearConnectionName = {
  __typename?: 'TagYearConnectionName';
  connection?: Maybe<TagYearConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagYearConnectionUpdated_At = {
  __typename?: 'TagYearConnectionUpdated_at';
  connection?: Maybe<TagYearConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagYearGroupBy = {
  __typename?: 'TagYearGroupBy';
  created_at?: Maybe<Array<Maybe<TagYearConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagYearConnectionId>>>;
  name?: Maybe<Array<Maybe<TagYearConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TagYearConnectionUpdated_At>>>;
};

export type TagYearInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
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
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
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
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
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
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
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
  created_by?: InputMaybe<Scalars['ID']>;
  sections?: InputMaybe<Array<InputMaybe<EditComponentBasicComponentsAboutUsSectionInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditBlogPostInput = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBasicComponentsAboutUsSectionInput = {
  detail?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditContactInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  full_name_including_degrees?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['ID']>;
  role?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditDocumentInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  file?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditGeneralInput = {
  address?: InputMaybe<Scalars['String']>;
  bank_account_iban?: InputMaybe<Scalars['String']>;
  bank_account_url?: InputMaybe<Scalars['String']>;
  copyright_text?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  facebook_link?: InputMaybe<Scalars['String']>;
  instagram_link?: InputMaybe<Scalars['String']>;
  newsletter_text?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditGrantInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  link?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  program?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLandingPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  featured_projects_bottom?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  featured_projects_top?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  grants_button_text?: InputMaybe<Scalars['String']>;
  grants_text?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLegalInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  gdpr?: InputMaybe<Scalars['String']>;
  project_detail_disclaimer?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditProjectInput = {
  amount?: InputMaybe<Scalars['String']>;
  appliciant?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  districts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  legal_form?: InputMaybe<Scalars['ID']>;
  program?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  support_fields?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  year?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditTagCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagDistrictInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagGoalInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagLegalFormInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagProgramInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagSupportFieldInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagYearInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
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
  pid: Scalars['ID'];
}>;


export type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, title: string, description?: string | null, categories?: Array<{ __typename?: 'TagCategory', id: string, name: string } | null> | null, year?: { __typename?: 'TagYear', id: string, name: string } | null, districts?: Array<{ __typename?: 'TagDistrict', id: string, name: string } | null> | null, legal_form?: { __typename?: 'TagLegalForm', id: string, name: string } | null, program?: { __typename?: 'TagProgram', id: string, name: string } | null, support_fields?: Array<{ __typename?: 'TagSupportField', id: string, name: string } | null> | null, goals?: Array<{ __typename?: 'TagGoal', id: string, name: string } | null> | null, images?: Array<{ __typename?: 'UploadFile', id: string, alternativeText?: string | null, url: string, formats?: any | null } | null> | null } | null, legal?: { __typename?: 'Legal', project_detail_disclaimer?: string | null } | null };

export type ProjectsTotalCountQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
  program?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  district?: InputMaybe<Scalars['String']>;
  supportFields?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  legalForms?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ProjectsTotalCountQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string } | null> | null };

export type ProjectsQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['String']>;
  program?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  district?: InputMaybe<Scalars['String']>;
  supportFields?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  legalForms?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title: string, description?: string | null, images?: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null> | null, categories?: Array<{ __typename?: 'TagCategory', name: string } | null> | null, year?: { __typename?: 'TagYear', name: string } | null, districts?: Array<{ __typename?: 'TagDistrict', name: string } | null> | null, legal_form?: { __typename?: 'TagLegalForm', name: string } | null, program?: { __typename?: 'TagProgram', name: string } | null, support_fields?: Array<{ __typename?: 'TagSupportField', name: string } | null> | null, goals?: Array<{ __typename?: 'TagGoal', name: string } | null> | null } | null> | null };

export type ProjectsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsPageQuery = { __typename?: 'Query', tagCategories?: Array<{ __typename?: 'TagCategory', name: string } | null> | null, tagDistricts?: Array<{ __typename?: 'TagDistrict', name: string } | null> | null, tagGoals?: Array<{ __typename?: 'TagGoal', name: string } | null> | null, tagLegalForms?: Array<{ __typename?: 'TagLegalForm', name: string } | null> | null, tagPrograms?: Array<{ __typename?: 'TagProgram', name: string } | null> | null, tagSupportFields?: Array<{ __typename?: 'TagSupportField', name: string } | null> | null, tagYears?: Array<{ __typename?: 'TagYear', name: string } | null> | null };

export type BlogPostsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsPageQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, title: string, description: string, slug: string, image?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null> | null };

export type BlogPostsBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ContactPage(variables?: ContactPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContactPageQuery>(ContactPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContactPage', 'query');
    },
    GrantsPage(variables?: GrantsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GrantsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GrantsPageQuery>(GrantsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GrantsPage', 'query');
    },
    GdprPage(variables?: GdprPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GdprPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GdprPageQuery>(GdprPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GdprPage', 'query');
    },
    DocumentsPage(variables?: DocumentsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DocumentsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DocumentsPageQuery>(DocumentsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DocumentsPage', 'query');
    },
    AboutUsPage(variables?: AboutUsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AboutUsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutUsPageQuery>(AboutUsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AboutUsPage', 'query');
    },
    LandingPage(variables?: LandingPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageQuery>(LandingPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LandingPage', 'query');
    },
    HeaderAndFooter(variables?: HeaderAndFooterQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HeaderAndFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HeaderAndFooterQuery>(HeaderAndFooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HeaderAndFooter', 'query');
    },
    Project(variables: ProjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectQuery>(ProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Project', 'query');
    },
    ProjectsTotalCount(variables?: ProjectsTotalCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectsTotalCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsTotalCountQuery>(ProjectsTotalCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectsTotalCount', 'query');
    },
    Projects(variables?: ProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsQuery>(ProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Projects', 'query');
    },
    ProjectsPage(variables?: ProjectsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsPageQuery>(ProjectsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectsPage', 'query');
    },
    BlogPostsPage(variables?: BlogPostsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BlogPostsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostsPageQuery>(BlogPostsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogPostsPage', 'query');
    },
    BlogPostsBySlug(variables: BlogPostsBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BlogPostsBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostsBySlugQuery>(BlogPostsBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BlogPostsBySlug', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;