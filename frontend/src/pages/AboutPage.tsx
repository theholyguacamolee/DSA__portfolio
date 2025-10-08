import React from 'react';
import Header from '../components/Header';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <div className="pt-10"> 
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
