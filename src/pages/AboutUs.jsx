// src/pages/AboutPage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Architests from "../components/Architests"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faChild, faMedal } from "@fortawesome/free-solid-svg-icons";
import { faStar, faGlobe } from "@fortawesome/free-solid-svg-icons";

const joinus = "/images/about-hero.jpg";
const WhyChooseUs = "/images/K1.png";
const OurVision = "/images/K2.png";
const OurMission = "/images/surround.png";
const FounderImage = "/images/about-founder.jpeg";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <section className="w-full min-h-screen bg-gray-800 text-gray-300  flex flex-col items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white mt-4 text-center mb-12 py-12"
          >
            About Us
          </motion.h2>

          {/* Why You Should Join Us Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Why You Should Join Us?
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Hespro Sports(HSS) Academy has been a cornerstone of athletic
                development in Pune for the past six years, serving as a beacon
                for aspiring athletes across various disciplines.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center bg-custom-orange w-10 h-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faStar} className="text-lg" />
                  </span>
                  <div className="text-gray-400">
                    <h4 className="text-lg font-semibold">
                      Modern Kabaddi Training Centre
                    </h4>
                    <p className="text-gray-500">
                      Experience state-of-the-art facilities and coaching.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center bg-custom-orange w-10 h-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faGlobe} className="text-lg" />
                  </span>
                  <div className="text-gray-400">
                    <h4 className="text-lg font-semibold">
                      Quality Platform for Women
                    </h4>
                    <p className="text-gray-500">
                      Dedicated support and training for women in Kabaddi.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center bg-custom-orange w-10 h-10 rounded-full text-white">
                    <FontAwesomeIcon icon={faTrophy} className="text-lg" />
                  </span>
                  <div className="text-gray-400">
                    <h4 className="text-lg font-semibold">
                      Success in Your Sporting Journey
                    </h4>
                    <p className="text-gray-500">
                      Achieve your goals with our expert guidance.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src={joinus}
              alt="Join Us"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
          </div>

          {/* Why Choose Us Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src={WhyChooseUs}
              alt="Our Mission"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full lg:w-1/2 bg-gray-700 p-8 rounded-lg shadow-lg"
>
  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
    Why Choose Us?
  </h3>
  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
    Whether you're a budding athlete or a parent seeking a supportive community for your child's development, Hespro Sports(HSS) Academy is here for you. Join us in shaping the future of sports.
  </p>
  <ul className="space-y-6">
    <li className="flex items-center gap-4">
      <span className="flex items-center justify-center bg-custom-green w-12 h-12 rounded-full text-black">
        <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
      </span>
      <div className="text-gray-400">
        <h4 className="text-xl font-semibold">
          Well Qulified N.I.S, National Coaches
        </h4>
        <p className="text-gray-500">
          Our expert coaches bring professional-level training.
        </p>
      </div>
    </li>
    <li className="flex items-center gap-4">
      <span className="flex items-center justify-center bg-custom-green w-12 h-12 rounded-full text-black">
        <FontAwesomeIcon icon={faChild} className="text-2xl" />
      </span>
      <div className="text-gray-400">
        <h4 className="text-xl font-semibold">
          Opportunities for Children
        </h4>
        <p className="text-gray-500">
          We nurture talent starting from the age of 6 years.
        </p>
      </div>
    </li>
    <li className="flex items-center gap-4">
      <span className="flex items-center justify-center bg-custom-green w-12 h-12 rounded-full text-black">
        <FontAwesomeIcon icon={faMedal} className="text-2xl" />
      </span>
      <div className="text-gray-400">
        <h4 className="text-xl font-semibold">
          World-Class Methodology
        </h4>
        <p className="text-gray-500">
          Leading techniques for Women's Kabaddi excellence.
        </p>
      </div>
    </li>
  </ul>
</motion.div>
          </div>

          {/* Our Vision Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full lg:w-1/2 bg-gray-700 p-8 rounded-lg shadow-lg"
>
  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
    Our Vision
  </h3>
  <p className="text-gray-400 text-xl">
    To empower aspiring athletes with the skills, mindset, and
    opportunities to excel both on and off the field. Through
    dedicated coaching, innovative training methods, and a
    commitment to holistic development, Hespro Sports(HSS) Academy envisions
    becoming a beacon of sporting excellence, fostering a culture of
    resilience, teamwork, and leadership. Our aim is not just to
    produce champions in sports but to shape individuals of
    character who inspire positive change in their communities and
    beyond.
  </p>
</motion.div>
<motion.img
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  src={OurVision} // Replace with actual image URL
  alt="Our Vision"
  className="w-full lg:w-1/2 rounded-lg shadow-lg"
/>
          </div>

          {/* Our Mission Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src={OurMission} // Replace with actual image URL
              alt="Our Mission"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full lg:w-1/2 bg-gray-700 p-8 rounded-lg shadow-lg"
>
  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
    Our Mission
  </h3>
  <p className="text-gray-400 text-xl">
    At our sports academy, we are dedicated to nurturing the full
    potential of athletes by providing world-class coaching,
    state-of-the-art facilities, and a supportive environment that
    promotes holistic development.Through our commitment to
    excellence, integrity, and innovation, we aim to empower
    individuals to achieve their athletic dreams while instilling
    values of teamwork, resilience, and leadership. By prioritizing
    athlete well-being and fostering a culture of inclusivity and
    sportsmanship, we strive to make a positive impact on the lives
    of our athletes and the communities we serve.
  </p>
</motion.div>
          </div>
<motion.div>
  <Architests/>
</motion.div>
        
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
