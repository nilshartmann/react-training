import React from "react";

export default function LoadingIndicator({ label }) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{label}</h1>
      </div>
      <div className="Spinner">
        <div className="bounce bounce1" />
        <div className="bounce bounce2" />
        <div className="bounce bounce3" />
      </div>
    </>
  );
}
