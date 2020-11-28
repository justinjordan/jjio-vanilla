import env from './env.js';

const cache = {};

export async function getPostImage(id) {
  const url = `${env.wpHost}/wp-json/wp/v2/media/${id}?_fields=title,source_url`;

  if (cache[url]) {
    return cache[url];
  }

  const response = await fetch(url);
  const image = await response.json();
  return cache[url] = {
    ...image,
    title: image.title.rendered,
  };
}

export async function getPostAuthor(id) {
  const url = `${env.wpHost}/wp-json/wp/v2/users/${id}`;

  if (cache[url]) {
    return cache[url];
  }

  const response = await fetch(url);
  return cache[url] = await response.json();
 
}

export async function getPosts() {
  const url = `${env.wpHost}/wp-json/wp/v2/posts?_fields=author,date,slug,title,yoast,featured_media`;

  if (cache[url]) {
    return cache[url];
  }

  const response = await fetch(url);
  return cache[url] = (await response.json()).map(post => {
    return {
      ...post,
      title: post.title.rendered,
      description: post.yoast.metadesc,
    };
  });
};