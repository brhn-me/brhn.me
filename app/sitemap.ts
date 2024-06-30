import { getPosts, getProjects } from 'app/data'
import { BASE_URL } from './config'

export default async function sitemap() {
  let posts = getPosts().map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let projects = getProjects().map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }))

  let routes = ['', '/posts', '/projects'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
