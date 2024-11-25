import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { 
    name: 'Abhishek Kashyap', 
    position: 'Kabaddi and NIS Coach', 
    image: require("../assets/C3.jpg") 
  },
  { 
    name: 'Sushant Dokchole', 
    position: 'Football and Cricket Coach', 
    image: require("../assets/C2.jpg") 
  },
  { 
    name: 'Sachin Thorat', 
    position: 'Strength & Conditioning Coach', 
    image: require("../assets/C4.jpg") 
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-900 text-custom-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-orange">Our Coaches</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Set delay to 2 seconds (2000 ms)
          pagination={{ clickable: true }} // Enable clickable pagination dots
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-lg shadow-xl text-center flex flex-col items-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover mb-6 lazyload"
                  data-src={testimonial.image} // Add data-src attribute for lazy loading
                />
                <h3 className="text-xl font-semibold text-custom-white">{testimonial.name}</h3>
                <p className="text-sm text-custom-green mb-4">{testimonial.position}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
