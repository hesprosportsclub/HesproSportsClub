import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import LandingPage from './pages/LandingPage';
import Shop from './pages/Shop';
import ContactPage from './pages/Contact';
import AboutUs from './pages/AboutUs';
import TestimonialsPage from './pages/Testimonials';
import Kabaddi from './pages/Kabaddi';
import Sponsors from './pages/Sponsors';
import Service from './pages/Service';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PolicyPages from './pages/PolicyPages.jsx';
import Gallery from './pages/Gallery.jsx';
import History from './pages/History.jsx';
import Event from './pages/Event.jsx';
import WhatsAppButton from './WhatsAppButton.js';

function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sports/kabaddi" element={<Kabaddi />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PolicyPages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/history" element={<History />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
