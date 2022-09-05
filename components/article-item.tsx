import Link from 'next/link'
import Article from '../interfaces/article'
import type Author from '../interfaces/author'
import DateFormatter from './date-formatter'

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
          <li className="tag" key={tag}>{tag}</li>
        ))
      }
    </ul>
  )
}


export const ArticleLink = (props) => {

  return props.source == "md" ? (
    <Link href={'/posts/'+props.link}>{props.children}</Link>) :
    (<a target="_blank" href={props.link}>{props.children}</a>)
}

type ArticleItemProps = {
  post: Article
}

const ArticleItem = (props: ArticleItemProps) => {
  let {post} = props;
  return (
    <div className="article-item row pb-5 mb-5">
      <div className="col-lg-4">
        <ArticleLink link={post.slug} source={post.source}>
          <div className="image-container">
            <img className="article-item-image img-fluid rounded d-block" src={post.thumb} />
          </div>
        </ArticleLink>
      </div>
      <div className="article-item-content col-lg-8">
        <div className="article-item-details">
          <h3 className="article-item-title">
            <ArticleLink link={post.slug} source={post.source}>
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
