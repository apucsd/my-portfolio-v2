export const STORAGE_KEYS = {
    AUTH_USER: 'portfolio_admin_user',
    AUTH_TOKEN: 'portfolio_admin_token',
    EDUCATION: 'portfolio_education',
    PROJECTS: 'portfolio_projects',
    EXPERIENCE: 'portfolio_experience',
    SKILLS: 'portfolio_skills',
    COURSES: 'portfolio_courses',
    CONTACT_FORMS: 'portfolio_contact_forms',
    CONTACT_LINKS: 'portfolio_contact_links',
};

export const MOCK_CREDENTIALS = {
    email: 'apusutradhar77@gmail.com',
    password: '123456',
};

export const ROUTES = {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin',
    EDUCATION: '/admin/education',
    PROJECTS: '/admin/projects',
    EXPERIENCE: '/admin/experience',
    SKILLS: '/admin/skills',
    COURSES: '/admin/courses',
    CONTACT_FORMS: '/admin/contact-forms',
    CONTACT_LINKS: '/admin/contact-links',
    PROFILE: '/admin/profile',
    SETTINGS: '/admin/settings',
};

export const MENU_ITEMS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: ROUTES.DASHBOARD,
        icon: 'DashboardOutlined',
    },
    {
        key: 'education',
        label: 'Education',
        path: ROUTES.EDUCATION,
        icon: 'BookOutlined',
    },
    {
        key: 'projects',
        label: 'Projects',
        path: ROUTES.PROJECTS,
        icon: 'ProjectOutlined',
    },
    {
        key: 'experience',
        label: 'Experience',
        path: ROUTES.EXPERIENCE,
        icon: 'TrophyOutlined',
    },
    {
        key: 'skills',
        label: 'Skills',
        path: ROUTES.SKILLS,
        icon: 'CodeOutlined',
    },
    {
        key: 'courses',
        label: 'Courses',
        path: ROUTES.COURSES,
        icon: 'SafetyCertificateOutlined',
    },
    {
        key: 'contact',
        label: 'Contact',
        icon: 'ContactsOutlined',
        children: [
            {
                key: 'contact-forms',
                label: 'Contact Forms',
                path: ROUTES.CONTACT_FORMS,
            },
            {
                key: 'contact-links',
                label: 'Contact Links',
                path: ROUTES.CONTACT_LINKS,
            },
        ],
    },
];
