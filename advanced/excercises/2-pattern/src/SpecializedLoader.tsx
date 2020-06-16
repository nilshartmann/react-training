import React from "react";
import { BlogPost, User } from "./types";
import LoadingIndicator from "./LoadingIndicator";
import { demoFetch } from "./api";
import SinglePost from "./SinglePost";
import SingleUser from "./SingleUser";

export function BlogLoader() {
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    demoFetch("http://localhost:7000/posts/P7")
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setPost(json);
      })
      .catch(err => console.error("Loading data failed: " + err));
  }, []);

  if (loading || !post) {
    return <LoadingIndicator>Post is loading. Please wait.</LoadingIndicator>;
  }

  return <SinglePost title="Blog Post (Hook Example)" post={post} />;
}

export function UserLoader() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    demoFetch("http://localhost:7000/users/U2")
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setUser(json);
      })
      .catch(err => console.error("Loading data failed: " + err));
  }, []);

  if (loading || !user) {
    return <LoadingIndicator>User is loading. Please wait.</LoadingIndicator>;
  }

  return <SingleUser title="User (Hook Example)" user={user} />;
}
