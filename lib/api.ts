import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { RSS } from '../interfaces/rss'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

function fetchMedium<T>(resourceUrl: string): Promise<T> {
  return fetch(resourceUrl).then(response => {
    // fetching the reponse body data
    return response.json();
  })
}

export async function getMediumPosts() {
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@brhnme?abd=2342342s34dsfdsf';
  const data: RSS = await fetchMedium<RSS>(url);
  fs.writeFileSync('data/medium.json', JSON.stringify(data));
  return data;
}


export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)



  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
