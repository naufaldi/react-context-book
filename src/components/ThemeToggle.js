import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle the theme</button>;
};

export default ThemToggle;
