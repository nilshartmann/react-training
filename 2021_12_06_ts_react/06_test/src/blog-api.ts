import { BlogPost } from "./types";

export type OnSuccess = (posts: BlogPost[]) => void;
type OnError = (err: string) => void;

export function loadPosts(onSuccess: OnSuccess, onError?: OnError) {
  fetch("http://localhost:7000/posts")
    .then(response => response.json())
    .then(json => onSuccess(json))
    .catch(err => (onError ? onError(String(err)) : console.error(err)));
}
