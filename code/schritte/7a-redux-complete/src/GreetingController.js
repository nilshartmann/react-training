import React from "react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import * as actions from "./actions";
import { saveGreeting } from "./greeting-actions";
import { useSelector, useDispatch } from "react-redux";

const MODE_MASTER = "MODE_MASTER";

export default function GreetingController() {
  const dispatch = useDispatch();
  const mode = useSelector(store => store.mode);

  function openDetailView() {
    dispatch(actions.openDetailView());
  }

  async function addGreeting(greetingToBeAdded) {
    await dispatch(saveGreeting(greetingToBeAdded));

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

  if (mode === MODE_MASTER) return <GreetingMaster onAddClick={openDetailView} />;

  return (
    <GreetingDetail onSave={addGreeting} onCancel={() => dispatch(actions.openMasterView())} />
  );
}
