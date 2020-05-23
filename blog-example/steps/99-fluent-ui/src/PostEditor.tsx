import React from "react";
import { NewBlogPost } from "./types";
import {
  TextField,
  FontSizes,
  Stack,
  DefaultButton,
  PrimaryButton,
  TextFieldBase,
  Text
} from "@fluentui/react";

import { Depths, NeutralColors } from "@uifabric/fluent-theme";

type PostEditorProps = {
  onSavePost(post: NewBlogPost): void;

  initialTitle?: string;
  initialBody?: string;
};

export default function PostEditor(props: PostEditorProps) {
  const [title, setTitle] = React.useState(props.initialTitle || "");
  const [body, setBody] = React.useState(props.initialBody || "");

  const titleRef = React.useRef<TextFieldBase | null>(null);
  const clearDisabled = !title && !body;
  const saveButtonDisabled = !title || !body;

  const onTitleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    setTitle(newValue || "");
  };

  const onBodyChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    setBody(newValue || "");
  };

  function clear() {
    setTitle("");
    setBody("");

    if (titleRef.current) {
      titleRef.current.focus();
    }
  }

  return (
    <Stack
      style={{
        width: "100%",
        boxShadow: Depths.depth8,
        background: NeutralColors.white,
        padding: FontSizes.xLarge
      }}
      tokens={{
        childrenGap: "30"
      }}
    >
      <Text variant="xxLarge">Add Post</Text>
      <TextField label="Title" value={title} onChange={onTitleChange} componentRef={titleRef} />
      <TextField label="Body" multiline rows={3} onChange={onBodyChange} />

      <Stack horizontal tokens={{ childrenGap: 40 }}>
        <PrimaryButton
          disabled={saveButtonDisabled}
          onClick={() => {
            props.onSavePost({
              title,
              body
            });
          }}
        >
          Save Post
        </PrimaryButton>

        <DefaultButton disabled={clearDisabled} onClick={clear}>
          Clear
        </DefaultButton>
      </Stack>
    </Stack>
  );
}
