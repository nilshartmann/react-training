import React from "react";

export const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = React.useState("orange");

  function switchTheme(newThemeName) {
    console.log(`Changing theme to '${newThemeName}'`);
    setThemeName(newThemeName);
  }

  const contextValue = {
    availableThemes:  [ "orange", "blue"],
    // the current theme
    themeName,

    // function to set new theme
    switchTheme
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
