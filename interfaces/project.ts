
type ProjectType = {
  slug: string
  title: string
  date: string
  coverImage: string,
  featured: boolean,
  excerpt: string
  ogImage: {
    url: string
  },
  repo: string,
  article: string,
  techs: [string]
  content: string
}

export default ProjectType
