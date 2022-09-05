import React from "react";
import { getAllPosts } from '../lib/api'
import Project from "../interfaces/project";
import { getAllProjects } from "../lib/projects.api";
import Profile from "../components/profile";
import Article from "../interfaces/article";


type Props = {
  posts: Article[],
  projects: Project[]
}

export default function Index(props: Props) {

  return (
    <Profile projects={props.projects} />
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

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
    props: { posts, projects },
  }
}


