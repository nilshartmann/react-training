import React from "react";

export const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component {
  state = {
    theme: "orange"
  };

  setTheme = themeName => {
    console.log(`Changing theme to '${themeName}'`);
    this.setState({
      theme: themeName
    });
  };

  render() {
    const contextValue = {
      // the current theme
      theme: this.state.theme,

      // function to set new theme
      setTheme: this.setTheme
    };

    return <ThemeContext.Provider value={contextValue}>{this.props.children}</ThemeContext.Provider>;
  }
}
