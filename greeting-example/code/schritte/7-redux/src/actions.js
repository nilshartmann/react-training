export function setGreetings(newGreetings) {
  return {
    type: "SET_GREETINGS",
    greetings: newGreetings
  };
}

export function addGreeting(newGreeting) {
  return {
    type: "ADD_GREETING",
    greeting: newGreeting
  };
}

export function openDetailView() {
  return {
    type: "SET_MODE",
    mode: "MODE_DETAIL"
  };
}

export function openMasterView() {
  return {
    type: "SET_MODE",
    mode: "MODE_MASTER"
  };
}

const BACKEND_URL = "http://localhost:7000/greetings";

export function loadGreetingsFromServer() {
  return async dispatch => {
    try {
      const response = await fetch(BACKEND_URL);
      const greetings = await response.json();
      dispatch({
        type: "SET_GREETINGS",
        greetings: greetings
      });
    } catch (err) {
      console.error("Loading Greetings failed", err);
      dispatch({
        type: "SET_GREETINGS_FAILED",
        err
      });
    }
  };
}

export function saveGreetingToServer(greetingToBeAdded) {
  return async dispatch => {
    let newGreeting;
    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(greetingToBeAdded)
      });
      if (response.status !== 201) {
        throw new Error("Invalid status code: " + response.status);
      }
      newGreeting = await response.json();
    } catch (err) {
      console.error("LOADING GREETINGS FAILED:", err);
      return;
    }
    dispatch(addGreeting(newGreeting));
  };
}
