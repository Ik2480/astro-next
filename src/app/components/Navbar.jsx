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
    { name: 'The Story', href: '#Story' },
    { name: 'AstroLoan', href: '#astro-loan' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Vesting', href: '#vesting' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 
                       bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center 
                      px-4 sm:px-6 md:px-8 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 
                          rounded-full flex justify-center items-center shadow-lg">
            <Image
              src="/astro-duck-logo.webp"
              alt="AstroDuck Logo"
              width={30}
              height={30}
            />
          </div>
          <h1 className="text-[clamp(1.25rem,2vw,1.75rem)] ml-2 
                         text-gray-200 font-bold hidden md:block">
            Astro<span className="text-yellow-400">Duck</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-2 
                        text-gray-300 items-center font-light text-[clamp(0.9rem,1vw,1.1rem)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-xl transition-all duration-300
                ${
                  link.isSpecial
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-transparent bg-clip-text font-medium'
                    : 'hover:text-white hover:bg-white/10'
                }`}
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
          className="md:hidden p-2 rounded text-gray-200 hover:bg-purple-600/30 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-[4.2rem] left-0 w-full bg-black/90 backdrop-blur-md 
                    border-b border-white/10 transition-all duration-300 md:hidden overflow-hidden
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col space-y-2 p-4 text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/10 transition"
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
