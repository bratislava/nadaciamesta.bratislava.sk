'use strict';

/**
 * Seed some collection data function
 *
 * config shape:
 * {
 *    [property name from json]: true / '[single/multiple]:[strapi collection name].[find by property]'
 *    ...
 * }
 */

module.exports = async (collectionName, dataArray, config) => {
  for (const item of dataArray) {
    let columnNames = Object.keys(config);

    const parsedItem = {};

    columnNames.forEach((columnName) => {
      if (item[columnName] == undefined) {
        console.error(
          `WARNING: ${columnName} property does not exist in data object`
        );
        return;
      }

      const isMultiple =
        typeof config[columnName] === 'string' &&
        config[columnName].split(':')[0];

      // the filter is to get rid of "" / undefined values inside array
      parsedItem[columnName] =
        isMultiple === 'multiple'
          ? item[columnName]
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value)
          : item[columnName];
    });

    const finalItem = await parseFinalItem(config, columnNames, parsedItem);

    const foundItem = await strapi.services[collectionName].find(finalItem);

    if (foundItem.length === 0) {
      strapi.services[collectionName].create(finalItem);
    }
  }
  return Promise.resolve();
};

const parseFinalItem = async (config, columnNames, parsedItem) => {
  const finalItem = {};

  for (const columnName of columnNames) {
    // omits empty parsed columns
    if (parsedItem[columnName] != undefined && parsedItem[columnName].length) {
      const finalColumn = await parseFinalColumn(
        config,
        columnName,
        parsedItem
      );
      finalItem[columnName] = finalColumn;
    }
  }

  return finalItem;
};

const parseFinalColumn = async (config, columnName, parsedItem) => {
  const column = config[columnName];

  //normal property
  if (column === true) {
    return parsedItem[columnName];
  }
  //relationship
  else if (typeof column === 'string') {
    const [type, etc] = column.split(':');
    if (type !== 'single' && type !== 'multiple') {
      console.error('ERROR: wrong type');
      return;
    }
    const [relationTo, property] = etc.split('.');
    const data = parsedItem[columnName];
    //array of values
    if (Array.isArray(data)) {
      const finalData = data.map(async (relationItem) => {
        const foundRelationItems = await strapi.services[relationTo].find({
          [property]: relationItem,
        });

        if (foundRelationItems.length) {
          return foundRelationItems[0].id;
        } else {
          const createdRelationItem = await strapi.services[relationTo].create({
            [property]: relationItem,
          });
          return createdRelationItem.id;
        }
      });

      return Promise.all(finalData);
    }
    //single value
    else {
      const foundRelationItems = await strapi.services[relationTo].find({
        [property]: data,
      });

      if (foundRelationItems.length) {
        return foundRelationItems[0].id;
      } else {
        const createdRelationItem = await strapi.services[relationTo].create({
          [property]: data,
        });

        return createdRelationItem.id;
      }
    }
  }
};
