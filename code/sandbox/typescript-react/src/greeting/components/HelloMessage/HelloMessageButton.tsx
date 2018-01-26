import * as React from "react";

const HelloMessageButton = ({ text, onClicked }) => {
  return (
    <div>
      <button onClick={onClicked}>{text}</button>
    </div>
  );
};

export default HelloMessageButton;
