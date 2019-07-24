import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";

import * as actions from "./actions";
import { useSelector, useDispatch } from "react-redux";

const BACKEND_URL = "http://localhost:7000/greetings";
const MODE_MASTER = "MODE_MASTER";

export default function GreetingController() {
  const dispatch = useDispatch();
  const mode = useSelector(store => store.mode);
  const greetings = useSelector(store => {
    console.log("REDUX STORE", store);
    return store.greetings;
  });

  console.log("greetingsFromRedux", greetings);

  React.useEffect(() => {
    dispatch(actions.loadGreetingsFromServer());
  }, []);

  function openDetailView() {
    dispatch(actions.openDetailView());
  }

  async function addGreeting(greetingToBeAdded) {
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
    }
    dispatch(actions.addGreeting(newGreeting));
    dispatch(actions.openMasterView());
  }

  if (mode === MODE_MASTER) return <GreetingMaster onAddClick={openDetailView} />;

  return <GreetingDetail onSave={addGreeting} />;
}
