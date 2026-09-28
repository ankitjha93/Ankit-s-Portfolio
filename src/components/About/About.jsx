import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/ankitphoto.jpeg";
import { personalInfo } from "../../constants.js";
import {
  FiDownload,
  FiSend,
  FiMail,
  FiBriefcase,
  FiAward,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiLeetcode } from "react-icons/si";

// Native React 19 compatible typing effect
const TypingEffect = ({
  text = [],
  speed = 90,
  eraseSpeed = 45,
  typingDelay = 400,
  eraseDelay = 2000,
  cursorRenderer,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!text || text.length === 0) return;
    const currentFullText = text[textIndex % text.length];

    let timer;
    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(
          () => {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
          },
          displayText.length === 0 ? typingDelay : speed
        );
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, eraseDelay);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, eraseSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, text, speed, eraseSpeed, typingDelay, eraseDelay]);

  return (
    <span>
      <span>{displayText}</span>
      {cursorRenderer ? cursorRenderer("|") : <span className="text-[#8245ec] animate-pulse">|</span>}
    </span>
  );
};

const About = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1C74o45TgUVoAAQ2Nd9Jf6N-kifMP7qGy/view?usp=sharing";

  return (
    <section
      id="about"
      className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-8">
        {/* Left Side: Bio & Actions */}
        <div className="lg:w-7/12 text-center lg:text-left">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm shadow-emerald-500/20 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Time Roles & Opportunities</span>
          </div>

          {/* Greeting */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-gray-300 text-xl sm:text-2xl font-medium">
            <span>Hi, I am</span>
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </div>

          {/* Name with Gradient Accents */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-none">
            Ankit <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Jha</span>
          </h1>

          {/* Skills Heading with Dynamic Typing Effect */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-300 leading-snug min-h-[40px] flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
            <span>I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 font-bold">
              <TypingEffect
                text={[
                  "Full Stack Developer",
                  "Team Lead @ GBJ Buzz",
                  "Microservices Architect",
                  "Next.js & React Specialist",
                  "Problem Solver (300+ DSA)",
                ]}
                speed={80}
                eraseSpeed={40}
                typingDelay={400}
                eraseDelay={2200}
                cursorRenderer={(cursor) => (
                  <span className="text-pink-400 animate-pulse font-normal ml-0.5">{cursor}</span>
                )}
              />
            </span>
          </h2>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg text-gray-300/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Full Stack Developer and Development Team Lead experienced in architecting scalable
            microservices, high-throughput backend APIs, and modern responsive frontends. Skilled across{" "}
            <span className="text-purple-300 font-semibold">Node.js, TypeScript, Next.js, PostgreSQL, Redis, and Docker</span>,
            with a strong foundation of 300+ algorithmic problem-solving milestones.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white py-3.5 px-8 rounded-full text-sm sm:text-base font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(130,69,236,0.6)]"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
              }}
            >
              <FiDownload className="text-lg" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 text-gray-200 hover:text-white py-3.5 px-7 rounded-full text-sm sm:text-base font-semibold border border-purple-500/30 hover:border-purple-400 bg-[#120d2a]/80 hover:bg-[#1a133d] transition-all duration-300 transform hover:scale-105 backdrop-blur-md"
            >
              <FiSend className="text-purple-400" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Quick Links Row */}
          <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2 hidden sm:inline-block">
              Connect:
            </span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full bg-[#130f2c] border border-purple-500/25 hover:border-purple-400 text-gray-300 hover:text-white hover:bg-purple-950/60 hover:shadow-[0_0_15px_rgba(130,69,236,0.4)] transition-all duration-300"
            >
              <SiGithub className="text-lg" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full bg-[#130f2c] border border-purple-500/25 hover:border-blue-400 text-gray-300 hover:text-white hover:bg-blue-950/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-3 rounded-full bg-[#130f2c] border border-purple-500/25 hover:border-amber-400 text-gray-300 hover:text-white hover:bg-amber-950/60 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300"
            >
              <SiLeetcode className="text-lg text-amber-400" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3 rounded-full bg-[#130f2c] border border-purple-500/25 hover:border-pink-400 text-gray-300 hover:text-white hover:bg-pink-950/60 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300"
            >
              <FiMail className="text-lg" />
            </a>
          </div>
        </div>

        {/* Right Side: Portrait with Ambient Aura & Floating Badges */}
        <div className="lg:w-5/12 flex justify-center relative">
          {/* Ambient Radial Glowing Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/35 via-pink-600/25 to-indigo-600/35 blur-3xl rounded-full scale-110 pointer-events-none" />

          {/* 3D Parallax Tilt Photo Container */}
          <div className="relative">
            <Tilt
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={true}
            >
              {/* Outer decorative gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 p-1 shadow-[0_0_35px_rgba(130,69,236,0.4)]">
                <div className="w-full h-full bg-[#050414] rounded-full p-2">
                  <img
                    src={profileImage}
                    alt="Ankit Jha"
                    className="w-full h-full rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Tilt>

            {/* Floating Orbital Badge 1: Top-Left (LeetCode) */}
            <div className="absolute -top-3 -left-4 sm:-left-8 bg-[#0f0b24]/90 border border-amber-500/40 rounded-2xl p-2.5 sm:p-3 shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
              <div className="p-2 rounded-xl bg-amber-950/70 border border-amber-500/30">
                <SiLeetcode className="text-amber-400 text-lg sm:text-xl" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">300+ Solved</div>
                <div className="text-[10px] sm:text-xs text-amber-300/80 font-medium">LeetCode DSA</div>
              </div>
            </div>

            {/* Floating Orbital Badge 2: Bottom-Right (GBJ Buzz Role) */}
            <div className="absolute -bottom-3 -right-4 sm:-right-8 bg-[#0f0b24]/90 border border-purple-500/40 rounded-2xl p-2.5 sm:p-3 shadow-[0_0_20px_rgba(130,69,236,0.3)] backdrop-blur-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
              <div className="p-2 rounded-xl bg-purple-950/70 border border-purple-500/30">
                <FiBriefcase className="text-purple-400 text-lg sm:text-xl" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">Team Lead</div>
                <div className="text-[10px] sm:text-xs text-purple-300/80 font-medium">GBJ Buzz Intern</div>
              </div>
            </div>

            {/* Floating Orbital Badge 3: Bottom-Left (Academics / Merit) */}
            <div className="absolute bottom-10 -left-6 sm:-left-10 bg-[#0f0b24]/90 border border-pink-500/40 rounded-2xl p-2.5 sm:p-3 shadow-[0_0_20px_rgba(236,72,153,0.25)] backdrop-blur-md hidden sm:flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
              <div className="p-2 rounded-xl bg-pink-950/70 border border-pink-500/30">
                <FiAward className="text-pink-400 text-lg sm:text-xl" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">8.78 CGPA</div>
                <div className="text-[10px] sm:text-xs text-pink-300/80 font-medium">B.Tech CSE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Metrics Strip */}
      <div className="mt-16 pt-8 border-t border-purple-500/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f0b24]/70 border border-purple-500/20 text-center hover:border-purple-500/50 transition-colors backdrop-blur-md">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            300+
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1">DSA Problems Solved</div>
          <div className="text-[11px] text-gray-500 mt-0.5">LeetCode & CodeChef</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f0b24]/70 border border-purple-500/20 text-center hover:border-purple-500/50 transition-colors backdrop-blur-md">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
            10+
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1">Full-Stack Projects</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Microservices & AI Apps</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f0b24]/70 border border-purple-500/20 text-center hover:border-purple-500/50 transition-colors backdrop-blur-md">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            100/100
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1">Mathematics Merit</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Class XII Board Score</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f0b24]/70 border border-purple-500/20 text-center hover:border-purple-500/50 transition-colors backdrop-blur-md">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            8.78
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1">B.Tech CGPA</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Computer Science & Eng.</div>
        </div>
      </div>
    </section>
  );
};

export default About;
