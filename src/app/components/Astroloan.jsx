// src/app/components/AstroLoanSection.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AstroLoan() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="astro-loan" className="relative w-full py-20 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 space-y-16">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-fuchsia-800 bg-clip-text text-transparent">
            AstroLoan: Borrow Against Your Bags
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Illustration */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Image
              src="/loan.webp"
              alt="AstroLoan Illustration"
              width={500}
              height={500}
              className="w-[70%] h-auto object-contain"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-cyan-500">
              AstroLoan is AstroDuck's upcoming decentralized lending feature, 
              designed to let you unlock liquidity without selling your assets.
            </h4>
            <p className="text-lg text-gray-300">
              Use your <span className="font-semibold text-white">ADUCK tokens</span> or 
              supported meme coins as collateral to instantly borrow 
              <span className="font-semibold text-white"> USDC</span> or 
              <span className="font-semibold text-white"> SOL</span> — no credit checks, 
              no middlemen, just smart on-chain automation.
            </p>
            <p className="text-lg text-gray-300">
              Whether you're hedging, reinvesting, or need fast funds, AstroLoan puts 
              powerful DeFi tools at your fingertips while letting you keep your moon bags.
            </p>
            <p className="text-lg text-gray-300 font-semibold">
              No selling. No stress. Just smart liquidity.
            </p>

            {/* Features */}
            <div className="space-y-3 mt-4">
              {[
                {
                  icon: "/file.svg",
                  title: "Flexible LTV",
                  desc: "Borrow up to 70% of the value of your assets.",
                },
                {
                  icon: "/globe.svg",
                  title: "Competitive Rates",
                  desc: "Interest rates starting as low as 5% APR.",
                },
                {
                  icon: "/window.svg",
                  title: "Instant Approval",
                  desc: "Get your loan approved in minutes, not days.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image src={item.icon} alt={item.title} width={32} height={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-200">{item.title}</h4>
                    <p className="text-lg text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
              <button className="rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-400 px-6 py-2 text-gray-900 font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
