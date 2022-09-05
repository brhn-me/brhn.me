import { readdirSync, readFileSync } from 'fs';
import * as crypto from 'crypto';
import moment from "moment";
import { join } from "path";
import striptags from "striptags";
import Article from "../interfaces/article";
import { Item, RSS } from "../interfaces/rss";
import { EXCERPT_MAX_WORDS, MEDIUM_USERNAME, POSTS_DIR, SITE_BASE_URL } from "./constants";
import matter from "gray-matter";


export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

export async function rssToJson<T>(rssUrl: string): Promise<T> {
    const resourceUrl = "https://api.rss2json.com/v1/api.json?rss_url=" + rssUrl
    const response = await fetch(resourceUrl);
    return await response.json();
}

export async function getMediumPosts(): Promise<Article[]> {
    let random = (Math.random() + 1).toString(36).substring(7);
    const rssUrl = "https://medium.com/feed/@" + MEDIUM_USERNAME + "?abcxyz=" + random;
    const data: RSS = await rssToJson(rssUrl);

    let articles = [];
    if (data.status == "ok" && data.items != null && data.items.length > 0) {
        data.items.forEach((item) => {
            let article = rssItemToArticle(item, "medium");
            articles.push(article);
        })
    }
    return articles;
}

export function rssItemToArticle(item: Item, source: string): Article {
    const date = moment(Date.parse(item.pubDate)).toISOString();

    let excerpt = striptags(item.description);
    let words = excerpt.split(' ');
    if (words.length > EXCERPT_MAX_WORDS) {
        excerpt = words.slice(0, EXCERPT_MAX_WORDS).join(' ') + " ...";
    }

    let article: Article = {
        title: item.title,
        date: date,
        slug: item.guid,
        thumb: item.thumbnail,
        author: {
            name: item.author,
            picture: '/assets/articles/authors/burhan.jpg'
        },
        excerpt: excerpt,
        content: '',
        tags: item.categories,
        source: source,
        id: item.guid,
        link: item.link
    };
    return article;
}

const postsDir = join(process.cwd(), POSTS_DIR);

export function getRealSlug(slug: string) {
    return slug.replace(/\.md$/, '');
}

export function getPostSlugs() {
    return readdirSync(postsDir)
}

export function getPostSlugsReal() {
    const slugs = getPostSlugs();
    return slugs.map(getRealSlug);
}

export function getPostBySlug(slug: string) {
    const realSlug = getRealSlug(slug)
    const fullPath = join(postsDir, `${realSlug}.md`)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)


    const article: Article = {
        id: md5(realSlug),
        slug: realSlug,
        title: data["title"],
        link: SITE_BASE_URL + "/posts/" + realSlug,
        date: data["date"],
        thumb: data["thumb"],
        author: {
            name: data["author"]["name"],
            picture: data["author"]["picture"]
        },
        excerpt: data["excerpt"],
        content: content,
        tags: data["tags"],
        source: data["source"]
    }

    return article
}

export function getAllPosts() {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
    return posts
}


export async function getAllPostsMerged() {
    let posts = getAllPosts()

    const mediumPosts = await getMediumPosts();
    mediumPosts.forEach((p) => posts.push(p))

    posts = posts.sort((p1, p2) => {
        const d1 = Date.parse(p1.date);
        const d2 = Date.parse(p2.date);
        return d2 - d1;
    })

    return posts
}





