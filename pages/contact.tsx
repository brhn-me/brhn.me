import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'


export default function Index(props) {
  const title = `Contact :: ${SITE_NAME}`;
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <Container>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="contact mb-5 p-3">
                <h2>Contact</h2>
                <form name="contact" data-netlify="true">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows={3}></textarea>
                  </div>
                  <div className="mb-3">
                    <button type="button" className="btn btn-outline-success">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

