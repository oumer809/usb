import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-red-700 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Blood Donation Survey at MU-CHS Students</Link>
        <div>
          <Link to="/survey" className="bg-white text-red-700 font-bold py-2 px-4 rounded hover:bg-red-100">
            Take Survey
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;