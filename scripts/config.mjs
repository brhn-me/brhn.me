import { join } from "path";

// configs
export const EXCERPT_MAX_WORDS = 100
export const MEDIUM_FEED_URL = 'https://medium.com/feed/@brhnme'
export const SITE_BASE_URL = 'https://www.brhn.me'
export const MEDIUM_DIR = 'medium'
export const MEDIUM_IMAGE_WIDTH = 1024
export const POSTS_DIR = '_posts'
export const DATA_DIR = 'data'

export const AUTHOR = {
  name: 'Burhan',
  picture: '/assets/articles/authors/burhan.jpg'
}

export const MEDIUM_MEDIA_DIR = "/assets/medium";
export const MEDIA_DIR_BASE = join(process.cwd(), "public")