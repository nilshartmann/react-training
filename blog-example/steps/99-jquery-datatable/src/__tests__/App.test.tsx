import React from "react";
import { wait, render, fireEvent, waitForElement } from "@testing-library/react";
import App from "../App";
import "jest-fetch-mock";

const mockPosts = [
  { id: "1", title: "One", body: "Lorem ipsum" },
  { id: "2", title: "Second Post", body: "Some more content" }
];

afterEach(() => {
  jest.restoreAllMocks();
});

it("should render posts read from backend", async () => {
  fetchMock.mockResponse(JSON.stringify(mockPosts));
  const { queryByText, getByText, findByText } = render(<App />);

  // Post are not here yet, as the fetch-Promise is not resolved
  expect(queryByText("Lorem ipsum")).not.toBeInTheDocument();

  const lorem = await findByText("Lorem ipsum");
  expect(lorem).toBeInTheDocument();
  expect(getByText("Second Post")).toBeInTheDocument();
  expect(getByText("Add Post")).toBeInTheDocument();
});

it("it should switch between views", async () => {
  fetchMock.mockResponse(JSON.stringify(mockPosts));
  const { getByText, findByText } = render(<App />);
  const addPostButton = await findByText("Add Post");

  fireEvent.click(addPostButton);

  // Post Editor should be visible
  expect(getByText("Create Post")).toBeInTheDocument();
});
