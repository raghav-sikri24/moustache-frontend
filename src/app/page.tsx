'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HOTEL_TYPES } from '@/config/constants';
import { THEME } from '@/config/theme';

const hotelTypes = [
  {
    type: HOTEL_TYPES.LUXURIA,
    title: 'Luxuria',
    description: 'Experience unparalleled luxury and sophistication',
    image: '/images/luxuria-hero.jpg',
    color: THEME.COLORS.LUXURIA.PRIMARY,
    accent: THEME.COLORS.LUXURIA.SECONDARY,
    features: [
      'Butler Service',
      'Private Pool',
      'Michelin Dining',
      'Spa Access',
    ],
  },
  {
    type: HOTEL_TYPES.HOSTEL,
    title: 'Hostel',
    description: 'Adventure-friendly accommodations for the budget traveler',
    image: '/images/hostel-hero.jpg',
    color: THEME.COLORS.HOSTEL.PRIMARY,
    accent: THEME.COLORS.HOSTEL.SECONDARY,
    features: [
      'Social Spaces',
      'Budget-Friendly',
      'Local Experience',
      'Flexible Stays',
    ],
  },
  {
    type: HOTEL_TYPES.INSIGNIA,
    title: 'Insignia',
    description: 'Premium hotels for the discerning business traveler',
    image: '/images/insignia-hero.jpg',
    color: THEME.COLORS.INSIGNIA.PRIMARY,
    accent: THEME.COLORS.INSIGNIA.SECONDARY,
    features: [
      'Business Center',
      'Meeting Rooms',
      'Express Check-in',
      'Executive Lounge',
    ],
  },
];

export default function Home() {
  const [selectedType, setSelectedType] = useState(HOTEL_TYPES.LUXURIA);

  return (
    <main className="min-h-screen">
      {/* Rest of the component remains the same */}
      {/* ... */}
    </main>
  );
}
