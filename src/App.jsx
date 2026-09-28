import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Work from "./components/Work/Work.jsx";
import CodingStats from "./components/CodingStats/CodingStats.jsx";
import Achievements from "./components/Achievements/Achievements.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress.jsx";
import { BlurBlob } from "./BlurBlob.jsx";

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen relative overflow-hidden text-white">
      {/* Top Reading Progress & Floating Back-To-Top Button */}
      <ScrollProgress />

      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <CodingStats />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
