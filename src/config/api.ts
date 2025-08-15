export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  LUXURIA: {
    LIST: `${API_BASE_URL}/luxuria`,
    DETAILS: (id: string) => `${API_BASE_URL}/luxuria/${id}`,
    AVAILABILITY: (id: string) => `${API_BASE_URL}/luxuria/${id}/availability`,
    BOOKING: `${API_BASE_URL}/luxuria/booking`,
  },
  HOSTEL: {
    LIST: `${API_BASE_URL}/hostel`,
    DETAILS: (id: string) => `${API_BASE_URL}/hostel/${id}`,
    AVAILABILITY: (id: string) => `${API_BASE_URL}/hostel/${id}/availability`,
    BOOKING: `${API_BASE_URL}/hostel/booking`,
  },
  INSIGNIA: {
    LIST: `${API_BASE_URL}/insignia`,
    DETAILS: (id: string) => `${API_BASE_URL}/insignia/${id}`,
    AVAILABILITY: (id: string) => `${API_BASE_URL}/insignia/${id}/availability`,
    BOOKING: `${API_BASE_URL}/insignia/booking`,
  },
};
