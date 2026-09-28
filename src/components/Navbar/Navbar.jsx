import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../../constants.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const resumeUrl =
    "https://drive.google.com/file/d/1C74o45TgUVoAAQ2Nd9Jf6N-kifMP7qGy/view?usp=sharing";

  // Dynamic ScrollSpy to detect active section in real-time
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "about",
        "skills",
        "experience",
        "work",
        "coding-stats",
        "achievements",
        "education",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const navOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "coding-stats", label: "Stats" },
    { id: "achievements", label: "Achievements" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Monogram / Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="group flex items-center gap-1.5 cursor-pointer select-none"
        >
          <span className="text-[#8245ec] font-mono text-lg font-bold group-hover:-translate-x-0.5 transition-transform duration-200">
            &lt;
          </span>
          <span className="text-white font-bold text-lg sm:text-xl tracking-tight group-hover:text-purple-300 transition-colors">
            Ankit
          </span>
          <span className="text-[#8245ec] font-mono text-lg font-bold">/</span>
          <span className="text-white font-bold text-lg sm:text-xl tracking-tight group-hover:text-pink-300 transition-colors">
            Jha
          </span>
          <span className="text-[#8245ec] font-mono text-lg font-bold group-hover:translate-x-0.5 transition-transform duration-200">
            &gt;
          </span>
          <span
            className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1 hidden sm:inline-block"
            title="Available for full-time opportunities"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-[#0b081a]/70 p-1.5 rounded-full border border-purple-500/20 backdrop-blur-md">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(130,69,236,0.45)]"
                    : "text-gray-300 hover:text-white hover:bg-purple-950/40"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Socials & Resume CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full bg-[#120d2a] border border-purple-500/20 text-gray-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_10px_rgba(130,69,236,0.4)] transition-all duration-200"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-[#120d2a] border border-purple-500/20 text-gray-300 hover:text-white hover:border-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all duration-200"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="p-2 rounded-full bg-[#120d2a] border border-purple-500/20 text-gray-300 hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_10px_rgba(245,158,11,0.4)] transition-all duration-200"
          >
            <SiLeetcode size={16} />
          </a>

          {/* Quick Resume Button */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(130,69,236,0.35)] hover:shadow-[0_0_20px_rgba(130,69,236,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <FiDownload className="text-xs" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-600 text-white"
          >
            <FiDownload className="text-[10px]" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-[#120d2a] border border-purple-500/30 text-purple-300 hover:text-white transition-colors"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4">
          <div className="bg-[#0b081a]/95 backdrop-blur-2xl border border-purple-500/30 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] p-5">
            <nav className="flex flex-col space-y-1.5">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-purple-950/70 text-purple-300 border border-purple-500/40"
                        : "text-gray-300 hover:text-white hover:bg-purple-950/30"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 mt-4 border-t border-purple-500/20 flex items-center justify-between">
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-full bg-[#120d2a] border border-purple-500/20 text-gray-300 hover:text-white"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-[#120d2a] border border-purple-500/20 text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="p-2 rounded-full bg-[#120d2a] border border-purple-500/20 text-gray-300 hover:text-amber-400"
                >
                  <SiLeetcode size={16} />
                </a>
              </div>

              {/* Mobile Full Resume CTA */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_12px_rgba(130,69,236,0.4)]"
              >
                <FiDownload size={13} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
