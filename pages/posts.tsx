import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import ArticleList from '../components/article-list'
import Article from '../interfaces/article'
import { getAllPostsTogetherCached } from '../scripts/data-generator.mjs'

type Props = {
  posts: Article[]
}

export default function Index({ posts }: Props) {
  const title = `Posts :: ${SITE_NAME}`;
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <Container>
          <div className="article-list-wrapper">
            <ArticleList posts={posts} />
          </div>
        </Container>
      </Layout>
    </>
  )
}




export const getStaticProps = async () => {
  let posts = getAllPostsTogetherCached();
  return {
    props: { posts }
  }
}

