import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-14">Blood Donation Among College Students</h1>
      <p className="text-gray-700 mb-8">
        A research questionnaire for Mekelle University Ayder Campus Students.
      </p>
      <Link
        to="/survey"
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
      >
        Take the Survey
      </Link>
    </div>
  );
}

export default Home;