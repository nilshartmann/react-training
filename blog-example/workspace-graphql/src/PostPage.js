import React from "react";
import Post from "./Post";
import { useParams, Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const PostPageQuery = gql`
  query PostPageQuery($postId: ID!) {
    post(postId: $postId) {
      id
      title
      date
      body
      user {
        name
      }
    }
  }
`;

export default function PostPage() {
  const { postId } = useParams();

  const { loading, error, data } = useQuery(PostPageQuery, {
    variables: {
      postId
    }
  });
  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    return <h1>GraphQL Failed: {error.toString()}</h1>;
  }
  if (data.post) {
    return (
      <>
        <Link className="Button" to="/">
          Home
        </Link>
        <Post post={data.post} />
      </>
    );
  }

  return <h1>Please wait, Post is loading</h1>;
}
