import React from 'react';
import { motion } from 'framer-motion';
import { FaSwimmer, FaVolleyballBall } from 'react-icons/fa';
import { GiCricketBat, GiGymBag, GiPunchBlast } from 'react-icons/gi'; // Using GiPunchBlast as an alternative
import { IoFootball } from 'react-icons/io5';
import { MdOutlineSportsTennis, MdSportsBasketball, MdSportsKabaddi } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { TbYoga } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const sports = [
  { name: 'Kabaddi', icon: <MdSportsKabaddi />, link: '/sports/kabaddi' },
  { name: 'Swimming', icon: <FaSwimmer /> },
  { name: 'Cricket', icon: <GiCricketBat /> },
  { name: 'Football', icon: <IoFootball /> },
  { name: 'Tiny Fitness Discovery', icon: <CgGym /> },
  { name: 'Volleyball', icon: <FaVolleyballBall /> },
  { name: 'Wrestling', icon: <GiPunchBlast /> }, // Changed to GiPunchBlast
  { name: 'Badminton', icon: <MdOutlineSportsTennis /> },
  { name: 'Table Tennis', icon: <MdOutlineSportsTennis /> },
  { name: 'Yoga', icon: <TbYoga /> },
  { name: 'Gymnastic', icon: <GiGymBag /> },
  { name: 'Basketball', icon: <MdSportsBasketball /> },
];

const SportsOffered = () => {
  const navigate = useNavigate();

  const handleCardClick = (sport) => {
    if (sport.link) {
      navigate(sport.link);
    }
  };

  return (
    <section id="sports" className="py-16 bg-gray-900 text-custom-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-orange">Sports We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transition-colors duration-300 group cursor-pointer
                ${sport.name === 'Kabaddi' || sport.name === 'Table Tennis' ? 'bg-custom-orange text-white' :
                  sport.name === 'Tiny Fitness Discovery' ? 'bg-custom-green text-white' : 'bg-gray-800 hover:bg-custom-orange'}
              `}
              onClick={() => handleCardClick(sport)}
            >
              <div className={`mb-4 text-4xl group-hover:text-white transition-colors duration-300
                ${sport.name === 'Kabaddi' || sport.name === 'Tiny Fitness Discovery' || sport.name === 'Table Tennis' ? 'text-white' : 'text-custom-green'}
              `}>
                {sport.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-400">
          <a href="#">And More . . .</a>
        </p>
      </div>
    </section>
  );
};

export default SportsOffered;
