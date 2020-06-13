import React from "react";

type ErrorHandlerProps = {};
type ErrorHandlerState = {
  error?: string | null;
};

export default class ErrorHandler extends React.Component<ErrorHandlerProps, ErrorHandlerState> {
  constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: any) {
    return { error: error.toString() };
  }

  componentDidCatch(error: any, info: any) {
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
