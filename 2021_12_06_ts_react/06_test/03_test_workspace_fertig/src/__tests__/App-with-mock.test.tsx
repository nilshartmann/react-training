import { disableFetchMocks, enableFetchMocks } from "jest-fetch-mock";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { OnSuccess } from "../blog-api";

const mockPosts = [
  { id: "1", title: "One Fetch Mock", body: "Lorem ipsum", date: "2019-08-23T18:25:43.511Z" },
  {
    id: "2",
    title: "Second Post Fetch Mock",
    body: "Some more content",
    date: "2019-08-24T18:25:43.511Z"
  }
];

// Schreibe ein Mock-Modul für "blog-api"
// Das Modul exportiert eine Funktion "loadPosts", die einen Parameter erwartet: "onSuccess"
// Dabei handelt es sich um eine Callback-Funktion, der die geladenen Posts übergeben weden
// Im Test wollen wir das simulieren. Das "echte" Laden soll also nicht stattfinden,
// stattdessen soll "onSuccess" mit den mockPosts von oben aufgerufen werden

// Dein Mock-Modul muss ein Objekt zurückliefern, in dem die gemockten Funktionen enthalten
// sind (in diesem Fall also "loadPosts").
// Die gemockte LoadPosts-Funktion sollte die übergebene Callback-Funktion aufrufen
// und die oben gemockten BlogPosts übergeben

// Wenn dein Mock korrekt ist, sollte der Test unten funktionieren!

// ZUSATZ:
//   loadPosts kennt noch einen zweiten Parameter ("onError").
//   Das ist ebenfalls eine Callback-Funktion, die mit einem Fehler (String) aufgerufen wird,
//   falls der Request nicht funktioniert hat.
//   Wie könntest Du das (Fehler-)Verhalten testen?

jest.mock("../blog-api", () => {
  return {
    loadPosts(onSuccess: OnSuccess) {
      onSuccess(mockPosts);
    }
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

it("should render posts read from backend", async () => {
  // Nur, damit es nicht zu Konflikten mit dem fetchMock-Test kommt:
  disableFetchMocks();

  render(<App />);
  // Musst Du hier warten? Ja: Warum? Nein: Warum nicht?
  const articleOne = await screen.findByRole("heading", { name: "One Fetch Mock" });
  expect(articleOne).toBeInTheDocument();
  expect(screen.getByText("Second Post Fetch Mock")).toBeInTheDocument();
});
