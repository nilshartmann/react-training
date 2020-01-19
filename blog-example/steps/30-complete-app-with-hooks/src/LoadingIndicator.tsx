import React from "react";

type LoadingIndicatorProps = {
  children?: React.ReactNode;
};

export default function LoadingIndicator({ children }: LoadingIndicatorProps) {
  return (
    <div className="Container">
      <div className="Spinner">
        <h1>{children}</h1>
        <div className="bounce bounce1" />
        <div className="bounce bounce2" />
        <div className="bounce bounce3" />
      </div>
    </div>
  );
}
