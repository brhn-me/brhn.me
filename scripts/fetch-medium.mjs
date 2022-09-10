import moment from 'moment';
import parser from 'rss-parser'
import striptags from "striptags";
import { JSDOM } from 'jsdom';
import { join } from "path";
import { writeFileSync } from 'fs';
import matter from "gray-matter";
import urlEncodeDecode from "url-encode-decode"
import nodeHtmlMarkdown from 'node-html-markdown'
import {
  MEDIUM_FEED_URL,
  MEDIUM_DIR,
  MEDIUM_MEDIA_DIR,
  MEDIUM_IMAGE_WIDTH,
  MEDIA_DIR_BASE,
  AUTHOR,
  DATA_DIR
} from "./config.mjs"
import {
  md5,
  getExcerpt,
  generateThumbFromUrl
} from "./utils.mjs"

const { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } = nodeHtmlMarkdown;

const dataDir = join(process.cwd(), DATA_DIR)

export const fetchMediumPosts = async () => {

  console.log("Fetching feed: " + MEDIUM_FEED_URL)
  let feed = await new parser().parseURL(MEDIUM_FEED_URL);
  console.log("Fetched posts: %d", feed.items.length)

  let articles = []

  for (let item of feed.items) {
    let url = new URL(item.link)
    let slug = url.pathname.substring(1)
    let link = url.protocol + "//" + url.host + url.pathname
    link = urlEncodeDecode.decode(link)
    slug = urlEncodeDecode.decode(slug)

    console.log(" - Processing: %s", link)

    let id = md5(item.guid);
    let content = item['content:encoded']
    let excerpt = getExcerpt(striptags(content))
    let dom = new JSDOM(content)
    let imageUrl = dom.window.document.querySelector("img").src
    let date = moment(Date.parse(item.pubDate)).toISOString();

    let imagePath = join(MEDIUM_MEDIA_DIR, slug + ".webp");
    let mdFile = join(dataDir, MEDIUM_DIR, slug + ".md");

    let tags = [];
    item.categories.forEach(cat => {
      tags.push(cat)
    })

    const nhm = new NodeHtmlMarkdown()
    let mdContent = nhm.translate(content)
    await generateThumbFromUrl(imageUrl, join(MEDIA_DIR_BASE, imagePath), MEDIUM_IMAGE_WIDTH)
    

    let article = {
      id: id,
      title: item.title,
      date: date,
      image: imagePath,
      excerpt: excerpt,
      link: link,
      slug: slug,
      source: "medium",
      featured: "no",
      tags: tags,
      author: AUTHOR
    }
    writeFileSync(mdFile, matter.stringify(mdContent, article));

    // to avoid typescript type issue later on
    article["content"] = ""
    articles.push(article)

  }
  return articles
}



fetchMediumPosts()
  .then((articles) => {
    //writeFileSync(join(DATA_DIR, "medium.json"), JSON.stringify(articles));
  })


