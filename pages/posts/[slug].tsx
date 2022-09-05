import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { SITE_NAME } from '../../lib/constants'
import Sharer from '../../components/sharer'
import Article from '../../interfaces/article'
import { ArticleInfo, Tags } from '../../components/article-item'
import ArticleBody from '../../components/article-body'
import { getAllPosts, getPostBySlug, getPostSlugsReal } from '../../lib/data'

type Props = {
  post: Article
}

export default function Post({ post }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const title = post.title + ' :: ' + SITE_NAME

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <main>
            <div className="row">
              <div className="col">
                <article className="article mt-5">
                  <Head>
                    <title>{title}</title>
                  </Head>
                  <div className="image-container">
                    <img className="article-image img-fluid rounded d-block" src={post.thumb} />
                  </div>
                  <h2 className="article-title mt-5">{post.title}</h2>
                  <ArticleInfo date={post.date} source="md" author={post.author} />
                  <ArticleBody content={post.content} />
                  <div className="article-footer">
                    <Tags tags={post.tags} />
                    <Sharer />
                  </div>
                </article>
              </div>
            </div>

          </main>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const slugs = getPostSlugsReal()

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug: slug
        }
      }
    }),
    fallback: false,
  }
}
