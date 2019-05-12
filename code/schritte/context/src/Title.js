import React from "react";
import ThemeChooser from "./ThemeChooser";
import { ThemeContext } from "./ThemeContext";

export default function Title() {
  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <div className={`Title ${themeContext.theme}`}>
          <h1>Greeting App</h1>
          <ThemeChooser />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
