import React from "react";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { education } from "../../constants.js";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Academic foundation and milestones demonstrating consistent problem-solving discipline and excellence
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-purple-500/40 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-[#0d081f] border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden p-1 shadow-lg shadow-purple-500/30">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:max-w-lg p-6 sm:p-7 rounded-2xl shadow-2xl border border-purple-500/30 bg-gradient-to-b from-[#0f0c29]/95 to-[#171233]/95 backdrop-blur-md shadow-[0_0_25px_1px_rgba(130,69,236,0.25)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-all duration-300 hover:scale-[1.02] hover:border-purple-400 hover:shadow-purple-500/30 group`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-start space-x-4">
                {/* School Logo */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#0d081f] border border-purple-500/30 rounded-xl overflow-hidden shrink-0 p-1 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300 mt-0.5">
                    {edu.school}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                    <span>{edu.location}</span>
                    <span>&bull;</span>
                    <span className="text-purple-400 font-semibold">{edu.date}</span>
                  </div>
                </div>
              </div>

              {/* Outstanding Highlights Banner */}
              {edu.specialHighlight && (
                <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-purple-500/10 to-transparent border-l-4 border-amber-400 flex items-center gap-2">
                  <FaAward className="text-amber-400 text-base shrink-0" />
                  <span className="text-xs font-semibold text-amber-300 tracking-wide">
                    {edu.specialHighlight}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {edu.desc}
              </p>

              {/* Subject Breakdown Pills */}
              {edu.scores && edu.scores.length > 0 && (
                <div className="mt-4 pt-3 border-t border-purple-500/20">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FaGraduationCap className="text-purple-400" />
                    <span>Subject-Wise Distinction / Performance:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.scores.map((item, sIndex) => (
                      <div
                        key={sIndex}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1.5 ${
                          item.highlight
                            ? "bg-amber-950/40 border-amber-500/40 text-amber-300 font-bold shadow-sm shadow-amber-500/20"
                            : "bg-[#181335] border-purple-500/20 text-gray-300"
                        }`}
                      >
                        <span className="text-gray-400">{item.subject}:</span>
                        <span className={item.highlight ? "text-amber-300 font-extrabold" : "text-purple-300 font-semibold"}>
                          {item.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grade Badge */}
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-block bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 text-purple-300 px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm">
                  {edu.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;