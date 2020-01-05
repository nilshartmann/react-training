/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostPageQuery
// ====================================================

export interface PostPageQuery_post_user {
  __typename: "User";
  name: string;
}

export interface PostPageQuery_post {
  __typename: "BlogPost";
  id: string;
  title: string;
  date: string;
  body: string;
  user: PostPageQuery_post_user;
}

export interface PostPageQuery {
  post: PostPageQuery_post | null;
}

export interface PostPageQueryVariables {
  postId: string;
}
