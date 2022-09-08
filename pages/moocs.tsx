import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'


export default function Index(props) {
  const title = `MOOCS :: ${SITE_NAME}`;
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <Container>
          <div className="moocs mb-5 p-3">
            <h2>MOOCs</h2>
            <h3>June 2022</h3>
            <ol>
              <li><a href="https://www.educative.io/verify-certificate/wjB3xQCADvABnZRD7cl2XoOEP3RyIG">Java for Programmers</a></li>
              <li><a href="https://www.educative.io/verify-certificate/GZjlABC27V8Rrk8OKiWAXjG64Lrytm">The Ultimate Guide to Kotlin Programming</a></li>
              <li><a href="https://www.educative.io/verify-certificate/P1vxGOtZZKpxDoDXyHWqQ72gA9mktl">Grokking the Behavioral Interview</a></li>
            </ol>
            <h3>May 2022</h3>
            <ol>
              <li><a href="https://graduation.udacity.com/confirm/EUZD5XY2">Deep Learning Nanodegree – Udacity</a></li>
              <li><a href="https://www.educative.io/verify-certificate/JZmo10CggKJRX58ZJFKZnAJ2EYk3F3">Scalability &amp; System Design for Developers – Educative</a></li>
              <li><a href="https://www.educative.io/verify-certificate/0g6xMWFgvLNmykKK6c9QpnKgPjo4cP">Become a Spring Boot Developer – Educative</a></li>
            </ol>
          </div>
        </Container>
      </Layout>
    </>
  )
}

