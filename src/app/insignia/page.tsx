import HotelCard from '@/components/hotels/HotelCard';

const INSIGNIA_HOTELS = [
  {
    name: 'The Peninsula Suite',
    location: 'Hong Kong',
    price: 599,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
    ],
    amenities: [
      'Harbour View',
      'Club Access',
      'Private Spa',
      'Chauffeur Service',
      'Fine Dining',
    ],
  },
  {
    name: 'Four Seasons Executive',
    location: 'Tokyo, Japan',
    price: 499,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    ],
    amenities: [
      'City View',
      'Business Center',
      'Fitness Studio',
      'Tea Ceremony',
    ],
  },
];

export default function InsigniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex h-[400px] items-center justify-center bg-purple-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Insignia Collection
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Premium hotels for the discerning business traveler
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INSIGNIA_HOTELS.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Business Travel Excellence
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-8 w-8 text-purple-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Business Centers</h3>
              <p className="text-gray-600">
                Fully equipped workspaces available 24/7
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-8 w-8 text-purple-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Express Check-in</h3>
              <p className="text-gray-600">
                Streamlined process for busy professionals
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-8 w-8 text-purple-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Corporate Benefits</h3>
              <p className="text-gray-600">Special rates and loyalty rewards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
