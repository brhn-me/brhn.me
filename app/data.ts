import path from 'path'
import { getMDXData } from './utils'

export function getPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'posts', 'data'))
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), 'app', 'projects', 'data'))
}
