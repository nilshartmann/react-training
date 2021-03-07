import React from "react";
import { useDispatch } from "react-redux";
import { clearDraft } from "../redux/editor-slice";
import { openList } from "../redux/view-slice";

export default function AppHeader() {
  const dispatch = useDispatch();

  // todo: hasDraft soll true sein, wenn entweder der Draft-Title oder der Draft-Body des Editors gesetzt ist (nicht null, nicht Leerstring)
  const hasDraft = false;

  return (
    <header>
      <h1 className="Link">React Training Blog</h1>
      <span style={{ textAlign: "right" }}>
        <button onClick={() => dispatch(openList())}>Home</button>
        <button
          disabled={!hasDraft}
          style={{ marginLeft: "0.5rem" }}
          onClick={() => dispatch(clearDraft())}
        >
          Clear Draft
        </button>
      </span>
    </header>
  );
}
