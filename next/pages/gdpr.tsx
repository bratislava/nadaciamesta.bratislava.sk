import Head from 'next/head';

import { Markdown } from '../components/Markdown';
import { client } from '../utils/gql';
import { AsyncServerProps } from '../utils/types';

export const Blog = ({
  legal: { gdpr },
}: AsyncServerProps<typeof getServerSideProps>) => {
  return (
    <article>
      <Head>
        <title>GDPR</title>
        <meta name="description" content="Princípy ochrany osobných údajov" />
      </Head>
      <section className="section">
        <div className="container">
          <Markdown>{gdpr}</Markdown>
        </div>
      </section>
    </article>
  );
}

export const getServerSideProps = async () => {
  const { legal } = await client.GdprPage();

  return {
    props: { legal },
  };
};

export default Blog;
