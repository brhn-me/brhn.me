const lqip = require('lqip-modern');
const fs = require('fs');
const path = require('path');

async function generateBlurDataURL(imagePath) {
  const imagePathAbsolute = path.join(process.cwd(), 'public', imagePath);
  const { metadata } = await lqip(imagePathAbsolute);
  return metadata.dataURIBase64;
}

module.exports = generateBlurDataURL;
