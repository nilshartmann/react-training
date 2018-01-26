import * as React from "react";

const Frame = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
};

export default Frame;
