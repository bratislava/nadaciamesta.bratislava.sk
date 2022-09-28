# Strapi city-foundation

Note - even in development, strapi connects to Azure for media storage. If you don't wish to do this, you can set Azurite locally or disable the Azure upload plugin (more info in [plugin readme](https://github.com/jakeFeldman/strapi-provider-upload-azure-storage)).

To run:

```
nx serve strapi-city-foundation
```

To access data without loging in, you need to setup permissions for each of the strapi instances / deployments. See the appropriate section in [Strapi-SDK docs](../../../docs/libs/Strapi-SDK.md)

## Seeding data

There is a simple seeding system in `/config/functions/bootstrap.js` which allows seeding data of multiple collections and relationships. It can only handle json files, so if you have your data in any other format, just convert it.

By default, it seeds critical data (without which the FE crashes) in development - to seed the production projects in development, or to seed data on staging/prod environments, modify the `/config/functions/bootstrap.js` file.

#### Example: csv to json

```
npm i -g csvtojson
```

```
csvtojson <input.csv> > <output.json>
```
