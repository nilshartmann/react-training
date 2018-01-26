import React from "react";

export default function Layout(props) {
  return (
    <div>
      <h1>Greetings</h1>
      {props.children}
    </div>
  );
}
