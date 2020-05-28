import React from "react";
import renderer from "react-test-renderer";

import { render, fireEvent } from "@testing-library/react";

import PostList from "../PostList";

const mockPosts = [
  { id: "1", title: "One", body: "Lorem ipsum", date: "2019-08-23T18:25:43.511Z" },
  { id: "2", title: "Second Post", body: "Some more content", date: "2019-09-22T14:12:21.511Z" }
];

it("renders correctly", () => {
  const tree = renderer.create(<PostList posts={mockPosts} onAddPost={jest.fn()} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("invokes callback on button click", () => {
  const onAddPostFn = jest.fn();

  // Render
  const { getByText } = render(<PostList onAddPost={onAddPostFn} posts={mockPosts} />);

  // search the button
  const buttonElement = getByText(/Add Post/i);

  // click the button
  fireEvent.click(buttonElement);

  // make sure it has been invoked
  expect(onAddPostFn).toHaveBeenCalled();
});
