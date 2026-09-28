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
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowTopBtn(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 z-[9999] transition-all duration-75 ease-out shadow-[0_0_12px_#a855f7]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0d081f]/85 backdrop-blur-md border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-600/30 hover:scale-110 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer group ${
          showTopBtn
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <FiArrowUp className="text-xl group-hover:-translate-y-1 transition-transform duration-200" />
      </button>
    </>
  );
};

export default ScrollProgress;
