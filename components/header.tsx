import Link from 'next/link'
import Logo from '../public/images/logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="header navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <Image className="logo" height="30px" width="120px" src={Logo} />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs">
                <a className="nav-link active">Blogs</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

