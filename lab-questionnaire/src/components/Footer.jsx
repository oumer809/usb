import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Laboratory Questionnaire</p>
      </div>
    </footer>
  );
}

export default Footer;