import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const ArticleBody = ({ content }: Props) => {
  return (
    <div className="article-body mb-5">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default ArticleBody
