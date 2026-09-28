import React, { useState, useMemo } from "react";
import { SkillsInfo } from "../../constants.js";
import Tilt from "react-parallax-tilt";
import {
  FiLayers,
  FiServer,
  FiCode,
  FiTerminal,
  FiSearch,
  FiX,
  FiCpu,
  FiCheck,
  FiShield,
  FiZap,
  FiDatabase,
  FiLayout,
} from "react-icons/fi";
import { SiDocker, SiRedis, SiPrisma, SiNx } from "react-icons/si";

// Spotlight card with subtle cursor glow
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
      className={`relative overflow-hidden ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(130, 69, 236, 0.16), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Helper to render icon or fallback
  const renderSkillIcon = (skill) => {
    if (skill.iconName === "SiDocker") {
      return <SiDocker className="text-2xl sm:text-3xl text-[#2496ED] shrink-0" />;
    }
    if (skill.iconName === "SiRedis") {
      return <SiRedis className="text-2xl sm:text-3xl text-[#DC382D] shrink-0" />;
    }
    if (skill.iconName === "SiPrisma") {
      return <SiPrisma className="text-2xl sm:text-3xl text-[#818cf8] shrink-0" />;
    }
    if (skill.iconName === "SiNx") {
      return <SiNx className="text-2xl sm:text-3xl text-[#38bdf8] shrink-0" />;
    }
    if (skill.logo) {
      return (
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 group-hover:scale-110 transition-transform duration-300"
        />
      );
    }
    return <FiCpu className="text-2xl text-purple-400 shrink-0" />;
  };

  // Get category icon
  const getCategoryIcon = (id) => {
    switch (id) {
      case "frontend":
        return <FiLayers className="text-purple-400 text-xl" />;
      case "backend":
        return <FiServer className="text-pink-400 text-xl" />;
      case "languages":
        return <FiCode className="text-blue-400 text-xl" />;
      case "tools":
        return <FiTerminal className="text-emerald-400 text-xl" />;
      default:
        return <FiCpu className="text-purple-400 text-xl" />;
    }
  };

  // Total skills count
  const totalSkillsCount = useMemo(() => {
    return SkillsInfo.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  // Filtered categories and skills
  const filteredCategories = useMemo(() => {
    let categories = SkillsInfo;

    // Filter by tab
    if (activeCategory !== "all") {
      categories = categories.filter((cat) => cat.id === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      categories = categories
        .map((cat) => {
          const matchingSkills = cat.skills.filter(
            (skill) =>
              skill.name.toLowerCase().includes(q) ||
              (skill.level && skill.level.toLowerCase().includes(q))
          );
          return {
            ...cat,
            skills: matchingSkills,
          };
        })
        .filter((cat) => cat.skills.length > 0);
    }

    return categories;
  }, [activeCategory, searchQuery]);

  // Total matching skills count in current view
  const matchingSkillsCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section
      id="skills"
      className="py-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative bg-skills-gradient"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 font-semibold inline-block mb-3">
          Full Stack Tech Stack
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          TECHNICAL <span className="text-[#8245ec]">SKILLS</span> & EXPERTISE
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          A production-proven toolkit spanning component-driven frontends, resilient microservices,
          relational databases, and modern DevOps tooling.
        </p>

        {/* Quick Highlights Summary Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#140e2b]/80 border border-purple-500/30 text-xs sm:text-sm text-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="font-semibold">{totalSkillsCount}+ Technologies</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#140e2b]/80 border border-purple-500/30 text-xs sm:text-sm text-pink-200">
            <span className="w-2 h-2 rounded-full bg-pink-400" />
            <span className="font-semibold">Nx Monorepo & Microservices</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#140e2b]/80 border border-purple-500/30 text-xs sm:text-sm text-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold">PostgreSQL & Redis Caching</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#140e2b]/80 border border-purple-500/30 text-xs sm:text-sm text-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="font-semibold">Docker & CI/CD Pipelines</span>
          </div>
        </div>
      </div>

      {/* Controls: Category Filter Tabs & Live Search Bar */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center md:justify-start">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border flex items-center gap-2 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-[0_0_15px_rgba(130,69,236,0.4)]"
                : "bg-[#110d26]/80 text-gray-400 border-purple-500/20 hover:text-white hover:border-purple-500/50"
            }`}
          >
            <span>All Categories</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/40">
              {totalSkillsCount}
            </span>
          </button>

          {SkillsInfo.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-[0_0_15px_rgba(130,69,236,0.4)]"
                  : "bg-[#110d26]/80 text-gray-400 border-purple-500/20 hover:text-white hover:border-purple-500/50"
              }`}
            >
              <span>{cat.title.split(" ")[0]}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/40">
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Live Search Bar */}
        <div className="relative w-full md:w-72">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skill (e.g., Docker, Redis)..."
            className="w-full bg-[#110d26]/90 border border-purple-500/30 rounded-xl pl-9 pr-9 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FiX className="text-sm" />
            </button>
          )}
        </div>
      </div>

      {/* Search Feedback */}
      {searchQuery.trim() && (
        <div className="mb-6 text-sm text-gray-400 flex items-center justify-between">
          <span>
            Found <span className="font-bold text-purple-300">{matchingSkillsCount}</span>{" "}
            technologies matching &quot;<span className="text-white">{searchQuery}</span>&quot;
          </span>
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs text-purple-400 hover:underline"
          >
            Clear filter
          </button>
        </div>
      )}

      {/* Skill Categories Grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <SpotlightCard
              key={category.id}
              className="bg-[#0b081a]/90 backdrop-blur-md rounded-2xl border border-purple-500/25 p-6 sm:p-7 shadow-[0_0_25px_rgba(130,69,236,0.18)] hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p className="text-xs text-gray-400 mt-0.5">{category.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 font-semibold shrink-0">
                    {category.skills.length} Techs
                  </span>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-transparent my-4" />

                {/* Skill Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <Tilt
                      key={skill.name}
                      tiltMaxAngleX={12}
                      tiltMaxAngleY={12}
                      scale={1.04}
                      transitionSpeed={500}
                      glareEnable={false}
                      className="h-full"
                    >
                      <div className="group relative h-full flex items-center gap-2.5 sm:gap-3 bg-[#130f2c]/80 hover:bg-[#1c153d] border border-purple-500/20 hover:border-purple-400/80 rounded-xl p-2.5 sm:p-3 transition-all duration-300 hover:shadow-[0_0_18px_rgba(130,69,236,0.35)] cursor-default">
                        <div className="p-1.5 rounded-lg bg-[#1a1438] border border-purple-500/20 group-hover:border-purple-500/50 flex items-center justify-center shrink-0">
                          {renderSkillIcon(skill)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white truncate">
                            {skill.name}
                          </div>
                          {skill.level && (
                            <span className="text-[10px] font-semibold text-purple-400/90 group-hover:text-pink-300 transition-colors block truncate">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-[#0b081a]/80 border border-purple-500/20 rounded-2xl">
          <p className="text-gray-300 text-lg font-semibold">
            No technical skills found matching &quot;{searchQuery}&quot;
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Try adjusting your search query or clear the filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Core Architectural Proficiencies Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#110d2b]/95 via-[#18113a]/95 to-[#110d2b]/95 border border-purple-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(130,69,236,0.2)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-purple-500/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
              <FiCheck className="text-emerald-400" />
              <span>Architectural & Engineering Standards</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Production-Grade Engineering Capabilities
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Enterprise Tested</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#161033]/80 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-purple-950/70 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-3">
              <FiLayers className="text-lg" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Microservices & Monorepo</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Nx monorepo architectures, decoupled service isolation, and unified dependency graphs with pnpm.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161033]/80 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-pink-950/70 border border-pink-500/40 flex items-center justify-center text-pink-400 mb-3">
              <FiShield className="text-lg" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Enterprise Auth & RBAC</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Cryptographic OTPs, bcrypt hashing, JWT access/refresh rotation, Redis sessions, and granular RBAC.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161033]/80 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
              <FiDatabase className="text-lg" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Data Modeling & Caching</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              PostgreSQL with Prisma migrations, connection pooling, and sub-millisecond Redis TTL caching.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161033]/80 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-3">
              <FiZap className="text-lg" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Performant Next.js & React</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Server-side rendering, code splitting, memoization, atomic Tailwind styling, and fluid UX micro-interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;