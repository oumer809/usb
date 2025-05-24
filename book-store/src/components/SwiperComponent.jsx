import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BookCard from './BookCard';  // Import BookCard

function SwiperComponent({ books }) {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {books.map((book) => (
                <SwiperSlide key={book.id}>
                    <BookCard book={book} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperComponent;