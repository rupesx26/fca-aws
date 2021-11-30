// We can use "process.env.VAR_NAME" on both the server and the client.
// See config/env.js and server/indexHtml.js

const ImageUrl = "http://dqwpk0oa16wlh.cloudfront.net";
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

export function niharShantiImagePath(assetName) {
  return `${ImageUrl}/nihar-shanti/${assetName}`;
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

export function lifeBuoyImagePath(assetName) {
  return `${ImageUrl}/lifebuoy/${assetName}`;
}

export function setWetImagePath(assetName) {
  return `${ImageUrl}/setwet/${assetName}`;
}

export function tlcImagePath(assetName) {
  return `${ImageUrl}/tlc/${assetName}`;
}

export function ozivaImagePath(assetName) {
  return `${ImageUrl}/oziva/${assetName}`;
}

export function hersheyImagePath(assetName) {
  return `${ImageUrl}/hershey/${assetName}`;
}

export function ozivakidsImagePath(assetName) {
  return `${ImageUrl}/ozivakids/${assetName}`;
}

export function wildstonecodeImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/wild-stone-code/${assetName}`;
}
