import { client } from '../../utils/gql';
import { AsyncServerProps } from '../../utils/types';

import BlogPostCard from '../../components/BlogPostCard';
import Head from 'next/head';

export function Blogs({
  blogPosts,
}: AsyncServerProps<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <meta name="description" content="Blogy Nadácie mesta Bratislava" />
      </Head>
      <section className="section">
        <div className="container mb-12">
          <div className="w-full grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogPosts.map((blog, index) => (
              <BlogPostCard key={index} blogPost={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const { blogPosts } = await client.BlogPostsPage();

  return {
    props: { blogPosts },
  };
};

export default Blogs;
