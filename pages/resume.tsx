import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import { PDFObject } from 'react-pdfobject'

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
          <div className="pdf-container mb-5 pt-5 pb-5">
            <div className="pdf-viewport">
              <embed src="/pdfs/resume.pdf" width="100%" height="100%"
                type="application/pdf"></embed>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

