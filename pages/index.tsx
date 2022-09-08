import React from "react";
import Project from "../interfaces/project";
import { getAllProjects } from "../lib/projects.api";
import Profile from "../components/profile";


type Props = {
  projects: Project[]
}

export default function Index(props: Props) {

  return (
    <Profile projects={props.projects} />
  )
}

export const getStaticProps = async () => {

  const projects = getAllProjects([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'repo',
    'articles',
    'techs',
  ])

  return {
    props: { projects }
  }
}


