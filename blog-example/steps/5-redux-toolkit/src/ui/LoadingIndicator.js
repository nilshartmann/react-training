import React from "react";

export default function LoadingIndicator(props) {
  return (
    <div className="Container">
      <div className="Spinner">
        {props.children && <h1>{props.children}</h1>}
        <div className="bounce bounce1" />
        <div className="bounce bounce2" />
        <div className="bounce bounce3" />
      </div>
    </div>
  );
}
