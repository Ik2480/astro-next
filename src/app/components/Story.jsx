// src/app/components/Story.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RocketLaunchIcon, GlobeAltIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Story() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const jumpVariants = {
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

  const cardData = [
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-yellow-300" />,
      title: "Meme-Powered Rocket",
      description: "AstroDuck’s journey is fueled by a vibrant community, not just rocket fuel. This is a mission powered by shared laughter and collective ambition.",
    },
    {
      icon: <GlobeAltIcon className="h-10 w-10 text-yellow-300" />,
      title: "Galactic Adventures",
      description: "Our adventure extends far beyond the pond. We're uniting people across the globe and the cosmos with a shared vision of fun and financial freedom.",
    },
    {
      icon: <UsersIcon className="h-10 w-10 text-yellow-300" />,
      title: "Community Driven",
      description: "This project is built for the community, by the community. Your participation is the engine that drives AstroDuck to new heights.",
    },
    {
      icon: <CurrencyDollarIcon className="h-10 w-10 text-yellow-300" />,
      title: "Growth Potential",
      description: "With a strategic roadmap and a dedicated team, we're focused on building long-term value and delivering a successful journey for all holders.",
    },
  ];

  return (
    <div id="the-story" className="relative w-full space-y-20 overflow-hidden bg-gray-950 px-6 py-20 text-center text-gray-50 md:px-12 lg:px-24">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Title */}
        <motion.h2
          className="mb-4 text-4xl font-extrabold tracking-tight text-yellow-300 md:text-6xl"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">The AstroDuck Mission</span>
        </motion.h2>

        {/* Story Intro */}
        <motion.p
          className="mx-auto mb-16 max-w-4xl text-lg font-light leading-relaxed text-gray-300 md:text-xl"
          variants={itemVariants}
        >
          AstroDuck isn't just a meme. It's a professional venture into the cosmos of Web3, powered by cutting-edge Solana technology and a vision for community-driven success.
        </motion.p>

        {/* Story Layout with Image & Text */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Block */}
          <motion.div className="space-y-6 text-left" variants={itemVariants}>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              From Concept to Launch
            </h3>
            <p className="text-lg font-light leading-relaxed text-gray-300 md:text-xl">
              Our journey began with a clear objective: to build a secure, transparent, and scalable project on the Solana blockchain. Every decision, from tokenomics to community engagement, has been made with a focus on sustainable growth and long-term value for our community.
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-300 md:text-xl">
              We've created a framework where innovation meets integrity, ensuring that AstroDuck is not just a trend, but a lasting presence in the DeFi space.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="#"
                className="group inline-block transform rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 active:scale-95"
              >
                Explore Roadmap
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Image with Jumping and Circular shape */}
          <motion.div
            className="relative flex justify-center p-8"
            variants={jumpVariants}
            initial="initial"
            animate="animate"
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-full border-2 border-gray-700 shadow-2xl md:w-[75%]">
              <Image
                src="/story.png"
                alt="AstroDuck in professional setting"
                width={500}
                height={500}
                quality={100}
                className="w-full rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-black/30" />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20">
          <motion.h3
            className="mb-10 text-3xl font-extrabold text-white md:text-4xl"
            variants={itemVariants}
          >
            Our Core Principles
          </motion.h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="rounded-xl border-2 border-gray-800 bg-gray-900/50 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-yellow-400"
                variants={itemVariants}
              >
                <div className="mb-4 flex justify-center">{card.icon}</div>
                <h4 className="mb-2 text-xl font-bold text-white">{card.title}</h4>
                <p className="text-sm font-light leading-relaxed text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="group inline-block transform rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 active:scale-95"
          >
            Buy ADUCK Now
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
          </Link>
          <Link
            href="#"
            className="inline-block rounded-full border-2 border-gray-700 px-10 py-4 text-lg font-bold uppercase tracking-wide text-gray-300 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-300 hover:shadow-lg"
          >
            Read Our Whitepaper
          </Link>
        </div>
      </motion.div>
    </div>
  );
}