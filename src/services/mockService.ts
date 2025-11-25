import {
    User,
    Education,
    Project,
    Experience,
    Skill,
    Course,
    ContactForm,
    ContactLinks,
} from '../types/admin.types';
import {
    mockUser,
    mockEducation,
    mockProjects,
    mockExperience,
    mockSkills,
    mockCourses,
    mockContactForms,
    mockContactLinks,
} from '../data/mockData';
import { STORAGE_KEYS, MOCK_CREDENTIALS } from '../utils/constants';

// Helper function to simulate API delay
const delay = (ms: number = 500) =>
    new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to get data from localStorage
const getFromStorage = <T>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
};

// Helper function to save data to localStorage
const saveToStorage = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
};

// Initialize localStorage with mock data if empty
export const initializeMockData = () => {
    if (!localStorage.getItem(STORAGE_KEYS.EDUCATION)) {
        saveToStorage(STORAGE_KEYS.EDUCATION, mockEducation);
    }
    if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
        saveToStorage(STORAGE_KEYS.PROJECTS, mockProjects);
    }
    if (!localStorage.getItem(STORAGE_KEYS.EXPERIENCE)) {
        saveToStorage(STORAGE_KEYS.EXPERIENCE, mockExperience);
    }
    if (!localStorage.getItem(STORAGE_KEYS.SKILLS)) {
        saveToStorage(STORAGE_KEYS.SKILLS, mockSkills);
    }
    if (!localStorage.getItem(STORAGE_KEYS.COURSES)) {
        saveToStorage(STORAGE_KEYS.COURSES, mockCourses);
    }
    if (!localStorage.getItem(STORAGE_KEYS.CONTACT_FORMS)) {
        saveToStorage(STORAGE_KEYS.CONTACT_FORMS, mockContactForms);
    }
    if (!localStorage.getItem(STORAGE_KEYS.CONTACT_LINKS)) {
        saveToStorage(STORAGE_KEYS.CONTACT_LINKS, mockContactLinks);
    }
};

// Auth Service
export const authService = {
    login: async (email: string, password: string): Promise<User | null> => {
        await delay();
        if (
            email === MOCK_CREDENTIALS.email &&
            password === MOCK_CREDENTIALS.password
        ) {
            saveToStorage(STORAGE_KEYS.AUTH_USER, mockUser);
            saveToStorage(STORAGE_KEYS.AUTH_TOKEN, 'mock-jwt-token');
            return mockUser;
        }
        return null;
    },

    logout: () => {
        localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    },

    getCurrentUser: (): User | null => {
        return getFromStorage<User | null>(STORAGE_KEYS.AUTH_USER, null);
    },
};

// Education Service
export const educationService = {
    getAll: async (): Promise<Education[]> => {
        await delay();
        return getFromStorage(STORAGE_KEYS.EDUCATION, mockEducation);
    },

    getById: async (id: string): Promise<Education | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EDUCATION, mockEducation);
        return items.find((item) => item.id === id) || null;
    },

    create: async (data: Omit<Education, 'id' | 'createdAt' | 'updatedAt'>): Promise<Education> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EDUCATION, mockEducation);
        const newItem: Education = {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const updated = [...items, newItem];
        saveToStorage(STORAGE_KEYS.EDUCATION, updated);
        return newItem;
    },

    update: async (id: string, data: Partial<Education>): Promise<Education | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EDUCATION, mockEducation);
        const index = items.findIndex((item) => item.id === id);
        if (index === -1) return null;

        const updated = items.map((item) =>
            item.id === id
                ? { ...item, ...data, updatedAt: new Date().toISOString() }
                : item
        );
        saveToStorage(STORAGE_KEYS.EDUCATION, updated);
        return updated[index];
    },

    delete: async (id: string): Promise<boolean> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EDUCATION, mockEducation);
        const filtered = items.filter((item) => item.id !== id);
        saveToStorage(STORAGE_KEYS.EDUCATION, filtered);
        return true;
    },
};

// Projects Service
export const projectsService = {
    getAll: async (): Promise<Project[]> => {
        await delay();
        return getFromStorage(STORAGE_KEYS.PROJECTS, mockProjects);
    },

    getById: async (id: string): Promise<Project | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.PROJECTS, mockProjects);
        return items.find((item) => item.id === id) || null;
    },

    create: async (data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.PROJECTS, mockProjects);
        const newItem: Project = {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const updated = [...items, newItem];
        saveToStorage(STORAGE_KEYS.PROJECTS, updated);
        return newItem;
    },

    update: async (id: string, data: Partial<Project>): Promise<Project | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.PROJECTS, mockProjects);
        const index = items.findIndex((item) => item.id === id);
        if (index === -1) return null;

        const updated = items.map((item) =>
            item.id === id
                ? { ...item, ...data, updatedAt: new Date().toISOString() }
                : item
        );
        saveToStorage(STORAGE_KEYS.PROJECTS, updated);
        return updated[index];
    },

    delete: async (id: string): Promise<boolean> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.PROJECTS, mockProjects);
        const filtered = items.filter((item) => item.id !== id);
        saveToStorage(STORAGE_KEYS.PROJECTS, filtered);
        return true;
    },
};

// Experience Service
export const experienceService = {
    getAll: async (): Promise<Experience[]> => {
        await delay();
        return getFromStorage(STORAGE_KEYS.EXPERIENCE, mockExperience);
    },

    getById: async (id: string): Promise<Experience | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EXPERIENCE, mockExperience);
        return items.find((item) => item.id === id) || null;
    },

    create: async (data: Omit<Experience, 'id' | 'createdAt' | 'updatedAt'>): Promise<Experience> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EXPERIENCE, mockExperience);
        const newItem: Experience = {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const updated = [...items, newItem];
        saveToStorage(STORAGE_KEYS.EXPERIENCE, updated);
        return newItem;
    },

    update: async (id: string, data: Partial<Experience>): Promise<Experience | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EXPERIENCE, mockExperience);
        const index = items.findIndex((item) => item.id === id);
        if (index === -1) return null;

        const updated = items.map((item) =>
            item.id === id
                ? { ...item, ...data, updatedAt: new Date().toISOString() }
                : item
        );
        saveToStorage(STORAGE_KEYS.EXPERIENCE, updated);
        return updated[index];
    },

    delete: async (id: string): Promise<boolean> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.EXPERIENCE, mockExperience);
        const filtered = items.filter((item) => item.id !== id);
        saveToStorage(STORAGE_KEYS.EXPERIENCE, filtered);
        return true;
    },
};

// Skills Service
export const skillsService = {
    get: async (): Promise<Skill | null> => {
        await delay();
        return getFromStorage(STORAGE_KEYS.SKILLS, mockSkills);
    },

    update: async (data: Partial<Skill>): Promise<Skill> => {
        await delay();
        const current = getFromStorage(STORAGE_KEYS.SKILLS, mockSkills);
        const updated = {
            ...current,
            ...data,
            updatedAt: new Date().toISOString(),
        };
        saveToStorage(STORAGE_KEYS.SKILLS, updated);
        return updated;
    },
};

// Courses Service
export const coursesService = {
    getAll: async (): Promise<Course[]> => {
        await delay();
        return getFromStorage(STORAGE_KEYS.COURSES, mockCourses);
    },

    getById: async (id: string): Promise<Course | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.COURSES, mockCourses);
        return items.find((item) => item.id === id) || null;
    },

    create: async (data: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<Course> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.COURSES, mockCourses);
        const newItem: Course = {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const updated = [...items, newItem];
        saveToStorage(STORAGE_KEYS.COURSES, updated);
        return newItem;
    },

    update: async (id: string, data: Partial<Course>): Promise<Course | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.COURSES, mockCourses);
        const index = items.findIndex((item) => item.id === id);
        if (index === -1) return null;

        const updated = items.map((item) =>
            item.id === id
                ? { ...item, ...data, updatedAt: new Date().toISOString() }
                : item
        );
        saveToStorage(STORAGE_KEYS.COURSES, updated);
        return updated[index];
    },

    delete: async (id: string): Promise<boolean> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.COURSES, mockCourses);
        const filtered = items.filter((item) => item.id !== id);
        saveToStorage(STORAGE_KEYS.COURSES, filtered);
        return true;
    },
};

// Contact Forms Service
export const contactFormsService = {
    getAll: async (): Promise<ContactForm[]> => {
        await delay();
        return getFromStorage(STORAGE_KEYS.CONTACT_FORMS, mockContactForms);
    },

    getById: async (id: string): Promise<ContactForm | null> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.CONTACT_FORMS, mockContactForms);
        return items.find((item) => item.id === id) || null;
    },

    delete: async (id: string): Promise<boolean> => {
        await delay();
        const items = getFromStorage(STORAGE_KEYS.CONTACT_FORMS, mockContactForms);
        const filtered = items.filter((item) => item.id !== id);
        saveToStorage(STORAGE_KEYS.CONTACT_FORMS, filtered);
        return true;
    },
};

// Contact Links Service
export const contactLinksService = {
    get: async (): Promise<ContactLinks | null> => {
        await delay();
        return getFromStorage(STORAGE_KEYS.CONTACT_LINKS, mockContactLinks);
    },

    update: async (data: Partial<ContactLinks>): Promise<ContactLinks> => {
        await delay();
        const current = getFromStorage(STORAGE_KEYS.CONTACT_LINKS, mockContactLinks);
        const updated = {
            ...current,
            ...data,
            updatedAt: new Date().toISOString(),
        };
        saveToStorage(STORAGE_KEYS.CONTACT_LINKS, updated);
        return updated;
    },
};
