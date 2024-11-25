import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component
import "slick-carousel/slick/slick.css"; // Slick Carousel core styles
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel theme styles

// Slick slider settings
const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,  // Disable arrows
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
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

// EventCard component with dynamic background image
const EventCard = ({ title, date, location, imageUrl }) => {
    return (
        <div 
            className="bg-gray-800 p-10 shadow-xl rounded-lg w-96 text-center transform hover:scale-105 transition-transform duration-300"
            style={{
                backgroundImage: `url(${imageUrl})`, // Use the dynamic image URL
                backgroundSize: 'cover', // Cover the entire card
                backgroundPosition: 'center', // Center the image
                color: '#ffffff', // Ensure text is readable on the background
            }}
        >
            <h3 className="text-2xl text-custom-green font-bold mb-4">{title}</h3>
            <p className="text-lg mb-4">{date}</p>
            <p className="text-md">{location}</p>
        </div>
    );
};

const EventSection = ({ title, events, className }) => {
    return (
        <div className="mb-16">
            <h2 className={`text-3xl font-bold text-center mb-10 ${className}`}>{title}</h2>
            <div className="px-2"> {/* Added padding for the sides */}
                <Slider {...slickSettings}>
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={event.date}
                            location={event.location}
                            imageUrl={event.imageUrl} // Pass the background image URL
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const Event = () => {
    const ongoingEvents = [
        { title: 'Cricket', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/cricket.jpg") },
        { title: 'Football', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/football.jpg") },
        { title: 'Kabaddi', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/kabaddi.jpg") },
    ];

    const upcomingEvents = [
        { title: 'Swimming', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/swimming.jpeg") },
        { title: 'Badminton', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/badminton.jpeg") },
        { title: 'Skating', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/skating.jpg") },
        { title: 'Long Tennis', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/long.jpg") },
        { title: 'Pickle Ball', date: '15 Oct to 20 Nov 2024', location: 'Pune, Maharashtra', imageUrl: require("../assets/pickle.jpg") },
    ];

    return (
        <div className="bg-gray-900">
            {/* Header component */}
            <Header />

            {/* Main Event Section */}
            <div className="p-8 py-32">
                <EventSection title="Ongoing Events" className="text-custom-orange" events={ongoingEvents} />
                <EventSection title="Upcoming Events" className="text-custom-orange" events={upcomingEvents} />
            </div>

            {/* Footer component */}
            <Footer />
        </div>
    );
};

export default Event;
