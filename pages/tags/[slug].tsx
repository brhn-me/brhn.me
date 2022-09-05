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
import { getAllPosts, getAllPostsMerged, getPostBySlug, getPostSlugsReal } from '../../lib/data'
import ArticleList from '../../components/article-list'

type Props = {
  tag: string,
  posts: Article[]
}

function tagify(tag): string {
  return tag.toLowerCase().split(" ").join("-");
}

function untagify(tag): string {
  return tag.split("-").join(" ");
}

export default function Post({ tag, posts }: Props) {
  const router = useRouter()
  const realTag = untagify(tag)


  if (!router.isFallback && !tag) {
    return <ErrorPage statusCode={404} />
  }



  const title = realTag + ' :: ' + SITE_NAME

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
                <div className="article-list-wrapper">
                  <ArticleList posts={posts} />
                </div>
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
  let allPosts = await getAllPostsMerged()

  // only posts in this filter
  let posts: Article[] = [];

  for (let i = 0; i < allPosts.length; i++) {
    let post = allPosts[i];
    if (post.tags && post.tags.length > 0) {
      for (let j = 0; j < post.tags.length; j++) {
        let tag = tagify(post.tags[j]);
        if (tag == params.slug) {
          posts.push(post);
        }
      }
    }
  }

  return {
    props: {
      tag: params.slug,
      posts: posts
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsMerged()

  // find all unique tags
  let tags: Set<string> = new Set<string>();
  posts.forEach((p) => {
    if (p.tags && p.tags.length > 0) {
      p.tags.forEach((t) => {
        tags.add(tagify(t));
      })
    }
  })

  // generate paths
  return {
    paths: Array.from(tags).map((tag) => {
      return {
        params: {
          slug: tag
        }
      }
    }),
    fallback: false,
  }
}
