import type Author from './author'

type ArticleInfo = {
  id: string
  title: string  
  image: string
  link: string
  slug: string
  date: string
  source: string,
  excerpt?: string,
  weight?: string
}

export default ArticleInfo
