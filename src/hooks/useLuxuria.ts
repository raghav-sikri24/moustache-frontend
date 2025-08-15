import { useQuery, useMutation, UseQueryResult } from '@tanstack/react-query';
import axios from '@/lib/axios';
import { API_ENDPOINTS } from '@/config/api';
import type {
  LuxuriaHotel,
  LuxuriaAvailability,
  LuxuriaBooking,
  LuxuriaFilter,
} from '@/types/luxuria';

// Fetch all Luxuria hotels
export const useLuxuriaHotels = (
  filters?: LuxuriaFilter
): UseQueryResult<LuxuriaHotel[]> => {
  return useQuery({
    queryKey: ['luxuriaHotels', filters],
    queryFn: async () => {
      const { data } = await axios.get(API_ENDPOINTS.LUXURIA.LIST, {
        params: filters,
      });
      return data;
    },
  });
};

// Fetch single Luxuria hotel details
export const useLuxuriaHotel = (id: string): UseQueryResult<LuxuriaHotel> => {
  return useQuery({
    queryKey: ['luxuriaHotel', id],
    queryFn: async () => {
      const { data } = await axios.get(API_ENDPOINTS.LUXURIA.DETAILS(id));
      return data;
    },
    enabled: !!id,
  });
};

// Check room availability
export const useLuxuriaAvailability = (
  hotelId: string,
  dates?: { checkIn: string; checkOut: string }
): UseQueryResult<LuxuriaAvailability[]> => {
  return useQuery({
    queryKey: ['luxuriaAvailability', hotelId, dates],
    queryFn: async () => {
      const { data } = await axios.get(
        API_ENDPOINTS.LUXURIA.AVAILABILITY(hotelId),
        {
          params: dates,
        }
      );
      return data;
    },
    enabled: !!hotelId && !!dates,
  });
};

// Create booking
export const useCreateLuxuriaBooking = () => {
  return useMutation({
    mutationFn: async (booking: Omit<LuxuriaBooking, 'status'>) => {
      const { data } = await axios.post(API_ENDPOINTS.LUXURIA.BOOKING, booking);
      return data;
    },
  });
};

// Update booking
export const useUpdateLuxuriaBooking = () => {
  return useMutation({
    mutationFn: async ({
      bookingId,
      updates,
    }: {
      bookingId: string;
      updates: Partial<LuxuriaBooking>;
    }) => {
      const { data } = await axios.patch(
        `${API_ENDPOINTS.LUXURIA.BOOKING}/${bookingId}`,
        updates
      );
      return data;
    },
  });
};

// Cancel booking
export const useCancelLuxuriaBooking = () => {
  return useMutation({
    mutationFn: async (bookingId: string) => {
      const { data } = await axios.post(
        `${API_ENDPOINTS.LUXURIA.BOOKING}/${bookingId}/cancel`
      );
      return data;
    },
  });
};
