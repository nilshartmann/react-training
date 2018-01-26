import React from "react";

export class Title extends React.Component {
  render() {
    return <h1>Hallo</h1>;
  }
}

export class SubTitle extends React.Component {
  render() {
    return <h2>Welt</h2>;
  }
}

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/*Example: Render Components passed in as props*/}
        {this.props.left}
        {this.props.right}
        Example: Render components passed as children
        {/*{this.props.children}*/}
      </div>
    );
  }
}
