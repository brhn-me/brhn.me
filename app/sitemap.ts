import { getPosts } from 'app/utils'

export const baseUrl = 'https://www.brhn.me'

export default async function sitemap() {
  let posts = getPosts().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/posts'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
