import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import ThankYou from './pages/ThankYou';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;