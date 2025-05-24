import React from 'react';
import { formatPrice } from '../others/utils';
import { useCart } from '../context/CartContext';

function BookDetails({ book }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div>
      <img src={book.image} alt={book.title} className="w-full h-96 object-cover rounded-lg" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-gray-600">{book.author}</p>
        <p className="text-gray-600">{book.description}</p>
        <p className="text-gray-600">{formatPrice(book.price)}</p>
        <button onClick={handleAddToCart} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookDetails;