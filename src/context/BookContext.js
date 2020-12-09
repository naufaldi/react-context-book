import React, { createContext, useState } from "react";
export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "name of wind",
      id: 1,
    },
    {
      title: "name of fire",
      id: 2,
    },
    {
      title: "name of water",
      id: 3,
    },
    {
      title: "name of earth",
      id: 4,
    },
  ]);
  return (
    <BookContextProvider value={{ books }}>
      {props.children}
    </BookContextProvider>
  );
};

export default BookContextProvider;
