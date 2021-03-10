import { createSlice } from "@reduxjs/toolkit";

// todo implementieren den editorSlice:
//   - der initialState soll aus einem leeren title und body-String bestehen
//   - implementiere die reducer "clearDraft", "setDraftBody" und "setDraftTitle"
const editorSlice = createSlice({
  name: "editor",
  initialState: {},
  reducers: {}
});

export default editorSlice.reducer;

export const { clearDraft, setDraftBody, setDraftTitle } = editorSlice.actions;
