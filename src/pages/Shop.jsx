// ShopPage.jsx
import React from 'react';
import Header from '../components/Header';
import ProductCategories from '../components/shopPage/ProductCategories';
import FeaturedProducts from '../components/shopPage/FeaturedProducts';
import ContactForm from '../components/ContactForm';
import OurClients from '../components/OurClients'
import HeroShop from '../components/HeroShop'
import Footer from '../components/Footer';


function ShopPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <HeroShop />
      <OurClients />
      <div id='ProductCategories' >
        <ProductCategories />
      </div>
      <FeaturedProducts />
      <ContactForm heading={'Buy Now Through Following Channel'}/>
      <Footer />
    </div>
  );
}

export default ShopPage;
