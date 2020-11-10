import { enableFetchMocks } from "jest-fetch-mock";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

const mockPosts = [
  { id: "1", title: "One Fetch Mock", body: "Lorem ipsum" },
  { id: "2", title: "Second Post Fetch Mock", body: "Some more content" }
];

afterEach(() => {
  jest.restoreAllMocks();
});

it("should render posts read from backend", async () => {
  enableFetchMocks();

  fetchMock.mockResponse(JSON.stringify(mockPosts));
  render(<App />);

  expect(screen.getByRole("progressbar")).toBeInTheDocument();

  const articleOne = await screen.findByRole("heading", { name: "One Fetch Mock" });
  expect(articleOne).toBeInTheDocument();
  expect(screen.getByText("Second Post Fetch Mock")).toBeInTheDocument();
});
