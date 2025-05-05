
export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string; // ISO Date string
}

export interface ContactInfo {
  phoneNumber: string;
  whatsappNumber: string;
  address: string;
  businessHours: string;
  googleMapsLink: string;
}

export interface UserSettings {
  contactInfo: ContactInfo;
  storeSettings: {
    storeName: string;
    logo: string;
    bannerImage: string;
  };
}
