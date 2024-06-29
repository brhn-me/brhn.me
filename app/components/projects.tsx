import Link from 'next/link';
import { formatDate, getProjects } from 'app/utils';

export function Projects() {
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
          <Link
            key={project.slug}
            className="flex mb-4"
            href={`/projects/${project.slug}`}
          >
            <div className={`flex flex-col md:flex-row items-center ${index !== 0 ? 'mt-4 md:mt-0' : ''}`}>
              <p className="text-neutral-600 dark:text-neutral-400 w-auto md:w-48 lg:w-48 xl:w-48 flex-none mr-3 tabular-nums">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <p className="flex-grow text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
