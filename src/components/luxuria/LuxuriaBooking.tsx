'use client';

import { useState } from 'react';
import { useCreateLuxuriaBooking } from '@/hooks/useLuxuria';
import type { LuxuriaHotel } from '@/types/luxuria';
import { THEME } from '@/config/theme';

interface LuxuriaBookingProps {
  hotel: LuxuriaHotel;
  selectedRoom?: LuxuriaHotel['rooms'][0];
}

const LuxuriaBooking = ({ hotel, selectedRoom }: LuxuriaBookingProps) => {
  const [dates, setDates] = useState({
    checkIn: '',
    checkOut: '',
  });
  const [guests, setGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createBooking = useCreateLuxuriaBooking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRoom) return;

    setIsSubmitting(true);
    try {
      await createBooking.mutateAsync({
        hotelId: hotel.id,
        roomId: selectedRoom.id,
        checkIn: dates.checkIn,
        checkOut: dates.checkOut,
        guests,
        totalPrice: selectedRoom.price,
      });
      // Handle success (redirect to confirmation page, show success message, etc.)
    } catch (error) {
      // Handle error
      console.error('Booking failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedRoom) {
    return (
      <div className="rounded-lg bg-gray-50 p-6">
        <p className="text-center text-gray-600">
          Please select a room to proceed with booking
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-6 text-2xl font-bold">Book Your Stay</h3>

      {/* Room Info */}
      <div className="mb-6">
        <h4 className="font-semibold">{selectedRoom.name}</h4>
        <p className="text-gray-600">{selectedRoom.description}</p>
        <p
          className="mt-2 text-xl font-bold"
          style={{ color: THEME.COLORS.LUXURIA.PRIMARY }}
        >
          ${selectedRoom.price}
          <span className="text-sm text-gray-600">/night</span>
        </p>
      </div>

      {/* Dates */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Check-in Date</label>
          <input
            type="date"
            value={dates.checkIn}
            onChange={(e) =>
              setDates((prev) => ({ ...prev, checkIn: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
        </div>
        <div>
          <label className="mb-2 block font-medium">Check-out Date</label>
          <input
            type="date"
            value={dates.checkOut}
            onChange={(e) =>
              setDates((prev) => ({ ...prev, checkOut: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
            required
          />
        </div>
      </div>

      {/* Guests */}
      <div className="mb-6">
        <label className="mb-2 block font-medium">Number of Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
        >
          {Array.from({ length: selectedRoom.capacity }, (_, i) => i + 1).map(
            (num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            )
          )}
        </select>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <h4 className="mb-2 font-medium">Room Amenities</h4>
        <div className="flex flex-wrap gap-2">
          {selectedRoom.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-900 disabled:bg-gray-400"
        style={{
          backgroundColor: THEME.COLORS.LUXURIA.PRIMARY,
        }}
      >
        {isSubmitting ? 'Processing...' : 'Book Now'}
      </button>

      {/* Booking Policy */}
      <p className="mt-4 text-center text-sm text-gray-600">
        By clicking "Book Now", you agree to our terms and conditions and
        cancellation policy.
      </p>
    </form>
  );
};

export default LuxuriaBooking;
