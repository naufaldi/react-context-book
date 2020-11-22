import React, { Component } from "react";
// import theme context
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    // console.log(this.context);

    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLighTheme, light, dark } = context;
          const theme = isLighTheme ? light : dark;
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
