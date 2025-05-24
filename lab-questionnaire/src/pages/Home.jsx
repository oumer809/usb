import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Laboratory Performance Questionnaire</h1>
      <p className="text-gray-700 mb-8">
        This questionnaire aims to gather insights into laboratory performance and turnaround times.
      </p>
      <Link
        to="/questionnaire"
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      >
        Take the Questionnaire
      </Link>
    </div>
  );
}

export default Home;