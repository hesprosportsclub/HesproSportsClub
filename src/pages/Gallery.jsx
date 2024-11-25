import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Import images directly
import hero51 from '../assets/lunch.jpg'
import hero1 from '../assets/S1.jpg';
import hero2 from '../assets/B1.jpg';
import hero3 from '../assets/S7.jpg';
import hero4 from '../assets/S3.jpg';
import hero8 from '../assets/S8.jpg';
import hero10 from '../assets/S10.jpg';
import hero11 from '../assets/S11.jpg';
import hero12 from '../assets/S12.jpg';
import hero16 from '../assets/S16.jpg';
import hero18 from '../assets/S18.jpg';
import hero19 from '../assets/S19.jpg';
import hero20 from '../assets/S20.jpg';
import hero22 from '../assets/B3.jpg';
import hero23 from '../assets/B4.jpg';
import hero24 from '../assets/B5.jpg';
import hero25 from '../assets/B6.jpg';
import hero26 from '../assets/B7.jpg';
import hero28 from '../assets/B9.jpg';
import hero29 from '../assets/B10.jpg';
import hero30 from '../assets/H1.jpg';
import hero31 from '../assets/H2.jpg';
import hero32 from '../assets/H3.jpg';
import hero33 from '../assets/H4.jpg';
import hero34 from '../assets/H5.jpg';
import hero35 from '../assets/H6.jpg';
import hero37 from '../assets/H8.jpg';
import hero38 from '../assets/H9.jpg';
import hero39 from '../assets/H10.jpg';
import hero40 from '../assets/H11.jpg';
import hero41 from '../assets/H12.jpg';
import hero42 from '../assets/H13.jpg';
import hero43 from '../assets/H14.jpg';
import hero44 from '../assets/H15.jpg';



const galleryImages = [
  hero51,
  hero1,
  hero2,
  hero4,
  hero8,
  hero10,
  hero11,
  hero12,
  hero16,
  hero18,
  hero19,
  hero20,
  hero3,
  hero22,
  hero23,
  hero24,
  hero25,
  hero26,
  hero28,
  hero29,
  hero30,
  hero31,
  hero33,
  hero35,
  hero37,
  hero38,
  hero39,
  hero40,
  hero41,
  hero42,
  hero43,
  hero44,
  hero32,
  hero34,



 
];

const Service = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />
      <section id="services" className="py-16 bg-gray-900 text-custom-white lg:py-24">
        <div className="container mx-auto px-4 py-12 overflow-x-hidden">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}>
            <Slider {...settings}>
              {galleryImages.map((image, index) => (
                <div key={index}>
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg" 
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
          <h2 className="text-4xl font-bold text-center mt-8 mb-10 text-custom-orange">HESPRO Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 md:mx-8 lg:mx-12">
  {galleryImages.map((image, index) => (
    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img 
        src={image} 
        alt={`Gallery ${index + 1}`} 
        className="w-full h-52 object-cover" 
      />
    </div>
  ))}
</div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
