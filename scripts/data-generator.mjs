import moment from 'moment';
import parser from 'rss-parser'
import striptags from "striptags";
import { JSDOM } from 'jsdom';
import * as crypto from 'crypto';
import { join } from "path";
import { fstat, readdirSync, readFileSync, writeFileSync } from 'fs';
import matter from "gray-matter";
import fetch from "node-fetch";
import sharp from "sharp";

// configs
const EXCERPT_MAX_WORDS = 100
const MEDIUM_FEED_URL = 'https://medium.com/feed/@brhnme'
const SITE_BASE_URL = 'https://www.brhn.me'
const POSTS_DIR = '_posts'
const DATA_DIR = '.data'
const AUTHOR = {
  name: 'Burhan',
  picture: '/assets/articles/authors/burhan.jpg'
}

const MEDIUM_MEDIA_DIR = "/assets/medium";
const MEDIUM_MEDIA_DIR_BASE = join(process.cwd(), "public")

const getExcerpt = (str) => {
  if (!str) {
    return ""
  }

  let words = str.split(' ');
  if (words.length > EXCERPT_MAX_WORDS) {
    return words.slice(0, EXCERPT_MAX_WORDS).join(' ') + " ...";
  }
  return str
}

const md5 = (contents) => {
  return crypto.createHash('md5').update(contents).digest("hex")
}

export const getMediumPosts = async () => {
  let feed = await new parser().parseURL(MEDIUM_FEED_URL);

  let articles = []

  feed.items.forEach(item => {
    let id = md5(item.guid);
    let content = item['content:encoded']
    let dom = new JSDOM(content)
    let imageUrl = dom.window.document.querySelector("img").src
    let imageLocalPath = join(MEDIUM_MEDIA_DIR, id + ".webp");
    
    let tags = [];
    item.categories.forEach(cat => {
      tags.push(cat)
    })

    fetchAndSaveMediumImage(imageUrl, imageLocalPath)

    let article = {
      id: id,
      title: item.title,
      date: moment(Date.parse(item.pubDate)).toISOString(),
      image: imageLocalPath,
      excerpt: getExcerpt(striptags(content)),
      link: item.link,
      slug: item.link,
      source: "medium",
      tags: tags,
      author: AUTHOR,
      content: ""
    }

    

    articles.push(article)
  });
  return articles
}

export class MarkDownDataReader {
  constructor(dir) {
    this.dataDir = join(process.cwd(), dir);
  }

  getRealSlug(slug) {
    return slug.replace(/\.md$/, '');
  }

  getPostSlugs() {
    return readdirSync(this.dataDir)
  }

  getPostSlugsReal() {
    const slugs = this.getPostSlugs();
    return slugs.map(this.getRealSlug);
  }

  getPostBySlug(slug, includeContent = false) {
    const realSlug = this.getRealSlug(slug)
    const fullPath = join(this.dataDir, `${realSlug}.md`)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    let excerpt = data["excerpt"]
    if (!excerpt) {
      excerpt = getExcerpt(content)
    }


    const article = {
      id: md5(realSlug),
      slug: realSlug,
      title: data["title"],
      link: SITE_BASE_URL + "/posts/" + realSlug,
      date: data["date"],
      image: data["image"],
      author: AUTHOR,
      excerpt: excerpt,
      tags: data["tags"],
      content: includeContent ? content : "",
      source: "md"
    }
    return article
  }

  getAllPosts() {
    const slugs = this.getPostSlugs()
    const posts = slugs
      .map((slug) => this.getPostBySlug(slug))
    return posts
  }
}


export async function getAllMDPosts() {
  let mdReader = new MarkDownDataReader(POSTS_DIR);
  return mdReader.getAllPosts();
}

export async function getAllMDSlugs() {
  let mdReader = new MarkDownDataReader(POSTS_DIR);
  return mdReader.getPostSlugsReal();
}

export async function getMDPostBySlug(slug, includeContent) {
  let mdReader = new MarkDownDataReader(POSTS_DIR);
  return mdReader.getPostBySlug(slug, includeContent);
}

export async function getAllPostsTogether() {
  let mdReader = new MarkDownDataReader(POSTS_DIR);

  let mediumPosts = await getMediumPosts();
  let localPosts = mdReader.getAllPosts();

  let posts = localPosts.concat(mediumPosts);
  posts = posts.sort((p1, p2) => {
    const d1 = Date.parse(p1.date);
    const d2 = Date.parse(p2.date);
    return d2 - d1;
  })

  return posts
}


export const fetchAndSaveMediumImage = async (imageUrl, imageLocalPath) => {
  let response = await fetch(imageUrl)
  const data = await response.arrayBuffer()
  const buffer = Buffer.from(data, 'binary')
  const outputPath = join(MEDIUM_MEDIA_DIR_BASE, imageLocalPath);

  const image = await sharp(buffer)
    .resize({
      fit: sharp.fit.contain,
      width: 640
    })
    .withMetadata()
    .webp()
    .toFile(outputPath)

  return outputPath;
}




getAllPostsTogether().then((posts) => {
  let postsFile = join(process.cwd(), DATA_DIR, "posts.json");
  writeFileSync(postsFile, JSON.stringify(posts, { encoding: "utf8" }));
})

