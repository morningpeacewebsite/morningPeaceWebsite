"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow flex items-center px-6 py-3">
      {/* Logo Placeholder */}
      <div className="flex items-center mr-8">
        <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center font-bold text-lg text-gray-500">
          Logo
        </div>
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-800 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Who We Are</li>
        <li className="relative">
          <button
            className="hover:text-blue-600 cursor-pointer flex items-center focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 100)}
          >
            What We Offer
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Insurance</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Retirement</li>
            </ul>
          )}
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Resources</li>
        <li className="hover:text-blue-600 cursor-pointer">Opportunities</li>
        <li className="hover:text-blue-600 cursor-pointer">Connect With Us</li>
      </ul>
    </nav>
  );
} 