import React from 'react';
import testimonials from '../data/testimonials'; // Import data

function TestimonialSection() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                            <p className="text-gray-800">{testimonial.text}</p>
                            <h4 className="text-sm font-semibold mt-4">{testimonial.name}</h4>
                            <p className="text-gray-500">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;