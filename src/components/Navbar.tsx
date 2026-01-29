"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/invoices", label: "Facturas" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-new.png"
              alt="NCJM Maintenance Services"
              width={200}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain"
              style={{ objectFit: 'contain', filter: 'brightness(0.5) contrast(1.5)' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+13052822499"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm lg:text-base flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (305) 282-2499
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm lg:text-base"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-200/50">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Phone Button - Prominent */}
              <a
                href="tel:+13052822499"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (305) 282-2499
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-full transition-all duration-300 text-center shadow-md hover:shadow-lg w-fit"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

