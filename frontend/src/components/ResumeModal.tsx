import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const documents = [
    {
      title: "Resume",
      content: (
        <div className="flex justify-center">
          <img
            src="/resume.jpg"
            alt="Resume"
            className="w-full"
            style={{ maxHeight: "none" }} // Remove height restriction
          />
        </div>
      ),
    },
    {
      title: "Curriculum Vitae - Page 1",
      content: (
        <div className="flex justify-center">
          <img
            src="/cv_pg1.jpg"
            alt="CV Page 1"
            className="w-full"
            style={{ maxHeight: "none" }} // Remove height restriction
          />
        </div>
      ),
    },
    {
      title: "Curriculum Vitae - Page 2",
      content: (
        <div className="flex justify-center">
          <img
            src="/cv_pg2.jpg"
            alt="CV Page 2"
            className="w-full"
            style={{ maxHeight: "none" }} // Remove height restriction
          />
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % documents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + documents.length) % documents.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl h-[95vh] sm:h-[90vh] bg-[#1E1E1E] rounded-xl border border-gray-700 overflow-hidden animate-scale-in">
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-100">
              {documents[currentSlide].title}
            </h3>
            <div className="flex gap-1">
              {documents.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
              title="Previous"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
              title="Next"
            >
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white ml-1 sm:ml-2"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content area with improved scrolling */}
        <div className="h-[calc(100%-64px)] overflow-y-auto bg-gray-100 p-3 sm:p-6">
          {/* A4 Paper Simulation with proper width */}
          <div
            className="bg-white mx-auto shadow-lg mb-6"
            style={{
              width: "100%", // Use full width available
              maxWidth: "720px", // Limit maximum width for readability
            }}
          >
            {documents[currentSlide].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
