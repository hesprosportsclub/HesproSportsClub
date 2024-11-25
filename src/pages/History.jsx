import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";

function History() {
  return (
    <>
      <Header />
      <motion.div
        className="flex items-center justify-center min-h-screen bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-700 p-8 rounded-lg shadow-md max-w-2xl ">
          <h2 className="text-4xl text-center font-semibold mb-4 text-custom-orange">Hespro Journey</h2>
          <p className="text-left text-gray-200">
            HESPRO Sports: A Legacy of Excellence started in 2018 in the name of
            (Happy Sai Sports Academy) has been a key player in sports, focusing on Coaching, Training, and Multi-sport Ground development. With rich experience of more than 6 years, HESPRO Sports has evolved into a Sports Management Company, set to organize 50+ tournaments across various sports in 2025, boosting competitive sports.
            <br /><br />
            😊 Milestones and Goals: Since inception in 2018 till now we did
            training and facility development.
            <br /><br />
            😊 Now in 2024: Expanded to sports management and planned more than 50+ tournaments in 2025.
            <br /><br />
            😊 Future Ambitions: Create national and international opportunities for athletes.
            <br /><br />
            HESPRO SPORTS is committed to nurturing talent and enhancing sports infrastructure.
          </p>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default History;
