import React from "react";

function ErrorMessage({ msg, onRetry }) {
  return (
    <div>
      <h1>An error occured!</h1>
      <pre>{msg}</pre>
      <button onClick={onRetry}>Try again</button>
    </div>
  );
}

export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error) {
    return { error: error.toString() };
  }

  componentDidCatch(error, info) {
    console.error("uups... we caught an error", error, info);
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage msg={this.state.error} onRetry={() => this.setState({ error: null })} />;
    }

    return this.props.children;
  }
}
