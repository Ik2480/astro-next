'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between bg-zinc-950 text-white px-6 lg:px-12 py-8 lg:py-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0a0a1f] to-black" />
      <div className="absolute top-1/3 -left-32 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Left: Text + Buttons */}
      <motion.div
        className="flex-1 flex flex-col justify-start text-center lg:text-left gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            AstroDuck
          </span>
        </motion.h1>

        <motion.p
          className="max-w-xl text-[clamp(0.95rem,1.1vw,1.1rem)] text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The first interstellar duck-powered ecosystem. Stake, earn, and enjoy
          the universe with $ADUCK. 🚀
        </motion.p>

        <motion.div
          className="mt-2 flex flex-col sm:flex-row sm:gap-4 items-center lg:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="#buy-aduck"
            className="px-6 py-3 rounded-xl text-base font-medium
                       bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400
                       text-black shadow-lg hover:scale-105 active:scale-95 
                       transition-transform duration-300 w-full sm:w-auto text-center"
          >
            Buy $ADUCK
          </Link>
          <Link
            href="#Story"
            className="mt-2 sm:mt-0 px-6 py-3 rounded-xl text-base font-medium
                       border border-white/20 text-gray-200 hover:text-white
                       hover:bg-white/10 transition w-full sm:w-auto text-center"
          >
            Read the Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Right: Hero Image */}
      <motion.div
        className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0 lg:translate-x-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Image
          src="/hero.webp"
          alt="AstroDuck Hero"
          width={360}
          height={360}
          className="w-[clamp(180px,45vw,360px)] drop-shadow-2xl"
          priority
        />
      </motion.div>
    </section>
  );
}
