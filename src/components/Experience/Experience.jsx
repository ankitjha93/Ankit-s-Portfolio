import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { experiences } from "../../constants.js";

// Card with dynamic mouse spotlight glow
const SpotlightCard = ({ children, className = "" }) => {
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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-b from-[#0f0c29]/95 to-[#171233]/95 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Radial mouse spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.2), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-7">
        {children}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans bg-skills-gradient clip-path-custom-2 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Professional engineering roles, leadership responsibilities, and impactful software development internships
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Center Line (Left-6 on mobile, Center on desktop) */}
        <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500/40 h-full rounded-full shadow-[0_0_8px_#a855f7]"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 bg-[#0d081f] border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden p-1.5 shadow-lg shadow-purple-500/30">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-contain rounded-full"
              />
              {experience.isCurrent && (
                <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0d081f] animate-ping" />
              )}
            </div>

            {/* Content Section with Parallax Tilt & Spotlight */}
            <div className="w-full pl-14 sm:pl-0 sm:w-[calc(50%-2rem)] md:w-[calc(50%-2.5rem)]">
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.02}
                className="h-full"
              >
                <SpotlightCard className="shadow-2xl hover:border-purple-400 hover:shadow-purple-500/30 group">
                  <div>
                    {/* Header: Company Logo, Role, Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-3.5">
                        <div className="w-14 h-14 bg-[#0d081f] border border-purple-500/30 rounded-xl overflow-hidden shrink-0 p-1 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                          <img
                            src={experience.img}
                            alt={experience.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {experience.role}
                          </h3>
                          <h4 className="text-sm font-semibold text-purple-400/90 mt-0.5">
                            {experience.company}
                          </h4>
                        </div>
                      </div>

                      {/* Role Status Badge */}
                      {experience.badge && (
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-semibold border flex items-center gap-1.5 ${
                            experience.isCurrent
                              ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-400 shadow-sm shadow-emerald-500/20"
                              : "bg-[#251f38] border-purple-500/30 text-purple-300"
                          }`}
                        >
                          {experience.isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                          <span>{experience.badge}</span>
                        </span>
                      )}
                    </div>

                    {/* Metadata Row: Date & Location */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4 pb-3 border-b border-purple-500/20">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="text-purple-400" />
                        <span>{experience.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin className="text-pink-400" />
                        <span>{experience.location}</span>
                      </span>
                    </div>

                    {/* Bullet Points */}
                    {experience.bullets && experience.bullets.length > 0 ? (
                      <ul className="space-y-2 mb-5">
                        {experience.bullets.map((bullet, bIndex) => (
                          <li
                            key={bIndex}
                            className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-purple-400 mt-1 shrink-0 text-xs">◆</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                        {experience.desc}
                      </p>
                    )}
                  </div>

                  {/* Skills Badges */}
                  <div className="pt-3 border-t border-purple-500/20">
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FiBriefcase className="text-purple-400" />
                      <span>Technologies & Core Competencies:</span>
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {experience.skills.map((skill, sIndex) => (
                        <li
                          key={sIndex}
                          className="bg-[#1c1538] text-purple-300 px-2.5 py-1 text-xs rounded-lg border border-purple-500/25 font-medium hover:border-purple-400 hover:text-white transition-colors"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Tilt>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
