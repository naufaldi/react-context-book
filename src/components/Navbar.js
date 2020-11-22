import React, { Component } from "react";
import { AuthContext } from "../context/AuthContext";
// import theme context
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    // console.log(this.context);

    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLighTheme, light, dark } = themeContext;
              const theme = isLighTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context API</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? " Login " : " Log Out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
