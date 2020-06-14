import { NewBlogPost } from "./types";

const slowUrl = (url: string) =>
  new URLSearchParams(document.location.search).get("slow") !== null ? `${url}?slow` : url;

/** This is "normal" fetch, but simulates slow network connection, if "?slow" is added to the URL of
 * our Application
 */
export function demoFetch(url: string) {
  return fetch(slowUrl(url));
}

export function readPosts() {
  return fetch(slowUrl("http://localhost:7000/posts")).then(response => response.json());
}

export function writePosts(post: NewBlogPost) {
  return fetch(slowUrl("http://localhost:7000/posts"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(response => response.json());
}
