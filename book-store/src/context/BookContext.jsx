import React, { createContext, useState, useEffect, useContext } from 'react';
import booksData from '../data/books'; //Local Json data
//import axios from 'axios';  // Use this if using an external API

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(booksData); //Use local data

  //If external Api is used
  /*
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
          const fetchBooks = async () => {
              try {
                  const response = await axios.get('YOUR_API_ENDPOINT_HERE');  //Replace with Api Route
                  setBooks(response.data);
                  setLoading(false);
              } catch (err) {
                  setError(err.message);
                  setLoading(false);
              }
          };

          fetchBooks();
      }, []);

      const value = {
          books,
          loading,
          error
      }
  */

  const value = {
    books,
  };
  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);