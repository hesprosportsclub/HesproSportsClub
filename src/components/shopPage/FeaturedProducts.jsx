import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      image: require('./../../assets/Shoes1.jpeg'),
      title: 'Premium Running Shoes',
    },
    {
      image: require('./../../assets/Shoes2.jpeg'),
      title: 'Cross trainers',
    },
    {
      image: require('./../../assets/Shoes3.jpeg'),
      title: 'Football Shoes',
    },
    {
      image: require('./../../assets/equ21.jpg'),
      title: 'Fitness Equipment',
    },
    {
      image: require('./../../assets/equ22.jpg'),
      title: 'Classic Equipment',
    },
    {
      image: require('./../../assets/equ23.jpg'),
      title: 'Gym Equipment',
    },
    {
      image: require('./../../assets/wear1.jpeg'),
      title: 'Activewear Clothing',
    },
    {
      image: require('./../../assets/F1.jpg'),
      title: 'Fitness Clothing',
    },
    {
      image: require('./../../assets/F2.jpg'),
      title: 'Trade Forum',
    },
    {
      image: require('./../../assets/M22.png'),
      title: 'Fitness Mat',
    },
    {
      image: require('./../../assets/M23.png'),
      title: 'Pilates Mat',
    },
    {
      image: require('./../../assets/M21.png'),
      title: 'Yoga Mat',
    },
    {
      image: require('./../../assets/medal1.jpeg'),
      title: 'Award Medals',
    },
    {
      image: require('./../../assets/t1.png'),
      title: 'Gold Medals',
    },
    {
      image: require('./../../assets/t2.png'),
      title: 'Ribbon Seal',
    },
  ];

  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400?text=Buy+Now'; // Replace with your placeholder image path
  };

  const whatsappNumber = 'https://wa.me/917559344889'; // Replace with your WhatsApp number

  return (
    <section id="featured-products" className="py-16 bg-gray-800 text-gray-300 overflow-x-hidden">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-custom-orange">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-gray-700 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image Container with Aspect Ratio */}
          <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
            <img
              src={product.image || '/path/to/placeholder-image.jpg'}
              alt={product.title}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </div>
          {/* Product Title */}
          <h3 className="text-2xl font-semibold mb-4 text-custom-green">{product.title}</h3>
          {/* Contact Us Button */}
          <a
            href={whatsappNumber}
            className="bg-custom-orange text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
          
         
        </motion.div>
      ))}
    </div>
  </div>
</section>

  
  );
};

export default FeaturedProducts;
