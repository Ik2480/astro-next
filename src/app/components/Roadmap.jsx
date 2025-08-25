"use client";
import React from "react";
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
      transition: { type: "spring", stiffness: 60, damping: 18, staggerChildren: 0.15 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="roadmap" className="relative w-full min-h-screen overflow-hidden bg-zinc-900 py-20 text-white">
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
              Project Roadmap
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-light text-gray-400">
            Our path to the future, phase by phase.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent hidden md:block"></div>

          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              variants={fadeInUp}
            >
              {/* Timeline Node */}
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-700 border-4 border-zinc-900 shadow-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{phase.id}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-700 blur-lg opacity-40 animate-ping"></div>
                </div>
              </div>

              {/* Card */}
              <motion.div
                className="bg-zinc-800/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 hover:-translate-y-2 hover:shadow-cyan-400/30 transition-transform duration-500"
                variants={fadeInUp}
              >
                <div className="flex flex-col gap-4">
                  {/* Small badge for mobile */}
                  <div className="md:hidden flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-800 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{phase.id}</span>
                    </div>
                    <span className="text-cyan-400 font-semibold text-sm uppercase">Phase {phase.id}</span>
                  </div>

                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                  <div className="text-fuchsia-400 font-medium text-sm px-3 py-1 rounded-full bg-fuchsia-500/10 inline-block">
                    {phase.timeframe}
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">{phase.description}</p>

                  {/* Progress */}
                  <div className="mt-3">
                    <div className="w-full bg-gray-700/40 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block">Progress: {phase.progress}%</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div className="mt-24 text-center" variants={fadeInUp}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-white px-8 py-4 rounded-full shadow-xl">
            <span className="text-lg">🚀</span>
            <span className="font-bold text-lg">Mission to the Moon Complete!</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Roadmap;
