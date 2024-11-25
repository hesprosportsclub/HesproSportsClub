import React from "react";

const ArchitectsOfSuccess = () => {
  const people = [
    {
      name: "Sonali Nikam",
      description:
        "Sonali Nikam is the founder of HESPRO SPORTS, created with the vision of offering aspiring athletes a platform to build successful sports careers.       HESPRO SPORTS also provides innovative sports branding solutions for clients through organizing events and offering management solutions at both national and international levels. As a Kabaddi player and NIS-certified coach, her two-decade-long dedication to sports is the driving force behind HESPRO SPORTS, where her passion and commitment continue to shape the organization's mission and success.",
      image: require("../assets/founder11.jpg"), // Make sure the image path is correct
    },
    {
      name: "Ujwal Alavandi",
      description:
        "She brings 30+ years of project management experience in India and abroad. Recognized as a pioneer of value investing in her company, INIZIO (Asset Management Company), her extensive management background and international expertise are invaluable assets to HESPRO Sports, where she currently contributes to its strategic growth and development.",
      image: require("../assets/ujwall.jpg"), // Make sure the image path is correct
    },
    
  ];

  return (
    <div className="bg-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-custom-green">Architects of Success</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-gray-600 p-6 shadow-lg rounded-lg text-center max-w-xs sm:max-w-sm lg:max-w-md flex flex-col items-center"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-medium text-white">{person.name}</h3>
            <p className="text-gray-400 text-sm">{person.position}</p>
            <p className="text-gray-300 mt-4 text-base">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectsOfSuccess;
