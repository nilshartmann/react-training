import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PostEditor from "../PostEditor";

test("save button enablement", () => {
  const { getByText, getByLabelText } = render(<PostEditor />);
  const titleInput = getByLabelText("Title");
  const bodyInput = getByLabelText("Body");

  // should be disabled
  expect(getByText(/Save Post/i)).toBeDisabled();

  // enter Title...
  fireEvent.change(titleInput, { target: { value: "New Title" } });

  // should still be disabled
  expect(getByText(/Save Post/i)).toBeDisabled();

  // enter body
  fireEvent.change(bodyInput, { target: { value: "New Body" } });
  // ...now the button should be enabled
  expect(getByText(/Save Post/i)).toBeEnabled();
});

test("clear button", () => {
  const { getByText, getByLabelText } = render(<PostEditor />);
  const clearButton = getByText(/Clear/i);
  const titleInput = getByLabelText("Title");
  const bodyInput = getByLabelText("Body");

  // enter form
  fireEvent.change(titleInput, { target: { value: "New Title" } });
  fireEvent.change(bodyInput, { target: { value: "New Body" } });
  fireEvent.click(clearButton);
  expect(titleInput.value).toBe("");
  expect(bodyInput.value).toBe("");
});

test("add post button callback", () => {
  const savePostFn = jest.fn();
  const { getByText, getByLabelText } = render(<PostEditor onSavePost={savePostFn} />);
  const saveButton = getByText(/Save Post/i);
  const titleInput = getByLabelText("Title");
  const bodyInput = getByLabelText("Body");

  // enter form
  fireEvent.change(titleInput, { target: { value: "New Title" } });
  fireEvent.change(bodyInput, { target: { value: "New Body" } });
  fireEvent.click(saveButton);
  expect(savePostFn).toHaveBeenCalled();
  expect(savePostFn).toHaveBeenCalledWith({ title: "New Title", body: "New Body" });
});
