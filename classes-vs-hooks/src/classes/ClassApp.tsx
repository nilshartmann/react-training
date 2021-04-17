import React from "react";
import Search from "./Search";

type AppState = {
  phrase: string;
};

export default class App extends React.Component<{}, AppState> {
  state = {
    phrase: "XXX"
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      phrase: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Search...</h1>
        <input value={this.state.phrase} onChange={this.handleInputChange} />
        <Search searchString={this.state.phrase} />
      </div>
    );
  }
}
