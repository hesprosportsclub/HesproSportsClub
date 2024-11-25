import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaStar, FaMedal, FaHeart } from 'react-icons/fa';
import { IoFootballSharp } from "react-icons/io5";
import { Link } from 'react-scroll'; // Import for smooth scrolling
import { MdArrowDownward } from 'react-icons/md'; // Import Arrow Icon
import Header from '../components/Header';
import Footer from '../components/Footer';
import Message from '../components/Message';
import heroImage from '../assets/hero3.png'; // Import hero image
import OurAcademyFacilities from '../components/OurAcademyFacilities';
const FounderImage = "/images/about-founder.jpeg";


const Arrow = () => (
  <motion.div
    className="text-white text-4xl mt-6 mx-auto"
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: [0, -10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
  >
    <MdArrowDownward />
  </motion.div>
);

const KabaddiPage = ({ heading, buttonText, scrollTarget }) => {
  return (
    <>
      <Header /> {/* Ensuring header is included at the top */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url(${heroImage})` }} // Use the imported image
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-center relative ">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-custom-green mb-4">
              {heading || 'Hit the mat, rule the game!'} {/* Default value if heading not passed */}
            </h1>
            <Link
              to={scrollTarget || 'services'} // Default scroll target
              smooth={true}
              duration={500}
              className="flex flex-col justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-custom-orange text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-custom-orange-darker"
              >
                {buttonText || 'Get Started'} {/* Default button text */}
              </motion.button>
              <Arrow />
            </Link>
          </div>
        </div>
      </motion.section>      <OurAcademyFacilities/>
      <div className="font-sans bg-gray-900 text-gray-300">
        {/* Kabaddi Section */}
        <section className="w-full min-h-screen flex flex-col items-center py-16 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-custom-orange text-center mb-12">
              Kabaddi Evolution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Training and Coaching */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-custom-green mb-4">
                  Training and Coaching
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <FaUsers className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Individual Coaching</h4>
                      <p className="text-gray-300">
                        Personalized training sessions for players to improve their skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaUsers className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Team Coaching</h4>
                      <p className="text-gray-300">
                        Strategic and tactical training for teams.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <IoFootballSharp className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Skill Development Workshops</h4>
                      <p className="text-gray-300">
                        Workshops focused on specific skills such as raiding, defending, and strategy.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Event Management */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-custom-green mb-4">
                  Event Management
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <FaTrophy className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Tournament Organization</h4>
                      <p className="text-gray-300">
                        Planning and executing Kabaddi tournaments and leagues at different levels.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaUsers className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Tournament affiliation</h4>
                      <p className="text-gray-300">
                      All the tournaments we conduct will be affiliated to Kabaddi Association                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaStar className="text-4xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Event Promotion</h4>
                      <p className="text-gray-300">
                        Marketing and promoting Kabaddi events to enhance players standards and to promote sponsors by involing more and more spectators.
                      </p>
                    </div>
                  </li> 
                </ul>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Player Development */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-custom-green mb-4">
                  Player Development
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <FaUsers className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Talent Scouting</h4>
                      <p className="text-gray-300">
                        Identifying and training in promissing sport talents.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaMedal className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Fitness Training</h4>
                      <p className="text-gray-300">
                        Specialized fitness programs to enhance players' physical conditioning.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaHeart className="text-2xl text-custom-orange mr-2" />
                    <div className="text-gray-500">
                      <h4 className="text-lg font-semibold">Injury Prevention and Rehabilitation</h4>
                      <p className="text-gray-300">
                        Programs focused on preventing injuries and facilitating recovery.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Community Engagement */}
              <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-gray-800 p-8 rounded-lg shadow-lg"
>
  <h3 className="text-2xl lg:text-3xl font-bold text-custom-green mb-4">
    Community Engagement
  </h3>
  <ul className="space-y-6">
    <li className="flex items-start gap-4">
      <FaUsers className="text-4xl text-custom-orange" />
      <div className="text-gray-500">
        <h4 className="text-lg font-semibold">School and College Programs</h4>
        <p className="text-gray-300">
          Organizing kabaddi camps in schools and colleges to bring awareness and provide tournament exposure to improve the skills of new players on the ground.
        </p>
      </div>
    </li>
    <li className="flex items-start gap-4">
      <FaUsers className="text-4xl text-custom-orange" />
      <div className="text-gray-500">
        <h4 className="text-lg font-semibold">Social Responsibility Initiatives</h4>
        <p className="text-gray-300">
          Promoting Kabaddi as a tool for social development and community engagement by providing financial support to talented players.
        </p>
      </div>
    </li>
  </ul>
</motion.div>

              </div>

              {/* About Mrs. Sonali Sitaram Nikam Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Message /> {/* Message component with About Mrs. Sonali Nikam content */}
            </motion.div>
          </div>
        </section>
      </div>


      <Footer /> {/* Footer added */}
    </>
  );
};

export default KabaddiPage;
