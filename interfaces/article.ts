import type Author from './author'

type Article = {
  id: string
  slug: string
  title: string
  link: string
  date: string
  image: string
  author: Author
  excerpt: string
  content: string
  tags: string[]
  source: string
}

export default Article
