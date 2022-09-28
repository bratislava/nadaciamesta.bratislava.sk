'use strict';

const { Document } = require('flexsearch');

module.exports = async () => {
  const index = new Document({
    language: 'sk',
    tokenize: 'full',
    encode: (text) =>
      text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(' ')
        .filter((str) => str.length)
        .map((str) => str.trim()),
    document: {
      id: 'id',
      index: ['title'],
      store: true,
    },
  });

  const projects = await strapi.services.project.find();
  const grants = await strapi.services.grants.find();
  const documents = await strapi.services.documents.find();
  const blogPosts = await strapi.services['blog-post'].find();

  projects.forEach((project) => {
    index.add({
      id: `project-${project.id}`,
      title: project.title,
    });
  });

  grants.forEach((grant) => {
    index.add({
      id: `grant-${grant.id}`,
      title: grant.title,
    });
  });

  documents.forEach((document) => {
    index.add({
      id: `document-${document.id}`,
      title: document.title,
    });
  });

  blogPosts.forEach((blogPost) => {
    index.add({
      id: `blog-${blogPost.id}`,
      title: blogPost.title,
      slug: blogPost.slug,
    });
  });

  return {
    async search(query) {
      return index.search(query, {
        limit: 10,
        index: ['title'],
        enrich: true,
      });
    },
  };
};
