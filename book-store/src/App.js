import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BookProvider } from './context/BookContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BookProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <div className="container mx-auto py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book/:id" element={<BookPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/category/:category" element={<CategoryPage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </BookProvider>
  );
}

export default App;