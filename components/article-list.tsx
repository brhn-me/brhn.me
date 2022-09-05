import Article from '../interfaces/article'
import ArticleItem from './article-item'

type Props = {
  posts: Article[]
}

const ArticleList = ({ posts }: Props) => {
  return (
    <main className="articles-list pt-5 pb-5">
      {posts.map((post) => (
        <ArticleItem key={post.id} post ={post} />
      ))}
    </main>
  )
}

export default ArticleList
