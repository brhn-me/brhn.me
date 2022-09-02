import React from "react";
import Image from 'next/image'
import Scrollspy from 'react-scrollspy'
import ProfilePic from '../../public/images/profile.jpg';


type Props = {

}

export default function SideNav({ }: Props) {


  return (
    <nav className="side-nav navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">K H M BURHAN UDDIN</span>
        <span className="d-none d-lg-block">
          <div className="img-profile">
            <Image className="img-fluid img-profile rounded-circle mx-auto" src={ProfilePic} />
          </div>
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <Scrollspy className="navbar-nav" items={[
          'about',
          'experiences',
          'skills',
          'research',
          'projects',
          'education',
          'certifications',
          'awards',
          'extra-curricular'
        ]
        } currentClassName="nav-active">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experiences">Experiences</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#research">Research</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#certifications">Certifications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#awards">Awards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#extra-curricular">Extra Curricular</a>
          </li>
        </Scrollspy>
      </div>
    </nav>
  )
}

export const getStaticProps = async () => {

  return {
    props: {},
  }
}


