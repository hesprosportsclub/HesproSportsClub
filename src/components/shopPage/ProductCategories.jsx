import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaDumbbell, FaMedal, FaShoppingCart, FaTshirt } from 'react-icons/fa';

const ProductCategories = () => {
  const categories = [
    {
      icon: <FaRunning />,
      title: 'Sports Shoes',
      description: 'Explore our collection of top-quality sports shoes for all kinds of activities.',
    },
    {
      icon: <FaDumbbell />,
      title: 'Sports Equipment',
      description: 'High-performance equipment for all sports, from gym gear to outdoor essentials.',
    },
    {
      icon: <FaTshirt />,
      title: 'Sports Wear',
      description: 'Stylish and comfortable sportswear designed for athletes and enthusiasts.',
    },
    {
      icon: <FaMedal />,
      title: 'Seals and Medals',
      description: 'Premium quality seals, medals, and trophies for your sports events and achievements.',
    },
    {
      icon: <FaShoppingCart />,
      title: 'Wholesale Dealers',
      description: 'Trusted wholesale dealers offering a wide range of sports goods and supplies.',
    },
  ];

  return (
    <section id="categories" className="py-20 bg-gray-800 text-gray-300 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-orange">Sports Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-custom-orange text-white p-4 rounded-full text-5xl">{category.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-custom-green">{category.title}</h3>
              <p className="text-lg text-gray-300">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
