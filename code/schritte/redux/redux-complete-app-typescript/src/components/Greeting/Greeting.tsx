import * as React from "react";
import { connect } from "react-redux";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import { AppState, Mode, MODE_MASTER } from "../../types";

type StateProps = {
  mode: Mode;
};

const Greeting = ({ mode }: StateProps) => (mode === MODE_MASTER ? <GreetingMaster /> : <GreetingDetail />);
// Greeting.displayName = 'Greeting';

export default connect<StateProps, {}, {}>((state: AppState) => ({
  mode: state.mode
}))(Greeting);
