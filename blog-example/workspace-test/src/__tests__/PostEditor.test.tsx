import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostEditor from "../PostEditor";

test("save button enablement", () => {
  // Render die PostEditor-Komponente
  //
  //   Suche das Titel-Eingabefeld, z.B. an Hand dessen Label ("Title")
  //   Suche das Body-Eingabefeld, z.B. an Hand dessen Label ("Body")
  //   Suche den "Save Post"-Button
  //
  //   1. Prüfe, dass der "Save Post"-Button disabled ist
  //   2. Fülle etwas in das Titel-Feld
  //   3. Der Save Post-Button sollte immer noch disabled sein
  //   4. Fülle etwas in das Body-Feld
  //   5. Der Save Post-Button sollte jetzt enabled sein
});

test("clear button", () => {
  // Render der PostEditor
  //   über die Properties "initialTitle" und "initialBody" mit zwei Werten
  // Stelle sicher,
  //   das title-Feld ist mit dem "initialTitle"-Wert vorbelegt
  //   das body-Feld ist mit dem "initialBody"-Wert vorbelegt
  //
  // Suche den "Clear"-Button
  //   drücke auf den Clear-Button
  // Stelle sicher,
  //   das title-Feld ist jetzt leer
  //   das body-Feld ist jetzt leer
  //   der Save-Button ist disabled
});

test("save post button callback", () => {
  // Erzeuge eine Mock-Funktion für den Save-Button-Callback
  // Render die PostEditor-Komponente und übergib die Mock-Funktion
  // Fülle title und body aus
  // Drücke auf den Save-Button
  // Stelle sicher, dass deine Mock-Funktion mit dem korrekten Parameter aufgerufen wurde
  //   Der Parameter sollte ein Objekt sein, dass aus "title" und "body" besteht und
  //   die jeweiligen Werte aus den Eingabefeldern enthält
  //   z.B: { title: "Hello", body: "World"}
});
