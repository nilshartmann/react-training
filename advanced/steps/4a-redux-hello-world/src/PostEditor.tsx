import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlogTitle, updateBlogBody } from "actions";
import { AppState } from "reducers";

type PostEditorProps = {
  onSavePost(): void;
};

export default function PostEditor(props: PostEditorProps) {
  const dispatch = useDispatch();

  const title = useSelector((state: AppState) => state.newBlogPost.title);
  const body = useSelector((state: AppState) => state.newBlogPost.body);

  function updateTitle(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateBlogTitle(e.currentTarget.value));
  }

  function updateBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateBlogBody(e.currentTarget.value));
  }

  function clear() {
    dispatch(updateBlogTitle(""));
    dispatch(updateBlogBody(""));
  }

  const saveButtonDisabled = !title || !body;

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={updateTitle} />
      </label>

      <label>
        Body
        <textarea value={body} onChange={updateBody} />
      </label>

      <button onClick={clear}>Clear</button>
      <button disabled={saveButtonDisabled} onClick={props.onSavePost}>
        Save Post
      </button>
    </div>
  );
}
