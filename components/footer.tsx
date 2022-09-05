import Link from 'next/link';
import Logo from './logo';


const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={"footer py-4 py-md-5 mt-5 bg-light " + (props.sidebar == true ? "with-sidebar" : "")}>
      <div className="container py-4 py-md-5 px-4 px-md-3">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <Link className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="brhn.me">
              <Logo />
            </Link>
            <ul className="list-unstyled small text-muted mt-3">
              <li className="mb-2">Built with <a href="https://getbootstrap.com/">Bootstrap</a>, <a href="https://nextjs.org/">NextJS</a> and <a href="https://reactjs.org/">ReactJS</a>. Hosted in <a href="https://www.netlify.com/">Netlify</a> and <a href="https://www.github.com/">Github</a>.</li>
              <li className="mb-2">Design inspired by <a href="https://github.com/startbootstrap/startbootstrap-resume">Start Bootstrap - Resume</a>.</li>
              <li className="mb-2">&copy; brhn.me {year}</li>
            </ul>
          </div>
          <div className="col-4 offset-lg-2 mb-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/">Home</Link></li>
              <li className="mb-2"><Link href="/resume">Resume</Link></li>
              <li className="mb-2"><Link href="/posts">Posts</Link></li>
              <li className="mb-2"><Link href="/travel">Travel</Link></li>
              <li className="mb-2"><Link href="/activities">Activities</Link></li>
              <li className="mb-2"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-4 col-lg-2 mb-3">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a target="_blank" href="https://www.linkedin.com/in/brhn-me/">LinkedIn</a></li>
              <li className="mb-2"><a target="_blank" href="https://github.com/brhn-me">GitHub</a></li>
              <li className="mb-2"><a target="_blank" href="https://leetcode.com/brhndotme/">LeetCode</a></li>
              <li className="mb-2"><a target="_blank" href="https://brhnme.medium.com/">Medium</a></li>
              <li className="mb-2"><a target="_blank" href="https://fb.me/brhnme">Facebook</a></li>
              <li className="mb-2"><a target="_blank" href="https://twitter.com/brhn_me">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
