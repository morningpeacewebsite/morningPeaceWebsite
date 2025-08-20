"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleArrowClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen((open) => !open);
  };

  return (
    <nav className="w-full bg-[#FCF5EF] border-b border-[#FEA735] shadow-sm px-4 md:px-8 py-3" style={{ fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif' }}>
      {/* Mobile hamburger menu */}
      <div className="md:hidden flex items-center justify-between">
        <Link href="/">
          <Image
            src="/morning_peace_no_BG.png"
            alt="Morning Peace Financial Services Logo"
            width={160}
            height={64}
            priority
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop layout aligned with content */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
          <Image
            src="/morning_peace_no_BG.png"
            alt="Morning Peace Financial Services Logo"
            width={160}
            height={64}
            priority
            style={{ cursor: 'pointer' }}
          />
          </Link>
        </div>
        
        {/* Desktop nav links */}
        <ul className="flex space-x-8 text-[#2faeed] font-bold text-lg" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
        <li>
          <Link href="/WhoWeAre" className="hover:text-[#FE7235] transition-colors duration-150 border-b-2 border-transparent hover:border-[#FEA735] pb-1">Who We Are</Link>
        </li>
        <li className="relative group">
          <div className="flex items-center cursor-pointer select-none hover:text-[#FE7235] transition-colors duration-150 border-b-2 border-transparent group-hover:border-[#FEA735] pb-1">
            <span className="flex items-center">
              <Link href="/WhatWeOffer">What We Offer</Link>
              <button
                onClick={handleArrowClick}
                className="ml-1 flex items-center focus:outline-none"
                style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                aria-label={dropdownOpen ? 'Close dropdown' : 'Open dropdown'}
                tabIndex={0}
                type="button"
              >
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </span>
          </div>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
              <li>
                <Link href="/WhatWeOffer/Insurance" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Insurance</Link>
              </li>
              <li>
                <Link href="/WhatWeOffer/Retirement" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Retirement</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/Resources" className="hover:text-[#FE7235] transition-colors duration-150 border-b-2 border-transparent hover:border-[#FEA735] pb-1">Resources</Link>
        </li>
        <li>
          <Link href="/Opportunities" className="hover:text-[#FE7235] transition-colors duration-150 border-b-2 border-transparent hover:border-[#FEA735] pb-1">Opportunities</Link>
        </li>
        <li>
          <Link href="/ConnectWithUs" className="hover:text-[#FE7235] transition-colors duration-150 border-b-2 border-transparent hover:border-[#FEA735] pb-1">Connect With Us</Link>
        </li>
      </ul>
      </div>
      {/* mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      {/* mobile nav links */}
      <div className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-[#FCF5EF] shadow-lg z-50 transform transition-transform duration-200 md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif' }}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-orange-200">
          <Link href="/">
          <Image
            src="/morning_peace_no_BG.png"
            alt="Morning Peace Financial Services Logo"
            width={140}
            height={56}
            priority
            style={{ cursor: 'pointer', position: 'relative', top: '-4px' }}
          />
          </Link>
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="text-gray-800 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-6 py-6 text-[#2faeed] font-bold text-lg" style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
          <li>
            <Link href="/WhoWeAre" onClick={() => setMobileMenuOpen(false)} className="block py-2">Who We Are</Link>
          </li>
          <li>
            <div className="flex items-center justify-between py-2 cursor-pointer select-none" onClick={() => setMobileDropdownOpen((open) => !open)}>
              <span>
                <Link href="/WhatWeOffer" onClick={() => setMobileMenuOpen(false)}>What We Offer</Link>
              </span>
              <button
                className="ml-2 flex items-center focus:outline-none"
                style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                aria-label={mobileDropdownOpen ? 'Close dropdown' : 'Open dropdown'}
                tabIndex={0}
                type="button"
                onClick={e => { e.stopPropagation(); setMobileDropdownOpen(open => !open); }}
              >
                <svg className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {mobileDropdownOpen && (
              <ul className="ml-4 mt-1 flex flex-col gap-1">
                <li>
                  <Link href="/WhatWeOffer/Insurance" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base">Insurance</Link>
                </li>
                <li>
                  <Link href="/WhatWeOffer/Retirement" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base">Retirement</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/Resources" onClick={() => setMobileMenuOpen(false)} className="block py-2">Resources</Link>
          </li>
          <li>
            <Link href="/Opportunities" onClick={() => setMobileMenuOpen(false)} className="block py-2">Opportunities</Link>
          </li>
          <li>
            <Link href="/ConnectWithUs" onClick={() => setMobileMenuOpen(false)} className="block py-2">Connect With Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
