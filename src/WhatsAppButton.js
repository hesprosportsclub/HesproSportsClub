// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '7387257892'; // Replace with your WhatsApp number
    const message = 'Hello, Can you help me with some information about Hespro Sports Club??'; // Pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank'); // Open WhatsApp chat in a new tab
  };

  return (
    <div
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-50"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
