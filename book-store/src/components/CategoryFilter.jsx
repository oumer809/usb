import React from 'react';
import categories from '../data/categories';
import { Link } from 'react-router-dom';  // Use Link instead of <select>

function CategoryFilter() {
  return (
    <div className="flex space-x-4 overflow-x-auto py-2"> {/* Horizontal scroll */}
      {categories.map((category) => (
        <Link
          key={category}
          to={`/category/${category}`}  // Link to category page
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 whitespace-nowrap" // Tailwind classes for button-like appearance
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

export default CategoryFilter;