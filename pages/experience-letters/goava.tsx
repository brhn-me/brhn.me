
import Head from 'next/head'
import Container from '../../components/container';
import Layout from '../../components/layout';
import PdfViewer from '../../components/pdf-viewer';
import { SITE_NAME } from '../../lib/constants';


export default function Index(props) {
  const pdfTitle = "Experience Letter - Goava AB";
  const title = `${pdfTitle} :: ${SITE_NAME}`;
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <Container>
          <PdfViewer title={pdfTitle} src="/pdfs/experinece-letter-goava.pdf" />
        </Container>
      </Layout>
    </>
  )
}

