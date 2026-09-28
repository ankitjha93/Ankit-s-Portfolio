import React from "react";
import Tilt from "react-parallax-tilt";
import { SiLeetcode, SiGithub, SiGeeksforgeeks } from "react-icons/si";
import { FiCode, FiGitCommit, FiAward, FiExternalLink } from "react-icons/fi";
import { personalInfo } from "../../constants.js";

const CodingStats = () => {
  const stats = [
    {
      icon: <SiLeetcode className="text-amber-500 text-3xl" />,
      platform: "LeetCode",
      handle: "ankitjha93",
      metric: "300+ Problems",
      description:
        "Consistent daily problem solving focusing on Arrays, Trees, Dynamic Programming, Graphs, and Recursion.",
      link: personalInfo.leetcode,
      badge: "Active Solver",
    },
    {
      icon: <SiGithub className="text-white text-3xl" />,
      platform: "GitHub",
      handle: "ankitjha93",
      metric: "20+ Repositories",
      description:
        "Active contributions across AI web apps, Full-Stack MERN applications, and responsive modern frontend tools.",
      link: personalInfo.github,
      badge: "Open Source",
    },
    {
      icon: <SiGeeksforgeeks className="text-emerald-400 text-3xl" />,
      platform: "GeeksforGeeks",
      handle: "ankitjha93",
      metric: "Core DSA & OOP",
      description:
        "Extensive practice in C++ and Core Computer Science fundamentals including DBMS, OS, and System Design.",
      link: personalInfo.leetcode, // Or personal profile
      badge: "Fundamental Mastery",
    },
  ];

  return (
    <section
      id="coding-stats"
      className="py-20 px-[12vw] md:px-[7vw] lg:px-[20vw] relative font-sans"
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

      {/* Metrics Counter Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-[#0f0c29]/70 border border-purple-500/20 rounded-2xl p-5 text-center">
          <FiCode className="text-2xl text-purple-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">300+</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">DSA Solved</div>
        </div>
        <div className="bg-[#0f0c29]/70 border border-purple-500/20 rounded-2xl p-5 text-center">
          <FiGitCommit className="text-2xl text-pink-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">20+</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Git Repos</div>
        </div>
        <div className="bg-[#0f0c29]/70 border border-purple-500/20 rounded-2xl p-5 text-center">
          <FiAward className="text-2xl text-yellow-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">8.78</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">B.Tech CGPA</div>
        </div>
        <div className="bg-[#0f0c29]/70 border border-purple-500/20 rounded-2xl p-5 text-center">
          <SiLeetcode className="text-2xl text-amber-400 mx-auto mb-2" />
          <div className="text-3xl font-extrabold text-white">100%</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Consistency</div>
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            className="h-full"
          >
            <div className="h-full bg-gradient-to-b from-[#0f0c29]/90 to-[#181335]/90 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#251f38] rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="bg-[#251f38] text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{item.platform}</h3>
                <div className="text-xs text-purple-400 mb-3 font-mono">@{item.handle}</div>
                <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  {item.metric}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-6 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-purple-500/30"
              >
                <span>View {item.platform}</span>
                <FiExternalLink />
              </a>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default CodingStats;
