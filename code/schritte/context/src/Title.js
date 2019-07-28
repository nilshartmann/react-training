import React from "react";
import ThemeChooser from "./ThemeChooser";
import { ThemeContext } from "./ThemeContext";

export default function Title() {
  // EXAMPLE: ACCESSING CONTEXT WITHOUT HOOKS
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
