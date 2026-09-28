import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaEye } from "react-icons/fa";
import { FiExternalLink, FiX } from "react-icons/fi";
import { projects } from "../../constants.js";

// Card with dynamic mouse spotlight glow
const SpotlightCard = ({ children, className = "", onClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-purple-500/25 bg-gradient-to-b from-[#0f0c29]/95 to-[#161133]/95 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Radial mouse spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.2), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section
      id="work"
      className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white tracking-wide">FEATURED PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Production-grade applications showcasing full-stack engineering, AI integrations, and responsive architectures
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
        {[
          { label: "All Projects", value: "all", count: projects.length },
          { label: "🤖 AI & Full-Stack", value: "ai", count: 1 },
          { label: "🍿 Full-Stack & Redux", value: "fullstack", count: 1 },
          { label: "🥗 Responsive Frontend", value: "frontend", count: 1 },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${
              filter === tab.value
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/30 scale-105"
                : "bg-[#0d081f] text-gray-300 border-gray-700 hover:border-purple-500 hover:text-white"
            }`}
          >
            {tab.label} <span className="opacity-70 ml-1">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            className="h-full"
          >
            <SpotlightCard className="h-full shadow-xl hover:border-purple-400 hover:shadow-purple-500/30 group">
              {/* Image Preview with Zoom and Badges */}
              <div
                onClick={() => handleOpenModal(project)}
                className="relative overflow-hidden cursor-pointer"
              >
                <div className="p-3">
                  <div className="overflow-hidden rounded-xl h-52 bg-[#090714] border border-purple-500/20 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent opacity-80" />

                    {/* Year & Category Pill */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="bg-[#0d081f]/85 backdrop-blur-md text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-500/30 shadow-md">
                        {project.year}
                      </span>
                    </div>

                    {/* Hover Click To View Hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 bg-purple-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <FaEye /> View Case Study
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    onClick={() => handleOpenModal(project)}
                    className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <div className="text-xs text-purple-400 font-medium mb-3">
                    {project.subtitle}
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#20183b] text-purple-300 text-[11px] font-semibold rounded-md px-2 py-0.5 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] text-gray-500 font-medium self-center">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Action Buttons on Card */}
                <div className="flex items-center gap-2 pt-4 border-t border-purple-500/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#0c091f] border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/30 transition-all text-xs font-semibold"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Live Application"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all text-xs font-semibold shadow-md shadow-purple-500/20"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="text-sm" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Tilt>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-b from-[#120d2b] to-[#181238] rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden relative border border-purple-500/40 max-h-[92vh] flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-purple-500/20 bg-[#0d0921]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-xs text-gray-400 font-mono ml-2">Project Case Study</span>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white hover:bg-purple-900/30 p-1.5 rounded-lg transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Image Preview */}
              <div className="w-full overflow-hidden rounded-xl border border-purple-500/30 shadow-xl bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-80 object-cover"
                />
              </div>

              {/* Titles & Meta */}
              <div>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold">
                    Year: {selectedProject.year}
                  </span>
                </div>
                <h4 className="text-base text-purple-400 font-medium mt-1">
                  {selectedProject.subtitle}
                </h4>
              </div>

              {/* Description */}
              <div className="bg-[#0a0718] p-5 rounded-xl border border-purple-500/20">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Architecture & Features
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Technologies & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#231b40] text-purple-300 text-xs font-semibold rounded-lg px-3 py-1 border border-purple-500/30 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#1a1435] hover:bg-[#251e4a] border border-purple-500/40 text-gray-200 py-3 rounded-xl text-sm font-semibold text-center transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaGithub className="text-base" />
                  <span>View Repository</span>
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 text-white py-3 rounded-xl text-sm font-semibold text-center transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
                >
                  <span>Launch Live App</span>
                  <FiExternalLink className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
