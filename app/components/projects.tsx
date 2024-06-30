import Link from 'next/link';
import { formatDate } from 'app/utils';
import { getProjects } from 'app/data';

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
            <div className={`flex flex-col md:flex-row items-start ${index !== 0 ? 'mt-4 md:mt-0' : ''}`}>
              <p className="text-neutral-600 dark:text-neutral-400 w-auto md:w-48 lg:w-48 xl:w-48 flex-none mr-3 tabular-nums">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <div className="flex-grow">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold">
                  {project.metadata.title}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                  {project.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
