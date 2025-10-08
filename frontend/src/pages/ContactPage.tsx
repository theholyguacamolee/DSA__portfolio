import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <div className="pt-10"> 
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
