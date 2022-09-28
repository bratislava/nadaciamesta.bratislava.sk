module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('POSTGRES_HOST', 'postgres'),
        port: env.int('POSTGRES_PORT', 5432),
        database: env('POSTGRES_DB', 'strapi'),
        username: env('POSTGRES_USER', 'postgres'),
        password: env('POSTGRES_PASSWORD', 'postgres'),
        ssl: env.bool('POSTGRES_SSL', false),
      },
      options: {},
    },
  },
});
