import Link from 'next/link'
import Image from 'next/image'
import type Author from '../interfaces/author'
import DateFormatter from './date-formatter'
import { fi } from 'date-fns/locale'

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


const BlogInfo = ({
  source,
  date,
  author
}) => {
  return (
    <div className="blog-info mb-3">
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

const Tags = ({
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


const BlogLink = (props) => {

  return props.source == "md" ? (
    <Link href={props.link}>{props.children}</Link>) :
    (<a target="_blank" href={props.link}>{props.children}</a>)
}

const BlogItem = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  source,
  tags
}: Props) => {



  return (
    <div className="blog-item row pb-5 mb-5">
      <div className="col-lg-4">
        <BlogLink link={slug} source={source}>
          <div className="image-container">
            <img className="blog-item-image img-fluid rounded float-end d-block" src={coverImage} />
          </div>
        </BlogLink>
      </div>
      <div className="blog-item-content col-lg-8">
        <div className="blog-item-details">
          <h3 className="blog-item-title">
            <BlogLink link={slug} source={source}>
              {title}
            </BlogLink>
          </h3>
          <BlogInfo date={date} source={source} author={author} />
          <p className="">{excerpt}</p>
        </div>
        <div className="blog-item-footer">
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  )
}

export default BlogItem
