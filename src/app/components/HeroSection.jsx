// src/app/components/HeroSection.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  const glowVariants = {
    animate: {
      boxShadow: "0 0 50px 10px #fde047",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-16 px-6 py-20 text-white md:flex-row md:px-12 lg:px-24">
        {/* Left Content */}
        <div className="flex w-full flex-col items-center space-y-8 text-center md:w-1/2 md:items-start md:text-left">
          <motion.h1
            className="text-6xl font-extrabold tracking-tight text-yellow-300 md:text-7xl lg:text-8xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Astro<span className="text-white">Duck</span>
          </motion.h1>

          <motion.h2
            className="max-w-xl text-3xl font-light italic leading-snug text-gray-200 md:text-4xl lg:text-5xl"
            initial="hidden"
            animate="visible"
            variants={{ ...textVariants, visible: { ...textVariants.visible, delay: 0.2 } }}
          >
            "The final frontier is now a swimming pool."
          </motion.h2>

          <motion.p
            className="max-w-lg text-lg font-normal leading-relaxed text-gray-300 md:text-xl"
            initial="hidden"
            animate="visible"
            variants={{ ...textVariants, visible: { ...textVariants.visible, delay: 0.4 } }}
          >
            Join the journey of AstroDuck, a mission to explore the cosmos and quack where no duck has quacked before.
          </motion.p>

          {/* Token Box */}
          <motion.div
            className="mt-8 w-full max-w-sm space-y-4 rounded-3xl border border-yellow-400 bg-gray-900/70 p-8 shadow-2xl backdrop-blur-sm md:max-w-md"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
          >
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              <div className="w-full text-center md:w-auto md:text-left">
                <p className="text-xl font-medium text-gray-400">Total Supply</p>
                <p className="text-2xl font-bold text-yellow-300">1,234,567,890</p>
              </div>
              <div className="mt-4 w-full text-center md:mt-0 md:w-auto md:text-left">
                <p className="text-xl font-medium text-gray-400">Symbol</p>
                <p className="text-2xl font-bold text-yellow-300">ADUCK</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              <div className="w-full text-center md:w-auto md:text-left">
                <p className="text-xl font-medium text-gray-400">Decimals</p>
                <p className="text-2xl font-bold text-yellow-300">9</p>
              </div>
              <div className="mt-4 w-full text-center md:mt-0 md:w-auto md:text-left">
                <p className="text-xl font-medium text-gray-400">Token Type</p>
                <p className="text-2xl font-bold text-yellow-300">SPL (Solana)</p>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="/path/to/buy-token"
            className="group mt-8 inline-block transform rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get ADUCK Now
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
          </motion.a>
        </div>

        {/* Right Duck Image */}
        <motion.div
          className="flex w-full items-center justify-center md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={{ ...boxVariants, visible: { ...boxVariants.visible, delay: 0.6 } }}
        >
          <motion.div
            className="w-full max-w-lg rounded-full border-4 border-yellow-400 p-2 shadow-[0_0_50px_10px_#fde047] md:w-[75%]"
            variants={glowVariants}
            animate="animate"
          >
            <Image
              src="/hero.webp"
              alt="AstroDuck"
              width={600}
              height={600}
              className="w-full rounded-full"
              quality={100}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}