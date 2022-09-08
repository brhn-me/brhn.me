import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Image from 'next/image'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { POSTS_DIR, SITE_NAME } from '../../lib/constants'
import Sharer from '../../components/sharer'
import Article from '../../interfaces/article'
import { ArticleInfo, Tags } from '../../components/article-item'
import ArticleBody from '../../components/article-body'
import { getAllMDSlugs, getMDPostBySlug } from '../../scripts/data-generator.mjs'

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
      {post.title}
      <Container>
        <Header />
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <main>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <article className="article mt-3">
                  <Head>
                    <title>{title}</title>
                  </Head>
                  <div className="image-container">
                    <Image src={post.image}
                      width={692}
                      height={390}
                      layout='responsive' />
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
        )
        }
      </Container >
    </Layout >
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getMDPostBySlug(params.slug, true)
  let content = post['content'] || ''
  content = await markdownToHtml(content)

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
  const slugs = await getAllMDSlugs()

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
