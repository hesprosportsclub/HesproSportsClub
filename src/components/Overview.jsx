import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaLightbulb, FaConciergeBell, FaBuilding, FaDraftingCompass, FaRegChartBar } from 'react-icons/fa';

const Overview = () => {
  const overviewPoints = [
    {
      icon: <FaBullhorn />,
      title: 'Venue Branding Experts',
      description: 'Dedicated team of experienced professionals who live and breathe sports. The buring desired to create new everytime decked-up venue drives the team to excel every time.',
      ariaLabel: 'Venue Branding Experts'
    },
    {
      icon: <FaLightbulb />,
      title: 'Creative Powerhouse',
      description: 'Powered by a team of creative minds, we every time strive to push the boundaries of creativity with each project to set new standards.',
      ariaLabel: 'Creative Powerhouse'
    },
    {
      icon: <FaBuilding />,
      title: 'Hospitality Management',
      description: 'Event planning, logistics support (flights, accommodation, venues), ticketing, and guest support including city guidence.',
      ariaLabel: 'Hospitality Management'
    },
    {
      icon: <FaConciergeBell />,
      title: 'Venue Management',
      description: 'Dedicated on-ground execution team for whom quality is in their DNA.',
      ariaLabel: 'Venue Management'
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Stadium Infrastructure',
      description: 'Total stadium event arrangements like Design, erection of platforms and all other supports for temporary structures needed in the stadiums.',
      ariaLabel: 'Stadium Infrastructure'
    },
    {
      icon: <FaLightbulb />,
      title: 'Concept Creation',
      description: 'A team of creative minded conceptualizers and experience visualizers committed to providing the best concepts according to client and event requirements.',
      ariaLabel: 'Concept Creation'
    },
    {
      icon: <FaRegChartBar />,
      title: 'Strategy Planning',
      description: 'Complete planning and the execution is provided using cost-efficient strategies with the best quality service.',
      ariaLabel: 'Strategy Planning'
    },
  ];

  return (
    <section id="overview" className="py-20 bg-gray-900 text-custom-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {overviewPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-10 rounded-lg flex items-start shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="bg-custom-orange text-white p-5 rounded-full text-4xl">
                  {point.icon}
                </div>
              </div>
              <div>
                <h3 className="text-custom-green text-2xl font-semibold mb-2">{point.title}</h3>
                <p className="text-lg">{point.description}</p>
                <span role="img" aria-label={point.ariaLabel} className="hidden"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
