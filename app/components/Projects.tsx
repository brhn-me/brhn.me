import Link from 'next/link';
import { formatDate } from 'app/utils';
import { getProjects } from 'app/data';
import Badge from './Badge'; 
import ArrowIconLink from 'app/components/ArrowIconLink';
import {GITHUB_USERNAME} from 'app/config'

function ProjectItem({ project, index }) {
  return (
    <div className="flex flex-col mb-8"> 
      <div className="flex flex-col md:flex-row items-start">
        <p className="text-neutral-600 dark:text-neutral-400 w-auto md:w-48 lg:w-48 xl:w-48 flex-none mr-3 tabular-nums">
          {formatDate(project.metadata.publishedAt, false)}
        </p>
        <div className="flex-grow">
          <Link href={`/projects/${project.slug}`} className="block mb-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold">
              {project.metadata.title}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 mt-1"> 
              {project.metadata.summary}
            </p>
            <p>
              {project.metadata.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </p>
          </Link>
          <div className="flex space-x-4 mt-4">
            <ArrowIconLink href={`https://www.github.com/${GITHUB_USERNAME}/${project.slug}`} text="repo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  let projects = getProjects();

  return (
    <div>
      {projects
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((project, index) => (
          <ProjectItem key={project.slug} project={project} index={index} />
        ))}
    </div>
  );
}
