// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowDownward } from 'react-icons/md';
import { Link } from 'react-scroll';
import heroImage from '../assets/hero11.png'; // Import the image

const Arrow = () => (
  <motion.div
    className="text-[#FF5733] text-4xl mt-6 mx-auto" // Adjusted to orange
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: [0, -10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
  >
    <MdArrowDownward />
  </motion.div>
);

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#040404] text-[#FFFFFF] px-5 h-screen flex items-center justify-center flex-col bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }} // Use imported image here
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative text-center">
  <h1 className="text-5xl font-bold mb-4">
    Welcome to <span className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF5733] via-[#00FF7F] to-[#FFFFFF]">
      Hespro Sports
    </span>
  </h1>
  <p className="text-2xl mb-8 text-[#D8DBD5]">Reach New Heights</p>
  <div className="flex justify-center space-x-4">
    <Link to="services" smooth={true} duration={500}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FF5733] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
      >
        Shop Now
      </motion.button>
    </Link>

    {/* Wrap the second button in an <a> tag for a working link */}
    <a href="https://forms.gle/8eSxtbYrT8JFEDBd9" target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FF5733] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
      >
        Pay to Shop
      </motion.button>
    </a>
  </div>
</div>

      <Arrow />
    </motion.section>
  );
};

export default Hero;
