import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import ArticleList from '../components/article-list'
import Article from '../interfaces/article'
import { getAllPosts, getAllPostsMerged, getMediumPosts } from '../lib/data'

type Props = {
  posts: Article[],
  author: string
}

export default function Index({ posts, author }: Props) {
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
  let posts = await getAllPostsMerged();

  return {
    props: { posts }
  }
}

