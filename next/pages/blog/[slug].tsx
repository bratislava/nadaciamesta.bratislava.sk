import Head from 'next/head';

import { client } from '../../utils/gql';
import { AsyncServerProps } from '../../utils/types';
import { Markdown } from '../../components/Markdown';
import { getLocalDate } from '../../utils/helpers';

export function Blog({
  blogPosts,
}: AsyncServerProps<typeof getServerSideProps>) {
  const blogPost = blogPosts[0];

  return (
    <article>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.description} />
      </Head>
      <section className="section">
        <div className="container max-w-4xl text-center mb-24 space-y-12 mt-12">
          <h1 className="font-bold text-6xl">{blogPost.title}</h1>
          <div className="flex items-center justify-center divide-x-4">
            <span className="border-primary px-8">{blogPost.author}</span>
            <span className="border-primary px-8">
              {getLocalDate(blogPost.created_at)}
            </span>
          </div>
          <div className="relative h-100">
            <img
              className="object-cover h-100 w-[100%]"
              src={blogPost.image.url}
              alt={blogPost.image.alternativeText}
            />
          </div>
        </div>

        <div className="container">
          <Markdown>{blogPost.content}</Markdown>
        </div>
      </section>
    </article>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const { blogPosts } = await client.BlogPostsBySlug({ slug });

  if (!blogPosts || blogPosts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogPosts },
  };
};

export default Blog;
