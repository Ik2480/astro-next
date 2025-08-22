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

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: -20,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/newHero.jpg"
          alt="AstroDuck Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-white md:flex-row md:gap-16 md:px-12 lg:px-24">
        {/* Left Content */}
        <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
          <motion.h1
            className="text-5xl font-extrabold tracking-tight text-yellow-400 md:text-6xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <span className="text-white">Astro</span>Duck
          </motion.h1>

          <motion.h2
            className="text-3xl font-bold italic leading-tight md:text-4xl lg:text-5xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            " Houston, we have a duck! "
          </motion.h2>

          <motion.p
            className="max-w-lg text-lg font-light leading-relaxed md:text-xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Join AstroDuck on its moon mission and beyond.
          </motion.p>

          {/* Token Box */}
          <motion.div
            className="mt-6 w-fit space-y-3 rounded-2xl border border-gray-600 bg-black/60 p-6 shadow-lg backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            variants={boxVariants}
          >
            <p className="text-lg text-gray-300">
              Total Supply: <span className="font-semibold text-gray-400">1.234.567.890</span>
            </p>
            <p className="text-lg text-gray-300">
              Decimals: <span className="font-semibold text-gray-400">9</span>
            </p>
            <p className="text-lg text-gray-300">
              Symbol: <span className="font-semibold text-gray-400">ADUCK</span>
            </p>
            <p className="text-lg text-gray-300">
              Token Type: <span className="font-semibold text-gray-400">SPL (Solana)</span>
            </p>
          </motion.div>
        </div>

        {/* Right Duck Image */}
        <motion.div
          className="flex w-full items-center justify-center md:w-1/2"
          variants={bounceVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/hero.webp"
            alt="AstroDuck"
            width={500}
            height={500}
            className="w-3/4 max-w-sm rounded-2xl shadow-2xl md:w-[75%]"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
}
