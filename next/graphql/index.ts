/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { GraphQLClient, type RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type DateTimeFilterInput = {
  and?: Array<string | null | undefined> | null | undefined;
  between?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  containsi?: string | null | undefined;
  endsWith?: string | null | undefined;
  eq?: string | null | undefined;
  eqi?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  ne?: string | null | undefined;
  nei?: string | null | undefined;
  not?: DateTimeFilterInput | null | undefined;
  notContains?: string | null | undefined;
  notContainsi?: string | null | undefined;
  notIn?: Array<string | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | null | undefined> | null | undefined;
  startsWith?: string | null | undefined;
};

export type IdFilterInput = {
  and?: Array<string | number | null | undefined> | null | undefined;
  between?: Array<string | number | null | undefined> | null | undefined;
  contains?: string | number | null | undefined;
  containsi?: string | number | null | undefined;
  endsWith?: string | number | null | undefined;
  eq?: string | number | null | undefined;
  eqi?: string | number | null | undefined;
  gt?: string | number | null | undefined;
  gte?: string | number | null | undefined;
  in?: Array<string | number | null | undefined> | null | undefined;
  lt?: string | number | null | undefined;
  lte?: string | number | null | undefined;
  ne?: string | number | null | undefined;
  nei?: string | number | null | undefined;
  not?: IdFilterInput | null | undefined;
  notContains?: string | number | null | undefined;
  notContainsi?: string | number | null | undefined;
  notIn?: Array<string | number | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | number | null | undefined> | null | undefined;
  startsWith?: string | number | null | undefined;
};

export type ProjectFiltersInput = {
  amount?: StringFilterInput | null | undefined;
  and?: Array<ProjectFiltersInput | null | undefined> | null | undefined;
  appliciant?: StringFilterInput | null | undefined;
  categories?: TagCategoryFiltersInput | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  description?: StringFilterInput | null | undefined;
  districts?: TagDistrictFiltersInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  goals?: TagGoalFiltersInput | null | undefined;
  legal_form?: TagLegalFormFiltersInput | null | undefined;
  not?: ProjectFiltersInput | null | undefined;
  or?: Array<ProjectFiltersInput | null | undefined> | null | undefined;
  program?: TagProgramFiltersInput | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  support_fields?: TagSupportFieldFiltersInput | null | undefined;
  title?: StringFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
  year?: TagYearFiltersInput | null | undefined;
};

export type StringFilterInput = {
  and?: Array<string | null | undefined> | null | undefined;
  between?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  containsi?: string | null | undefined;
  endsWith?: string | null | undefined;
  eq?: string | null | undefined;
  eqi?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  ne?: string | null | undefined;
  nei?: string | null | undefined;
  not?: StringFilterInput | null | undefined;
  notContains?: string | null | undefined;
  notContainsi?: string | null | undefined;
  notIn?: Array<string | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | null | undefined> | null | undefined;
  startsWith?: string | null | undefined;
};

export type TagCategoryFiltersInput = {
  and?: Array<TagCategoryFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  name?: StringFilterInput | null | undefined;
  not?: TagCategoryFiltersInput | null | undefined;
  or?: Array<TagCategoryFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type TagDistrictFiltersInput = {
  and?: Array<TagDistrictFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  name?: StringFilterInput | null | undefined;
  not?: TagDistrictFiltersInput | null | undefined;
  or?: Array<TagDistrictFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type TagGoalFiltersInput = {
  and?: Array<TagGoalFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  name?: StringFilterInput | null | undefined;
  not?: TagGoalFiltersInput | null | undefined;
  or?: Array<TagGoalFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type TagLegalFormFiltersInput = {
  and?: Array<TagLegalFormFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  name?: StringFilterInput | null | undefined;
  not?: TagLegalFormFiltersInput | null | undefined;
  or?: Array<TagLegalFormFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type TagProgramFiltersInput = {
  and?: Array<TagProgramFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  name?: StringFilterInput | null | undefined;
  not?: TagProgramFiltersInput | null | undefined;
  or?: Array<TagProgramFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type TagSupportFieldFiltersInput = {
  and?: Array<TagSupportFieldFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  name?: StringFilterInput | null | undefined;
  not?: TagSupportFieldFiltersInput | null | undefined;
  or?: Array<TagSupportFieldFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type TagYearFiltersInput = {
  and?: Array<TagYearFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  name?: StringFilterInput | null | undefined;
  not?: TagYearFiltersInput | null | undefined;
  or?: Array<TagYearFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { contacts: Array<{ documentId: string, full_name_including_degrees: string, role: string | null, email: string | null, phone: string | null, photo: { url: string, formats: any } } | null>, general: { address: string | null, bank_account_url: string | null, bank_account_iban: string | null } | null };

export type GrantsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GrantsPageQuery = { general: { newsletter_text: string | null } | null, grants: Array<{ documentId: string, order: number | null, title: string, description: string | null, link: string | null, program: { name: string } | null, files: Array<{ documentId: string, url: string, name: string } | null> } | null>, tagPrograms: Array<{ name: string } | null> };

export type GdprPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GdprPageQuery = { legal: { gdpr: string | null } | null };

export type DocumentsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentsPageQuery = { general: { newsletter_text: string | null } | null, documents: Array<{ documentId: string, title: string, createdAt: string | null, archived: boolean | null, file: { url: string, ext: string | null, size: number } } | null> };

export type AboutUsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutUsPageQuery = { aboutUs: { sections: Array<{ id: string, title: string | null, detail: string | null, files: Array<{ documentId: string, name: string, ext: string | null, size: number, url: string, createdAt: string | null } | null> } | null> | null } | null };

export type LandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPageQuery = { landingPage: { grants_text: string | null, featured_projects_top: Array<{ documentId: string, images: Array<{ alternativeText: string | null, url: string, formats: any } | null> } | null>, featured_projects_bottom: Array<{ documentId: string, images: Array<{ alternativeText: string | null, url: string, formats: any } | null> } | null> } | null };

export type HeaderAndFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderAndFooterQuery = { general: { copyright_text: string | null, phone: string | null, email: string | null, facebook_link: string | null, instagram_link: string | null } | null };

export type ProjectQueryVariables = Exact<{
  documentId: string | number;
}>;


export type ProjectQuery = { project: { documentId: string, title: string, description: string | null, categories: Array<{ documentId: string, name: string } | null>, year: { documentId: string, name: string } | null, districts: Array<{ documentId: string, name: string } | null>, legal_form: { documentId: string, name: string } | null, program: { documentId: string, name: string } | null, support_fields: Array<{ documentId: string, name: string } | null>, goals: Array<{ documentId: string, name: string } | null>, images: Array<{ documentId: string, alternativeText: string | null, url: string, formats: any } | null> } | null, legal: { project_detail_disclaimer: string | null } | null };

export type ProjectsQueryVariables = Exact<{
  filters?: ProjectFiltersInput | null | undefined;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type ProjectsQuery = { projects: Array<{ documentId: string, title: string, description: string | null, images: Array<{ url: string, alternativeText: string | null, formats: any } | null>, categories: Array<{ name: string } | null>, year: { name: string } | null, districts: Array<{ name: string } | null>, legal_form: { name: string } | null, program: { name: string } | null, support_fields: Array<{ name: string } | null>, goals: Array<{ name: string } | null> } | null>, projects_connection: { pageInfo: { total: number } } | null };

export type ProjectsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsPageQuery = { tagCategories: Array<{ name: string } | null>, tagDistricts: Array<{ name: string } | null>, tagGoals: Array<{ name: string } | null>, tagLegalForms: Array<{ name: string } | null>, tagPrograms: Array<{ name: string } | null>, tagSupportFields: Array<{ name: string } | null>, tagYears: Array<{ name: string } | null> };

export type BlogPostsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsPageQuery = { blogPosts: Array<{ documentId: string, title: string, description: string, slug: string, image: { url: string, alternativeText: string | null, formats: any } } | null> };

export type BlogPostsBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type BlogPostsBySlugQuery = { blogPosts: Array<{ documentId: string, title: string, description: string, content: string, slug: string, author: string, createdAt: string | null, image: { url: string, alternativeText: string | null, formats: any } } | null> };


export const ContactPageDocument = gql`
    query ContactPage {
  contacts(sort: "id:asc") {
    documentId
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
  grants(sort: "id:asc") {
    documentId
    order
    title
    description
    link
    program {
      name
    }
    files {
      documentId
      url
      name
    }
  }
  tagPrograms(sort: "id:asc") {
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
  documents(sort: "createdAt:desc") {
    documentId
    title
    createdAt
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
        documentId
        name
        ext
        size
        url
        createdAt
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
      documentId
      images {
        alternativeText
        url
        formats
      }
    }
    featured_projects_bottom {
      documentId
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
    query Project($documentId: ID!) {
  project(documentId: $documentId) {
    documentId
    title
    description
    categories(sort: "id:asc") {
      documentId
      name
    }
    year {
      documentId
      name
    }
    districts(sort: "id:asc") {
      documentId
      name
    }
    legal_form {
      documentId
      name
    }
    program {
      documentId
      name
    }
    support_fields(sort: "id:asc") {
      documentId
      name
    }
    goals(sort: "id:asc") {
      documentId
      name
    }
    images {
      documentId
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
export const ProjectsDocument = gql`
    query Projects($filters: ProjectFiltersInput, $limit: Int, $offset: Int) {
  projects(
    filters: $filters
    pagination: {limit: $limit, start: $offset}
    sort: "id:asc"
  ) {
    documentId
    title
    description
    images {
      url
      alternativeText
      formats
    }
    categories(sort: "id:asc") {
      name
    }
    year {
      name
    }
    districts(sort: "id:asc") {
      name
    }
    legal_form {
      name
    }
    program {
      name
    }
    support_fields(sort: "id:asc") {
      name
    }
    goals(sort: "id:asc") {
      name
    }
  }
  projects_connection(filters: $filters) {
    pageInfo {
      total
    }
  }
}
    `;
export const ProjectsPageDocument = gql`
    query ProjectsPage {
  tagCategories(sort: "id:asc") {
    name
  }
  tagDistricts(sort: "id:asc") {
    name
  }
  tagGoals(sort: "id:asc") {
    name
  }
  tagLegalForms(sort: "id:asc") {
    name
  }
  tagPrograms(sort: "id:asc") {
    name
  }
  tagSupportFields(sort: "id:asc") {
    name
  }
  tagYears(sort: "id:asc") {
    name
  }
}
    `;
export const BlogPostsPageDocument = gql`
    query BlogPostsPage {
  blogPosts(sort: "createdAt:desc") {
    documentId
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
  blogPosts(filters: {slug: {eq: $slug}}) {
    documentId
    title
    description
    content
    slug
    author
    createdAt
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
    ContactPage(variables?: ContactPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContactPageQuery>({ document: ContactPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ContactPage', 'query', variables);
    },
    GrantsPage(variables?: GrantsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GrantsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GrantsPageQuery>({ document: GrantsPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GrantsPage', 'query', variables);
    },
    GdprPage(variables?: GdprPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GdprPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GdprPageQuery>({ document: GdprPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GdprPage', 'query', variables);
    },
    DocumentsPage(variables?: DocumentsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DocumentsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DocumentsPageQuery>({ document: DocumentsPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DocumentsPage', 'query', variables);
    },
    AboutUsPage(variables?: AboutUsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AboutUsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutUsPageQuery>({ document: AboutUsPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'AboutUsPage', 'query', variables);
    },
    LandingPage(variables?: LandingPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LandingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageQuery>({ document: LandingPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'LandingPage', 'query', variables);
    },
    HeaderAndFooter(variables?: HeaderAndFooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<HeaderAndFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HeaderAndFooterQuery>({ document: HeaderAndFooterDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'HeaderAndFooter', 'query', variables);
    },
    Project(variables: ProjectQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectQuery>({ document: ProjectDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Project', 'query', variables);
    },
    Projects(variables?: ProjectsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsQuery>({ document: ProjectsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Projects', 'query', variables);
    },
    ProjectsPage(variables?: ProjectsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProjectsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsPageQuery>({ document: ProjectsPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ProjectsPage', 'query', variables);
    },
    BlogPostsPage(variables?: BlogPostsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<BlogPostsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostsPageQuery>({ document: BlogPostsPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'BlogPostsPage', 'query', variables);
    },
    BlogPostsBySlug(variables: BlogPostsBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<BlogPostsBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogPostsBySlugQuery>({ document: BlogPostsBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'BlogPostsBySlug', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;