
import path from "path";
import { join } from "path";
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import matter from "gray-matter";
import {
  SITE_BASE_URL,
  POSTS_DIR,
  MEDIUM_DIR,
  DATA_DIR,
  AUTHOR,
  MEDIA_DIR_BASE} from "./config.mjs"

import {
  md5,
  getExcerpt,
  generateThumbBase64,
  tagify,
} from "./utils.mjs"

const MEDIUM_POST_DIR = join(DATA_DIR, MEDIUM_DIR)

export class MarkDownDataReader {
  constructor(dir) {
    this.dataDir = join(process.cwd(), dir);
  }

  getRealSlug(slug) {
    return slug.replace(/\.md$/, '');
  }

  getPostSlugs() {
    return readdirSync(this.dataDir).filter(f => path.extname(f).toLowerCase() == ".md")
  }

  getPostSlugsReal() {
    const slugs = this.getPostSlugs();
    return slugs.map(this.getRealSlug);
  }

  async getPostBySlug(slug, includeContent = false) {
    const realSlug = this.getRealSlug(slug)
    const fullPath = join(this.dataDir, `${realSlug}.md`)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    let excerpt = data["excerpt"]
    if (!excerpt) {
      excerpt = getExcerpt(content)
    }

    const image = data["image"]
    let thumb = ""
    if (image) {
      const imageAbsUrl = join(MEDIA_DIR_BASE, image)
      thumb = await generateThumbBase64(imageAbsUrl)
    }

    let source = data["source"] ? data["source"] : "md";
    let link = source == "md" ? SITE_BASE_URL + "/posts/" + realSlug : data["link"]

    const article = {
      id: md5(realSlug),
      slug: realSlug,
      title: data["title"],
      link: link,
      date: data["date"],
      image: image,
      thumb: thumb,
      author: AUTHOR,
      excerpt: excerpt,
      featured: data["featured"] || "no",
      tags: data["tags"],
      content: includeContent ? content : "",
      source: source
    }

    return article
  }

  async getAllPosts() {
    const slugs = this.getPostSlugs()
    let posts = []
    for (const slug of slugs) {
      let post = await this.getPostBySlug(slug)
      posts.push(post)
    }
    return posts
  }
}


export async function getAllMDPosts() {
  let mdReader = new MarkDownDataReader(POSTS_DIR);
  return await mdReader.getAllPosts();
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

  let postsReader = new MarkDownDataReader(POSTS_DIR);
  let posts = await postsReader.getAllPosts();
  let mediumReader = new MarkDownDataReader(MEDIUM_POST_DIR);
  let mediumPosts = await mediumReader.getAllPosts();

  posts = posts.concat(mediumPosts)

  posts = posts.sort((p1, p2) => {
    const d1 = Date.parse(p1.date);
    const d2 = Date.parse(p2.date);
    return d2 - d1;
  })
  return posts
}

export const getPostInfo = (post, includeExcerpt = false) => {
  let r = {
    id: post.id,
    title: post.title,
    image: post.image,
    link: post.link,
    slug: post.slug,
    date: post.date,
    source: post.source
  }

  if (includeExcerpt) {
    r["excerpt"] = getExcerpt(post.excerpt, 30)
  }

  return r
}

export const generateNextPrevRelated = (posts) => {
  let data = {}
  // generate prev and next link  
  let postDict = {}
  let tagDict = {}

  for (let i = posts.length - 1; i >= 0; i--) {
    let id = posts[i]["id"]
    let prev = null;
    let next = null;

    data[id] = {
      id: id,
      title: posts[i]["title"],
      link: posts[i]["link"],
      next: null,
      prev: null,
      related: []
    }

    // calculate next prev
    if (i > 0) {
      let prev = getPostInfo(posts[i - 1]);
      data[id]["next"] = prev
    }
    if (i < posts.length - 1) {
      let next = getPostInfo(posts[i + 1])
      data[id]["prev"] = next;
    }
    // for debug 
    // data[id]["title"] = posts[i]["title"]

    // create post info and put it into dict
    let post = getPostInfo(posts[i], true)
    postDict[post.id] = post;

    // generate tag dict
    let tags = posts[i].tags || []
    tags.forEach(t => {
      let tagified = tagify(t)
      if (!tagDict[tagified]) {
        tagDict[tagified] = new Set();
      }
      tagDict[tagified].add(post.id)
    })
  }

  // now we have postDict and tagDict, now we can populated related posts info in: o(n+n)
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
    let tags = post.tags

    let relatedIds = [];
    for (let tag of tags) {
      tag = tagify(tag)
      let taggedIds = tagDict[tag];
      for (let taggedId of taggedIds) {
        if (taggedId != post.id) {
          relatedIds.push(taggedId)
        }
      }
    }
    // count repetition, the more repeated is more related 
    let relatedIdsFreq = relatedIds.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1
      return prev
    }, {})

    let relatedPosts = []
    for (let relId in relatedIdsFreq) {
      let relatedPost = postDict[relId]
      relatedPost["weight"] = relatedIdsFreq[relId]
      relatedPosts.push(relatedPost)
    }



    relatedPosts = relatedPosts.sort((rp1, rp2) => {
      if (rp1.weight == rp2.weight) {
        let d1 = Date.parse(rp1.date)
        let d2 = Date.parse(rp2.date)
        return d2 - d1;
      }
      return rp2.weight - rp1.weight
    }).slice(0, 5)

    data[post.id]["related"] = relatedPosts
    // for debug, easy read
  }
  return data;
}

let POSTS_JSON_FILE = join(process.cwd(), DATA_DIR, "posts.json");
let PREV_NEXT_RELATED_DIR = join(process.cwd(), DATA_DIR, "prev-next-related");

export const getPrevNextRelatedData = (id) => {
  const data = readFileSync(join(PREV_NEXT_RELATED_DIR, id + ".json"),
    { encoding: 'utf8', flag: 'r' });
  return JSON.parse(data);
}

export const getAllPostsTogetherCached = () => {
  const data = readFileSync(POSTS_JSON_FILE,
    { encoding: 'utf8', flag: 'r' });
  return JSON.parse(data);
}

getAllPostsTogether().then((posts) => {
  writeFileSync(POSTS_JSON_FILE, JSON.stringify(posts, { encoding: "utf8" }, 4));

  let prevNextReladedData = generateNextPrevRelated(posts)
  for (let id in prevNextReladedData) {
    let data = prevNextReladedData[id]
    writeFileSync(join(PREV_NEXT_RELATED_DIR, id + ".json"), JSON.stringify(data, { encoding: "utf8" }, 4));
  }


  console.log("Combined posts cache file generated at: %s", POSTS_JSON_FILE)
})
