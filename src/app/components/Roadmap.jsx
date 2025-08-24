"use client";
import React from 'react';
import { motion } from "framer-motion";

const roadmapData = [
  { id: 1, title: 'Project Foundation', timeframe: 'Lift-off (Jul–Aug 2025)', description: 'Finalize brand identity, website, smart contract audit. Website & Landing Page Launch.', progress: 100 },
  { id: 2, title: 'Presale Launch', timeframe: 'Blast-Off Presale (Aug 10 – Nov 10, 2025)', description: 'Launch presale at $0.01. Meme contests, whitelist promo, community building.', progress: 55 },
  { id: 3, title: 'Exchange Listings', timeframe: 'Listings & Liquidity (Q1 2026)', description: 'DEX liquidity (Raydium, Jupiter). Apply to 1–2 CEX listings. Major marketing campaign.', progress: 15 },
  { id: 4, title: 'Lending Platform', timeframe: 'AstroLoan Activation (Q2 2026)', description: 'Deploy lending module. Enable borrowing USDC/SOL against ADUCK.', progress: 11 },
  { id: 5, title: 'Ecosystem Expansion', timeframe: 'Utility & Ecosystem Growth (Q4 2026)', description: 'Airdrops & staking rewards. AstroLoan upgrades and DAO treasury launch.', progress: 8 },
  { id: 6, title: 'Gaming & Governance', timeframe: 'AstroVerse & DAO Tools (Q1 2027)', description: 'AstroVerse Game release. DAO governance tools and voting.', progress: 6 },
  { id: 7, title: 'Long-term Vision', timeframe: 'Dominance & Sustainability (Q2 2027+)', description: 'Meme launchpad creation. Merch, brand expansion, quarterly treasury updates.', progress: 5 },
];

const Roadmap = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        delayChildren: 0.25,
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="roadmap" className="relative w-full min-h-screen overflow-hidden bg-zinc-900 py-20 text-white">
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.5; }
        }
        .starfield-1 { background-image: radial-gradient(white 1px, transparent 1px); background-size: 50px 50px; animation: fadeInOut 2s infinite; }
        .starfield-2 { background-image: radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 75px 75px; animation: fadeInOut 3s infinite; }
        .starfield-3 { background-image: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 100px 100px; animation: fadeInOut 4s infinite; }
      `}</style>

      {/* Starfield background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 starfield-1" />
        <div className="absolute inset-0 starfield-2" />
        <div className="absolute inset-0 starfield-3" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
              Project Roadmap
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl font-light text-gray-400">
            Our path to the future, phase by phase.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-fuchsia-500/40 to-transparent z-10 hidden sm:block"></div>

          {/* Items */}
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`relative flex items-center justify-between my-12 ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
              variants={fadeInUp}
            >
              <div className="hidden sm:block sm:w-1/2"></div>

              {/* Number */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden sm:block">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-800 border-4 border-zinc-900 shadow-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{phase.id}</span>
                  </div>
                  <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-800 blur-md opacity-40 animate-pulse"></div>
                </div>
              </div>

              {/* Card */}
              <motion.div className="w-full relative z-20 sm:p-2" variants={fadeInUp}>
                <div className="bg-zinc-800/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20 group">
                  <div className="relative z-10 space-y-3">
                    <div className="sm:hidden flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-800 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{phase.id}</span>
                      </div>
                      <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Phase {phase.id}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                    <div className="text-fuchsia-400 font-semibold text-sm px-3 py-1 rounded-full bg-fuchsia-500/10 inline-block">
                      {phase.timeframe}
                    </div>
                    <p className="text-base text-gray-300 leading-relaxed">{phase.description}</p>

                    {/* Progress bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-700/40 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${phase.progress}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Progress: {phase.progress}%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final message */}
        <div className="mt-24 text-center z-50">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-white px-8 py-4 rounded-full shadow-xl">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-sm">🚀</span>
            </div>
            <span className="font-bold text-lg">Mission to the Moon Complete!</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Roadmap;
