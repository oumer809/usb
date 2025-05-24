import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetails from '../components/BookDetails';
import { useBookContext } from '../context/BookContext';

function BookPage() {
  const { id } = useParams();
  const { books } = useBookContext();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}

export default BookPage;