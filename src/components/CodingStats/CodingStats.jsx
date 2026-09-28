import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { SiLeetcode, SiGithub, SiGeeksforgeeks } from "react-icons/si";
import { FiCode, FiGitCommit, FiAward, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { personalInfo } from "../../constants.js";

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
      className={`relative overflow-hidden rounded-2xl border border-purple-500/25 bg-gradient-to-b from-[#0f0c29]/90 to-[#181335]/90 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Radial mouse spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {children}
      </div>
    </div>
  );
};

const CodingStats = () => {
  return (
    <section
      id="coding-stats"
      className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          CODING PROFILES & METRICS
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Quantifiable problem-solving milestones and code activity across competitive programming platforms
        </p>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-[#0f0c29]/80 border border-purple-500/20 hover:border-purple-400/40 rounded-2xl p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
          <FiCode className="text-2xl text-purple-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">300+</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">DSA Solved</div>
        </div>
        <div className="bg-[#0f0c29]/80 border border-purple-500/20 hover:border-pink-400/40 rounded-2xl p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
          <FiGitCommit className="text-2xl text-pink-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">20+</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Git Repos</div>
        </div>
        <div className="bg-[#0f0c29]/80 border border-purple-500/20 hover:border-yellow-400/40 rounded-2xl p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
          <FiAward className="text-2xl text-yellow-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">8.78</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">B.Tech CGPA</div>
        </div>
        <div className="bg-[#0f0c29]/80 border border-purple-500/20 hover:border-emerald-400/40 rounded-2xl p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
          <FiCheckCircle className="text-2xl text-emerald-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">100%</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Consistency</div>
        </div>
      </div>

      {/* Main Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LeetCode Card */}
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.02} className="h-full">
          <SpotlightCard className="h-full hover:border-purple-400 hover:shadow-purple-500/20 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#251f38] rounded-xl border border-purple-500/20">
                  <SiLeetcode className="text-amber-500 text-3xl" />
                </div>
                <span className="bg-[#251f38] text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30">
                  Active Solver
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">LeetCode</h3>
              <div className="text-xs text-purple-400 mb-3 font-mono">@ankitjha93</div>
              <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4">
                300+ Problems Solved
              </div>

              {/* Problem Breakdown Visualizer */}
              <div className="space-y-2 mb-4 bg-[#14102c] p-3 rounded-xl border border-purple-500/10">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-emerald-400 font-semibold">Easy: 120+</span>
                  <span className="text-amber-400 font-semibold">Medium: 150+</span>
                  <span className="text-rose-400 font-semibold">Hard: 30+</span>
                </div>
                {/* Visual Ratio Bar */}
                <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden flex">
                  <div className="bg-emerald-400 h-full w-[40%]" title="Easy" />
                  <div className="bg-amber-400 h-full w-[50%]" title="Medium" />
                  <div className="bg-rose-400 h-full w-[10%]" title="Hard" />
                </div>
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Arrays", "Trees & Graphs", "Dynamic Programming", "Recursion"].map((topic, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#251f38] text-purple-300 px-2 py-0.5 rounded-md border border-purple-500/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-4 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-amber-500/30"
            >
              <span>View LeetCode Profile</span>
              <FiExternalLink />
            </a>
          </SpotlightCard>
        </Tilt>

        {/* GitHub Card */}
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.02} className="h-full">
          <SpotlightCard className="h-full hover:border-purple-400 hover:shadow-purple-500/20 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#251f38] rounded-xl border border-purple-500/20">
                  <SiGithub className="text-white text-3xl" />
                </div>
                <span className="bg-[#251f38] text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30">
                  Open Source
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">GitHub</h3>
              <div className="text-xs text-purple-400 mb-3 font-mono">@ankitjha93</div>
              <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                20+ Public Repositories
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Active builder crafting AI-driven web apps, scalable full-stack MERN & Next.js architectures, and responsive developer tooling.
              </p>

              {/* Highlights Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["PrepSmart AI 2.0", "PopcornPlay", "Next.js", "Redux Toolkit", "Clerk Auth"].map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#251f38] text-pink-300 px-2 py-0.5 rounded-md border border-pink-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-4 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-purple-500/30"
            >
              <span>View GitHub Repos</span>
              <FiExternalLink />
            </a>
          </SpotlightCard>
        </Tilt>

        {/* GeeksforGeeks / Core CS Card */}
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.02} className="h-full">
          <SpotlightCard className="h-full hover:border-emerald-400 hover:shadow-emerald-500/20 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#251f38] rounded-xl border border-purple-500/20">
                  <SiGeeksforgeeks className="text-emerald-400 text-3xl" />
                </div>
                <span className="bg-[#251f38] text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
                  Core Foundations
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">GeeksforGeeks</h3>
              <div className="text-xs text-emerald-400 mb-3 font-mono">@ankitjha93</div>
              <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-4">
                C++ & Core Fundamentals
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Extensive deep-dive practice across Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, and Computer Networks.
              </p>

              {/* Highlights Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["C++ Certified", "OOP", "DBMS", "OS Concepts", "System Architecture"].map((topic, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#251f38] text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-500/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-4 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-md hover:shadow-emerald-500/30"
            >
              <span>Explore Milestones</span>
              <FiExternalLink />
            </a>
          </SpotlightCard>
        </Tilt>
      </div>
    </section>
  );
};

export default CodingStats;
