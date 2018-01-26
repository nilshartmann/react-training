import React from "react";
import ReactDOM from "react-dom";

import HelloMessage, { Title, SubTitle } from "./HelloMessage";

const mountNode = document.getElementById("mount");

// Example: assign component to variable
const leftColumn = <Title />;

ReactDOM.render(
  <HelloMessage /* Example: pass components to component as properties */ left={leftColumn} right={<SubTitle />}>
    {/*Example: Pass Component as children (this.props.children in HelloMessage)    */}
    <p>Lorem ipsum</p>
  </HelloMessage>,
  mountNode
);
