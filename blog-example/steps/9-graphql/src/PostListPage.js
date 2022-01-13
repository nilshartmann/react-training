import React from "react";
import PostList from "./PostList";
import { gql, useQuery } from "@apollo/client";

const PostListPageQuery = gql`
  query PostListPage {
    posts {
      title
      teaser
      id
    }
  }
`;

export default function PostListPage(props) {
  const { loading, data, error } = useQuery(PostListPageQuery);

  // const [posts, setPosts] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("http://localhost:7000/posts?short")
  //     .then(response => response.json())
  //     .then(json => {
  //       setPosts(json);
  //     })
  //     .catch(err => console.error("Loading data failed: " + err));
  // }, []);

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    console.error(error);
    return <h1>Error! Loading failed!</h1>;
  }

  return <PostList onAdd={props.onAdd} posts={data.posts} />;
}
