import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdArrowDownward } from 'react-icons/md';
import { Link } from 'react-scroll';
import heroImage from '../assets/hero.png'; // Image for laptop
import heroImage1 from '../assets/mobile.jpg'; // Image for mobile devices

const Arrow = () => (
  <motion.div
    className="text-white text-4xl mt-8 mx-auto"
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: [0, -10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
  >
    <MdArrowDownward />
  </motion.div>
);

const Hero = ({ heading, buttonText, scrollTarget }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen width
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile devices
  };

  // Run checkScreenSize on mount and window resize
  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${isMobile ? heroImage1 : heroImage})`, // Dynamically set image based on device
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '100%', 
        height: '100vh' // Set height to full viewport height
      }}
    >
      <div className="container mx-auto max-w-screen-xl flex flex-col items-center justify-center relative text-center px-4 md:px-8">
        <div className="w-full">
          <Link
            to={scrollTarget || 'services'}
            smooth={true}
            duration={500}
            className="flex flex-col items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-custom-orange text-white mt-[600px] px-6 py-3 rounded-full text-lg font-semibold hover:bg-custom-orange-darker hover:text-white"
            >
              {buttonText || 'Get Started'}
            </motion.button>
            <Arrow />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
