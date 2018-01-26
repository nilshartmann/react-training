const BACKEND_URL = "http://localhost:7000/greetings";
import { NewGreeting, Greetings, GreetingId } from "./types";

export const loadGreetingsFromServer = (): Promise<Greetings> => {
  return fetch(BACKEND_URL).then(response => response.json());
};

export const saveGreetingToServer = (greetingToBeSaved: NewGreeting): Promise<GreetingId> => {
  return fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(greetingToBeSaved)
  })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      }
      throw new Error("Invalid status code: " + response.status);
    })
    .then(json => json.id);
};
