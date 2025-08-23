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
  // Variants for parent container to orchestrate animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for individual elements to fade in and move up
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="roadmap" className="relative w-full overflow-hidden bg-zinc-950 py-20 text-white">
      {/* Background Effect - a subtle grid overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
              Project Roadmap
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-400 md:text-xl">
            Our path to the future, phase by phase.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent z-10 hidden sm:block"></div>

          {/* Roadmap Items */}
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`relative flex items-center justify-between my-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
              variants={containerVariants}
            >
              {/* Spacer div for the opposing side */}
              <div className="hidden sm:block sm:w-1/2"></div>
              
              {/* Timeline Number Circle - Centered on mobile, aligned on desktop */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 z-20 hidden sm:block`}>
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-800 border-4 border-zinc-950 shadow-xl flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{phase.id}</span>
                  </div>
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-800 blur-md opacity-50 animate-pulse"></div>
                </div>
              </div>

              {/* Roadmap Card and Connector Line */}
              <motion.div
                className={`w-full sm:w-1/2 relative z-20 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}
                variants={fadeInUp}
              >
                {/* Connector Line from timeline to card */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-[calc(50%+16px)] h-0.5 z-10 bg-gradient-to-r from-transparent via-cyan-400 to-fuchsia-600 hidden sm:block ${index % 2 === 0 ? 'right-full' : 'left-full'}`}></div>

                {/* Increased box size by adjusting padding and font sizes */}
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group relative overflow-hidden">
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 space-y-2">
                    {/* Phase number and Timeframe for mobile view */}
                    <div className="sm:hidden flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-800 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{phase.id}</span>
                      </div>
                      <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">Phase {phase.id}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl text-gray-200 font-extrabold">{phase.title}</h3>
                    <div className="text-fuchsia-400 font-semibold text-sm px-2 py-0.5 rounded-full inline-block">{phase.timeframe}</div>
                    <p className="text-base text-gray-300">{phase.description}</p>
                    
                    <div className="mt-4">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${phase.progress}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Progress: {phase.progress}%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Final message */}
        <div className="mt-16 lg:mt-20 text-center z-50">
          <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-xl">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-xs lg:text-sm">🚀</span>
            </div>
            <span className="font-bold text-base lg:text-lg">Mission to the Moon Complete!</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Roadmap;
