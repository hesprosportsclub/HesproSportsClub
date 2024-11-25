import React from 'react';
import { motion } from 'framer-motion';
import FounderImage from '../assets/founder11.jpg'; // Replace with the actual path to your image

const Message = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center bg-gray-700 p-8 rounded-lg shadow-lg">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-2/3 text-left"
      >
        <h3 className="text-3xl font-bold text-custom-orange text-center mb-4">
          About Mrs. Sonali Nikam
        </h3>
        <p className="text-white text-lg leading-relaxed">
          Mrs. Sonali Nikam is a distinguished national Kabaddi athlete and medalist, celebrated for her achievements in Senior Nationals and university tournaments. Since 2018, she has managed a multi-sports academy, nurturing young talent in the sports field.
          <br /><br />
          Her passion for Kabaddi drives her efforts to elevate the sport's professionalism through coaching and her work at the Divisional Sports Complex in Shastrinagar Pune.
          <br /><br />
          In 2024, with HESPRO Sports, she introduced innovative sports management solutions, inspiring future generations.
          <br /><br />
          Recognitions include:
          <ul className="list-disc list-inside mt-4">
            <li>Janai Muktai Samaj Jagruti Sports Award (2020)</li>
            <li>Khashaba Jadhav Rashtra Bhushan National Award (2023)</li>
            <li>Uttam Bharati Krida Award (2024)</li>
          </ul>
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/3 flex justify-center lg:justify-end"
      >
        <div className="relative">
          <img
            src={FounderImage} // Replace with actual image URL
            alt="Mrs. Sonali Sitaram Nikam"
            className="w-66 h-66 rounded-full shadow-lg object-cover" // Circular image with shadow
          />
          <div className="absolute inset-0 border-4 border-gray-300 rounded-full"></div> {/* Optional border for extra styling */}
        </div>
      </motion.div>
    </div>
  );
};

export default Message;
