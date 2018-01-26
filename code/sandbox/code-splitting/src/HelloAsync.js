import React from "react";

export default class HelloAsync extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => this.calculate()}>Add 2 and 4</button>

        {this.state.result && <p>Result: {this.state.result}</p>}
      </div>
    );
  }

  calculate() {
    // https://webpack.js.org/guides/code-splitting-async/#chunk-names
    // https://webpack.js.org/guides/code-splitting-async/#import-mode
    import(/* webpackChunkName: "calc", webpackMode: "lazy" */ "./calculator")
      .then(calculatorModule => calculatorModule.default)
      .then(calculator => {
        // import calculator from './calculator';
        console.log(calculator);
        this.setState({ result: calculator.add(2, 4) });
      });
  }
}
