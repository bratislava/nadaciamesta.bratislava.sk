"use strict";

// const DATA = require('./data/simpleSeedData');

/**
 * Just a simple seeding function
 */

module.exports = () => {
  // const collectionNames = Object.keys(DATA);
  // collectionNames.forEach((collectionName) => {
  //   const data = DATA[collectionName];
  //   if (strapi.services[collectionName] == undefined) {
  //     console.error(
  //       `SEEDING ERROR: service '${collectionName}' does not exist\n`,
  //       'AVAILABLE SERVICES: ',
  //       Object.keys(strapi.services)
  //     );
  //     return;
  //   }
  //   //collection-type
  //   if (Array.isArray(data)) {
  //     data.forEach(async (item) => {
  //       const foundItems = await strapi.services[collectionName].find(item);
  //       // if item not found, then seed it
  //       if (foundItems.length === 0) {
  //         strapi.services[collectionName].create(item);
  //       }
  //     });
  //   }
  //   //single-type
  //   else if (typeof data === 'object') {
  //     strapi.services[collectionName].createOrUpdate(data);
  //   } else {
  //     console.error(
  //       `SEEDING ERROR: '${collectionName}' is is neither an object nor an array`
  //     );
  //   }
  // });
};
