import { ProjectsQuery } from '../graphql/index';
import Card from './Card';
import Tag from './Tag';

export interface IProjectCardProps {
  project: ProjectsQuery['projects'][number];
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <Card
      className="flex flex-col space-y-4 hover:border-black border-transparent border-2"
      href={`/projects/${project.id}/`}
    >
      <div className="relative h-48">
        <img
          className="object-cover h-48 w-[100%]"
          src={
            project.images[0]?.formats?.small?.url ||
            project.images[0]?.url ||
            'https://via.placeholder.com/300?text=NO%20IMAGE'
          }
          alt={project.images[0]?.alternativeText || 'Placeholder image'}
        />
      </div>
      <div className="text-lg font-bold">{project.title}</div>
      <div className="w-full text-truncate-4">{project.description}</div>
      <div className="flex flex-wrap gap-2">
        {[]
          .concat(
            project.year?.name,
            project.program?.name,
            project.categories.map((tag) => tag.name),
            project.goals.map((tag) => tag.name),
            project.support_fields.map((tag) => tag.name),
            project.legal_form?.name
            // TEMPORARILY HIDDEN
            // project.districts.map((tag) => tag.name)
          )
          .filter((tag) => tag)
          .map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
