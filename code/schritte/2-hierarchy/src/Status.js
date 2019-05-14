import React from "react";

export default class Status extends React.Component {
  constructor(props) {
    super(props);

    console.log("Status - constructor");
  }

  componentDidUpdate(prevProps) {
    console.log("Status - componentDidUpdate", prevProps, this.props);
  }

  render() {
    return <div>Anzahl Grüße: {this.props.greetings.length}</div>;
  }
}
