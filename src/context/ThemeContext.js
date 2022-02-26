import { createContext, useState, useEffect, useContext } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import { THEMES, THEME_VARIABLES } from "../constants/THEMES";

export const ThemeContext = createContext(THEMES.DARK);

const StyledThemeConsumer = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledProvider theme={THEME_VARIABLES[theme]}>{children}</StyledProvider>
  );
};

export const ThemeProvider = (props) => {
  const [theme, setCurrentTheme] = useState(THEMES.DARK);

  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setCurrentTheme(darkOS ? THEMES.DARK : THEMES.LIGHT);
  }, []);

  useEffect(() => {
    // Set css variables based on theme
    const keys = Object.keys(THEME_VARIABLES[theme]);
    keys.map((key) => {
      const constructVar = `--${key}`;
      document.body.style.setProperty(
        constructVar,
        THEME_VARIABLES[theme][key]
      );
      return false; /// cuz eslint just wants me to return something
    });
  }, [theme]);

  const setTheme = (newTheme) => {
    if (Object.values(THEMES).indexOf(newTheme) === -1) {
      return console.warn("Invalid theme opted !!!!");
    }
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeConsumer>{props.children}</StyledThemeConsumer>
    </ThemeContext.Provider>
  );
};
