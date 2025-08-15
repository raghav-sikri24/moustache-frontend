export interface LuxuriaHotel {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  amenities: string[];
  features: {
    name: string;
    description: string;
    icon: string;
  }[];
  rooms: {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity: number;
    amenities: string[];
    images: string[];
  }[];
}

export interface LuxuriaAvailability {
  roomId: string;
  dates: {
    date: string;
    available: boolean;
    price: number;
  }[];
}

export interface LuxuriaBooking {
  hotelId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface LuxuriaFilter {
  priceRange?: {
    min: number;
    max: number;
  };
  amenities?: string[];
  rating?: number;
  location?: string;
  dates?: {
    checkIn: string;
    checkOut: string;
  };
}
