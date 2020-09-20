import React from "react";

type IThemeContext = {
  inputBackground: string;
  setInputBackground(newBg: string): void;
};

export const ThemeContext = React.createContext<IThemeContext>({
  inputBackground: "lightred",
  setInputBackground() {}
});

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [background, setBackground] = React.useState("lightgray");

  return (
    <ThemeContext.Provider
      value={{
        inputBackground: background,
        setInputBackground: setBackground
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
