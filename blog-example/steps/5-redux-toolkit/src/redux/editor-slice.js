import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
  name: "editor",
  initialState: {
    title: "",
    body: ""
  },
  reducers: {
    // für jeden definierten reducer wird zur Laufzeit eine action-Creator-Funktion erzeugt
    clearDraft: function () {
      // man kann komplett neuen State zurückgeben
      return { title: "", body: "" };
    },

    // Der Wert, der der erzeugten action-creator-Funktion übergeben wird, wird
    // der action als 'payload'-Property hinzugefügt
    setDraftBody: function (state, action) {
      // Hier können wir mutable code hinschreiben 😊
      state.body = action.payload;
    },
    setDraftTitle: function (state, action) {
      // Hier können wir mutable code hinschreiben 😊
      state.title = action.payload;
    }
  }
});

export default editorSlice.reducer;

export const { clearDraft, setDraftBody, setDraftTitle } = editorSlice.actions;
