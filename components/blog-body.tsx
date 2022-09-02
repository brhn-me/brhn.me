import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const BlogBody = ({ content }: Props) => {
  return (
    <div className="blog-body mb-5">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default BlogBody
