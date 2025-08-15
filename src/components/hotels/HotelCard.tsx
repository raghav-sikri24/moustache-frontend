'use client';

import Image from 'next/image';
import { FiStar, FiMapPin } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface HotelCardProps {
  name: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  amenities: string[];
}

export default function HotelCard({
  name,
  location,
  price,
  rating,
  images,
  amenities,
}: HotelCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-64 w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`${name} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center">
            <FiStar className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-gray-700">{rating}</span>
          </div>
        </div>

        <div className="mb-4 flex items-center text-gray-600">
          <FiMapPin className="mr-1 h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {amenities.map((amenity, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <span className="text-2xl font-bold text-blue-600">${price}</span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
