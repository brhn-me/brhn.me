import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import PdfViewer from '../components/pdf-viewer'


export default function Index(props) {
  const title = `Resume :: ${SITE_NAME}`;
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <Container>
          <PdfViewer title="Resume" src="/pdfs/resume.pdf" />
        </Container>
      </Layout>
    </>
  )
}

