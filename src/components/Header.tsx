"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="relative flex items-center justify-center">
              {/* Hexagon SVG */}
              <svg width="48" height="54" viewBox="0 0 48 54" fill="none" stroke="black" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 1L46.5167 14V40L24 53L1.48334 40V14L24 1Z"/>
              </svg>
              <span className="absolute font-bold text-[10px] tracking-widest text-black mt-0.5">
                DEMO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10 items-center">
            {['WHO WE SERVE', 'SOLUTIONS', 'RESOURCES', 'ABOUT US', 'CONTACT US'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-[11px] font-extrabold text-black hover:text-gray-500 transition-colors duration-200 tracking-wider"
              >
                {item}
              </Link>
            ))}

            {/* Right Utilities (Search + Dropdowns) */}
            <div className="flex items-center space-x-6 pl-4 border-l border-transparent">
              <button aria-label="Search" className="text-black hover:text-gray-500 transition">
                <svg className="w-5 h-5 stroke-[2.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-[11px] font-extrabold text-black tracking-widest group-hover:text-gray-500">IND</span>
                <svg className="w-3 h-3 text-black group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="flex items-center space-x-1 cursor-pointer group">
                <span className="text-[11px] font-extrabold text-black tracking-widest group-hover:text-gray-500">ENGLISH</span>
                <svg className="w-3 h-3 text-black group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </nav>

          {/* Mobile menu button matched exactly to Figma layout */}
          <div className="lg:hidden flex items-center z-50 relative pr-2">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-[42px] h-[44px] border-[2px] border-black rounded-[6px] flex flex-col justify-center items-center space-y-[4.5px] bg-white transition-opacity shadow-sm"
              aria-label="Menu"
            >
              <div className={`w-[22px] h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></div>
              <div className={`w-[22px] h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-[22px] h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></div>
            </button>
          </div>
          
        </div>

        {/* Mobile Navigation Backdrop */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-[96px] bg-black/20 z-30 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu Drawer (Half Screen Right) */}
        <div className={`lg:hidden fixed top-[96px] right-0 w-[65%] sm:w-[50%] h-[calc(100vh-96px)] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col items-start pt-8 px-6 sm:px-10 space-y-6 z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {['WHO WE SERVE', 'SOLUTIONS', 'RESOURCES', 'ABOUT US', 'CONTACT US'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-[12px] sm:text-[13px] font-extrabold text-black tracking-[0.1em] hover:text-[#0055ff] transition-colors border-b border-gray-100 w-full pb-4"
            >
              {item}
            </Link>
          ))}
          {/* Mobile Utilities */}
          <div className="flex flex-col space-y-6 pt-2 w-full">
             <span className="text-[12px] sm:text-[13px] font-extrabold text-black tracking-widest cursor-pointer hover:text-[#0055ff]">IND ▾</span>
             <span className="text-[12px] sm:text-[13px] font-extrabold text-black tracking-widest cursor-pointer hover:text-[#0055ff]">ENGLISH ▾</span>
          </div>
        </div>

      </div>
    </header>
  );
}
