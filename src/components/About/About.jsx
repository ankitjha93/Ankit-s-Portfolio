import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/ankitphoto.jpeg";

// Native React 19 compatible typing effect
const TypingEffect = ({
  text = [],
  speed = 100,
  eraseSpeed = 50,
  typingDelay = 500,
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
      {cursorRenderer ? cursorRenderer("|") : <span className="text-[#8245ec]">|</span>}
    </span>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ankit Jha
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypingEffect
              text={[
                "Fullstack Developer",
                "MERN Stack Developer",
                "AI Web App Builder",
                "Next.js & React Specialist",
                "Problem Solver (300+ DSA)",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Full Stack Developer skilled in React.js, Next.js, and Node.js,
            building scalable AI-driven web applications. Experienced in REST APIs,
            authentication, and modern frontend architectures with a focus on
            performance, scalability, and delivering optimized user-friendly applications.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1C74o45TgUVoAAQ2Nd9Jf6N-kifMP7qGy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ankit Jha"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
