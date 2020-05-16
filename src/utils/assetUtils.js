// We can use "process.env.VAR_NAME" on both the server and the client.
// See config/env.js and server/indexHtml.js

const ImageUrl = "https://d2qj18ujwk1hn4.cloudfront.net";
export function imagePath(assetName) {
  return `${ImageUrl}/${assetName}`;
}

export function workImagePath(assetName) {
  return `${ImageUrl}/work/${assetName}`;
}

export function differImagePath(assetName) {
  return `${ImageUrl}/difference/${assetName}`;
}

export function hrxImagePath(assetName) {
  return `${ImageUrl}/hrx/${assetName}`;
}

export function niharImagePath(assetName) {
  return `${ImageUrl}/nihar-gold/${assetName}`;
}

export function kateImagePath(assetName) {
  return `${ImageUrl}/kate/${assetName}`;
}

export function thambbiImagePath(assetName) {
  return `${ImageUrl}/thambbi/${assetName}`;
}

export function heroImagePath(assetName) {
  return `${ImageUrl}/hero/${assetName}`;
}

export function cocoImagePath(assetName) {
  return `${ImageUrl}/coco/${assetName}`;
}

export function sussegadoImagePath(assetName) {
  return `${ImageUrl}/jars/${assetName}`;
}

export function rapidrupeeImagePath(assetName) {
  return `${ImageUrl}/rapid-rupee/${assetName}`;
}

export function gravityImagePath(assetName) {
  return `${ImageUrl}/gravity/${assetName}`;
}

export function fontPath(assetName) {
  return `${process.env.PUBLIC_URL}/fonts/${assetName}`;
}

export function blobImagePath(assetName) {
  return `${ImageUrl}/blob/${assetName}`;
}
