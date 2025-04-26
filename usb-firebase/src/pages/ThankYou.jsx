import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
      <p className="text-gray-700">Your responses have been submitted.</p>
      <Link
        to="/"
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ThankYou;