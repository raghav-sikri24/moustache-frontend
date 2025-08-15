import { notFound } from 'next/navigation';

// This would typically come from an API
const getLuxuriaHotel = async (id: string) => {
  // Simulated hotel data
  const hotel = {
    id,
    name: 'The Ritz-Carlton Suite',
    location: 'Central Park, New York',
    price: 999,
    rating: 4.9,
    description:
      'Experience unparalleled luxury in our signature suite overlooking Central Park. This palatial accommodation features handcrafted furnishings, rare artworks, and panoramic views of the city skyline.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
    ],
    amenities: [
      '24/7 Butler Service',
      'Private Pool',
      'Spa Access',
      'Michelin Restaurant',
      'Helipad',
      'Private Bar',
      'Walk-in Closet',
      'Smart Home Controls',
    ],
  };

  return hotel;
};

export default async function LuxuriaDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const hotel = await getLuxuriaHotel(params.id);

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
              <p className="text-2xl font-bold text-blue-600">
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

          {/* Amenities */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Amenities
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <svg
                    className="mr-2 h-5 w-5 text-blue-600"
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
            <button className="w-full rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700 md:w-auto">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
