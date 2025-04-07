import { BlogPostsPageQuery } from '../graphql/index'
import Card from './Card'

export interface IBlogCardProps {
  blogPost: NonNullable<NonNullable<BlogPostsPageQuery['blogPosts']>[number]>
}

const PostCard = ({ blogPost: { title, description, slug, image } }: IBlogCardProps) => {
  return (
    <Card
      className="flex flex-col space-y-4 border-2 border-transparent hover:border-black"
      href={`/blog/${slug}`}
    >
      <div className="relative h-48">
        <img
          className="h-48 w-[100%] object-cover"
          src={
            image?.formats?.small?.url ||
            image?.url ||
            'https://via.placeholder.com/300?text=NO%20IMAGE'
          }
          alt={image.alternativeText}
        />
      </div>
      <div className="text-lg font-bold">{title}</div>
      <div className="text-truncate-4 w-full">{description}</div>
    </Card>
  )
}

export default PostCard
