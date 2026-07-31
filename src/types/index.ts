export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'member' | 'admin';
  created_at: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  image?: string;
}