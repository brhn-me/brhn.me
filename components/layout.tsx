import Link from 'next/link'
import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
