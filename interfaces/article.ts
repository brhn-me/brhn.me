import type Author from './author'

type Article = {
  id: string
  slug: string
  title: string
  link: string
  date: string
  image: string
  thumb: string
  author: Author
  excerpt: string
  content: string
  tags: string[]
  featured?: string,
  source: string
}

export default Article
