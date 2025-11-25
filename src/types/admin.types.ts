export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'SUPERADMIN';
  status: 'ACTIVE' | 'INACTIVE' | 'BLOCKED';
  profileImage?: string;
  phoneNumber?: string;
  bio?: string;
  location?: string;
  dateOfBirth?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Education {
  id: string;
  name: string;
  institution: string;
  passingYear: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
  repoLink?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Experience {
  id: string;
  companyName: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  works: string[];
  techs: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: string;
  backend: string[];
  frontend: string[];
  devOps: string[];
  database: string[];
  tools: string[];
  other: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  year: number;
  description: string;
  certificate: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactForm {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface ContactLinks {
  id: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  phone?: string;
  email?: string;
  address?: string;
  resume?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface DashboardStats {
  totalProjects: number;
  totalEducation: number;
  totalExperience: number;
  totalSkills: number;
  totalCourses: number;
  totalContactForms: number;
}
