import React from "react";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import "../assets/css/testimonials.css";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
const testimonials = [
  // Academic Coaching
  {
    name: "Prakash Alwandi",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Academic Coaching",
    text: "As the founder and head coach of our sports academy, I am incredibly proud of the community we've built and the impact we've had on young athletes' lives. Our academy is not just a place to train; it's a home where dreams are nurtured, skills are honed, and champions are made."},
  {
    name: "Supriya Naik",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Academic Coaching",
    text: "The coaching at the academy ensures academic growth alongside sports development. My daughter has improved her sports skills while staying focused on her studies, a balance that’s hard to find elsewhere.",
  },
  {
    name: "Shivraja",
    position: "Student",
    image: "https://via.placeholder.com/100",
    category: "Academic Coaching",
    text: "The academic support provided by the academy has been remarkable. They ensure we maintain our studies while advancing in sports, creating a perfect harmony between the two.",
  },
  {
    name: "Shubhagi Babar",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Academic Coaching",
    text: "The academic guidance offered alongside sports training has helped my child grow holistically. The academy's balanced approach makes it easy to focus on both aspects.",
  },

  // Technical Skills
  {
    name: "Sonali Patil",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Technical Skills",
    text: "The focus on technical skills development at this academy is exceptional. My son has gained new techniques and strategies that have helped him improve significantly in sports.",
  },
  {
    name: "Shivanya",
    position: "Student",
    image: "https://via.placeholder.com/100",
    category: "Technical Skills",
    text: "I have learned invaluable technical skills that have greatly enhanced my sports performance. The coaches ensure we develop a strong foundation in every skill.",
  },
  {
    name: "Neelu Gotum",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Technical Skills",
    text: "My child's technical skills have grown leaps and bounds thanks to the academy's expert coaches who focus on building the right skills for long-term success.",
  },
  {
    name: "Priya Suryvashi",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Technical Skills",
    text: "The academy has a strong focus on developing technical skills, which has helped my child advance rapidly in her sport. The personalized training programs are fantastic.",
  },
  {
    name: "Disha",
    position: "Student",
    image: "https://via.placeholder.com/100",
    category: "Technical Skills",
    text: "The technical skills I've developed here have made a noticeable difference in my game. The coaches are experts in building strong fundamentals and advanced techniques.",
  },
  {
    name: "Reshama",
    position: "Student",
    image: "https://via.placeholder.com/100",
    category: "Technical Skills",
    text: "I have improved my technical abilities in ways I didn't expect. The coaches push us to perfect every aspect of our game, from footwork to strategy.",
  },

  // Systems and Environment
  {
    name: "Avani Shere",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The academy's environment is incredibly supportive, creating a perfect atmosphere for learning and growth. My child loves the facilities and the friendly competition it fosters.",
  },
  {
    name: "Pradip Shivekr",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The academy's system is well-organized, and my child has thrived in this structured environment. It’s the perfect mix of discipline and encouragement.",
  },
  {
    name: "Ridhi",
    position: "Student",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "I love the academy’s environment. The coaches and facilities create an atmosphere that encourages both fun and hard work, and I’m always excited for the next session.",
  },
  {
    name: "Pankaji",
    position: "Student",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The academy has an outstanding system in place for training and development. It’s a well-oiled machine that helps each student reach their potential.",
  },
  {
    name: "Deepti Shivanya",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The structured environment of the academy has been a game-changer for my child. The well-organized systems ensure that each session is productive and enriching.",
  },
  {
    name: "Suvarna Patil",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The academy's system is highly efficient, with each session planned meticulously. This approach has ensured that my child continues to grow steadily in all aspects of sports.",
  },
  {
    name: "Smita Deshmukh",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The academy’s facilities and system for sports training are top-notch. My child has made significant improvements in skills and confidence, thanks to the structured programs.",
  },
  {
    name: "Shivraja",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The organized systems at the academy ensure that every student gets equal opportunities to grow. My child has thrived in this structured, positive environment.",
  },
  {
    name: "Amruta Kachava",
    position: "Parent",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The well-maintained facilities and structured programs are outstanding. My child has gained confidence and improved athletic skills significantly thanks to the academy’s systems.",
  },
  {
    name: "Arnavi",
    position: "Student",
    image: "https://via.placeholder.com/100",
    category: "Systems and Environment",
    text: "The system here is fantastic, ensuring a balance of fun and focused training. The facilities are world-class, and the environment keeps me motivated to improve.",
  }
];


const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-80 bg-gray-800 p-4 rounded-lg shadow-lg mx-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-4 border-orange-500 mr-2"
        />
        <div>
          <h4 className="text-lg font-semibold text-custom-green">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-sm">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-400 text-xs">{testimonial.text}</p>
    </motion.div>
  );
};

const TestimonialsPage = () => {
  const fetchMoreData = () => {
    // Fetch more data logic here if needed
  };

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const rows = chunkArray(testimonials, 7); // Dividing testimonials into chunks of 7

  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-900 text-gray-300 pt-20 pb-8 overflow-hidden">
        {/* Adjusted padding-top to ensure space for Navbar */}
        <h2 className="text-3xl font-bold text-white text-center my-12">
          What Say Our Parents!
        </h2>
        <div className="w-full max-w-screen-xl mx-auto">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`relative overflow-hidden mb-12 ${
                rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
              }`}
            >
              <div className="flex flex-nowrap animate-scroll">
                {row.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsPage;