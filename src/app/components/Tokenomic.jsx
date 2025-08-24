"use client";
import React from 'react';
import { motion } from "framer-motion";

const TokenomicsSection = () => {
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

  // Loan feature data for mapping
  const tokenomicsStats = [
    { label: "Total Supply", value: "1,234,567,890" },
    { label: "Decimals", value: "9" },
    { label: "Symbol", value: "ADUCK" },
    { label: "Token Name", value: "AstroDuck" },
    { label: "Chain", value: "Solana" },
    { label: "Presale Price", value: "$0.01" },
  ];

  const tokenAllocation = [
    {
      title: "Presale",
      desc: "Public sale at $0.01 per ADUCK",
      color: "bg-orange-500",
      percent: "30%",
    },
    {
      title: "Team & Advisors",
      desc: "12-month cliff + 12-month linear vesting",
      color: "bg-purple-500",
      percent: "15%",
    },
    {
      title: "Liquidity",
      desc: "Locked for DEX & CEX listings",
      color: "bg-cyan-500",
      percent: "15%",
    },
    {
      title: "Loans Pool",
      desc: "For AstroLoan lending feature",
      color: "bg-yellow-400 text-zinc-900",
      percent: "14%",
    },
    {
      title: "Master Sale",
      desc: null,
      color: "bg-green-400 text-zinc-900",
      percent: "15%",
    },
    {
      title: "Ecosystem Growth",
      desc: null,
      color: "bg-sky-400 text-zinc-900",
      percent: "5%",
    },
    {
      title: "Marketing",
      desc: null,
      color: "bg-rose-400 text-zinc-900",
      percent: "3%",
    },
    {
      title: "Community",
      desc: null,
      color: "bg-fuchsia-400 text-zinc-900",
      percent: "3%",
    },
  ];

  return (
    <section
      id="tokenomics"
      className="relative w-full min-h-screen overflow-hidden bg-zinc-900 py-16 px-12 text-white"
    >
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.5; }
        }
        .starfield-1 {
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 50px 50px;
          animation: fadeInOut 2s infinite;
        }
        .starfield-2 {
          background-image: radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px);
          background-size: 75px 75px;
          animation: fadeInOut 3s infinite;
        }
        .starfield-3 {
          background-image: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: fadeInOut 4s infinite;
        }
      `}</style>

      {/* Animated Starfield Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 starfield-1" />
        <div className="absolute inset-0 starfield-2" />
        <div className="absolute inset-0 starfield-3" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading Section */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-300 md:text-xl">
            A breakdown of our token distribution and supply.
          </p>
        </motion.div>

        {/* Stats Grid - Redesigned for better aesthetics and responsiveness */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6"
          variants={containerVariants}
        >
          {tokenomicsStats.map((stat, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer rounded-2xl bg-zinc-900/50 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/60 hover:scale-[1.05] ring-0 relative overflow-hidden text-center flex flex-col justify-center items-center"
              variants={fadeInUp}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/0 via-gray-900/0 to-yellow-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="relative z-10 text-sm font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-yellow-400 transition-colors duration-300">{stat.label}</p>
              {/* Responsive font size to prevent overflow */}
              <p className="relative z-10 mt-1 text-base md:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Allocation & Image Layout */}
        <div className="mt-20 flex flex-col items-center gap-12 md:flex-row">
          {/* Allocation List */}
          <motion.div
            className="w-full md:w-1/2"
            variants={fadeInUp}
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-200 md:text-3xl">Token Allocation</h3>
            <ul className="space-y-4">
              {tokenAllocation.map((item, i) => (
                <motion.li
                  key={i}
                  className="group flex cursor-pointer items-center justify-between rounded-xl bg-zinc-900/50 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:bg-zinc-800/60 hover:scale-[1.02]"
                  variants={fadeInUp}
                >
                  <div className="flex items-center">
                    <span className={`h-3 w-3 rounded-full mr-3 ${item.color} group-hover:ring-2 ring-offset-2 ring-offset-zinc-800 transition-all duration-300`} />
                    <div>
                      {/* Reduced font size on the title for better fit */}
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      {item.desc && (
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                      )}
                    </div>
                  </div>
                  {/* Reduced font size on the percentage from text-xl to text-lg */}
                  <span className="text-lg font-bold text-yellow-300 transition-colors duration-300 group-hover:text-yellow-400">
                    {item.percent}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tokenomics Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={fadeInUp}
          >
            <img
              src="/tokenomic.png"
              alt="Tokenomics Pie Chart"
              width={500}
              height={500}
              className="rounded-3xl shadow-[0_0_50px_5px_rgba(255,255,255,0.1)] border-2 border-white/10"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TokenomicsSection;
