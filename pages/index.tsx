import React from "react";
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import Project from "../interfaces/project";
import { getAllProjects } from "../lib/projects.api";
import Profile from "../components/profile";






type Props = {
  posts: Post[],
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
    'blog',
    'techs',
  ])

  return {
    props: { posts, projects },
  }
}


