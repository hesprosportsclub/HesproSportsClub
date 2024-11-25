import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 px-5 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        <a href="/" className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">Hespro Sports</a>
        <div className="flex justify-center space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/profile.php?id=61564728403075&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"  className="text-xl hover:text-orange-500"><FaFacebook /></a>
          <a href="https://www.instagram.com/hesprosports?igsh=dTJhb3UybHgxZHJ6" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-500"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/sonali-nikam-2264a8324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"  className="text-xl hover:text-orange-500"><FaLinkedin /></a>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
          <p className="mb-2 md:mb-0">&copy; 2024 Hespro Sports. All rights reserved.</p>
          <span className="hidden md:block">|</span>
          <a href="/terms-and-conditions" className="hover:text-orange-500">Terms Of Service</a>
          <a href="/privacy-policy" className="hover:text-orange-500 ml-4">Privacy Policy</a>
        </div>
        <div className="mt-2 md:mt-0 flex items-center">
          <span>Developed by: <a href="https://musitech.in" className='text-orange-500'>MusiTech</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
