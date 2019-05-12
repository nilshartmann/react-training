import React from "react";
import { ThemeContext } from "./ThemeContext";
export default function ThemeChooser() {
  return (
    <ThemeContext.Consumer>
      {themeContext => {
        return (
          <div className="ThemeChooser">
            <div className="Chooser orange" onClick={() => themeContext.setTheme("orange")}>
              &nbsp;
            </div>
            <div className="Chooser blue" onClick={() => themeContext.setTheme("blue")}>
              &nbsp;
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
