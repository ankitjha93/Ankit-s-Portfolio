import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaTrophy, FaAward, FaCertificate } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { achievements } from "../../constants.js";

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
      className={`relative overflow-hidden rounded-2xl border border-purple-500/25 bg-gradient-to-b from-[#0f0c29]/90 to-[#1b153b]/90 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Radial mouse spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.18), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {children}
      </div>
    </div>
  );
};

// Enriched achievement data with categories and skills tags
const enrichedAchievements = [
  {
    ...achievements[0],
    category: "coding",
    skills: ["DSA", "LeetCode", "C++", "Problem Solving", "Competitive Programming"],
    issuedBy: "LeetCode & GeeksforGeeks",
    icon: <FaTrophy className="text-amber-400 text-3xl" />,
  },
  {
    ...achievements[1],
    category: "certification",
    skills: ["C++", "OOP", "Data Structures", "Memory Management", "Pointers"],
    issuedBy: "GeeksforGeeks",
    icon: <FaCertificate className="text-cyan-400 text-3xl" />,
  },
  {
    ...achievements[2],
    category: "certification",
    skills: ["Python", "Machine Learning", "Scikit-Learn", "Model Evaluation", "Data Science"],
    issuedBy: "IBM",
    icon: <FaAward className="text-purple-400 text-3xl" />,
  },
];

const Achievements = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems = enrichedAchievements.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section
      id="achievements"
      className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          ACHIEVEMENTS & CERTIFICATIONS
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Recognitions, competitive problem-solving milestones, and technical certifications
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
        {[
          { label: "All Credentials", value: "all", count: enrichedAchievements.length },
          { label: "🏆 Coding Milestones", value: "coding", count: 1 },
          { label: "📜 Certifications", value: "certification", count: 2 },
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <Tilt
            key={item.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            className="h-full"
          >
            <SpotlightCard className="h-full hover:border-purple-400 hover:shadow-purple-500/25 shadow-xl group">
              <div>
                {/* Header: Icon + Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#251f38] rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="bg-[#251f38] text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30">
                    {item.platform}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                {/* Issued By Subtitle */}
                <div className="text-xs text-purple-400/90 font-medium mb-3">
                  Issued by: <span className="text-gray-300">{item.issuedBy}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills Covered Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#1a1435] text-purple-200 px-2 py-0.5 rounded-md border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action / Link or Verification Badge */}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-md hover:shadow-purple-500/30"
                >
                  <span>Verify / View Milestone</span>
                  <FiExternalLink />
                </a>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/30">
                  <FiCheckCircle className="text-sm" />
                  <span>Verified Certification</span>
                </div>
              )}
            </SpotlightCard>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
