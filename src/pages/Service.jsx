import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header"; // Ensure Header component is correctly implemented
import Footer from "../components/Footer"; // Ensure Footer component is correctly implemented

// Import images
import S1 from '../assets/S1.png';
import S2 from '../assets/S2.png';
import S3 from '../assets/S3.png';
import S4 from '../assets/S4.png';
import S5 from '../assets/S5.png';
import S6 from '../assets/S6.png';
import S7 from '../assets/S7.png';

const Service = () => {
  const services = [
    {
      imgSrc: S1,
      title: 'Revitalization of Old Ground',
      description: 'Restoring and maintaining sports grounds for optimal use.',
      ariaLabel: 'Organization of sports competitions'
    },
    {
      imgSrc: S2,
      title: 'Provision of Coaches',
      description: 'Providing professional and experienced sports coaching for all sports as per requirement.',
      ariaLabel: 'Training classes for all sports'
    },
    {
      imgSrc: S3,
      title: 'Multi-Sport Club Management',
      description: 'Managing multi-sport facilities for diverse activities.',
      ariaLabel: 'Sports ground management'
    },
    {
      imgSrc: S4,
      title: 'Tournament Organization',
      description: 'Organizing and executing multi-sports tournaments on regular basis seamlessly at different levels .',
      ariaLabel: 'Sports ground revitalization and maintenance'
    },
    {
      imgSrc: S5,
      title: 'Ground Maintenance',
      description: 'Creating new grounds and also ensuring well-maintences of the exciting sports grounds to ensure they are ready for use 24 X 7.',
      ariaLabel: 'Multi-sports club management'
    },
    {
      imgSrc: S6, // Duplicate image
      title: 'Sports Coaching',
      description: 'Providing basic to advance coaching for althletes by experienced coaches to althletes total supports to achieve their DREAM.',
      ariaLabel: 'Provision of sports coaches'
    },
    {
      imgSrc: S7,
      title: 'Skill Development',
      description: 'Building physical and mental strength to achieve best skillset and with winning MINDSET and strong ATTITUDE transforming sports.',
      ariaLabel: 'Self development and mental resilience'
    },
  ];


  return (
    <>
      {/* Header component */}
      <Header />
      <section id="services" className="py-16 bg-gray-900 text-custom-white lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 py-12 text-custom-orange">HESPRO SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  {/* Only the image is circular */}
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-custom-green">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
                <span role="img" aria-label={service.ariaLabel} className="hidden"></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
