import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaypal, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendError(''); // Clear previous errors
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setFormData({ name: '', email: '', mobile: '', message: '' });
          setSendError('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setSendError('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="font-sans bg-gray-900 text-custom-orange">
      <Header />

      <section className="w-full min-h-screen flex flex-col items-center py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* First Row: Text and Contact Form */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Text and Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 bg-blue-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 py-12">
                Get in Touch
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                We’re here to help and answer any questions you might have.
                Reach out to us through the following channels:
              </p>
              <div className="flex flex-col gap-8 mb-12">
                <div className="flex items-center bg-blue-gray-700 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-custom-orange flex items-center justify-center rounded-full mr-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Mail Us Now
                    </h4>
                    <p className="text-gray-300 text-lg">info@hespro.in</p>
                  </div>
                </div>

                <div className="flex items-center bg-blue-gray-700 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-custom-orange flex items-center justify-center rounded-full mr-4">
                    <FontAwesomeIcon icon={faPhone} className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Call Us Now
                    </h4>
                    <p className="text-gray-300 text-lg">+91 7387257892</p>
                  </div>
                </div>

                <div className="text-center">
  <h4 className="text-xl font-semibold text-white mb-4">
    Connect With Us
  </h4>
  <div className="flex justify-center space-x-4"> {/* Flex container for buttons */}
    <a
      href="https://wa.me/7387257892"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center bg-custom-green text-white px-8 py-4 rounded-lg font-bold hover:bg-custom-darker-green transition-colors duration-300"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-2" />
      Start Chat
    </a>
    <a
      href="https://forms.gle/8eSxtbYrT8JFEDBd9"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center bg-custom-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-custom-darker-green transition-colors duration-300"
    >
      <FontAwesomeIcon icon={faPaypal} className="text-2xl mr-2" />
      Pay Now
    </a>
  </div>
</div>

              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 bg-blue-gray-700 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Contact Form
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 text-lg mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-blue-gray-600 text-custom-orange border border-blue-gray-600 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 text-lg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-blue-gray-600 text-custom-orange border border-blue-gray-600 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobile" className="block text-gray-300 text-lg mb-2">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-blue-gray-600 text-custom-orange border border-blue-gray-600 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 text-lg mb-2">
                    Leave a Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-blue-gray-600 text-custom-orange border border-blue-gray-600 rounded-lg"
                    rows="4"
                  ></textarea>
                </div>
                {sendError && <p className="text-red-500 mb-4">{sendError}</p>}
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-custom-orange text-white py-3 px-4 rounded-lg font-bold hover:bg-custom-darker-orange transition-colors duration-300 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>

         {/* Second Row: Registration Buttons and Office Address */}
<div className="flex flex-col items-center gap-8">
  <h4 className="text-xl font-semibold text-white mb-4">
    Registration
  </h4>
  <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-16 w-full justify-center">
    <a
      href="#"
      className="inline-flex items-center bg-custom-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-custom-darker-orange transition-colors duration-300 w-full md:w-auto text-center"
    >
      Player Registration Click Here
    </a>
    <a
      href="#"
      className="inline-flex items-center bg-custom-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-custom-darker-orange transition-colors duration-300 w-full md:w-auto text-center"
    >
      Coach Registration Click Here
    </a>
    <a
      href="#"
      className="inline-flex items-center bg-custom-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-custom-darker-orange transition-colors duration-300 w-full md:w-auto text-center"
    >
      Student Registration Click Here
    </a>
  </div>


            {/* Office Address and Map */}
            <div className="w-full max-w-4xl bg-gray-dark p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-white mb-4">
                Our Office
              </h4>
              <p className="text-gray-light text-lg mb-4">
                Sangarsh Chowk, Eknath Pathare Vasti, Wadgaon Sheri, Pune, Maharashtra 411014
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7564.645388088172!2d73.931178!3d18.559485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15e1de5f9e3%3A0x8fc6e8ce3a13935f!2sSangarsh%20Chowk%2C%20Eknath%20Pathare%20Vasti%2C%20Wadgaon%20Sheri%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1725759954862!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;