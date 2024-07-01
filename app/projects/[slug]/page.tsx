// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import Badge from 'app/components/Badge'
import { formatDate} from 'app/utils'
import { BASE_URL, GITHUB_USERNAME } from 'app/config'
import { getProjects } from 'app/data'
import ArrowIconLink from 'app/components/ArrowIconLink'

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let project = getProjects().find((post) => post.slug === params.slug)
  if (!project) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata
  let ogImage = image
    ? image
    : `${BASE_URL}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${BASE_URL}/project/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }) {
  let project = getProjects().find((post) => post.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${BASE_URL}${project.metadata.image}`
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${BASE_URL}/projects/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'Burhan Uddin',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {project.metadata.title}
      </h1>
      <div className="mt-2 mb-4 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(project.metadata.publishedAt)}
        </p>
        {project.metadata.category && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Category: {project.metadata.category}
          </p>
        )}
        {project.metadata.tags && (
          <div className="flex flex-wrap space-x-2">
          {project.metadata.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
          </div>
        )}
      </div>
      {project.metadata.image && (
        <div className="mb-4">
          <img
          src={project.metadata.image}
          alt={project.metadata.title}
          className="mb-8 w-full h-auto object-cover"
        />
        </div>        
      )}
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
      <div className='mb-4'>
        <ArrowIconLink href={`https://www.github.com/${GITHUB_USERNAME}/${project.slug}`} text="repo" />
      </div>
    </section>
  )
}
