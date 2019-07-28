import React from "react";
import Title from "./Title";
import GreetingController from "./GreetingController";
import ThemeProvider from "./ThemeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="Main">
        <Title />
        <GreetingController />
      </div>
    </ThemeProvider>
  );
}
