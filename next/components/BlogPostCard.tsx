import { BlogPostsPageQuery } from '../graphql/index';
import Card from './Card';

export interface IBlogCardProps {
  blogPost: BlogPostsPageQuery['blogPosts'][number];
}

const PostCard = ({
  blogPost: { title, description, slug, image },
}: IBlogCardProps) => {
  return (
    <Card
      className="flex flex-col space-y-4 hover:border-black border-transparent border-2"
      href={`/blog/${slug}`}
    >
      <div className="relative h-48">
        <img
          className="object-cover h-48 w-[100%]"
          src={
            image?.formats?.small?.url ||
            image?.url ||
            'https://via.placeholder.com/300?text=NO%20IMAGE'
          }
          alt={image.alternativeText}
        />
      </div>
      <div className="text-lg font-bold">{title}</div>
      <div className="w-full text-truncate-4">{description}</div>
    </Card>
  );
};

export default PostCard;
