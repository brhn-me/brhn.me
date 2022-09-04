import type Post from '../interfaces/post'
import BlogItem from './blog-item'

type Props = {
  posts: Post[]
}

const BlogList = ({ posts }: Props) => {
  return (
    <main className="blog-list pt-5 pb-5">
      {posts.map((post) => (
        <BlogItem
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          source={post.source} tags={post.tags} />
      ))}
    </main>
  )
}

export default BlogList
