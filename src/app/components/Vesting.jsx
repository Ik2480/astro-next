"use client";
import { motion } from "framer-motion";

const Vesting = () => {
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

  const vestingSchedule = [
    {
      category: "Presale",
      unlock: "100%",
      detail: "Immediate unlock",
    },
    {
      category: "Team & Advisors",
      unlock: "0%",
      detail: "12-month cliff, then 12-month linear unlock",
    },
    {
      category: "Liquidity",
      unlock: "100%",
      detail: "Locked for 12 months",
    },
    {
      category: "Airdrop & Giveaways",
      unlock: "10%",
      detail: "3-month linear unlock",
    },
    {
      category: "Master Sale",
      unlock: "0%",
      detail: "Strategic releases",
    },
    {
      category: "Marketing / Ecosystem",
      unlock: "0%",
      detail: "Governance-controlled unlocks",
    },
    {
      category: "Governance / DAO Treasury",
      unlock: "0%",
      detail: "DAO-controlled, proposal-based release",
    },
    {
      category: "Loans Pool",
      unlock: "0%",
      detail: "Locked for lending feature development",
    },
  ];

  // Variants for the jumping image
  const jumpVariants = {
    jump: {
      y: [0, -15, 0], // Jumps up and down
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="vesting" className="relative w-full overflow-hidden bg-zinc-950 py-20 text-white">
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
        {/* Heading Section */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
              Vesting & Unlock Schedule
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-400 md:text-xl">
            A transparent and detailed schedule for token releases.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Side - Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={fadeInUp}
          >
            {/* Added motion for dimming and jumping animation */}
            <motion.img
              src="/vesting.webp"
              alt="Vesting Illustration"
              width={500}
              height={500}
              className="w-full max-w-[400px] h-auto rounded-3xl object-contain shadow-[0_0_50px_5px_rgba(255,255,255,0.05)] border-2 border-white/10 opacity-60"
              variants={jumpVariants}
              animate="jump"
            />
          </motion.div>

          {/* Right Side - Unlock Schedule Card */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center"
            variants={fadeInUp}
          >
            <div className="w-full rounded-2xl bg-zinc-900/50 p-6 sm:p-8 shadow-lg backdrop-blur-sm border border-white/10">
              <h4 className="w-full text-center text-xl font-bold text-cyan-400 mb-6">
                Unlock Schedule
              </h4>
              <div className="grid grid-cols-1 gap-y-4">
                {vestingSchedule.map((row, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl p-4 transition-colors duration-300 hover:bg-zinc-800/60"
                    variants={fadeInUp}
                  >
                    <div className="flex-1 w-full sm:w-auto mb-2 sm:mb-0">
                      <p className="text-base font-semibold text-white">{row.category}</p>
                      <p className="text-sm font-light text-zinc-400 mt-1">{row.detail}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-lg font-bold text-cyan-300">
                        {row.unlock}
                      </span>
                      <span className="ml-2 text-sm text-zinc-400 sm:hidden">Unlock</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vesting;
