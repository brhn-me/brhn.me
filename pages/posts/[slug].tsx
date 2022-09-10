import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Image from 'next/image'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { SITE_NAME } from '../../lib/constants'
import Sharer from '../../components/sharer'
import Article from '../../interfaces/article'
import ArticleInfoType from '../../interfaces/article-info'
import { ArticleInfo, Tags } from '../../components/article-item'
import ArticleBody from '../../components/article-body'
import { getAllMDSlugs, getMDPostBySlug, getPrevNextRelatedData } from '../../scripts/data-generator.mjs'
import Link from 'next/link'
import DateFormatter from '../../components/date-formatter'
import { join } from 'path';

function getPostLink(post) {
  return post.source == "md" ? "/posts/" + post.slug : post.link
}

function PrevLink({ prev }) {
  return (
    <Link href={getPostLink(prev)}>
      <a title={prev.title}>
        <i className="fas fa-chevron-left p-1"></i> Previous
      </a>
    </Link>
  )
}

function NextLink({ next }) {
  return (
    <Link href={getPostLink(next)}>
      <a title={next.title}>
        Next <i className="fas fa-chevron-right p-1"></i>
      </a>
    </Link>
  )
}

function RelatedPost({ post }) {
  let excerpt = (post.excerpt || "").split(" ").slice(0, 30).join(" ") + " ..."

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Image src={post.image} width={640} height={480} className="img-fluid rounded-start" layout="responsive" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><Link href={getPostLink(post)}>{post.title}</Link></h5>
            <p className="card-text">{excerpt}</p>
            <p className="card-text"><small className="text-muted"><DateFormatter dateString={post.date} /> {
              post.source == "medium" && (
                <span>
                  &nbsp;on <Link target="_blank" href="https://brhnme.medium.com/">Medium</Link>
                </span>
              )
            }</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}


type Props = {
  post: Article,
  prev: ArticleInfoType,
  next: ArticleInfoType,
  related: ArticleInfoType[]
}

export default function Post({ post, prev, next, related }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  related = related || []
  const title = post.title + ' :: ' + SITE_NAME

  function getPrevNextLink(item) {
    if (item.source == "md") {
      return
    }
    return item.link
  }

  return (
    <Layout>
      {post.title}
      <Container>
        <Header />
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <main>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <article className="article mt-3">
                  <Head>
                    <title>{title}</title>
                  </Head>
                  <div className="image-container">
                    <Image src={post.image}
                      width={692}
                      height={390}
                      placeholder="blur"
                      blurDataURL={post.thumb}
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
            <div className="article-nav row d-flex justify-content-center">
              <div className="col-lg-8">
                {related && related.length > 0 && (
                  <div className="article-related mb-5">
                    <h3>Related Posts:</h3>
                    {related.map(p => (
                      <RelatedPost key={p.id} post={p} />
                    ))}
                  </div>
                )}
                {(prev || next) && (
                  <div className="article-nav-links d-flex justify-content-between mt-5">
                    <div className="article-nav-link">
                      {
                        prev && <PrevLink prev={prev} />
                      }
                    </div>
                    <div className="article-nav-link">
                      {
                        next && <NextLink next={next} />
                      }
                    </div>
                  </div>
                )}
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
  const prevNextRelatedData = getPrevNextRelatedData(post.id);
  let content = post['content'] || ''
  content = await markdownToHtml(content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
      prev: prevNextRelatedData["prev"],
      next: prevNextRelatedData["next"],
      related: prevNextRelatedData["related"]
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
