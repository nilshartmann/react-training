import React from "react";
import { ThemeContext } from "./ThemeContext";
export default function ThemeChooser() {
  const { switchTheme, availableThemes } = React.useContext(ThemeContext);

  return (
    <div className="ThemeChooser">
      {availableThemes.map(themeName => (
        <div
          key={themeName}
          className={`Chooser ${themeName}`}
          onClick={() => switchTheme(themeName)}
        >
          &nbsp;
        </div>
      ))}
    </div>
  );
}
