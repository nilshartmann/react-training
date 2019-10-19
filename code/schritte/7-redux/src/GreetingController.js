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

  async function addGreeting(greetingToBeAdded) {
    await dispatch(actions.saveGreetingToServer(greetingToBeAdded));

    // DISCUSS:
    // is this the best place for SAVE and NAVIGATE? (2 different concerns???)

    // Possible options:
    // 1. navigation part of saveGreeting logic (i.e move following dispatch
    //    call to saveGreeting action creator)
    // 2. write an own action creator (addAndNavigate) that re-uses saveGreeting
    // 2a. error handling?
    // 3. stay here as it is now?
    // 3a. error handling? we have no idea that saving greetings failed
    // 4. more?

    dispatch(actions.openMasterView());
  }
  if (mode === MODE_MASTER)
    return (
      <GreetingMaster
        greetings={greetings}
        onAdd={() => {
          dispatch(actions.openDetailView());
        }}
      />
    );

  return (
    <GreetingDetail onSave={addGreeting} onCancel={() => dispatch(actions.openMasterView())} />
  );
}
