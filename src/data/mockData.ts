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

export const mockUser: User = {
    id: '1',
    name: 'Apu Sutradhar',
    email: 'apusutradhar77@gmail.com',
    role: 'ADMIN',
    status: 'ACTIVE',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    phoneNumber: '+880 1234567890',
    bio: 'Full Stack Developer with expertise in MERN stack',
    location: 'Dhaka, Bangladesh',
    dateOfBirth: '1995-01-15T00:00:00.000Z',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2024-11-25T00:00:00.000Z',
};

export const mockEducation: Education[] = [
    {
        id: '1',
        name: 'Diploma in Computer Science and Engineering',
        institution: 'Narsingdi Polytechnic Institute',
        passingYear: '2018 - 2020',
        description:
            'Completed a 4-year diploma in Computer Science and Engineering under the Bangladesh Technical Education Board (BTEB). Gained hands-on experience in programming, networking, database management, and software development. Completed industrial training and projects in web development and system design.',
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
    },
    {
        id: '2',
        name: 'Secondary School Certificate (SSC)',
        institution: 'Narsingdi Government High School',
        passingYear: '2016',
        description:
            'Completed secondary education with focus on Science group. Achieved excellent results in Mathematics, Physics, and Chemistry.',
        createdAt: '2023-01-02T00:00:00.000Z',
        updatedAt: '2023-01-02T00:00:00.000Z',
    },
];

export const mockProjects: Project[] = [
    {
        id: '1',
        title: 'MEHOR',
        description:
            "At Mehor, we believe that fashion is more than clothing—it's a global language of self-expression, creativity, and culture. We've created this platform as a space where designers, manufacturers, students, and style enthusiasts from all backgrounds can come together to share knowledge, spark ideas, and grow together.",
        image: 'https://i.ibb.co.com/HD0Jx9Kh/mehor.png',
        link: 'https://mehor.com/',
        techs: ['React', 'Antd', 'Tailwind CSS', 'Redux'],
        repoLink: '',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
    },
    {
        id: '2',
        title: 'E-Commerce Platform',
        description:
            'A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with modern technologies and best practices.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
        link: 'https://example-ecommerce.com',
        techs: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux Toolkit'],
        repoLink: 'https://github.com/example/ecommerce',
        createdAt: '2024-02-01T00:00:00.000Z',
        updatedAt: '2024-02-01T00:00:00.000Z',
    },
    {
        id: '3',
        title: 'Task Management System',
        description:
            'A comprehensive task management application with team collaboration features, real-time updates, and project tracking capabilities.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        link: 'https://example-tasks.com',
        techs: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
        repoLink: 'https://github.com/example/task-manager',
        createdAt: '2024-03-01T00:00:00.000Z',
        updatedAt: '2024-03-01T00:00:00.000Z',
    },
    {
        id: '4',
        title: 'Medical Appointment System',
        description:
            'Online medical appointment booking system with doctor profiles, patient management, and appointment scheduling features.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
        link: 'https://example-medical.com',
        techs: ['Angular', 'Node.js', 'PostgreSQL', 'Socket.io'],
        repoLink: '',
        createdAt: '2024-04-01T00:00:00.000Z',
        updatedAt: '2024-04-01T00:00:00.000Z',
    },
    {
        id: '5',
        title: 'Social Media Dashboard',
        description:
            'Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        link: 'https://example-social.com',
        techs: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
        repoLink: 'https://github.com/example/social-dashboard',
        createdAt: '2024-05-01T00:00:00.000Z',
        updatedAt: '2024-05-01T00:00:00.000Z',
    },
];

export const mockExperience: Experience[] = [
    {
        id: '1',
        companyName: 'SparkTech',
        location: 'Banasree, Dhaka',
        position: 'Full Stack Developer',
        startDate: '2024-01-01T00:00:00.000Z',
        endDate: '2024-06-30T00:00:00.000Z',
        works: [
            'Developed 20+ web applications (e-commerce, medical, baby food, cannabis) using React, Node.js, and MongoDB.',
            'Handled full-stack development, including frontend, backend, and database design.',
            'Managed CI/CD pipelines and deployed apps on VPS and GitHub, ensuring smooth releases.',
            'Implemented bug fixes, feature updates, and performance optimizations across projects.',
        ],
        techs: [
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Mongoose',
            'Stripe',
            'Passport.js',
            'VPS Hosting',
            'Twilio',
        ],
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
    },
    {
        id: '2',
        companyName: 'TechCorp Solutions',
        location: 'Gulshan, Dhaka',
        position: 'Frontend Developer',
        startDate: '2023-01-01T00:00:00.000Z',
        endDate: '2023-12-31T00:00:00.000Z',
        works: [
            'Built responsive and interactive user interfaces using React and TypeScript.',
            'Collaborated with UX/UI designers to implement pixel-perfect designs.',
            'Optimized application performance and reduced load times by 40%.',
            'Mentored junior developers and conducted code reviews.',
        ],
        techs: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Jest', 'Git'],
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
    },
    {
        id: '3',
        companyName: 'Freelance',
        location: 'Remote',
        position: 'Full Stack Developer',
        startDate: '2022-01-01T00:00:00.000Z',
        works: [
            'Developed custom web applications for various clients across different industries.',
            'Provided end-to-end solutions from requirement gathering to deployment.',
            'Maintained long-term client relationships and provided ongoing support.',
            'Worked with diverse technology stacks based on project requirements.',
        ],
        techs: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'PostgreSQL',
            'AWS',
            'Docker',
        ],
        createdAt: '2022-01-01T00:00:00.000Z',
        updatedAt: '2022-01-01T00:00:00.000Z',
    },
];

export const mockSkills: Skill = {
    id: '1',
    backend: [
        'Node.js',
        'Express',
        'RESTful APIs',
        'GraphQL',
        'Authentication (JWT, OAuth)',
        'WebSockets',
        'Socket.io',
        'API Documentation',
    ],
    frontend: [
        'React',
        'JavaScript (ES6+)',
        'Angular',
        'TypeScript',
        'Next.js',
        'Redux',
        'Context API',
        'React Query',
        'Tailwind CSS',
        'ShadCN/UI',
        'Responsive Design',
    ],
    devOps: [
        'Docker',
        'Git/GitHub',
        'CI/CD',
        'AWS (EC2, S3, Lambda)',
        'Vercel/Netlify',
        'Postman',
        'VPS (DigitalOcean)',
        'ESLint/Prettier',
    ],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    tools: ['Git', 'VS Code', 'Postman', 'Jira'],
    other: [
        'TypeScript',
        'GraphQL',
        'Webpack/Vite',
        'PWA',
        'Jest/Testing',
        'Microservices',
        'Problem Solving',
        'Team Collaboration',
    ],
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2024-11-25T00:00:00.000Z',
};

export const mockCourses: Course[] = [
    {
        id: '1',
        title: 'Complete Web Development with Jhankar Mahbub',
        institution: 'Programming Hero',
        year: 2023,
        description:
            'This foundational course introduced me to web development using the MERN stack (MongoDB, Express.js, React, Node.js). I learned to build dynamic, responsive websites and applications, covering HTML, CSS, JavaScript, and React. The course emphasized practical, project-based learning, culminating in the development of a real-world application. Through hands-on projects and assignments, I gained a solid understanding of modern web development practices and tools.',
        certificate:
            'https://drive.google.com/file/d/1mMj7_F5ly15CFcpe6NRuVhcOCEoC56lu/view',
        createdAt: '2023-06-01T00:00:00.000Z',
        updatedAt: '2023-06-01T00:00:00.000Z',
    },
    {
        id: '2',
        title: 'Advanced React and Redux',
        institution: 'Udemy',
        year: 2024,
        description:
            'Comprehensive course covering advanced React patterns, Redux Toolkit, TypeScript integration, and modern state management techniques. Learned about performance optimization, code splitting, and building scalable applications.',
        certificate: 'https://www.udemy.com/certificate/example123',
        createdAt: '2024-03-01T00:00:00.000Z',
        updatedAt: '2024-03-01T00:00:00.000Z',
    },
    {
        id: '3',
        title: 'Node.js - The Complete Guide',
        institution: 'Coursera',
        year: 2023,
        description:
            'In-depth Node.js course covering Express.js, authentication, database integration, RESTful API design, GraphQL, and deployment strategies. Built multiple real-world projects including e-commerce backend and real-time chat application.',
        certificate: 'https://www.coursera.org/certificate/example456',
        createdAt: '2023-09-01T00:00:00.000Z',
        updatedAt: '2023-09-01T00:00:00.000Z',
    },
];

export const mockContactForms: ContactForm[] = [
    {
        id: '1',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        subject: 'Project Inquiry',
        message:
            'Hi, I would like to discuss a potential project collaboration. Please let me know your availability.',
        createdAt: '2024-11-20T10:30:00.000Z',
    },
    {
        id: '2',
        name: 'John Doe',
        email: 'john.doe@company.com',
        subject: 'Job Opportunity',
        message:
            'We are looking for a talented full-stack developer to join our team. Would you be interested in discussing this opportunity?',
        createdAt: '2024-11-22T14:15:00.000Z',
    },
    {
        id: '3',
        name: 'Sarah Johnson',
        email: 'sarah.j@startup.io',
        subject: 'Technical Consultation',
        message:
            'We need help with our web application architecture. Can we schedule a consultation call?',
        createdAt: '2024-11-23T09:45:00.000Z',
    },
    {
        id: '4',
        name: 'Michael Brown',
        email: 'mbrown@tech.com',
        subject: 'Portfolio Feedback',
        message:
            'Your portfolio is impressive! I especially liked the MEHOR project. Keep up the great work!',
        createdAt: '2024-11-24T16:20:00.000Z',
    },
    {
        id: '5',
        name: 'Emily Davis',
        email: 'emily.davis@agency.com',
        subject: 'Freelance Project',
        message:
            'We have a client who needs an e-commerce website built. Are you available for freelance work?',
        createdAt: '2024-11-25T11:00:00.000Z',
    },
];

export const mockContactLinks: ContactLinks = {
    id: '1',
    github: 'https://github.com/apusutradhar',
    linkedin: 'https://linkedin.com/in/apusutradhar',
    facebook: 'https://facebook.com/apusutradhar',
    phone: '+880 1234567890',
    email: 'apusutradhar77@gmail.com',
    address: 'Banasree, Dhaka, Bangladesh',
    resume: 'https://drive.google.com/file/d/example-resume-link',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2024-11-25T00:00:00.000Z',
};
