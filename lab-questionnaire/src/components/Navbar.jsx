import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Laboratory Questionnaire</Link>
        <div>
          <Link to="/questionnaire" className="bg-white text-blue-700 font-bold py-2 px-4 rounded hover:bg-blue-100">
            Take Questionnaire
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;