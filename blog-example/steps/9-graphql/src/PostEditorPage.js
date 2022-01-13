import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import PostEditor from "./PostEditor";

const AddBlogPostMuation = gql`
  mutation AddBlogPostMutation($postData: NewBlogPost!) {
    newPost: createBlogPost(postData: $postData) {
      error
      blogPost {
        id
        title
        date
        body
        user {
          id
          name
        }
      }
    }
  }
`;

function SuccessConfirmation() {
  return (
    <div className="Container">
      <h1>Your new post have been saved.</h1>
      <Link className="Button" to="/">
        Home
      </Link>
    </div>
  );
}

export default function PostEditorPage() {
  const [mutate, { error, data, called }] = useMutation(AddBlogPostMuation);
  async function savePost(post) {
    mutate({
      variables: {
        postData: post
      }
    });
  }

  const errorMessage = error ? error.toString() : data?.newPost.error;

  if (called && !errorMessage) {
    return <SuccessConfirmation />;
  }

  return <PostEditor onSavePost={savePost} />;
}
