import React from "react";
import { connect } from "react-redux";

import GreetingMaster from "./GreetingMaster";
import { MODE_MASTER } from "../../actions";

class AsyncGreetingDetail extends React.Component {
  loadGreetingDetail() {
    import(/* webpackChunkName: "greeting" */ "./GreetingDetail").then(GreetingDetailModule => {
      this.GreetingDetail = GreetingDetailModule.default;
      this.forceUpdate();
    });
  }

  componentDidMount() {
    // setTimeout only to simulate long loading component
    setTimeout(() => this.loadGreetingDetail(), 1000);
  }

  render() {
    if (this.GreetingDetail) {
      return <this.GreetingDetail {...this.props} />;
    }

    return <span>Loading...</span>;
  }
}

const Greeting = ({ mode }) => (mode === MODE_MASTER ? <GreetingMaster /> : <AsyncGreetingDetail />);
Greeting.displayName = "Greeting";

export default connect(state => ({
  mode: state.mode
}))(Greeting);
