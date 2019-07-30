import React from "react";
import styled from "styled-components";
import { Button } from "./components";

function ErrorMessage({ msg, onRetry, className }) {
  return (
    <div className={className}>
      <h1>An error occured!</h1>
      <pre>{msg}</pre>
      <Button onClick={onRetry}>Try again</Button>
    </div>
  );
}

const StyledErrorMessage = styled(ErrorMessage)`
  background-color: rgba(255, 0, 0, 0.5);
`;

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
      return (
        <StyledErrorMessage msg={this.state.error} onRetry={() => this.setState({ error: null })} />
      );
    }

    return this.props.children;
  }
}
