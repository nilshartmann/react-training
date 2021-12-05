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
  render(<PostEditor onSavePost={jest.fn()} />);

  const titleInput = screen.getByLabelText("Title");
  const bodyInput = screen.getByLabelText("Body");
  const saveButton = screen.getByRole("button", {
    name: "Save Post"
  });

  // Save Button should be disabled
  expect(saveButton).toBeDisabled();

  // enter Title...
  userEvent.type(titleInput, "New Title");

  // should still be disabled
  expect(saveButton).toBeDisabled();

  // enter body
  userEvent.type(bodyInput, "New Body");

  // ...now the button should be enabled
  expect(saveButton).toBeEnabled();
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
  render(<PostEditor onSavePost={jest.fn()} initialTitle="Hello" initialBody="World" />);

  const saveButton = screen.getByRole("button", { name: "Save Post" });
  const clearButton = screen.getByRole("button", { name: "Clear" });
  const titleInput = screen.getByLabelText("Title");
  const bodyInput = screen.getByLabelText("Body");

  expect(titleInput).toHaveValue("Hello");
  expect(bodyInput).toHaveValue("World");

  userEvent.click(clearButton);
  expect(titleInput).toHaveValue("");
  expect(bodyInput).toHaveValue("");
  expect(saveButton).toBeDisabled();
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

  const savePostFn = jest.fn();
  render(<PostEditor onSavePost={savePostFn} />);
  const saveButton = screen.getByRole("button", { name: "Save Post" });
  const titleInput = screen.getByLabelText("Title");
  const bodyInput = screen.getByLabelText("Body");

  // enter form
  userEvent.type(titleInput, "New Title");
  userEvent.type(bodyInput, "New Body");
  userEvent.click(saveButton);

  expect(savePostFn).toHaveBeenCalledWith({ title: "New Title", body: "New Body" });
});
