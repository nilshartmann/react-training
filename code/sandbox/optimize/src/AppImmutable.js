/* @flow */

import React from "react";
import { List } from "immutable";

import Box from "./Box";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const { boxes } = this.props;
    this.state = {
      boxes: List(boxes), // eslint-disable-line new-cap
      currentId: null
    };
  }

  render() {
    const { boxes } = this.state;

    let unselectedBoxes = [];
    let selectedBox;

    boxes.forEach(box => {
      if (box.id === this.state.currentId) {
        selectedBox = <Box key={box.id} box={box} selected={true} />;
      } else {
        unselectedBoxes.push(<Box key={box.id} box={box} selected={false} />);
      }
    });

    const style = {
      cursor: selectedBox ? "pointer" : "auto"
    };

    return (
      <div>
        <svg
          width="550"
          height="550"
          style={style}
          onMouseDown={event => this.onMouseDown(event)}
          onMouseUp={event => this.onMouseUp(event)}
          onMouseMove={event => this.onMouseMove(event)}
        >
          <g>
            {unselectedBoxes}
            {selectedBox}
          </g>
        </svg>
        <p>Selected: {this.state.currentId}</p>
      </div>
    );
  }

  onMouseDown(event) {
    const id = Number(event.target.getAttribute("data-id"));
    const { boxes } = this.state;
    const box = boxes.get(id);
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.setState({
      currentId: id
    });
  }

  onMouseUp(event) {
    this.setState({
      currentId: null
    });
  }

  onMouseMove(event) {
    if (this.state.currentId !== null) {
      this.updateBox(this.state.currentId, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  updateBox(id, x, y) {
    const { boxes } = this.state;
    const modifiedBox = {
      id,
      x,
      y
    };
    const modifiedBoxes = boxes.set(id, modifiedBox);
    this.setState({
      boxes: modifiedBoxes
    });
  }
}
