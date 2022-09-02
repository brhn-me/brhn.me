import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts, getMediumPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { SITE_NAME } from '../lib/constants'
import PostType from '../interfaces/post'
import moment from 'moment'
import BlogList from '../components/blog-list'
import striptags from 'striptags';

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
          <div className="blog-list-wrapper">
            <BlogList posts={posts} />
          </div>
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
    sp.source = "md";
    sp.slug = "/posts/"+sp.slug;
    posts.push(sp);
  })

  if (medium.status == "ok" && medium.items != null && medium.items.length > 0) {


    // now add medium posts
    medium.items.forEach((item) => {
      const date = moment(Date.parse(item.pubDate)).toISOString();
      let excerpt =  striptags(item.description);
      let words = excerpt.split(' ');
      if(words.length > 150){
        excerpt = words.slice(0, 150).join(' ') + "...";
      }

      let post: PostType = {
        title: item.title,
        date: date,
        slug: item.guid,
        coverImage: item.thumbnail,
        author: {
          name: item.author,
          picture: ''
        },
        excerpt: excerpt,
        ogImage: {
          url: ''
        },
        content: '',
        tags: item.categories,
        source: 'medium'
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

