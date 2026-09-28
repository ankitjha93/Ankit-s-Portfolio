import React, { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiX,
  FiDownload,
  FiMail,
  FiPhone,
  FiExternalLink,
  FiArrowUp,
  FiCode,
  FiBriefcase,
  FiAward,
  FiBookOpen,
  FiUser,
  FiZap,
  FiCheck,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../../constants.js";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedItem, setCopiedItem] = useState(null);
  const inputRef = useRef(null);

  const resumeUrl =
    "https://drive.google.com/file/d/1C74o45TgUVoAAQ2Nd9Jf6N-kifMP7qGy/view?usp=sharing";

  // Actions list
  const actions = [
    // Navigation
    {
      id: "nav-about",
      category: "Navigation",
      title: "About / Bio",
      subtitle: "Introduction, summary & hero details",
      icon: <FiUser className="text-purple-400" />,
      run: () => scrollToSection("about"),
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Technical Skills & Stack",
      subtitle: "Frontend, Backend, DevOps & Languages (29+ Techs)",
      icon: <FiCode className="text-pink-400" />,
      run: () => scrollToSection("skills"),
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Experience & Leadership",
      subtitle: "GBJ Buzz (Team Lead), Bluestock & CodSoft",
      icon: <FiBriefcase className="text-blue-400" />,
      run: () => scrollToSection("experience"),
    },
    {
      id: "nav-why-hire-me",
      category: "Navigation",
      title: "Why Hire Me (Bento Grid)",
      subtitle: "Core architectural values and value proposition",
      icon: <FiZap className="text-amber-400" />,
      run: () => scrollToSection("why-hire-me"),
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Featured Projects",
      subtitle: "NutriPlate, CS Prep, PopcornPlay and more",
      icon: <FiBookOpen className="text-emerald-400" />,
      run: () => scrollToSection("work"),
    },
    {
      id: "nav-stats",
      category: "Navigation",
      title: "Coding Profiles & Heatmap",
      subtitle: "300+ LeetCode problems, GitHub contributions",
      icon: <SiLeetcode className="text-amber-500" />,
      run: () => scrollToSection("coding-stats"),
    },
    {
      id: "nav-achievements",
      category: "Navigation",
      title: "Achievements & Certifications",
      subtitle: "Problem solving recognitions & certificates",
      icon: <FiAward className="text-purple-400" />,
      run: () => scrollToSection("achievements"),
    },
    {
      id: "nav-education",
      category: "Navigation",
      title: "Education & Distinctions",
      subtitle: "Chouksey Eng. College (8.78 CGPA) & Bharat Mata School (100/100 Math)",
      icon: <FiAward className="text-pink-400" />,
      run: () => scrollToSection("education"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact & Hire Me",
      subtitle: "Send a direct message or inquiry",
      icon: <FiMail className="text-emerald-400" />,
      run: () => scrollToSection("contact"),
    },

    // Quick Actions
    {
      id: "act-resume",
      category: "Quick Actions",
      title: "Download Resume / CV",
      subtitle: "Open official resume in Google Drive",
      icon: <FiDownload className="text-purple-400" />,
      run: () => window.open(resumeUrl, "_blank"),
    },
    {
      id: "act-email",
      category: "Quick Actions",
      title: `Copy Email (${personalInfo.email})`,
      subtitle: "Copy direct email to clipboard",
      icon: <FiMail className="text-pink-400" />,
      run: () => copyText(personalInfo.email, "Email copied!"),
    },
    {
      id: "act-phone",
      category: "Quick Actions",
      title: `Copy Phone (${personalInfo.phone})`,
      subtitle: "Copy contact phone number to clipboard",
      icon: <FiPhone className="text-emerald-400" />,
      run: () => copyText(personalInfo.phone, "Phone copied!"),
    },
    {
      id: "act-top",
      category: "Quick Actions",
      title: "Scroll to Top",
      subtitle: "Return to the very top of the page",
      icon: <FiArrowUp className="text-blue-400" />,
      run: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },

    // Profiles
    {
      id: "ext-github",
      category: "External Profiles",
      title: "GitHub Profile",
      subtitle: "github.com/ankitjha93 (Repositories & Commits)",
      icon: <FaGithub className="text-gray-200" />,
      run: () => window.open(personalInfo.github, "_blank"),
    },
    {
      id: "ext-linkedin",
      category: "External Profiles",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/ankit-jha-93- (Professional Network)",
      icon: <FaLinkedin className="text-blue-400" />,
      run: () => window.open(personalInfo.linkedin, "_blank"),
    },
    {
      id: "ext-leetcode",
      category: "External Profiles",
      title: "LeetCode Profile",
      subtitle: "leetcode.com/u/ankitjha93 (300+ DSA Solutions)",
      icon: <SiLeetcode className="text-amber-400" />,
      run: () => window.open(personalInfo.leetcode, "_blank"),
    },
  ];

  // Helper: smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Helper: copy text with feedback
  const copyText = (text, feedback) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(feedback);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  // Filter actions based on search
  const filteredActions = actions.filter((act) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      act.title.toLowerCase().includes(q) ||
      act.subtitle.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q)
    );
  });

  // Global Ctrl + K / Cmd + K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Arrow key navigation inside palette
  const handleInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredActions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredActions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].run();
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Left on Desktop, Clean Badge on Mobile) */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Command Palette (Ctrl+K)"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d081f]/90 hover:bg-[#1a1338] border border-purple-500/30 hover:border-purple-400 text-xs sm:text-sm text-gray-300 hover:text-white shadow-lg shadow-purple-500/20 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <FiSearch className="text-purple-400 group-hover:text-pink-400 transition-colors text-sm" />
          <span className="hidden sm:inline font-medium">Quick Actions</span>
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-purple-950/60 border border-purple-500/40 rounded text-purple-300 group-hover:border-purple-400">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Modal Backdrop & Palette Window */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm transition-all"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#09061a]/95 border border-purple-500/35 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden flex flex-col max-h-[75vh] animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-purple-500/20 gap-3">
              <FiSearch className="text-purple-400 text-lg shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a command or search (e.g. projects, resume, dsa, contact)..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-400 hover:text-white text-sm p-1"
                >
                  <FiX />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-purple-950/60 border border-purple-500/30 rounded text-purple-300">
                ESC
              </kbd>
            </div>

            {/* Copied Feedback Notification */}
            {copiedItem && (
              <div className="bg-emerald-950/90 border-b border-emerald-500/40 text-emerald-300 px-4 py-2 text-xs font-semibold flex items-center gap-2">
                <FiCheck className="text-emerald-400" />
                <span>{copiedItem}</span>
              </div>
            )}

            {/* Results List */}
            <div className="overflow-y-auto p-2 divide-y divide-purple-500/10">
              {filteredActions.length > 0 ? (
                filteredActions.map((action, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={action.id}
                      onClick={() => {
                        action.run();
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-purple-900/60 via-purple-800/40 to-indigo-900/40 border border-purple-500/40 shadow-sm"
                          : "hover:bg-purple-950/30 border border-transparent text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            isSelected
                              ? "bg-purple-600 text-white"
                              : "bg-[#140e2b] border border-purple-500/20 text-gray-300"
                          }`}
                        >
                          {action.icon}
                        </div>
                        <div className="truncate">
                          <div className="text-sm font-semibold text-white truncate">
                            {action.title}
                          </div>
                          <div className="text-xs text-gray-400 truncate">
                            {action.subtitle}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-purple-400/80 px-2 py-0.5 rounded bg-purple-950/50 border border-purple-500/20 shrink-0 hidden sm:inline-block">
                        {action.category}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-10 px-4 text-gray-400 text-sm">
                  No commands or sections found matching &quot;{query}&quot;.
                </div>
              )}
            </div>

            {/* Footer Hints */}
            <div className="px-4 py-2.5 bg-[#070514] border-t border-purple-500/20 flex items-center justify-between text-[11px] text-gray-500">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1 bg-purple-950/60 border border-purple-500/30 rounded text-purple-300">
                    ↑
                  </kbd>{" "}
                  <kbd className="px-1 bg-purple-950/60 border border-purple-500/30 rounded text-purple-300">
                    ↓
                  </kbd>{" "}
                  navigate
                </span>
                <span>
                  <kbd className="px-1 bg-purple-950/60 border border-purple-500/30 rounded text-purple-300">
                    ↵
                  </kbd>{" "}
                  select
                </span>
              </div>
              <span className="text-purple-400/80">Command Palette</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
