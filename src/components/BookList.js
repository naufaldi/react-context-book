import React, { Component } from "react";
// Import theme context
import { ThemeContext } from "../context/ThemeContext";
export default class BookList extends Component {
  // import context dahulu
  static contextType = ThemeContext;

  render() {
    // deconstruction data
    const { isLighTheme, light, dark } = this.context;
    const theme = isLighTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}> the way of king </li>
          <li style={{ background: theme.ui }}> harry potter 1 </li>
          <li style={{ background: theme.ui }}> harry potter 2 </li>
        </ul>
      </div>
    );
  }
}
