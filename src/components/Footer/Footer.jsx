import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { personalInfo } from "../../constants.js";

const Footer = () => {
  // Smooth scroll helper
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Achievements", id: "achievements" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="text-white pt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative font-sans">
      {/* Top Gradient Divider Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-12"></div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo Monogram */}
          <div
            onClick={() => handleScroll("about")}
            className="text-2xl font-bold cursor-pointer group mb-3 tracking-wide"
          >
            <span className="text-[#8245ec] group-hover:text-pink-500 transition-colors">&lt;</span>
            <span className="text-white">Ankit</span>
            <span className="text-[#8245ec] mx-0.5 group-hover:text-pink-500 transition-colors">/</span>
            <span className="text-white">Jha</span>
            <span className="text-[#8245ec] group-hover:text-pink-500 transition-colors">&gt;</span>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-4 leading-relaxed">
            Full Stack Developer specializing in React, Next.js, Node.js & AI Web Applications.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to Opportunities & Engineering Roles</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="text-gray-300 hover:text-purple-400 text-sm font-medium transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-purple-900/20"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Profiles Row */}
          <div className="flex items-center justify-center space-x-5 mb-8">
            {[
              { icon: <FaGithub />, link: personalInfo.github, title: "GitHub" },
              { icon: <FaLinkedin />, link: personalInfo.linkedin, title: "LinkedIn" },
              { icon: <SiLeetcode />, link: personalInfo.leetcode, title: "LeetCode" },
              { icon: <FiMail />, link: `mailto:${personalInfo.email}`, title: "Email" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="w-10 h-10 rounded-full bg-[#13102b] border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-600/30 hover:scale-110 shadow-md transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Bottom Copyright & Tech Stack */}
          <div className="pt-6 border-t border-gray-800/80 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
            <p>
              &copy; {new Date().getFullYear()} Ankit Jha. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              <span>Built with</span>
              <FaHeart className="text-pink-500 text-[10px]" />
              <span>using React 19, Tailwind CSS & Vite</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
