import SideNav from './side-nav';
import About from './about';
import Experiences from './experiences';
import TechSkills from './tech-skills';
import Research from './research';
import Projects from './projects';
import Education from './education';
import Certifications from './certifications';
import Awards from './awards';
import ExtraCurricular from './extra-curricular';
import Project from '../../interfaces/project';
import Footer from '../footer';
import Head from 'next/head';
import { SITE_NAME } from '../../lib/constants';

type Props = {
  projects: Project[]
}

export default function Profile(props: Props) {
  const title = `K H M BURHAN UDDIN :: ${SITE_NAME}`;

  return (
    <div id="page-top">
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <SideNav />
      <div className="container-fluid p-0">
        <main className="profile noselect with-sidebar">
          <About />
          <Experiences />
          <TechSkills />
          <Research />
          <Projects projects={props.projects} />
          <Education />
          <Certifications />
          <Awards />
          <ExtraCurricular />
        </main>
        <Footer sidebar={true}/>
      </div>
    </div>
  )
}