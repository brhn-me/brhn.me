import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts, getMediumPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { SITE_NAME } from '../lib/constants'
import MoreStories from '../components/more-stories'
import PostType from '../interfaces/post'
import moment from 'moment'

type Props = {
  posts: Post[],
  author: string
}

export default function Index({ posts, author }: Props) {
  const title = `Blogs :: ${SITE_NAME}`;
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <Container>
          <h1>Author: {author}</h1>
          <MoreStories posts={posts} />
        </Container>
      </Layout>
    </>
  )
}




export const getStaticProps = async () => {
  const staticPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  const medium = await getMediumPosts();
  let posts = [];

  staticPosts.forEach((sp) => {
    posts.push(sp);
  })

  console.log("***********");
  console.log(staticPosts.length);
  console.log("***********");
  console.log(posts.length);

  if (medium.status == "ok" && medium.items != null && medium.items.length > 0) {


    // now add medium posts
    medium.items.forEach((item) => {
      const date = moment(Date.parse(item.pubDate)).toISOString();

      let post: PostType = {
        title: item.title,
        date: date,
        slug: "",
        coverImage: "",
        author: {
          name: item.author,
          picture: ''
        },
        excerpt: '',
        ogImage: {
          url: ''
        },
        content: ''
      }
      posts.push(post);
    });
  }

  posts = posts.sort((p1, p2) => {
    const d1 = Date.parse(p1.date);
    const d2 = Date.parse(p2.date);
    return d2 - d1;
  })

  return {
    props: { posts }
  }
}

