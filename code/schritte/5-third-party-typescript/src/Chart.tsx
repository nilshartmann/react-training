import * as React from "react";
import * as d3 from "d3";
import * as nv from "nvd3";

import { GreetingChartData } from "./types";

interface ChartProps {
  data: GreetingChartData;
  onSegmentSelected: (segment: string) => any;
}

export default class Chart extends React.Component<ChartProps> {
  _d3selection: any; // ??? d3.Selection<any,any,any,any>;
  _nvd3chart: nv.PieChart | null = null;
  _chart: SVGElement | null = null;

  shouldComponentUpdate() {
    return false;
  }

  // will be called even when shouldComponentUpdate returns false
  componentWillReceiveProps(nextProps: ChartProps) {
    const { data } = nextProps;
    this._d3selection && this._d3selection.datum(data).call(this._nvd3chart);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    this._d3selection.remove();
  }

  componentDidMount() {
    if (!this._chart) {
      return;
    }
    // http://nvd3.org/examples/pie.html
    nv.addGraph(() => {
      const chart = nv.models
        .pieChart()
        .x(d => d.label)
        .y(d => d.value)
        .showLabels(true);
      chart.legend.updateState(false);

      const { data, onSegmentSelected } = this.props;

      // @ts-ignore
      this._d3selection = d3.select(this._chart);

      this._d3selection.datum(data).call(chart);

      this._nvd3chart = chart;
      if (onSegmentSelected) {
        chart.pie.dispatch.on("elementClick", e => onSegmentSelected(e.data.label));
      }
      return chart;
    });
  }

  render() {
    const svgStyle = {
      height: "500px",
      width: "600px"
    };
    return (
      <div>
        <svg style={svgStyle} className="with-3d-shadow with-transitions" ref={c => (this._chart = c)} />
      </div>
    );
  }
}
