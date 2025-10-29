import React, { useEffect, useState } from "react";
import { Github, X } from "lucide-react";
import LinkedListDemo from "./demos/LinkedListDemo";
import CircleDemo from "./demos/CircleDemo";
import TriangleDemo from "./demos/TriangleDemo";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoInModal?: boolean;
  demoComponent?: React.ComponentType;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Area of a Circle",
      description: "A small demo that calculates area of a circle.",
      techStack: ["JS"],
      githubUrl: "",
      demoInModal: true,
      demoComponent: CircleDemo,
    },
    {
      title: "Area of Triangle",
      description: "Interactive triangle area demo.",
      techStack: ["JS"],
      githubUrl: "",
      demoInModal: true,
      demoComponent: TriangleDemo,
    },
    {
      title: "Uppercase",
      description: "String utility demo.",
      techStack: ["JS"],
      githubUrl: "",
      liveUrl: "",
      demoInModal: false,
    },
    {
      title: "Linked List",
      description: "Visual linked list operations demo.",
      techStack: ["JS"],
      githubUrl: "",
      demoInModal: true,
      demoComponent: LinkedListDemo,
    },
    {
      title: "Infix to Postfix",
      description: "Algorithm demo for expression conversion.",
      techStack: ["JS"],
      githubUrl: "",
      liveUrl: "",
      demoInModal: false,
    },
  ];

  const [selected, setSelected] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openDemo = (p: Project) => {
    setSelected(p);
    setIsOpen(true);
  };

  const closeDemo = () => {
    setIsOpen(false);
    setSelected(null);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100 group-hover:text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, ti) => (
                  <span key={ti} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-gray-500">{/* placeholder when no repo */}
                    <Github size={18} />
                    <span className="text-sm">No repo</span>
                  </div>
                )}

                <button
                  onClick={() => {
                    // If project is configured to show demo in modal, open modal.
                    // Otherwise, if a liveUrl exists, open it in a new tab.
                    if (project.demoInModal && project.liveUrl) {
                      openDemo(project);
                    } else if (project.liveUrl) {
                      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                    } else {
                      // No demo available; keep button disabled-style or show a small tooltip in future.
                      // We'll still open modal to show the placeholder message for consistency.
                      openDemo(project);
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Live Demo →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeDemo();
            }}
          >
            <div className="relative w-full max-w-4xl bg-[#0b0b0b] rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={closeDemo}
                className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-200"
                aria-label="Close demo"
              >
                <X size={16} />
              </button>

              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{selected.title}</h3>
                <div className="text-sm text-gray-400">{selected.description}</div>
              </div>

              <div className="w-full h-[70vh] bg-black">
                {selected.demoComponent ? (
                  <selected.demoComponent />
                ) : selected.liveUrl ? (
                  <iframe
                    src={selected.liveUrl}
                    title={selected.title}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-300 p-6">
                    <div className="max-w-xl text-center">
                      <p className="mb-4">No live demo is embedded for this project.</p>
                      <p className="text-sm text-gray-400">You can view the code or request a demo to be added.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 flex justify-end gap-3 border-t border-gray-800">
                {selected.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outlined px-4 py-2"
                  >
                    Open in new tab
                  </a>
                )}
                <button onClick={closeDemo} className="btn-primary px-4 py-2">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
