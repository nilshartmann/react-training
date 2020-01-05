import React from "react";
import Post from "./Post";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { assertDataPresent } from "./types";
import { PostPageQuery, PostPageQueryVariables } from "./querytypes/PostPageQuery";

const POST_PAGE_QUERY = gql`
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

  if (!postId) {
    throw new Error("Param PostId must be defined");
  }

  const { loading, error, data } = useQuery<PostPageQuery, PostPageQueryVariables>(
    POST_PAGE_QUERY,
    {
      variables: {
        postId
      }
    }
  );
  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  if (error) {
    return <h1>GraphQL Failed: {error.toString()}</h1>;
  }

  assertDataPresent(data);

  if (!data.post) {
    return <h1>Post not found!</h1>;
  }

  return (
    <>
      <Link className="Button" to="/">
        Home
      </Link>
      <Post post={data.post} />
    </>
  );
}
