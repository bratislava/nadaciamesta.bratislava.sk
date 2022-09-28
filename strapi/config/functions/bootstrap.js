'use strict';

const simpleSeed = require('./seeders/simpleSeed');
const seedCollection = require('./seeders/seedCollection');
const search = require('./search/search');

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {
  //init search
  strapi.services.search = await search();

  if (process.env.DO_SEED === 'true') {
    console.log('SEEDING... ');

    // simpleSeed();

    const projectSeedingOptions = {
      title: true,
      description: true,
      appliciant: true,
      year: 'single:tag-year.name',
      program: 'single:tag-program.name',
      legal_form: 'single:tag-legal-form.name',
      support_fields: 'multiple:tag-support-field.name',
      categories: 'multiple:tag-category.name',
      goals: 'multiple:tag-goal.name',
      districts: 'multiple:tag-district.name',
      amount: true,
    };

    // !2020

    // await seedCollection(
    //   'project',
    //   require('./seeders/data/2020-projects-art.json'),
    //   projectSeedingOptions
    // );

    // await seedCollection(
    //   'project',
    //   require('./seeders/data/2020-projects-communities.json'),
    //   projectSeedingOptions
    // );

    // await seedCollection(
    //   'project',
    //   require('./seeders/data/2020-projects-culture.json'),
    //   projectSeedingOptions
    // );

    // !2021;

    await seedCollection(
      'project',
      require('./seeders/data/2021-projects-communities-activities.json'),
      projectSeedingOptions
    );

    await seedCollection(
      'project',
      require('./seeders/data/2021-projects-communities-fpv.json'),
      projectSeedingOptions
    );

    await seedCollection(
      'project',
      require('./seeders/data/2021-projects-communities-spaces.json'),
      projectSeedingOptions
    );

    await seedCollection(
      'project',
      require('./seeders/data/2021-projects-culture-capacity-development.json'),
      projectSeedingOptions
    );

    await seedCollection(
      'project',
      require('./seeders/data/2021-projects-culture-events.json'),
      projectSeedingOptions
    );

    await seedCollection(
      'project',
      require('./seeders/data/2021-projects-culture-production-and-introduction.json'),
      projectSeedingOptions
    );

    await seedCollection(
      'project',
      require('./seeders/data/2021-projects-culture-spaces.json'),
      projectSeedingOptions
    );
  }
};
