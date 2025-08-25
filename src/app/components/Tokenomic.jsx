"use client"; 
import React from 'react';
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TokenomicsSection = () => {
  // Animation variants
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Token data
  const tokenomicsStats = [
    { label: "Total Supply", value: "1,234,567,890" },
    { label: "Decimals", value: "9" },
    { label: "Symbol", value: "ADUCK" },
    { label: "Token Name", value: "AstroDuck" },
    { label: "Chain", value: "Solana" },
    { label: "Presale Price", value: "$0.01" },
  ];

  const tokenAllocation = [
    { title: "Presale", value: 30, desc: "Public sale at $0.01 per ADUCK", color: "#f97316" },
    { title: "Team & Advisors", value: 15, desc: "12-month cliff + 12-month linear vesting", color: "#a855f7" },
    { title: "Liquidity", value: 15, desc: "Locked for DEX & CEX listings", color: "#06b6d4" },
    { title: "Loans Pool", value: 14, desc: "For AstroLoan lending feature", color: "#facc15" },
    { title: "Master Sale", value: 15, desc: null, color: "#4ade80" },
    { title: "Ecosystem Growth", value: 5, desc: null, color: "#38bdf8" },
    { title: "Marketing", value: 3, desc: null, color: "#fb7185" },
    { title: "Community", value: 3, desc: null, color: "#e879f9" },
  ];

  return (
    <section
      id="tokenomics"
      className="relative w-full min-h-screen overflow-hidden bg-zinc-900 py-20 px-6 md:px-12 text-white"
    >
      {/* Main Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-300 md:text-xl">
            A breakdown of our token distribution and supply.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6"
          variants={containerVariants}
        >
          {tokenomicsStats.map((stat, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer rounded-2xl bg-zinc-900/50 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/60 hover:scale-[1.05] relative overflow-hidden text-center flex flex-col justify-center items-center"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/0 via-gray-900/0 to-yellow-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="relative z-10 text-sm font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-yellow-400 transition-colors duration-300">
                {stat.label}
              </p>
              <p className="relative z-10 mt-1 text-base md:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Allocation + Pie Chart */}
        <div className="mt-20 flex flex-col items-center gap-12 md:flex-row">
          {/* Allocation List */}
          <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
            <h3 className="mb-6 text-2xl font-bold text-gray-200 md:text-3xl">
              Token Allocation
            </h3>
            <ul className="space-y-4">
              {tokenAllocation.map((item, i) => (
                <motion.li
                  key={i}
                  className="group flex cursor-pointer items-center justify-between rounded-xl bg-zinc-900/50 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:bg-zinc-800/60 hover:scale-[1.02]"
                  variants={fadeInUp}
                >
                  <div className="flex items-center">
                    <span
                      className={`h-3 w-3 rounded-full mr-3`}
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      {item.desc && <p className="text-sm text-zinc-400">{item.desc}</p>}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-yellow-300 transition-colors duration-300 group-hover:text-yellow-400">
                    {item.value}%
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            className="w-full md:w-1/2 h-[400px] flex justify-center items-center"
            variants={fadeInUp}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tokenAllocation}
                  dataKey="value"
                  nameKey="title"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  innerRadius={70}
                  paddingAngle={3}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {tokenAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    borderRadius: "10px",
                    border: "1px solid #3f3f46",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TokenomicsSection;
