import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const ContactSection = ({ heading }) => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-center -mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-custom-orange">{heading || 'Contact Us'}</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-gray-700 p-8 rounded-lg shadow-xl flex flex-col md:flex-row justify-between items-center"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" className="sr-only">Contact Information</h2>

          {/* Email Section */}
          <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3 flex flex-col md:flex-row items-center">
            <FaEnvelope className="text-custom-green text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-custom-white mb-2">Email Us</h3>
              <a href="mailto:info@hespro.in" className="text-gray-300 text-xl font-bold hover:underline">
                info@hespro.in
              </a>
            </div>
          </div>

          {/* Phone Section */}
          <div className="border-t border-b border-gray-600 py-6 md:border-none md:py-0 md:mx-8 md:w-1/3 flex flex-col md:flex-row items-center">
            <FaPhoneAlt className="text-custom-green text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-custom-white mb-2">Contact Number</h3>
              <p className="text-gray-300 text-xl font-bold">+91 7387257892</p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="md:w-1/3 flex flex-col items-center space-y-4 md:space-y-6">

            {/* Pay Now Button */}
            <a
              href="https://forms.gle/8eSxtbYrT8JFEDBd9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-custom-orange text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition duration-300 flex items-center justify-center w-full"
            >
              <FontAwesomeIcon icon={faPaypal} className="text-2xl mr-2" />
              Pay Now
            </a>

            {/* Chat with Hespro Button */}
            <a
              href="https://wa.me/917559344889"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-custom-green text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition duration-300 flex items-center justify-center w-full"
            >
              <IoLogoWhatsapp className="mr-2 text-2xl" />
              Chat with us
            </a>

          </div>
        </motion.div>

        {/* Optional: Add a contact form or social media links here */}
      </div>
    </section>
  );
};

export default ContactSection;
