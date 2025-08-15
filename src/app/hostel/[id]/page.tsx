import { notFound } from 'next/navigation';

// This would typically come from an API
const getHostel = async (id: string) => {
  // Simulated hostel data
  const hostel = {
    id,
    name: 'Backpackers Paradise',
    location: 'Amsterdam, Netherlands',
    price: 29,
    rating: 4.5,
    description:
      "Experience the vibrant backpacker culture in our modern hostel located in the heart of Amsterdam. With a mix of dormitory and private rooms, we offer comfortable accommodation for budget-conscious travelers who don't want to compromise on quality.",
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
      'Bike Rental',
      'Free City Maps',
      'Board Games',
    ],
    roomTypes: [
      {
        name: 'Mixed Dormitory',
        beds: 8,
        price: 29,
      },
      {
        name: 'Female Dormitory',
        beds: 6,
        price: 32,
      },
      {
        name: 'Private Room',
        beds: 2,
        price: 65,
      },
    ],
  };

  return hostel;
};

export default async function HostelDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const hostel = await getHostel(params.id);

  if (!hostel) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        {hostel.images.map((image, index) => (
          <div
            key={index}
            className="relative h-[300px] overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={`${hostel.name} - Image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Hostel Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {hostel.name}
              </h1>
              <p className="mt-2 text-gray-600">{hostel.location}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">
                From ${hostel.price}
                <span className="text-sm text-gray-600">/night</span>
              </p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{hostel.rating}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-700">{hostel.description}</p>

          {/* Room Types */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Room Types
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {hostel.roomTypes.map((room, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-4 transition-colors hover:border-green-500"
                >
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <p className="text-gray-600">{room.beds} beds</p>
                  <p className="mt-2 font-bold text-green-600">
                    ${room.price}/night
                  </p>
                  <button className="mt-4 w-full rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
                    Book Now
                  </button>
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
              {hostel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <svg
                    className="mr-2 h-5 w-5 text-green-600"
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
        </div>
      </div>
    </div>
  );
}
