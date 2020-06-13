import { NewBlogPost } from "./types";

const slowUrl = (url: string) =>
  new URLSearchParams(document.location.search).get("slow") !== null ? `${url}?slow` : url;

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
