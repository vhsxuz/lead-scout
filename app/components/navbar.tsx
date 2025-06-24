"use client";

import React, { useState } from "react";
import { Triangle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f19]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
          <Triangle className="w-5 h-5" strokeWidth={1.5} />
          Leadscout
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#demo" className="text-gray-300 hover:text-white transition">Demo</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </nav>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f19] border-t border-gray-800 px-6 pb-4 pt-4 space-y-3">
          <a href="#features" className="block text-gray-300 hover:text-white transition">Features</a>
          <a href="#demo" className="block text-gray-300 hover:text-white transition">Demo</a>
          <a href="#contact" className="block text-gray-300 hover:text-white transition">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;