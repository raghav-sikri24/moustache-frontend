export type UserRole = 'guest' | 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phoneNumber?: string;
  avatar?: string;
}

export interface Booking {
  id: string;
  hotelId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
