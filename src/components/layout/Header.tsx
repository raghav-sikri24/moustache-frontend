'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HOTEL_TYPES } from '@/config/constants';
import { THEME } from '@/config/theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getActiveType = () => {
    if (pathname.includes('/luxuria')) return HOTEL_TYPES.LUXURIA;
    if (pathname.includes('/hostel')) return HOTEL_TYPES.HOSTEL;
    if (pathname.includes('/insignia')) return HOTEL_TYPES.INSIGNIA;
    return HOTEL_TYPES.LUXURIA; // Default
  };

  const activeType = getActiveType();

  const navItems = [
    {
      type: HOTEL_TYPES.LUXURIA,
      label: 'Luxuria',
      href: '/luxuria',
      color: THEME.COLORS.LUXURIA.PRIMARY,
    },
    {
      type: HOTEL_TYPES.HOSTEL,
      label: 'Hostel',
      href: '/hostel',
      color: THEME.COLORS.HOSTEL.PRIMARY,
    },
    {
      type: HOTEL_TYPES.INSIGNIA,
      label: 'Insignia',
      href: '/insignia',
      color: THEME.COLORS.INSIGNIA.PRIMARY,
    },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Moustache</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.type}>
                  <Link
                    href={item.href}
                    className={`relative px-1 py-2 text-lg transition-colors ${
                      activeType === item.type
                        ? 'font-semibold text-current'
                        : 'text-gray-600 hover:text-current'
                    }`}
                    style={{
                      color: activeType === item.type ? item.color : undefined,
                    }}
                  >
                    {item.label}
                    {activeType === item.type && (
                      <span
                        className="absolute bottom-0 left-0 h-0.5 w-full"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t md:hidden">
            <ul className="space-y-4 py-4">
              {navItems.map((item) => (
                <li key={item.type}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-lg ${
                      activeType === item.type
                        ? 'font-semibold text-current'
                        : 'text-gray-600'
                    }`}
                    style={{
                      color: activeType === item.type ? item.color : undefined,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
