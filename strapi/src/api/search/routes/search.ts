// The site's search box calls /search/:query on Next, which proxies it here.
export default {
  routes: [
    {
      method: 'GET',
      path: '/search/:query',
      handler: 'api::search.search.search',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
}
