import React from "react";
import d3 from "d3";
import nv from "nvd3";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "./actions";
import { aggregateGreetings } from "./selectors";

export default function Chart() {
  const _d3selection = React.useRef();
  const _chart = React.useRef();
  const _nvd3chart = React.useRef();

  const dispatch = useDispatch();
  const greetings = useSelector(store => store.greetings.greetings);
  const data = aggregateGreetings(greetings);

  function segmentSelected(event) {
    const selectedLabel = event.data.label;
    dispatch(actions.setFilter(selectedLabel));
  }

  React.useEffect(() => {
    if (_nvd3chart.current) {
      // Update
      _d3selection.current && _d3selection.current.datum(data).call(_nvd3chart.current);
      return;
    }

    nv.addGraph(() => {
      const chart = nv.models
        .pieChart()
        .x(d => d.label)
        .y(d => d.value)
        .showLabels(true);
      chart.legend.updateState(false);

      _d3selection.current = d3.select(_chart.current);
      _d3selection.current.datum(data).call(chart);

      _nvd3chart.current = chart;
      chart.pie.dispatch.on("elementClick", segmentSelected);
      return chart;
    });
  }, [data]);

  const svgStyle = {
    height: "500px",
    width: "600px"
  };
  return <svg style={svgStyle} className="with-3d-shadow with-transitions" ref={_chart} />;
}
