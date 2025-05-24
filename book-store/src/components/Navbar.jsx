import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Bookstore</Link>
        <div className="flex items-center">
          <Link to="/cart" className="relative hover:text-gray-300">
            <FaShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;