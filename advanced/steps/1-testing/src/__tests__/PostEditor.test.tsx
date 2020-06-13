import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostEditor from "../PostEditor";

test("save button enablement", () => {
  render(<PostEditor onSavePost={jest.fn()} />);

  const titleInput = screen.getByLabelText("Title");
  const bodyInput = screen.getByLabelText("Body");
  const saveButton = screen.getByRole("button", { name: "Save Post" });

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

function getTextField(label: string): HTMLInputElement | HTMLTextAreaElement {
  const textField = screen.getByLabelText(label);
  expect(
    textField instanceof HTMLInputElement || textField instanceof HTMLTextAreaElement
  ).toBeTruthy();

  return textField as HTMLInputElement | HTMLTextAreaElement;
}

test("clear button", () => {
  render(<PostEditor onSavePost={jest.fn()} />);

  const clearButton = screen.getByRole("button", { name: "Clear" });
  const titleInput = getTextField("Title");
  const bodyInput = getTextField("Body");

  // enter form
  userEvent.type(titleInput, "New Title");
  userEvent.type(bodyInput, "New Body");

  userEvent.click(clearButton);

  expect(titleInput.value).toBe("");
  expect(bodyInput.value).toBe("");
});

test("add post button callback", () => {
  const savePostFn = jest.fn();
  render(<PostEditor onSavePost={savePostFn} />);
  const saveButton = screen.getByRole("button", { name: "Save Post" });
  const titleInput = getTextField("Title");
  const bodyInput = getTextField("Body");

  // enter form
  userEvent.type(titleInput, "New Title");
  userEvent.type(bodyInput, "New Body");
  userEvent.click(saveButton);

  expect(savePostFn).toHaveBeenCalled();
  expect(savePostFn).toHaveBeenCalledWith({ title: "New Title", body: "New Body" });
});
