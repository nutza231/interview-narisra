import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
// import { Linkedin } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution built with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Express", "RestAPIS"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Real-time task management application with team collaboration features",
      tags: ["React", "Tailwind CSS", "Javascript"],
      link: "#",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MongoDB",
    "Git",
    "REST APIs",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      {/* Header/Hero Section */}
      <header className="bg-black text-white shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gold">Narisra Tawong</h1>
          <div className="space-x-4">
            <a href="#education" className="text-gold hover:text-white">
              Education
            </a>
            <a href="#certificate" className="text-gold hover:text-white">
              Certificate
            </a>
            <a href="#experience" className="text-gold hover:text-white">
              Experience
            </a>
            <a href="#projects" className="text-gold hover:text-white">
              Projects
            </a>
            <a href="#skills" className="text-gold hover:text-white">
              Skills
            </a>
            <a href="#contact" className="text-gold hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="flex justify-center items-center">
            <img
              src="src/assets/nut.jpg"
              className="w-[300px] h-[300px] rounded-full border-4 border-gold"
              alt="Nut Image"
            />
          </div>

          <h2 className="text-4xl font-bold mt-8 text-white mb-4">
            Full Stack Web Developer
          </h2>
          <p className="text-xl text-white mb-8">
            I dream of becoming a programmer and an entrepreneur dedicated to
            making the world a place where people and information are
            interconnected.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-gold"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/narisra-tawong/"
              target="_blank"
              rel="noopener "
              className="inline-flex items-center space-x-2 text-white hover:text-gold"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gold mb-4">Education</h2>
          <p className="text-xl text-gray-400 mb-8">
            King Mongkut's University of Technology North Bangkok
          </p>
        </div>
      </section>

      {/* certification */}
      <section id="certificate" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center  bg-gray-900">
          <h2 className="text-4xl font-bold text-white mb-4">
          Certificate

          </h2>
          <p className="text-xl text-gray-600 mb-8">
          Generation Bootcamp (Junior Software Developer)  (Sep - Dec 2024)
          </p>
      </div>
      </section>

      {/*experience */}
      <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center  bg-gray-800">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl font-bold text-gray-400 mb-4">
          Generation Bootcamp (Junior Software developer) Sep 2024 - Dec 2024
          </p>
          <p>
          <ul className="text-left pl-80 text-xl text-gray-400">
          <li >- Developed project teamwork skills</li>
          <li>- Planned work using Scrum methodology</li>
          <li>- Practiced coding and website design</li>
          <li>- Enhanced my abilities in team communication, patience</li>  
          <li>- Perseverance in debugging</li>
          <li>- Time management to meet deadlines</li>
          </ul>
          </p>
              {/* ส่วนที่2kumon */}
              <p className="text-xl font-bold text-gray-400 mb-4 mt-2">
              Mathematics Tutor (Kumon and Freelance) May 2018 - June 2022

          </p>
          <p>
          <ul className="text-left pl-80 text-xl text-gray-400">
          <li >- Developed and tailored lesson plans to meet individual student needs.
          </li>
          <li>- Delivered comprehensive mathematics instruction to diverse learners.</li>
          <li>- Communicated students' progress and performance to parents regularly.</li>
          <li>- Praised students for their achievements and adjusted teaching strategies when     
        	performance did not meet expectations to ensure continuous improvement.</li>  
          
          </ul>
          </p>
        
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-gold">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-center gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-5 py-1 bg-gray-700 rounded-full text-sm text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-600"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-700 rounded-lg shadow-sm text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gold mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-4">
            I'm currently available for freelance work and full-time
            opportunities.
          </p>
          <p className="text-gray-400 mb-4">
            <i className="fas fa-mobile-alt"></i> (+66)91-809-5888 Nut
          </p>
          <p className="text-gray-400 mb-8">
            <i className="fas fa-envelope"></i> www.nutzazaza@gmail.com
          </p>

          <a
            href="mailto:www.nutzazaza@gmail.com?subject=Inquiry&body=Hello, I would like to know more about your services."
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Mail size={20} />
            <span>Send me an email</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>© 2024 Narisra Tawong. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
