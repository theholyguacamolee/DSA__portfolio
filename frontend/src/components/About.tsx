import React from "react";
import { Github, Linkedin, FileText, Mail, Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#121212]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          <span className="bg-clip-text">About Me</span>
        </h2>

        {/* Updated to match Projects section glass-card styling */}
        <div className="glass-card p-8 md:p-12 hover:scale-[1.01] transition-all duration-300">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left side - Content */}
            <div className="md:col-span-3 order-1">
              <h3 className="text-2xl font-semibold mb-6 text-gray-100 flex items-center">
                <span className="text-gray-100 group-hover:text-white">
                  Creative Engineer & Builder of Useful Things
                </span>
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                I'm a Computer Engineering student driven by curiosity and a
                strong desire to build meaningful and impactful tech solutions.
                Whether it's designing a gamified budgeting app, crafting a
                real-time incident reporting system, or making a retro
                Tamagotchi game, I enjoy solving problems and turning ideas into
                reality.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed text-justify">
                I specialize in full-stack development with React, Node.js, and
                Firebase, and I'm passionate about integrating AI, real-time
                features, and clean UI/UX into the products I build. Beyond
                coding, I actively join hackathons, explore open-source work,
                and constantly seek new technologies to learn and apply.
              </p>

              {/* Documents */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="/cv.pdf"
                  download
                  className="btn-outlined flex items-center gap-2 text-sm py-2 text-gray-300 hover:text-white"
                >
                  <Download size={16} />
                  CV
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-outlined flex items-center gap-2 text-sm py-2 text-gray-300 hover:text-white"
                >
                  <FileText size={16} />
                  Resume
                </a>
              </div>

              {/* Skills bar */}
              <div className="mb-8">
                <h4 className="text-sm text-gray-300 mb-2 uppercase tracking-wider font-semibold">
                  Main Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "MongoDB",
                    "Firebase",
                    "TailwindCSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/PunzalGillian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Github
                    size={20}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/gillianrpunzal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Linkedin
                    size={20}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
                <a
                  href="mailto:gillianrpunzal@gmail.com"
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Mail size={20} className="text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:col-span-2 order-2 md:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl shadow-xl overflow-hidden">
                  {/* Image retained */}
                  <img
                    src="/pfp.jpg"
                    alt="Gillian Punzal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                {/* Centered info box - moved lower */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-4 bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg text-center w-4/5">
                  <div className="text-sm font-medium text-gray-100">
                    Computer Engineering Student
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    Polytechnic University of the Philippines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
