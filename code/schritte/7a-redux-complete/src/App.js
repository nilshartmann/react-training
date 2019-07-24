import React from "react";
import GreetingController from "./GreetingController";
import Counter from "./Counter";
import Chart from "./Chart";

export default function App() {
  return (
    <div className="Main">
      <div className="Title">
        <h1>Greeting App</h1>
        <Counter />
      </div>
      <div className="Left">
        <GreetingController />
      </div>
      <div className="Right">
        <Chart />
      </div>
    </div>
  );
}
