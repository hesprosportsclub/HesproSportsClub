import { useState } from 'react';
import Slider from 'react-slick';

// Import your images
import logo1 from '../assets/L1.png';
import logo2 from '../assets/L3.png';
import logo3 from '../assets/L4.png';
import logo4 from '../assets/L5.png';
import logo5 from '../assets/L6.png';
import logo6 from '../assets/L7.png';
import logo7 from '../assets/L8.png';
import logo8 from '../assets/L9.png';
import logo9 from '../assets/L10.png';



const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className=" bg-gray-800 text-text overflow-x-hidden">

      <main className="container mx-auto px-4 py-12" id='services'>
        
        <section className="text-center mb-0"> {/* Margin-bottom set to zero */}
          <h2 className="text-4xl font-bold text-custom-orange mb-0">Our Brands</h2> {/* Margin-bottom set to zero */}
          <div className="relative">
            <Slider {...slickSettings} className="py-4">
              {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9].map((logo, index) => (
                <div key={index} className="flex-shrink-0 px-1"> {/* Reduced spacing between logos */}
                  <div className="flex items-center justify-center p-0">
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="object-contain w-64 h-36"  // Increased size of logos
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Home;
