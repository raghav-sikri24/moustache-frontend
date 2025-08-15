import { notFound } from 'next/navigation';

// This would typically come from an API
const getInsigniaHotel = async (id: string) => {
  // Simulated hotel data
  const hotel = {
    id,
    name: 'The Peninsula Suite',
    location: 'Hong Kong',
    price: 599,
    rating: 4.8,
    description:
      'Experience refined luxury in our signature Insignia suite with breathtaking harbor views. Perfect for business travelers who demand excellence, featuring a dedicated workspace, meeting room, and premium amenities.',
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
      'Business Center',
      'Meeting Room',
      'Executive Lounge',
    ],
    businessFeatures: [
      {
        name: 'Business Center',
        description: '24/7 access to fully equipped business center',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      },
      {
        name: 'Meeting Facilities',
        description: 'Private meeting rooms with video conferencing',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      },
      {
        name: 'Executive Services',
        description: 'Dedicated concierge and business support',
        icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      },
    ],
  };

  return hotel;
};

export default async function InsigniaDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const hotel = await getInsigniaHotel(params.id);

  if (!hotel) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        {hotel.images.map((image, index) => (
          <div
            key={index}
            className="relative h-[300px] overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={`${hotel.name} - Image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Hotel Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
              <p className="mt-2 text-gray-600">{hotel.location}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-800">
                ${hotel.price}
                <span className="text-sm text-gray-600">/night</span>
              </p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{hotel.rating}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-700">{hotel.description}</p>

          {/* Business Features */}
          <div className="mt-8">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Business Features
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {hotel.businessFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-6 transition-colors hover:border-purple-500"
                >
                  <div className="mb-4 flex items-center">
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
                        d={feature.icon}
                      />
                    </svg>
                    <h3 className="ml-3 text-lg font-semibold">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Amenities
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <svg
                    className="mr-2 h-5 w-5 text-purple-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Button */}
          <div className="mt-8">
            <button className="w-full rounded-lg bg-purple-800 px-8 py-3 text-white transition-colors hover:bg-purple-900 md:w-auto">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
