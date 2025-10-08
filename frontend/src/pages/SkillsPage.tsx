import React from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <div className="pt-10"> 
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;