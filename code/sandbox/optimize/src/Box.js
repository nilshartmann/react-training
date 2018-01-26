/* @flow */

import React from "react";

export default class Box extends React.Component {
  shouldComponentUpdate(nextProps) {
    // return true;
    const changed = this.props.selected !== nextProps.selected || this.props.box !== nextProps.box;
    if (changed) {
      console.log(`box ${this.props.box.id} changed`);
    }
    return changed;
  }

  render() {
    const { box, selected } = this.props;
    if (selected) {
      return <rect data-id={box.id} width="10" height="10" x={box.x} y={box.y} stroke="red" fill="opaque" strokeWidth="2" />;
    } else {
      return (
        <rect data-id={box.id} width="10" height="10" x={box.x} y={box.y} stroke="black" fill="transparent" strokeWidth="1" />
      );
    }
  }
}
