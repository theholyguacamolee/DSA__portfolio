import React from "react";
import { ArrowDown, FileText, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onViewResume: () => void;
}

const Hero = ({ onViewResume }: HeroProps) => {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Hi, I'm Gillian Punzal
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          A passionate developer building impactful digital solutions with
          modern technologies.
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Currently pursuing Computer Engineering with a strong interest in
          software development, AI integration, and user-centered design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onViewResume}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            View Resume
          </button>
          <button
            onClick={navigateToProjects}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Code size={18} />
            See Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
