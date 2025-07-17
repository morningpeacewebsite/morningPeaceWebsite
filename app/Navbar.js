"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow flex items-center px-6 py-3">
      {/* Logo Placeholder */}
      <div className="flex items-center mr-8">
        <Link href="/">
          <Image
            src="/src/img/Screenshot_2025-07-17_123817-removebg-preview.png"
            alt="Morning Peace Financial Services Logo"
            width={120}
            height={48}
            priority
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-800 font-medium">
        <li>
          <Link href="/WhoWeAre" className="hover:text-blue-600 cursor-pointer">Who We Are</Link>
        </li>
        <li className="relative">
          <div className="hover:text-blue-600 cursor-pointer flex items-center focus:outline-none">
            <Link href="/WhatWeOffer">What We Offer</Link>
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Insurance</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Retirement</li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/Resources" className="hover:text-blue-600 cursor-pointer">Resources</Link>
        </li>
        <li>
          <Link href="/Opportunities" className="hover:text-blue-600 cursor-pointer">Opportunities</Link>
        </li>
        <li>
          <Link href="/ConnectWithUs" className="hover:text-blue-600 cursor-pointer">Connect With Us</Link>
        </li>
      </ul>
    </nav>
  );
} 