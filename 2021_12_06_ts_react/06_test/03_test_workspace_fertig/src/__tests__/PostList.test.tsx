import React from "react";

import { render, screen } from "@testing-library/react";

import PostList from "../PostList";

const mockPosts = [
  { id: "1", title: "First Post", body: "Lorem ipsum", date: "2019-08-23T18:25:43.511Z" },
  { id: "2", title: "Second Post", body: "Some more content", date: "2019-09-22T14:12:21.511Z" }
];

it("renders a list of blog posts", () => {
  // Schreibe einen Testfall:

  //   - render die PostList-Komponete
  //      - übergib als posts-Property to mockPosts
  //      - übergib eine Mock-Funktion als "onAddPost"-Callback-Funktion
  //   - stelle nach dem Rendern sicher:
  //      - es werden zwei article-Elemente gerendert
  //      - es gibt einen Header, der "First Post" heißt
  //      -
  //      - es gibt einen Button, der "Add Post" heißt
  //      - der Button ist enabled
  //
  //  ZUSATZ:
  //   - Suche nach einem nicht existierenden Element (z.B. einen Header der "nicht da" heißt)
  //     - suche nach dem Element mit queryByXyz und getByXyz was ist der Unterschied?

  render(<PostList posts={mockPosts} onAddPost={jest.fn()} />);
  expect(screen.getAllByRole("article")).toHaveLength(2);
  expect(screen.getByRole("heading", { name: "First Post" }));
  expect(screen.getByRole("button", { name: "Add Post" })).toBeEnabled();

  // Suche nach nicht vorhandenen Elementen:
  // expect(screen.queryByRole("heading", { name: "Nicht da" })).toBeInTheDocument();
  // expect(screen.getByRole("heading", { name: "Nicht da" })).toBeInTheDocument();
});
