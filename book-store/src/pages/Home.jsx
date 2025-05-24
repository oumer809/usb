import React from 'react';
import BookCard from '../components/BookCard';
import CategoryFilter from '../components/CategoryFilter';
import { useBookContext } from '../context/BookContext';
import HeroSection from '../components/HeroSection';
import TestimonialSection from '../components/TestimonialSection';
import SwiperComponent from '../components/SwiperComponent';

function Home() {
  const { books } = useBookContext();

  return (
    <div>
      <HeroSection />
      <CategoryFilter />

      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
          <SwiperComponent books={books} />

        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">All Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

    </div>
  );
}

export default Home;