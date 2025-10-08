
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ResumeModal from '../components/ResumeModal';

const Index = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <Hero onViewResume={() => setIsResumeModalOpen(true)} />
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
