import React from "react";

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    const person = {
      name: "",
      age: 3
    }
  }
  render() {
    return <React.Fragment>
      <p>Yes</p>
      <p>No</p>
    </React.Fragment>
  }
}
