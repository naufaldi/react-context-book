import React, { Component, useContext } from "react";
import { BookContext } from "../context/BookContext";
// Import theme context
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
  const { isLighTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLighTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
        <li style={{ background: theme.ui }}> the way of king </li>
        <li style={{ background: theme.ui }}> harry potter 1 </li>
        <li style={{ background: theme.ui }}> harry potter 2 </li>
      </ul>
    </div>
  );
};

export default BookList;
