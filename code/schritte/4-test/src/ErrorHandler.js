import React from "react";

export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { error: error.toString() };
  }

  componentDidCatch(error, info) {
    console.error("uups... we caught an error", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>An error occured!</h1>
          <pre>{this.state.error}</pre>
          <button onClick={() => this.setState({ error: null })}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}
