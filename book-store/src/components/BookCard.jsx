import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../others/utils';

function BookCard({ book }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        <p className="text-gray-600">{formatPrice(book.price)}</p>
        <Link to={`/book/${book.id}`} className="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;