
export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  category: string;
  createdAt: number;
}

export interface GalleryProject {
  id?: number;
  title: string;
  category: 'Bathroom' | 'Kitchen' | 'Floor' | 'Staircase' | 'Renovation';
  imageBefore: string;
  imageAfter: string;
  duration?: string;
  materials?: string;
  createdAt: number;
}

export type EntryType = 'booking' | 'contact' | 'inquiry';
export type EntryStatus = 'new' | 'contacted' | 'scheduled' | 'completed';

export interface FormEntry {
  id?: number;
  type: EntryType;
  name: string;
  phone: string;
  whatsapp?: string;
  serviceType?: string;
  location?: string;
  date?: string;
  time?: string;
  message?: string;
  status: EntryStatus;
  createdAt: number;
  updatedAt: number;
}

export interface AdminSettings {
  id: 'credentials';
  passwordHash: string;
  lastUpdated: number;
}
