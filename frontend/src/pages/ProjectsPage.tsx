import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <div className="pt-10">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
