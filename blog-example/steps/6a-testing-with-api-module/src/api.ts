import { NewBlogPost } from "./types";

export function readPosts() {
  return fetch("http://localhost:7000/posts").then(response => response.json());
}

export function writePosts(post: NewBlogPost) {
  return fetch("http://localhost:7000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(response => response.json());
}
