import HotelCard from '@/components/hotels/HotelCard';

const LUXURIA_HOTELS = [
  {
    name: 'The Ritz-Carlton Suite',
    location: 'Central Park, New York',
    price: 999,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
    ],
    amenities: [
      'Butler Service',
      'Private Pool',
      'Spa Access',
      'Michelin Restaurant',
      'Helipad',
    ],
  },
  {
    name: 'Burj Al Arab Royal Suite',
    location: 'Dubai, UAE',
    price: 1299,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    ],
    amenities: [
      'Private Beach',
      'Gold-Plated Fixtures',
      'Personal Chef',
      'Rolls-Royce Transfer',
    ],
  },
];

export default function LuxuriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex h-[400px] items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Luxuria Collection
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Experience unparalleled luxury and sophistication
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LUXURIA_HOTELS.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </section>
    </div>
  );
}
