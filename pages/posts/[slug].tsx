import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import BlogBody from '../../components/blog-body'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import { BlogInfo, Tags } from '../../components/blog-item'
import { SITE_NAME } from '../../lib/constants'
import Sharer from '../../components/sharer'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <>
            <div className="row">
              <div className="col">
                <article className="blog mt-5">
                  <Head>
                    <title>
                      {post.title} :: {SITE_NAME}
                    </title>
                    {/* <meta property="og:image" content={post.ogImage.url} /> */}
                  </Head>
                  <div className="image-container">
                    <img className="blog-image img-fluid rounded d-block" src={post.coverImage} />
                  </div>
                  <h2 className="blog-title mt-5">{post.title}</h2>
                  <BlogInfo date={post.date} source="md" author={post.author} />
                  <BlogBody content={post.content} />
                  <div className="blog-footer">
                    <Tags tags={post.tags} />
                    <Sharer />
                  </div>
                </article>
              </div>
            </div>

          </>
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags'
  ])
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
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
