import HotelCard from '@/components/hotels/HotelCard';

const HOSTEL_HOTELS = [
  {
    name: 'Backpackers Paradise',
    location: 'Amsterdam, Netherlands',
    price: 29,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
      'https://images.unsplash.com/photo-1576675784201-0e142b423952',
      'https://images.unsplash.com/photo-1626265774643-f1943311a86b',
    ],
    amenities: [
      'Free WiFi',
      'Common Kitchen',
      'Lockers',
      '24/7 Reception',
      'Laundry',
    ],
  },
  {
    name: 'Urban Nomad Hostel',
    location: 'Barcelona, Spain',
    price: 25,
    rating: 4.3,
    images: [
      'https://images.unsplash.com/photo-1576675784201-0e142b423952',
      'https://images.unsplash.com/photo-1626265774643-f1943311a86b',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
    ],
    amenities: ['Rooftop Bar', 'Bike Rental', 'Game Room', 'Free Breakfast'],
  },
];

export default function HostelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex h-[400px] items-center justify-center bg-green-600 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Hostel Collection
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Adventure-friendly accommodations for the budget traveler
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {HOSTEL_HOTELS.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Our Hostels
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Social Atmosphere</h3>
              <p className="text-gray-600">
                Meet fellow travelers from around the world
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Budget-Friendly</h3>
              <p className="text-gray-600">
                Great value without compromising comfort
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Prime Locations</h3>
              <p className="text-gray-600">
                Located in the heart of popular destinations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
