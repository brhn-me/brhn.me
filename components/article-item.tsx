import Link from 'next/link'
import Image from 'next/image'
import Article from '../interfaces/article'
import type Author from '../interfaces/author'
import DateFormatter from './date-formatter'
import { tagify } from '../lib/tags'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string,
  source: string,
  tags: string[]
}


export const ArticleInfo = ({
  source,
  date,
  author
}) => {
  return (
    <div className="article-info mb-3">
      <small className="text-muted">Posted: <DateFormatter dateString={date} />
        {
          source == "medium" && (
            <span>
              &nbsp;on <Link target="_blank" href="https://brhnme.medium.com/">Medium</Link>
            </span>
          )
        }
      </small>
    </div>
  )
}

export const Tags = ({
  tags
}) => {
  if (!tags) {
    tags = []
  }

  return (
    <ul className="tags">
      {
        tags.map(tag => (
          <li className="tag" key={tag}><Link href={"/tags/" + tagify(tag)}>{tag}</Link></li>
        ))
      }
    </ul>
  )
}


export const ArticleLink = ({ post, children }) => {

  return post.source == "md" ? (
    <Link href={'/posts/' + post.slug}>{children}</Link>) :
    (<a target="_blank" href={post.link}>{children}</a>)
}

type ArticleItemProps = {
  post: Article
}

const ArticleItem = (props: ArticleItemProps) => {
  let { post } = props;
  return (
    <div className="article-item row pb-5 mb-5">
      <div className="col-lg-4">
        <ArticleLink post={post} >
          <div className="image-container">
            <Image src={post.image}
              width={980}
              height={552}
              layout='responsive' />
          </div>
        </ArticleLink>
      </div>
      <div className="article-item-content col-lg-8">
        <div className="article-item-details">
          <h3 className="article-item-title">
            <ArticleLink post={post}>
              {post.title}
            </ArticleLink>
          </h3>
          <ArticleInfo date={post.date} source={post.source} author={post.author} />
          <p className="">{post.excerpt}</p>
        </div>
        <div className="article-item-footer">
          <Tags tags={post.tags} />
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
