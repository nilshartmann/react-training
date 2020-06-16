import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

const mockPosts = [
  { id: "1", title: "One", body: "Lorem ipsum" },
  { id: "2", title: "Second Post", body: "Some more content" }
];

jest.mock("../api", () => ({
  readPosts: () => Promise.resolve(mockPosts)
}));

afterEach(() => {
  jest.restoreAllMocks();
});

it("should render posts read from backend", async () => {
  render(<App />);

  expect(screen.getByRole("alert")).toBeInTheDocument();

  const articleOne = await screen.findByRole("heading", { name: "One" });
  expect(articleOne).toBeInTheDocument();
  expect(screen.getByText("Second Post")).toBeInTheDocument();
});
