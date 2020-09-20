import React from "react";

type IThemeContext = {
  inputBackground: string;
  setInputBackground(newBg: string): void;
};

// Create the Context using React.createContext
export const ThemeContext = null;

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  // Create a state that holds the input background color (a simple string)
  // Populate the context object according to it's type definitionnn (see above)
  //   and use the Provider-Component returned from the Factory function to
  //   pass it down to its children
}
