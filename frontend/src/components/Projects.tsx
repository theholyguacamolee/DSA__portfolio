import React from "react";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Quiz Creator & Taker v2.0",
      description:
        "An interactive quiz builder and taker with timer, scoring, and analytics.",
      techStack: ["React", "Python", "FastAPI", "Tailwind CSS", "MongoDB"],
      githubUrl: "https://github.com/PunzalGillian/quiz_maker_taker_v2.0",
      liveUrl: "",
    },
    {
      title: "Tamagotchi Game",
      description:
        "A virtual pet game where you feed, play, and care for a Tamagotchi pet in-browser.",
      techStack: ["Python"],
      githubUrl: "https://github.com/PunzalGillian/tamagotchi_game_v2",
      liveUrl: "",
    },
    {
      title: "CityZen (GDG PUP Sparkfest 2025)",
      description:
        "Onboarding + geotagged incident reporting mobile app with AI-powered chatbot.",
      techStack: ["React Native", "Firebase", "ExpressJS", "Gemini AI"],
      githubUrl: "#",
      liveUrl: "https://github.com/snplmntn/CityZen",
    },
    {
      title: "Weabook Cafe",
      description:
        "Your ultimate manga café where you can browse, borrow, and read your favorite manga!",
      techStack: ["Php", "MySQL", "Hack", "CSS"],
      githubUrl: "#",
      liveUrl: "https://github.com/PunzalGillian/weabook-cafe",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100 group-hover:text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, ti) => (
                  <span
                    key={ti}
                    className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
