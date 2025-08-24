"use client";
// src/app/components/Story.jsx
import { motion } from "framer-motion";
import Image from 'next/image';

const Story = () => {
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

  return (
    <section 
      id="story" 
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black py-16 px-12 text-white"
    >
      {/* Background Effect - a subtle grid overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" />
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
              Our Story
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-300 md:text-xl">
            A tale of ambition, community, and cosmic adventure.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row-reverse">
          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-[400px] h-auto rounded-3xl border-2 border-yellow-400 shadow-[0_0_50px_5px_#fde047] overflow-hidden">
              <Image
                src="/rocket.webp"
                alt="AstroDuck rocket ship illustration"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
            variants={fadeInUp}
          >
            <p className="text-lg font-light leading-relaxed text-gray-300">
              In a distant galaxy, on the humble planet of Quackonia, a little duck with a big dream named AstroDuck gazed up at the stars. Tired of the mundane, feathered life, he dreamt of reaching the sun, the moon, and beyond. He believed there was more to the universe than just ponds and breadcrumbs.
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-300">
              He rallied his friends and fellow dreamers, all united by a single goal: to build a community-driven starship and embark on a mission to explore the cosmos. This starship wasn't powered by conventional fuel, but by the collective spirit and ambition of its passengers.
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-300">
              Our journey is a testament to what's possible when a community comes together. We've built a project that's not just a token, but a vehicle for innovation and growth, with a dedicated team and a roadmap that extends far beyond the stars.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
