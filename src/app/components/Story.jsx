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

  const cardData = [
    {
      icon: <RocketLaunchIcon className="flex justify-center h-10 w-10 text-blue-400 mb-4" />,
      title: "Meme-Powered Rocket",
      description: "AstroDuck’s rocket runs not on fuel, but on memes, laughter, and community determination.",
    },
    {
      icon: <GlobeAltIcon className="flex justify-center h-10 w-10 text-yellow-400 mb-4" />,
      title: "Galactic Adventures",
      description: "From Earth’s pond to the farthest galaxies — bringing ducks, aliens, and DeFi together.",
    },
    {
      icon: <UsersIcon className="flex justify-center h-10 w-10 text-purple-400 mb-4" />,
      title: "Community Driven",
      description: "AstroDuck thrives because of YOU — the strongest meme + DeFi community in the universe.",
    },
    {
      icon: <CurrencyDollarIcon className="flex justify-center h-10 w-10 text-green-400 mb-4" />,
      title: "100x Potential",
      description: "From $0.01 presale to $1 target — the mission aims for moon landings and beyond.",
    },
  ];

  return (
    <div id="the-story" className="w-full space-y-10 py-20 px-6 md:px-12 lg:px-24 bg-gray-950 text-gray-50 text-center">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold yellow-text mb-16 flex items-center justify-center space-x-2"
          variants={itemVariants}
        >
          <span role="img" aria-label="duck emoji">🦆</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            The Story of AstroDuck
          </span>
        </motion.h2>

        {/* Story Intro */}
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-gray-300 font-light leading-relaxed mb-12"
          variants={itemVariants}
        >
          In a quiet pond, a curious duck dreamed bigger than the ripples of water. 
          While others waddled, he looked at the stars and asked: 
          <span className="italic text-purple-300"> "Why waddle when I can fly?"</span>
        </motion.p>

        {/* Story Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Text Block */}
          <motion.div className="space-y-2 text-left" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              From Pond to Stars
            </h3>
            <p className="space-y-4 text-gray-300 leading-relaxed text-lg md:text-xl font-light mb-6">
              Powered by memes, moonlight, and sheer determination, 
              AstroDuck built a rocket of laughter and launched into the cosmos. 
              Now he quacks with aliens, explores galaxies, and delivers financial freedom.
            </p>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
              And he’s not flying alone — this journey is powered by community, 
              DeFi energy, and interstellar meme culture.
            </p>
            <div className="w-full text-center md:text-left mt-8">
              <Link 
                href="#"
                className="inline-block px-8 py-3 bg-white text-black font-bold text-lg rounded-2xl shadow-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Buy ADUCK
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div className="relative p-8" variants={itemVariants}>
            <div className="relative w-60 h-60 md:w-40 md:h-40 mx-auto animate-bounce transition-all duration-700 overflow-hidden rounded-full">
              <Image
                src="/story.png"
                alt="AstroDuck in rocket"
                width={350}
                height={350}
                quality={100}
                className="absolute inset-0 w-48 h-48 md:w-35 md:h-35 object-contain rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 mb-10">
          <motion.h3
            className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 font-extrabold text-white mb-10"
            variants={itemVariants}
          >
            Why AstroDuck?
          </motion.h3>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-[#1d243e] rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 text-center space-y-4"
                variants={itemVariants}
              >
                <div className="flex justify-center">{card.icon}</div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-lg md:text-md text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 w-full max-w-4xl mx-auto text-lg text-gray-300 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#"
            className="rounded-lg bg-gradient-to-r cursor-pointer text-gray-200 font-semibold from-cyan-300 to-cyan-400 px-6 py-2 focus:outline-none transition hover:shadow-lg hover:shadow-cyan-400/25"
          >
            Get Your ADUCK Now
          </Link>
          <Link 
            href="#"
            className="rounded-lg border-2 cursor-pointer border-cyan-300 text-cyan-300 bg-transparent px-6 py-2 focus:outline-none transition hover:bg-cyan-300 hover:text-gray-800"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
