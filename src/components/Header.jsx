import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaImages } from 'react-icons/fa';
import { FaShop } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { SiGithubsponsors } from "react-icons/si";
import { MdSportsKabaddi } from 'react-icons/md';
import { FaServicestack } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const activeLinkStyle = "text-custom-orange"; // Define your active link color

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-4 px-6 fixed w-full z-10 shadow-lg"
    >
      <nav className="flex items-center justify-between container mx-auto">
        {/* Logo Section */}
        <img src={logo} alt="Hespro Sports Logo" className="h-20" />

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-white text-2xl z-50" aria-label="Toggle navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`lg:flex pl-5 lg:space-x-6 absolute lg:static top-16 right-0 w-full lg:w-auto bg-black lg:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
        >
          <li className="lg:hidden pt-5 text-center mb-4">
            <Link to="/home" className={`flex items-center hover:text-custom-orange ${location.pathname === '/home' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <FaHome className="mr-2" /> Home
            </Link>
          </li>

          {/* Dropdown for About Us */}
          <li className="lg:hidden text-center mb-4">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-custom-orange"
              >
                <BsFillPersonVcardFill className="mr-2" /> About Us
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg w-full">
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/about" className={`${location.pathname === '/about' ? activeLinkStyle : ''}`} onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                      About
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/history" className={`${location.pathname === '/history' ? activeLinkStyle : ''}`} onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                      Journey
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* Other Menu Items for Mobile View */}
          <li className="lg:hidden text-center mb-4">
            <Link to="/shop" className={`flex items-center hover:text-custom-orange ${location.pathname === '/shop' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <FaShop className="mr-2" /> Shop
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="/event" className={`flex items-center hover:text-custom-orange ${location.pathname === '/gallery' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <FaImages className="mr-2" /> Event
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="/gallery" className={`flex items-center hover:text-custom-orange ${location.pathname === '/gallery' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <FaImages className="mr-2" /> Gallery
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="/sports/kabaddi" className={`flex items-center hover:text-custom-orange ${location.pathname === '/sports/kabaddi' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <MdSportsKabaddi className="mr-2" /> Kabaddi
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="/service" className={`flex items-center hover:text-custom-orange ${location.pathname === '/service' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <FaServicestack className="mr-2" /> Services
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="/testimonials" className={`flex items-center hover:text-custom-orange ${location.pathname === '/testimonials' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <VscFeedback className="mr-2" /> Testimonials
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="/sponsors" className={`flex items-center hover:text-custom-orange ${location.pathname === '/sponsors' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <SiGithubsponsors className="mr-2" /> Sponsors
            </Link>
          </li>
          <li className="lg:hidden text-center mb-4">
            <Link to="/contact" className={`flex items-center hover:text-custom-orange ${location.pathname === '/contact' ? activeLinkStyle : ''}`} onClick={() => setIsOpen(false)}>
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </li>

          {/* Desktop Menu Items */}
          <li className="hidden lg:flex items-center">
            <Link to="/home" className={`flex items-center hover:text-custom-orange ${location.pathname === '/home' ? activeLinkStyle : ''}`}>
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li className="hidden lg:flex items-center relative group">
            <button className={`flex items-center hover:text-custom-orange ${location.pathname === '/about' || location.pathname === '/history' ? activeLinkStyle : ''}`}>
              <BsFillPersonVcardFill className="mr-2" /> About Us
            </button>
            <ul className="hidden group-hover:block absolute mt-6 bg-gray-800 text-white shadow-lg rounded-lg">
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link to="/about">About</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link to="/history">Journey</Link>
              </li>
            </ul>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/shop" className={`flex items-center hover:text-custom-orange ${location.pathname === '/shop' ? activeLinkStyle : ''}`}>
              <FaShop className="mr-2" /> Shop
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/event" className={`flex items-center hover:text-custom-orange ${location.pathname === '/gallery' ? activeLinkStyle : ''}`}>
              <FaImages className="mr-2" /> Event
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/gallery" className={`flex items-center hover:text-custom-orange ${location.pathname === '/gallery' ? activeLinkStyle : ''}`}>
              <FaImages className="mr-2" /> Gallery
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/sports/kabaddi" className={`flex items-center hover:text-custom-orange ${location.pathname === '/sports/kabaddi' ? activeLinkStyle : ''}`}>
              <MdSportsKabaddi className="mr-2" /> Kabaddi
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/service" className={`flex items-center hover:text-custom-orange ${location.pathname === '/service' ? activeLinkStyle : ''}`}>
              <FaServicestack className="mr-2" /> Services
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/testimonials" className={`flex items-center hover:text-custom-orange ${location.pathname === '/testimonials' ? activeLinkStyle : ''}`}>
              <VscFeedback className="mr-2" /> Testimonials
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/sponsors" className={`flex items-center hover:text-custom-orange ${location.pathname === '/sponsors' ? activeLinkStyle : ''}`}>
              <SiGithubsponsors className="mr-2" /> Sponsors
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Link to="/contact" className={`flex items-center hover:text-custom-orange ${location.pathname === '/contact' ? activeLinkStyle : ''}`}>
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </li>

          {/* PayPal Button and Social Icons */}
          <div className="lg:flex items-center space-x-4 mt-6 lg:mt-0">
            <button className="bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-700 flex items-center">
            <a
      href="https://forms.gle/8eSxtbYrT8JFEDBd9"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faPaypal} className="mr-2" />
      Pay Now
    </a>
            </button>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61564728403075&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"  className="text-xl hover:text-orange-500"><FaFacebook /></a>
          <a href="https://www.instagram.com/hesprosports?igsh=dTJhb3UybHgxZHJ6" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-500"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/sonali-nikam-2264a8324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"  className="text-xl hover:text-orange-500"><FaLinkedin /></a>
            </div>
          </div>
        </ul>
      </nav>
    </motion.header>
  );

};

export default Navbar;
