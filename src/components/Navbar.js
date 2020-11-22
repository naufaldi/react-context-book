import React, { Component } from "react";
// import theme context
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isLight, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context API</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
