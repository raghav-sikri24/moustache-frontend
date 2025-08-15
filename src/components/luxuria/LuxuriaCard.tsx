'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { LuxuriaHotel } from '@/types/luxuria';
import { THEME } from '@/config/theme';

interface LuxuriaCardProps {
  hotel: Pick<
    LuxuriaHotel,
    'id' | 'name' | 'location' | 'price' | 'rating' | 'images' | 'amenities'
  >;
}

const LuxuriaCard = ({ hotel }: LuxuriaCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + hotel.images.length) % hotel.images.length
    );
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1">
      {/* Image Gallery */}
      <div className="relative h-64">
        <img
          src={hotel.images[currentImageIndex]}
          alt={hotel.name}
          className="h-full w-full object-cover"
        />
        {hotel.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/75 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{hotel.name}</h3>
          <p className="text-white/90">{hotel.location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 font-medium">{hotel.rating}</span>
          </div>
          <p
            className="text-xl font-bold"
            style={{ color: THEME.COLORS.LUXURIA.PRIMARY }}
          >
            ${hotel.price}
            <span className="text-sm text-gray-600">/night</span>
          </p>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/luxuria/${hotel.id}`}
          className="block w-full rounded-lg bg-black px-4 py-2 text-center font-semibold text-white transition-colors hover:bg-gray-900"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default LuxuriaCard;
