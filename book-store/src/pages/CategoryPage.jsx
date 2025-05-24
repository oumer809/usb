import React from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { useBookContext } from '../context/BookContext';

function CategoryPage() {
  const { category } = useParams();
  const { books } = useBookContext();

  const filteredBooks = books.filter((book) => book.category === category);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Category: {category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;