// src/app/components/Footer.jsx

import Link from 'next/link';

// Using a rocket icon as a temporary replacement for the logo
import { FaTwitter, FaTelegram, FaDiscord, FaMedium, FaGithub, FaRocket } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mx-auto px-4 md:px-8 py-12 bg-gray-900 text-gray-400">
      <div className="flex flex-col md:flex-row w-full justify-between gap-8 mb-8">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0dbae2] to-[#873aea] rounded-full flex items-center justify-center">
              {/* This is the new icon instead of the logo image */}
              <FaRocket className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Astro<span className="text-[#0dbae2]">Duck</span>
              </h3>
              <p className="text-[#0dbae2] text-sm font-medium">To the Moon & Beyond</p>
            </div>
          </div>
          <p className="text-sm md:text-md">
            The next generation meme token on Solana with real utility. Join the AstroDuck community and be part of the future of decentralized finance.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" className="w-10 h-10 bg-[#23263a] hover:bg-gradient-to-br hover:from-[#0dbae2] hover:to-[#873aea] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <span className="text-lg"><FaTwitter /></span>
            </Link>
            <Link href="#" aria-label="Telegram" className="w-10 h-10 bg-[#23263a] hover:bg-gradient-to-br hover:from-[#0dbae2] hover:to-[#873aea] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <span className="text-lg"><FaTelegram /></span>
            </Link>
            <Link href="#" aria-label="Discord" className="w-10 h-10 bg-[#23263a] hover:bg-gradient-to-br hover:from-[#0dbae2] hover:to-[#873aea] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <span className="text-lg"><FaDiscord /></span>
            </Link>
            <Link href="#" aria-label="Medium" className="w-10 h-10 bg-[#23263a] hover:bg-gradient-to-br hover:from-[#0dbae2] hover:to-[#873aea] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <span className="text-lg"><FaMedium /></span>
            </Link>
            <Link href="#" aria-label="GitHub" className="w-10 h-10 bg-[#23263a] hover:bg-gradient-to-br hover:from-[#0dbae2] hover:to-[#873aea] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <span className="text-lg"><FaGithub /></span>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-cyan-500">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">AstroLoan</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Staking</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Governance</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">AstroVerse</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-cyan-500">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#story" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">About</Link></li>
              <li><Link href="#roadmap" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Roadmap</Link></li>
              <li><Link href="#tokenomics" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Tokenomics</Link></li>
              <li><Link href="#vesting-schedule" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Vesting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-cyan-500">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Whitepaper</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">Audit Report</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300 text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#23263a] pt-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm">Get the latest updates on AstroDuck development and community news.</p>
          </div>
          <form className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              className="flex-1 md:w-64 px-4 py-3 bg-[#23263a] border border-[#353a50] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0dbae2] transition-colors duration-300" 
              name="email" 
            />
            <button 
              type="submit" 
              className="px-2 py-3 bg-gradient-to-r from-[#0dbae2] to-[#873aea] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#0dbae2]/25 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-[#23263a] pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-md text-gray-400">
            © {new Date().getFullYear()} AstroDuck. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-[#0dbae2] transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="mt-6 p-2 bg-[#1c243e] rounded-lg">
        <p className="text-sm md:text-md text-gray-400">
          <strong>Disclaimer:</strong> Cryptocurrency investments are subject to high market risks. The information provided on this website is for educational purposes only and should not be considered as financial advice. Always conduct your own research before making any investment decisions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;