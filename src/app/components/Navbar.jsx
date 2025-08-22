'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-black mx-auto flex justify-between items-center py-3 px-4 md:px-8">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex justify-center items-center shadow-lg">
          <Image
            src="/astro-duck-logo.webp"
            alt="AstroDuck Logo"
            width={30}
            height={30}
          />
        </div>
        <h1 className="text-2xl ml-2 text-gray-200 font-bold">
          Astro<span className="text-yellow-400">Duck</span>
        </h1>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden flex-1 md:flex justify-center gap-1 text-gray-200 items-center text-lg font-light p-2">
        <Link href="#buy-aduck" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-extralight text-xl px-3 py-2 rounded-xl transition hover:bg-[#1c243e]">Buy ADUCK</Link>
        <Link href="#the-story" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">The Story</Link>
        <Link href="#astro-loan" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">Astro<span className="text-yellow-400">Loan</span></Link>
        <Link href="#tokenomics" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">Tokenomics</Link>
        <Link href="#vesting" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">Vesting</Link>
        <Link href="#roadmap" className="hover:text-[#abc4ff] hover:bg-[#1c243e] px-3 py-2 rounded-xl transition">Roadmap</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded text-white hover:bg-blue-600/30 transition"
        aria-label="Toggle menu"
      >
        {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black z-10 p-4 md:hidden">
          <div className="flex flex-col space-y-4 text-white">
            <Link href="#buy-aduck" onClick={toggleMenu} className="py-2 px-3 rounded hover:bg-gray-800">Buy ADUCK</Link>
            <Link href="#the-story" onClick={toggleMenu} className="py-2 px-3 rounded hover:bg-gray-800">The Story</Link>
            <Link href="#astro-loan" onClick={toggleMenu} className="py-2 px-3 rounded hover:bg-gray-800">AstroLoan</Link>
            <Link href="#tokenomics" onClick={toggleMenu} className="py-2 px-3 rounded hover:bg-gray-800">Tokenomics</Link>
            <Link href="#vesting" onClick={toggleMenu} className="py-2 px-3 rounded hover:bg-gray-800">Vesting</Link>
            <Link href="#roadmap" onClick={toggleMenu} className="py-2 px-3 rounded hover:bg-gray-800">Roadmap</Link>
          </div>
        </div>
      )}
    </header>
  );
}