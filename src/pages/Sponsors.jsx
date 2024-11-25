import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sponsors = [
    {
        logo: require('./../assets/sponcer.jpg'),
        name: 'INIZIO ASSET GROUP',
        text: 'INIZIO is a trusted partner in your assured asset growth.'
    }
];

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    rotate: -10,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.2,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Sponsors = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-900 text-gray-300 flex items-center justify-center" style={{ minHeight: '100vh' }}>
        <div className="container mx-auto px-4 py-10 text-center">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12 py-12">
            Our Sponsors
          </h2>

          {sponsors.length > 0 ? (
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={cardVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center"
            >
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:-translate-y-2"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {sponsor.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-400">Currently no sponsors.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sponsors;
