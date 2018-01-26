import React from "react";

import { observer } from "mobx-react";

import GreetingMaster from "./GreetingMaster";
import GreetingDetail from "./GreetingDetail";
import Chart from "./Chart";

import { MODE_DETAIL, MODE_MASTER } from "./store";

@observer
export default class GreetingController extends React.Component {
  render() {
    const { store } = this.props;
    const { mode, aggregatedGreetings, filteredGreetings } = store;
    const { setMode, saveGreeting, setFilter } = store;

    return (
      <div className="Main">
        <div className="Left">
          {mode === MODE_MASTER ? (
            <GreetingMaster greetings={filteredGreetings} onAdd={() => setMode(MODE_DETAIL)} />
          ) : (
            <GreetingDetail onSave={saveGreeting} />
          )}
        </div>
        <div className="Right">
          <Chart data={aggregatedGreetings} onSegmentSelected={setFilter} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { loadGreetings } = this.props.store;
    loadGreetings();
  }
}
