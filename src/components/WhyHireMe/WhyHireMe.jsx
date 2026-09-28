import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  FiZap,
  FiShield,
  FiServer,
  FiCode,
  FiLayers,
  FiCheckCircle,
  FiTrendingUp,
  FiCpu,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

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
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.18), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
};

const WhyHireMe = () => {
  return (
    <section
      id="why-hire-me"
      className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans relative"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 font-semibold inline-block mb-3">
          Engineering Value Proposition
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          WHY HIRE <span className="text-[#8245ec]">ANKIT JHA</span>?
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Beyond code syntax — combining engineering discipline, architectural ownership, and rapid problem-solving to ship resilient software.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Tile 1: Rapid Growth & Team Leadership (Span 2) */}
        <div className="md:col-span-2 lg:col-span-2">
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
            <SpotlightCard className="h-full bg-gradient-to-br from-[#120d2b]/95 via-[#181138]/90 to-[#0e0a24]/95 p-6 sm:p-7 rounded-2xl border border-purple-500/30 hover:border-purple-400/70 shadow-xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/40 text-purple-400 text-xl">
                    <FiTrendingUp />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                    Proven Ownership
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Rapid Growth & Leadership Impact
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Joined GBJ Buzz as an intern and rapidly assumed <span className="text-purple-300 font-semibold">Development Team Lead</span> responsibilities for the Printable project. Orchestrated sprint task allocation, led rigorous Git PR code reviews, and ensured stable microservices deployment.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200">
                  Sprint Planning
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200">
                  Code Reviews
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200">
                  Microservices Architecture
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200">
                  Nx Monorepo
                </span>
              </div>
            </SpotlightCard>
          </Tilt>
        </div>

        {/* Tile 2: Enterprise Security & Auth Architecture */}
        <div className="md:col-span-1 lg:col-span-2">
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
            <SpotlightCard className="h-full bg-gradient-to-br from-[#120d2b]/95 via-[#181138]/90 to-[#0e0a24]/95 p-6 sm:p-7 rounded-2xl border border-purple-500/30 hover:border-pink-400/70 shadow-xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-pink-950/70 border border-pink-500/40 text-pink-400 text-xl">
                    <FiShield />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 text-xs font-semibold">
                    Security-First
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Zero-Trust Auth & RBAC
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Architected production-grade security with <span className="text-pink-300 font-semibold">cryptographic OTP generation</span>, bcrypt hashing, Redis verification-attempt rate limiting, and JWT access/refresh token rotation.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-pink-950/60 border border-pink-500/30 text-pink-200">
                  JWT Token Rotation
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-pink-950/60 border border-pink-500/30 text-pink-200">
                  Redis TTL Sessions
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-pink-950/60 border border-pink-500/30 text-pink-200">
                  Granular RBAC
                </span>
              </div>
            </SpotlightCard>
          </Tilt>
        </div>

        {/* Tile 3: High-Throughput Performance & Caching */}
        <div className="md:col-span-1 lg:col-span-2">
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
            <SpotlightCard className="h-full bg-gradient-to-br from-[#120d2b]/95 via-[#181138]/90 to-[#0e0a24]/95 p-6 sm:p-7 rounded-2xl border border-purple-500/30 hover:border-emerald-400/70 shadow-xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xl">
                    <FiServer />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                    Sub-100ms APIs
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Database & Cache Optimization
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Deep experience optimizing relational schemas with <span className="text-emerald-300 font-semibold">PostgreSQL & Prisma</span>, pairing with Redis for sub-millisecond query caching, indexing, and connection pool management.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  PostgreSQL
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  Redis Caching
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                  Prisma Migrations
                </span>
              </div>
            </SpotlightCard>
          </Tilt>
        </div>

        {/* Tile 4: Algorithmic Problem Solving (Span 2) */}
        <div className="md:col-span-2 lg:col-span-2">
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} className="h-full">
            <SpotlightCard className="h-full bg-gradient-to-br from-[#120d2b]/95 via-[#181138]/90 to-[#0e0a24]/95 p-6 sm:p-7 rounded-2xl border border-purple-500/30 hover:border-amber-400/70 shadow-xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-950/70 border border-amber-500/40 text-amber-400 text-xl">
                    <SiLeetcode />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                    300+ DSA Milestones
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Strong Algorithmic Foundation
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Consistent problem solver with <span className="text-amber-300 font-semibold">300+ problems solved</span> in C++ across LeetCode & CodeChef. Deep conceptual fluency in Graphs, Dynamic Programming, Trees, Heaps, and Complexity Analysis.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-200">
                  C++ Algorithmic Core
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-200">
                  Data Structures
                </span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-200">
                  Optimal Time/Space Complexity
                </span>
              </div>
            </SpotlightCard>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
