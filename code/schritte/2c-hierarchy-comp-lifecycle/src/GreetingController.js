import React from "react";

class GreetingDisplay extends React.Component {
  constructor(props) {
    super(props);

    console.log("GreetingDisplay - constructor", props);
  }

  shouldComponentUpdate(nextProps) {
    console.log("GreetingDisplay - shouldComponentUpdate", nextProps, this.props);
    return true;
  }

  componentDidUpdate(prevProps) {
    console.log("GreetingDisplay - componentDidUpdate", prevProps, this.props);
  }

  render() {
    console.log("GreetingDisplay - render", this.props);
    return <div>Aktueller Gruß: {this.props.greeting}</div>;
  }
}

export default class Controller extends React.Component {
  render() {
    console.log("Controller - render()");
    const { greeting } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Please enter greeting"
          value={greeting}
          onChange={e => this.setState({ greeting: e.target.value })}
        />

        <GreetingDisplay greeting={greeting} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    console.log("Controller - constructor", props);
    this.state = {
      greeting: ""
    };
  }

  shouldComponentUpdate(nextProps) {
    console.log("Controller - shouldComponentUpdate", nextProps, this.props);
    return true;
  }

  componentDidUpdate(prevProps) {
    console.log("Controller - componentDidUpdate", prevProps, this.props);
  }
}
