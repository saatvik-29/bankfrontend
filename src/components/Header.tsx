'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Define page-specific text colors only
  const getPageColors = () => {
    switch (pathname) {
      case '/loans/home':
        return {
          text: 'text-[#581c87]',
          hoverBg: 'hover:bg-[#581c87]/10',
          buttonBg: 'bg-[#581c87] text-white hover:bg-[#581c87]/90'
        };
      case '/loans/property':
        return {
          text: 'text-[#235a56]',
          hoverBg: 'hover:bg-[#235a56]/10',
          buttonBg: 'bg-[#235a56] text-white hover:bg-[#235a56]/90'
        };
      case '/loans/car':
        return {
          text: 'text-[#7c2d12]',
          hoverBg: 'hover:bg-[#7c2d12]/10',
          buttonBg: 'bg-[#7c2d12] text-white hover:bg-[#7c2d12]/90'
        };
      case '/loans/personal':
        return {
          text: 'text-[#15803d]',
          hoverBg: 'hover:bg-[#15803d]/10',
          buttonBg: 'bg-[#15803d] text-white hover:bg-[#15803d]/90'
        };
      case '/loans/business':
        return {
          text: 'text-[#581c87]',
          hoverBg: 'hover:bg-[#581c87]/10',
          buttonBg: 'bg-[#581c87] text-white hover:bg-[#581c87]/90'
        };
      case '/loans/education':
        return {
          text: 'text-[#15803d]',
          hoverBg: 'hover:bg-[#15803d]/10',
          buttonBg: 'bg-[#15803d] text-white hover:bg-[#15803d]/90'
        };
      case '/about':
        return {
          text: 'text-white',
          hoverBg: 'hover:bg-white/10',
          buttonBg: 'bg-white text-[#059669] hover:bg-gray-100'
        };
      case '/contact':
        return {
          text: 'text-black',
          hoverBg: 'hover:bg-black/10',
          buttonBg: 'bg-black text-white hover:bg-gray-800'
        };
      case '/calculators':
        return {
          text: 'text-[#2563eb]',
          hoverBg: 'hover:bg-[#2563eb]/10',
          buttonBg: 'bg-[#2563eb] text-white hover:bg-[#2563eb]/90'
        };
      case '/blog':
        return {
          text: 'text-[#1e40af]',
          hoverBg: 'hover:bg-[#1e40af]/10',
          buttonBg: 'bg-[#1e40af] text-white hover:bg-[#1e40af]/90'
        };
      case '/cibil-score':
        return {
          text: 'text-[#be185d]',
          hoverBg: 'hover:bg-[#be185d]/10',
          buttonBg: 'bg-[#be185d] text-white hover:bg-[#be185d]/90'
        };
      default:
        return {
          text: 'text-gray-900',
          hoverBg: 'hover:bg-gray-100',
          buttonBg: 'bg-gray-800 text-white hover:bg-gray-900'
        };
    }
  };

  const colors = getPageColors();

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent z-50 w-full">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className={`text-2xl md:text-3xl font-bold ${colors.text} hover:opacity-80 transition-all duration-200`}>
              BankersDen
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className={`${colors.text} font-medium px-3 py-2 rounded-lg ${colors.hoverBg} transition-all duration-200`}>
                Loans
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200">
                <Link href="/loans/home" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#581c87] transition-colors text-sm">Home Loan</Link>
                <Link href="/loans/property" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#235a56] transition-colors text-sm">Loan Against Property</Link>
                <Link href="/loans/car" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#7c2d12] transition-colors text-sm">Car Loan</Link>
                <Link href="/loans/personal" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#15803d] transition-colors text-sm">Personal Loan</Link>
                <Link href="/loans/business" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#581c87] transition-colors text-sm">Business Loan</Link>
                <Link href="/loans/education" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#15803d] transition-colors text-sm">Education Loan</Link>
              </div>
            </div>
            <Link href="/calculators" className={`${colors.text} font-medium px-3 py-2 rounded-lg ${colors.hoverBg} transition-all duration-200`}>
              Calculators
            </Link>
            <Link href="/about" className={`${colors.text} font-medium px-3 py-2 rounded-lg ${colors.hoverBg} transition-all duration-200`}>
              About
            </Link>
            <Link href="/blog" className={`${colors.text} font-medium px-3 py-2 rounded-lg ${colors.hoverBg} transition-all duration-200`}>
              Blog
            </Link>
            <Link href="/contact" className={`${colors.text} font-medium px-3 py-2 rounded-lg ${colors.hoverBg} transition-all duration-200`}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className={`${colors.buttonBg} px-6 py-2 rounded-lg font-medium shadow-sm transition-all duration-200`}
            >
              Get Started
            </Link>
          </div>

          <button
            className={`md:hidden ${colors.text}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              <Link href="/loans/home" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Home Loan</Link>
              <Link href="/loans/property" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Loan Against Property</Link>
              <Link href="/loans/car" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Car Loan</Link>
              <Link href="/loans/personal" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Personal Loan</Link>
              <Link href="/loans/business" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Business Loan</Link>
              <Link href="/loans/education" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Education Loan</Link>
              <Link href="/about" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>About Us</Link>
              <Link href="/bd-partner" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>BD Partner</Link>
              <Link href="/insurance" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Insurance</Link>
              <Link href="/calculators" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Calculators</Link>
              <Link href="/cibil-score" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>CIBIL Score</Link>
              <Link href="/blog" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Blog</Link>
              <Link href="/contact" className={`${colors.text} font-medium py-2 px-4 ${colors.hoverBg} rounded-lg transition-colors`}>Contact</Link>
              <Link href="/contact" className={`${colors.buttonBg} px-4 py-2 rounded-lg font-medium text-center mt-2 transition-colors`}>Get Started</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};