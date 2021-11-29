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

  // Vorbereitung: Konfiguriere den 'fetchMock'
  //   Der fetchMock soll eine gemockte Response zurückliefern (JSON.stringify(mockPosts));

  // Render die App-Komponente
  // Stelle sicher, dass der Warte-Indicator angezeigt wird,
  //   es sollte eine alert-Role im Dokument vorhanden sein (toBeInTheDocument)

  // Stelle sicher, dass ein Artikel mit dem heading "One Fetch Mock" angezeigt wird
  //  (darauf musst du warten, damit der fetchMock seine Arbeit erledigen kann...)

  // Stelle sicher, dass es einen zweiten Blog-Post mit dem Titel
  // "Second Post Fetch Mock" gibt
  // Musst du an dieser Stelle erneut warten?
});
