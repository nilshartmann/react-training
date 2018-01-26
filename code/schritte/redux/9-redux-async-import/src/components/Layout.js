import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";
import Chart from "./Chart";

const Layout = () => (
  <div className="Main">
    <div className="Title">
      <h1>Greeting App</h1>
      <Counter />
    </div>
    <div className="Left">
      <Greeting />
    </div>
    <div className="Right">
      <Chart />
    </div>
  </div>
);
Layout.displayName = "Layout";

export default Layout;
