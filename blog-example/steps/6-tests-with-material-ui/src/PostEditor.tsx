import { Button, Card, CardActions, CardContent, TextField, Typography } from "@material-ui/core";
import React from "react";
import { NewBlogPost } from "./types";

type PostEditorProps = {
  onSavePost(post: NewBlogPost): void;

  initialTitle?: string;
  initialBody?: string;
};

export default function PostEditor(props: PostEditorProps) {
  const [title, setTitle] = React.useState(props.initialTitle || "");
  const [body, setBody] = React.useState(props.initialBody || "");

  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  function clear() {
    setTitle("");
    setBody("");

    if (titleRef.current) {
      titleRef.current.focus();
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Create Post</Typography>

        <form>
          <div>
            <TextField
              id="titleField"
              fullWidth
              label="Title"
              value={title}
              ref={titleRef}
              onChange={e => setTitle(e.currentTarget.value)}
            />
          </div>

          <div>
            <TextField
              id="bodyField"
              fullWidth
              multiline
              label="Body"
              value={body}
              rows={8}
              onChange={e => setBody(e.currentTarget.value)}
            />
          </div>
        </form>
      </CardContent>

      <CardActions>
        <Button variant="contained" disabled={clearDisabled} onClick={clear}>
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={saveButtonDisabled}
          onClick={() => {
            props.onSavePost({
              title,
              body
            });
          }}
        >
          Save Post
        </Button>
      </CardActions>
    </Card>
  );
}
