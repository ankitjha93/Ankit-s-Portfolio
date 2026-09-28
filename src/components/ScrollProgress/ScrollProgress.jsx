import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (window.scrollY / totalHeight) * 100)
        );
        setScrollProgress(progress);
      }
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG Circle calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 z-[9999] transition-all duration-75 ease-out shadow-[0_0_12px_#a855f7]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* Floating Circular Progress Ring + Back to Top Button */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ${
          showTopBtn
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title={`Scroll to top (${Math.round(scrollProgress)}%)`}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0d081f]/90 backdrop-blur-md border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
        >
          {/* Circular SVG Ring */}
          <svg
            viewBox="0 0 52 52"
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
          >
            <circle
              cx="26"
              cy="26"
              r={21}
              className="text-gray-800"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="26"
              cy="26"
              r={21}
              stroke="url(#progressGradient)"
              strokeWidth="3.5"
              strokeDasharray={2 * Math.PI * 21}
              strokeDashoffset={2 * Math.PI * 21 - (scrollProgress / 100) * (2 * Math.PI * 21)}
              strokeLinecap="round"
              fill="transparent"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Icon */}
          <FiArrowUp className="text-lg sm:text-xl relative z-10 group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      </div>
    </>
  );
};

export default ScrollProgress;
