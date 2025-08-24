"use client";
import React from 'react';
import { motion } from "framer-motion";

// A simple component to replace next/image for displaying images.
const MyImage = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default function AstroLoan() {
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
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for individual elements to fade in and move up
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Loan feature data for mapping
  const loanFeatures = [
    {
      icon: "/file.svg",
      title: "Flexible LTV",
      desc: "Borrow up to 70% of the value of your assets, providing maximum liquidity from your holdings.",
    },
    {
      icon: "/globe.svg",
      title: "Competitive Rates",
      desc: "Benefit from industry-leading interest rates designed to be as low as possible for our community.",
    },
    {
      icon: "/window.svg",
      title: "Instant Approval",
      desc: "Our automated smart contracts ensure your loan is approved and disbursed in minutes, not days.",
    },
  ];

  return (
    <section
      id="astro-loan"
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
              AstroLoan
            </span>: Borrow Against Your Bags
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-300 md:text-xl">
            AstroLoan is our upcoming decentralized lending protocol, designed to unlock liquidity from your assets without ever having to sell them.
          </p>
        </motion.div>

        {/* Main Content Section with Image and Text */}
        {/* Adjusted image and text columns for better alignment and spacing */}
        <div className="mt-20 flex flex-col items-center justify-center gap-16 lg:flex-row">
          {/* Illustration - Image container made smaller to align with text */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            variants={fadeInUp}
          >
            {/* Reduced max-width for smaller image */}
            <div className="relative w-full max-w-[12rem] rounded-3xl border-2 border-yellow-400 shadow-[0_0_50px_5px_#fde047]">
              <MyImage
                src="/loan.webp"
                alt="AstroLoan Illustration"
                width={600}
                height={600}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Content - Text and CTA button */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-col justify-center space-y-8"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold leading-tight text-gray-200 md:text-3xl">
              Unlock the power of your assets on the Solana blockchain with a few simple clicks.
            </h3>
            <p className="text-lg font-light leading-relaxed text-gray-300">
              Use your <span className="font-semibold text-yellow-300">ADUCK tokens</span> or other supported meme coins as collateral to instantly borrow <span className="font-semibold text-yellow-300">USDC</span> or <span className="font-semibold text-yellow-300">SOL</span>. Our on-chain automation means no credit checks, no middlemen, just fast and secure liquidity.
            </p>
            <p className="text-xl font-bold leading-relaxed text-gray-200">
              No selling. No stress. Just smart liquidity.
            </p>
            {/* CTA Button */}
            <div className="mt-8">
              <motion.a
                href="#"
                className="group inline-block transform rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Features Grid - Moved to a new row below the main content section */}
        <motion.div
          className="mt-16 w-full"
          variants={fadeInUp}
        >
          {/* Changed grid columns to ensure all three items appear in one row on large screens */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loanFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl border-2 border-gray-800 bg-gray-900/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400"
                variants={fadeInUp}
              >
                {/* Icon container and icon size */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
                  <MyImage src={item.icon} alt={item.title} width={32} height={32} />
                </div>
                {/* Title and description font sizes */}
                <h4 className="mb-2 text-xl font-bold text-white">{item.title}</h4>
                <p className="text-base font-light text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
