import Head from 'next/head'

import { Markdown } from '../../components/Markdown'
import { client } from '../../utils/gql'
import { getLocalDate } from '../../utils/helpers'
import { AsyncServerProps } from '../../utils/types'

export const Blog = ({ blogPosts }: AsyncServerProps<typeof getServerSideProps>) => {
  const blogPost = blogPosts[0]

  return (
    <article>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.description} />
      </Head>
      <section className="section">
        <div className="container mb-24 mt-12 max-w-4xl space-y-12 text-center">
          <h1 className="text-6xl font-bold">{blogPost.title}</h1>
          <div className="flex items-center justify-center divide-x-4">
            <span className="border-primary px-8">{blogPost.author}</span>
            <span className="border-primary px-8">{getLocalDate(blogPost.created_at)}</span>
          </div>
          <div className="relative h-100">
            <img
              className="h-100 w-[100%] object-cover"
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
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query

  const { blogPosts } = await client.BlogPostsBySlug({ slug })

  if (!blogPosts || blogPosts.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: { blogPosts },
  }
}

export default Blog
