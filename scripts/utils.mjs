import * as crypto from 'crypto';
import {EXCERPT_MAX_WORDS} from "./config.mjs"
import fetch from "node-fetch";
import sharp from "sharp";


export const getExcerpt = (str) => {
  if (!str) {
    return ""
  }

  let words = str.split(' ');
  if (words.length > EXCERPT_MAX_WORDS) {
    return words.slice(0, EXCERPT_MAX_WORDS).join(' ') + " ...";
  }
  return str
}

export const md5 = (contents) => {
  return crypto.createHash('md5').update(contents).digest("hex")
}

export const generateThumb = async (buffer, outputPath, width=60) => {
  const image = await sharp(buffer)
    .resize({
      fit: sharp.fit.contain,
      width: width
    })
    .withMetadata()
    .webp()
    .toFile(outputPath)

    return outputPath;
}

export const generateThumbBase64 = async (imagePath, width = 32) => {
  const buff = await sharp(imagePath)
    .resize({
      fit: sharp.fit.contain,
      width: width
    })
    .withMetadata()
    .png()
    .toBuffer()
    
    const r = `data:image/png;base64,${buff.toString('base64')}`
    return r;
}

export const generateThumbFromUrl = async (imageUrl, imagePath, width) => {
  let response = await fetch(imageUrl)
  const data = await response.arrayBuffer()
  const buffer = Buffer.from(data, 'binary')
  const image = await generateThumb(buffer, imagePath, width)
  return image;
}


export function tagify(tag) {
  return tag.toLowerCase().split(" ").join("-");
}

export function untagify(tag) {
  return tag.split("-").join(" ");
}
