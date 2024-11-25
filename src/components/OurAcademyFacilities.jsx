import React from 'react';
import { motion } from 'framer-motion';

// Import icons
import { FaBed, FaUserMd, FaTh, FaFirstAid } from 'react-icons/fa';

// Import images (replace these paths with correct image paths)
import MudGroundImage from '../assets/soil.png';
import GymImage from '../assets/body.png';

const Services = () => {
  const services = [
    {
      icon: <FaBed className="text-4xl text-custom-orange" />,
      title: 'Hostel',
      description: 'Providing comfortable, secure and economical staying facilities for athletes.',
      ariaLabel: 'Accommodation for athletes',
    },
    {
      icon: <FaUserMd className="text-4xl text-custom-orange" />,
      title: 'Physiotherapy',
      description: 'Providing professional physiotherapy services for injury prevention and recovery.',
      ariaLabel: 'Physiotherapy services',
    },
    {
      icon: <FaTh className="text-4xl text-custom-orange" />,
      title: 'Sport Mat',
      description: 'Offering high-quality mats for most of the sports activities and skill training sessions.',
      ariaLabel: 'Sports mats',
    },
    {
      icon: <img src={MudGroundImage} alt="Mud Ground" className="w-16 h-16 mb-[-30px]" />,
      title: 'Mud Ground',
      description: 'Original mud ground training session is also provided to ensure the bonding between mud and the sport.',
      ariaLabel: 'Mud Ground training',
    },
    {
      icon: <FaFirstAid className="text-4xl text-custom-orange" />,
      title: 'Medical Assistance',
      description: 'Providing essential medical support and health insurance provision to the athletes.',
      ariaLabel: 'Medical support',
    },
    {
      icon: <img src={GymImage} alt="Gym" className="w-16 h-16 mb-[-30px]" />,
      title: 'Gym',
      description: 'Provision of well-equipped gym facilities with expert trainers to enhance athlete performance supported by strength and conditioning guidance.',
      ariaLabel: 'Gym facilities',
    },
  ];

  return (
    <section id="services" className="py-2 bg-gray-900 text-custom-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-orange">Our Academy Facilities</h2>
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
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-custom-green">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
              <span role="img" aria-label={service.ariaLabel} className="hidden"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
