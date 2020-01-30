import React from "react";
import { NewBlogPost } from "../types";
import useAppSelector from "useAppSelector";
import { useDispatch } from "react-redux";
import {
  SetDraftBodyAction,
  SetDraftTitleAction,
  ClearDraftAction,
  setDraftTitle,
  setDraftBody,
  clearDraft
} from "actions";
import { Dispatch } from "redux";

type PostEditorProps = {
  onSavePost(post: NewBlogPost): void;
  error?: string | null | undefined;
};
export default function PostEditor(props: PostEditorProps) {
  const draftTitle = useAppSelector(state => state.draftPost.title);
  const draftBody = useAppSelector(state => state.draftPost.body);
  const dispatch = useDispatch<
    Dispatch<SetDraftBodyAction | SetDraftTitleAction | ClearDraftAction>
  >();

  function doSetTitle(newTitle: string) {
    dispatch(setDraftTitle(newTitle));
  }

  function doSetBody(newBody: string) {
    dispatch(setDraftBody(newBody));
  }

  function clear() {
    dispatch(clearDraft());
  }

  const saveButtonDisabled = !draftTitle || !draftBody;

  return (
    <div className="Container">
      <h1>Create Post</h1>

      <label>
        Title
        <input value={draftTitle} onChange={e => doSetTitle(e.currentTarget.value)} />
      </label>

      <label>
        Body
        <textarea value={draftBody} onChange={e => doSetBody(e.currentTarget.value)} />
      </label>

      {props.error && <p>{props.error}</p>}

      <button onClick={clear}>Clear</button>
      <button
        disabled={saveButtonDisabled}
        onClick={() => {
          clear();
          props.onSavePost({
            title: draftTitle,
            body: draftBody
          });
        }}
      >
        Save Post
      </button>
    </div>
  );
}
