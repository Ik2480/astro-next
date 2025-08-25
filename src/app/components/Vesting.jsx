"use client"; 
import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Unlock,
  Rocket,
  Gift,
  Users,
  Coins,
  Landmark,
  Banknote,
} from "lucide-react";

const Vesting = () => {
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

  const jumpVariants = {
    jump: {
      y: [0, -25, 0],
      transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity },
    },
  };

  const vestingSchedule = [
    { category: "Presale", unlock: "100%", detail: "Immediate unlock", icon: Rocket },
    { category: "Team & Advisors", unlock: "0%", detail: "12-month cliff, then 12-month linear unlock", icon: Users },
    { category: "Liquidity", unlock: "100%", detail: "Locked for 12 months", icon: Lock },
    { category: "Airdrop & Giveaways", unlock: "10%", detail: "3-month linear unlock", icon: Gift },
    { category: "Master Sale", unlock: "0%", detail: "Strategic releases", icon: Coins },
    { category: "Marketing / Ecosystem", unlock: "0%", detail: "Governance-controlled unlocks", icon: Landmark },
    { category: "Governance / DAO Treasury", unlock: "0%", detail: "DAO-controlled, proposal-based release", icon: Banknote },
    { category: "Loans Pool", unlock: "0%", detail: "Locked for lending feature development", icon: Lock },
  ];

  return (
    <section
      id="vesting"
      className="relative w-full min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-20 px-6 sm:px-12 text-white"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
              Vesting & Unlock Schedule
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-400 md:text-xl">
            A transparent and structured release schedule designed for trust and sustainability.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="flex justify-center"
            variants={fadeInUp}
          >
            <motion.img
              src="/vesting.webp"
              alt="Vesting Illustration"
              className="w-full max-w-[350px] md:max-w-[400px] h-auto object-contain opacity-80"
              variants={jumpVariants}
              animate="jump"
            />
          </motion.div>

          <motion.div
            className="w-full flex flex-col"
            variants={fadeInUp}
          >
            <div className="w-full rounded-2xl bg-zinc-900/50 p-6 sm:p-8 shadow-[0_8px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm border border-white/5">
              <h4 className="text-center text-xl font-bold text-cyan-400 mb-6">
                Unlock Schedule
              </h4>
              <div className="grid grid-cols-1 gap-y-4">
                {vestingSchedule.map((row, idx) => {
                  const Icon = row.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl p-4 hover:bg-zinc-800/60 transition duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.25)]"
                      variants={fadeInUp}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-base font-semibold text-white">{row.category}</p>
                          <p className="text-sm font-light text-zinc-400 mt-1">{row.detail}</p>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="text-lg font-bold text-cyan-300">{row.unlock}</span>
                        <span className="ml-2 text-sm text-zinc-400 sm:hidden">Unlock</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vesting;
