import React from "react";

export default class Status extends React.Component {
  constructor(props) {
    super(props);

    console.log("Status - constructor");
  }

  componentWillReceiveProps(newProps) {
    console.log("Status - componentWillReceiveProps", newProps);
  }

  render() {
    return <div>Anzahl Grüße: {this.props.greetings.length}</div>
  }

}