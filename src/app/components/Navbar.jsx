'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Buy ADUCK', href: '#buy-aduck', isSpecial: true },
    { name: 'The Story', href: '#the-story' },
    { name: 'AstroLoan', href: '#astro-loan' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Vesting', href: '#vesting' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black mx-auto py-3 px-4 md:px-8">
      <div className="flex justify-between items-center">
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
          <h1 className="text-2xl ml-2 text-gray-200 font-bold hidden md:block">
            Astro<span className="text-yellow-400">Duck</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden flex-1 md:flex justify-center gap-1 text-gray-200 items-center text-lg font-light p-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                px-3 py-2 rounded-xl transition
                ${link.isSpecial ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-extralight text-xl' : 'hover:text-[#abc4ff] hover:bg-[#1c243e]'}
              `}
            >
              {link.name === 'AstroLoan' ? (
                <>
                  Astro<span className="text-yellow-400">Loan</span>
                </>
              ) : (
                link.name
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded text-white hover:bg-blue-600/30 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-[4.5rem] left-0 w-full bg-black z-10 p-4 transition-all duration-300 md:hidden overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="py-2 px-3 rounded hover:bg-gray-800"
            >
              {link.name === 'AstroLoan' ? (
                <>
                  Astro<span className="text-yellow-400">Loan</span>
                </>
              ) : (
                link.name
              )}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}