import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../graphql'
import { isServer } from './envDetection'

// On the server, talk to Strapi directly (STRAPI_URL may be a bare in-cluster
// service name). In the browser, go through the /graphql rewrite in next.config.
const serverStrapiUrl = () => {
  const url = process.env.STRAPI_URL ?? ''

  return url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`
}

export const buildUrl = (path: string): string =>
  `${isServer() ? serverStrapiUrl() : window.location.origin}${path}`

const gql = new GraphQLClient(buildUrl('/graphql'))

export const client = getSdk(gql)
