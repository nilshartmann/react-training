import React from "react";

const GreetingDisplay = props => {
  const { name, greeting } = (props && props.location && props.location.query) || {};
  return (
    <h1>
      {greeting}, {name}
    </h1>
  );
};

export default GreetingDisplay;
