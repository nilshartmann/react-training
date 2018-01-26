export const SET_GREETINGS = "SET_GREETINGS";
export const ADD_GREETING = "ADD_GREETING";
export const SET_FILTER = "SET_FILTER";
export const SET_MODE = "SET_MODE";

const BACKEND_URL = "http://localhost:7000/greetings";
export const MODE_MASTER = "MODE_MASTER";
export const MODE_DETAIL = "MODE_DETAIL";

export const loadGreetings = dispatch => {
  return fetch(BACKEND_URL)
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: SET_GREETINGS,
        greetings: json
      })
    )
    .catch(err => console.error("LOADING GREETINGS FAILED:", err));
};

export const saveGreeting = greetingToBeAdded => dispatch => {
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(greetingToBeAdded)
  })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      }
      throw new Error("Invalid status code: " + response.status);
    })
    .then(json => {
      const newGreetingId = json.id;
      const newGreeting = { ...greetingToBeAdded, id: newGreetingId };

      dispatch({
        type: ADD_GREETING,
        greeting: newGreeting
      });
      dispatch(setMode(MODE_MASTER));

      return newGreeting;
    });
};

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const setMode = mode => ({
  type: SET_MODE,
  mode
});
