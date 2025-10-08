
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express", "Django", "Tailwind CSS"]
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Vercel"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Webpack", "Jest", "Figma", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0F0F0F]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-100 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="tech-badge hover:bg-gray-700 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
