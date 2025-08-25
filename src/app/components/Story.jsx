"use client";
import { motion } from "framer-motion";

const Story = () => {
  // Parent container with stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  // Child fadeInUp animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Jumping duck image
  const jumpVariants = {
    jump: {
      y: [0, -45, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <section
      id="Story"
      className="relative w-full 
                 bg-gradient-to-b from-[#0a0a1f] via-zinc-900 to-black
                 px-4 md:px-8 pt-16 pb-24 text-white"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg font-light text-gray-300 md:text-xl"
            variants={fadeInUp}
          >
            A tale of ambition, community, and cosmic adventure.
          </motion.p>
        </motion.div>

        {/* Content Row */}
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse">
          {/* Image (smaller, no border, jumping) */}
          <motion.div className="w-full lg:w-1/2 flex justify-center" variants={fadeInUp}>
            <motion.div
              className="relative w-full max-w-[300px] 
                         rounded-3xl shadow-[0_0_40px_5px_#fde047]
                         overflow-hidden transition-transform duration-500 hover:scale-105"
              whileHover={{ boxShadow: "0 0 70px 15px #fde047" }}
            >
              <motion.img
                src="/story.png"
                alt="AstroDuck rocket ship illustration"
                width={400}
                height={400}
                className="object-contain"
                variants={jumpVariants}
                animate="jump"
              />
            </motion.div>
          </motion.div>

          {/* Staggered paragraphs */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
            variants={containerVariants}  // ✅ parent handles stagger
          >
            <motion.p
              className="text-lg font-light leading-relaxed text-gray-300"
              variants={fadeInUp}
            >
              In a distant galaxy, on the humble planet of Quackonia, a little
              duck with a big dream named AstroDuck gazed up at the stars...
            </motion.p>
            <motion.p
              className="text-lg font-light leading-relaxed text-gray-300"
              variants={fadeInUp}
            >
              He rallied his friends and fellow dreamers, all united by a single
              goal: to build a community-driven starship...
            </motion.p>
            <motion.p
              className="text-lg font-light leading-relaxed text-gray-300"
              variants={fadeInUp}
            >
              Our journey is a testament to what's possible when a community
              comes together...
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
