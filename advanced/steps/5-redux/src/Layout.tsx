import React from "react";

type WithChildrenProps = {
  children?: React.ReactNode;
};

export function Page({ children }: WithChildrenProps) {
  return <div className="Page">{children}</div>;
}

export function Sidebar({ children }: WithChildrenProps) {
  return <div className="Sidebar">{children}</div>;
}

export function Main({ children }: WithChildrenProps) {
  return <div className="Main">{children}</div>;
}
