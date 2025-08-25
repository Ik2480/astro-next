"use client";
import React from 'react';
import { motion } from "framer-motion";

const MyImage = ({ src, alt, width, height, className }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

export default function AstroLoan() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const loanFeatures = [
    {
      icon: "/file.svg",
      title: "Flexible LTV",
      desc: "Borrow up to 70% of your assets’ value, unlocking liquidity while holding your tokens.",
    },
    {
      icon: "/globe.svg",
      title: "Competitive Rates",
      desc: "Access some of the lowest borrowing rates in DeFi, optimized for our community.",
    },
    {
      icon: "/window.svg",
      title: "Instant Approval",
      desc: "Smart contracts handle approvals instantly — no waiting, no middlemen.",
    },
  ];

  return (
    <section
      id="astro-loan"
      className="relative w-full min-h-screen overflow-hidden bg-zinc-900 py-12 px-6 sm:px-12 text-white flex items-center"
    >
      {/* Gradient Overlay like Hero/Story */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-black z-0" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              AstroLoan
            </span>{" "}
            — Borrow Against Your Bags
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg font-light text-gray-300">
            Unlock liquidity from your tokens without selling. AstroLoan is your decentralized 
            gateway to stress-free borrowing on Solana.
          </p>
        </motion.div>

        {/* Image + Content */}
        <div className="mt-14 flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">
          {/* Illustration */}
          <motion.div
            className="w-full flex-shrink-0 lg:w-1/3 flex justify-center"
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-[10rem] sm:max-w-[14rem] aspect-square rounded-2xl overflow-hidden shadow-xl shadow-black/40">
              <MyImage
                src="/loan.webp"
                alt="AstroLoan Illustration"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text & CTA */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-col space-y-6 md:space-y-8"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-gray-200">
              Liquidity without selling. Simplicity without compromise.
            </h3>
            <p className="text-base sm:text-lg font-light leading-relaxed text-gray-300">
              Deposit <span className="font-semibold text-yellow-300">ADUCK tokens</span> or other meme coins 
              to instantly borrow <span className="font-semibold text-yellow-300">USDC</span> or <span className="font-semibold text-yellow-300">SOL</span>. 
              No credit checks, no delays — just DeFi at the speed of Solana.
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              No selling. No stress. Just smart liquidity.
            </p>

            <motion.a
              href="#"
              className="inline-block w-fit rounded-full bg-yellow-400 px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More →
            </motion.a>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div className="mt-16 md:mt-20 w-full" variants={fadeInUp}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loanFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400"
                variants={fadeInUp}
              >
                <div className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gray-800">
                  <MyImage src={item.icon} alt={item.title} width={32} height={32} />
                </div>
                <h4 className="mb-2 text-lg sm:text-xl font-bold text-white">{item.title}</h4>
                <p className="text-sm sm:text-base font-light text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
