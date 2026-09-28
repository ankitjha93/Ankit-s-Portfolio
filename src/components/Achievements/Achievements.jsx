import React from "react";
import Tilt from "react-parallax-tilt";
import { FaTrophy, FaAward, FaCertificate } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { achievements } from "../../constants.js";

const iconMap = [
  <FaTrophy className="text-yellow-400 text-3xl" />,
  <FaAward className="text-purple-400 text-3xl" />,
  <FaCertificate className="text-cyan-400 text-3xl" />,
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          ACHIEVEMENTS & CERTIFICATIONS
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Recognitions, competitive problem-solving milestones, and technical certifications
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <Tilt
            key={item.id}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className="h-full"
          >
            <div className="h-full bg-gradient-to-b from-[#0f0c29]/90 to-[#1b153b]/90 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Header: Icon + Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#251f38] rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform">
                    {iconMap[index % iconMap.length]}
                  </div>
                  <span className="bg-[#251f38] text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30">
                    {item.platform}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action / Link if available */}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-md hover:shadow-purple-500/30"
                >
                  <span>Verify / View Profile</span>
                  <FiExternalLink />
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 mt-4 text-xs text-purple-400/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Verified Credential</span>
                </div>
              )}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
