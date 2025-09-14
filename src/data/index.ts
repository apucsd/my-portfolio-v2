import { 
  Project, 
  Experience, 
  Education, 
  Certification, 
  Testimonial, 
  BlogPost,
  SpeakingEvent,
  OpenSourceContribution,
  Award,
  Hobby
} from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and checkout.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with real-time updates, team collaboration, and analytics dashboards.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An application that uses AI to generate content for blogs, social media, and marketing materials based on user inputs.",
    tags: ["React", "Python", "Flask", "OpenAI API", "MongoDB"],
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 4,
    title: "Portfolio Template Builder",
    description: "A drag-and-drop website builder specifically designed for portfolios with customizable templates and design options.",
    tags: ["React", "Node.js", "GraphQL", "AWS"],
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
];

export const experiences: Experience[] = [

  {
    id: 1,
    company: "SparkTech",
    position: "Full Stack Developer",
    duration: "2024 - 2025",
    description: [
      "Developed 20+ web applications (e-commerce, medical, baby food, cannabis) using React, Node.js, and MongoDB.",
      "Handled full-stack development, including frontend, backend, and database design.",
      "Managed CI/CD pipelines and deployed apps on VPS and GitHub, ensuring smooth releases.",
      "Implemented bug fixes, feature updates, and performance optimizations across projects."
    ],
    technologies: ["JavaScript", "TypeScript", "Node.Js", "Mongoose", "Stripe", "Passportjs", "VPS Hosting", "Twilio"],
    location: "Banasree, Dhaka"
  },
  {
    id: 2,
    company: "AmarSolution",
    position: "Software Engineer",
    duration: "2025 - Present",
    description: [
      "Developed and maintained 5+ ERP modules (HRM, CRM, Inventory, Invoicing, User Management), serving 200+ active users and improving operational efficiency.",
      "Delivered 10+ major features with minimal bugs, increasing system reliability and client satisfaction by 20%.",
      "Lead the development of SaaS-based e-commerce templates for clients, enabling fast deployment of 23+ ready-to-use stores.",
      "Collaborated with product and QA teams to implement automated testing and bug fixes, improving reliability and reducing errors.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Express.js","Tailwind CSS", "ShadCN", "Next.js"],
    location: "Uttara,Dhaka"
  },
  
  
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Zillur Rahman Premier Bank School & College",
    degree: "Secondary School Certificate",
    duration: "2018 - 2020",
    description: "Completed Secondary School Certificate (SSC) from Zillur Rahman Premier Bank School & College in 2020 under Dhaka Board of Secondary and Higher Secondary Education Science stream. Gained a broad understanding of various scientific subjects, including mathematics, physics, chemistry, and biology."
  },
  {
    id: 2,
    institution: "Narsingdi Polytechnic Institute",
    degree: "Diploma in Computer Science and Engineering",
    duration: "2020 - 2024",
    description: "Completed a 4-year diploma in Computer Science and Engineering under the Bangladesh Technical Education Board (BTEB). Gained hands-on experience in programming, networking, database management, and software development. Completed industrial training and projects in web development and system design."
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Complete Web Development with Jhankar Mahbub",
    issuer: "Programming Hero",
    date: "2023",
    link: "https://drive.google.com/file/d/1mMj7_F5ly15CFcpe6NRuVhcOCEoC56lu/view",
    description: "This foundational course introduced me to web development using the MERN stack (MongoDB, Express.js, React, Node.js). I learned to build dynamic, responsive websites and applications, covering HTML, CSS, JavaScript, and React. The course emphasized practical, project-based learning, culminating in the development of a real-world application. Through hands-on projects and assignments, I gained a solid understanding of modern web development practices and tools.",
  },
  {
    id: 2,
    title: "Apollo Next Level Web Development",
    issuer: "Programming Hero",
    date: "2024",
    link: "https://drive.google.com/file/d/1hIzBi0RCb4FH3h7dk3-Bcp683-UA6M1W/view",
    description: "In this advanced course, I deepened my expertise in full-stack development by mastering technologies such as TypeScript, Next.js, Redux, Prisma, PostgreSQL, and Express. The curriculum included over 1,000 video lessons, 10+ assignments, and 2 industry-standard projects. I developed scalable applications, implemented state management with Redux, and integrated databases using Prisma and PostgreSQL. The course also provided job placement support, aiding in the transition from learning to professional development.",
  },
  {
    id: 3,
    title: "Industrial Training",
    issuer: "bdCalling Academy",
    date: "2024",
    link: "",
    description: "During this training, I applied my web development skills in a real-world setting, working on industry projects that required collaboration, problem-solving, and adherence to professional standards. This experience enhanced my understanding of the software development lifecycle and prepared me for the demands of the tech industry."
  },
];


export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "InnovateX",
    testimonial: "Mubashar is an exceptional developer who consistently delivers high-quality work. His technical expertise and problem-solving abilities have been invaluable to our projects.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "David Chen",
    position: "Product Manager",
    company: "TechSolutions",
    testimonial: "Working with Mubashar has been a fantastic experience. He not only brings technical excellence but also a deep understanding of user needs and business goals.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Design Director",
    company: "CreativeMinds",
    testimonial: "Mubashar has a rare ability to translate complex design requirements into flawless code. His attention to detail and collaborative approach make him a joy to work with.",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn how to structure large-scale React applications for optimal performance and maintainability.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/1"
  },
  {
    id: 2,
    title: "The Future of Web Development: WASM and Beyond",
    excerpt: "Exploring how WebAssembly is changing the landscape of web development and what it means for JavaScript developers.",
    date: "April 3, 2023",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7988116/pexels-photo-7988116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/2"
  },
  {
    id: 3,
    title: "Optimizing Database Performance in Node.js Applications",
    excerpt: "Practical strategies for improving database performance in Node.js applications with real-world examples.",
    date: "March 12, 2023",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/3"
  }
];

export const speakingEvents: SpeakingEvent[] = [
  {
    id: 1,
    title: "The Evolution of Frontend Development",
    event: "ReactConf 2023",
    date: "September 2023",
    description: "A talk on how frontend development has evolved over the years and where it's headed in the future.",
    link: "https://example.com/talk/1"
  },
  {
    id: 2,
    title: "Building Accessible Web Applications",
    event: "A11y Summit",
    date: "July 2023",
    description: "Workshop on creating web applications that are accessible to all users, including those with disabilities.",
    link: "https://example.com/talk/2"
  },
  {
    id: 3,
    title: "Microservices Architecture with Node.js",
    event: "NodeCon 2022",
    date: "November 2022",
    description: "A deep dive into implementing microservices architecture using Node.js and Docker.",
    link: "https://example.com/talk/3"
  }
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    project: "React",
    description: "Contributed to the React core library by fixing bugs and improving documentation.",
    link: "https://github.com/facebook/react",
    category: "Frontend",
    stars: 190000,
    pullRequests: 35,
    image: "https://raw.githubusercontent.com/facebook/react/main/fixtures/dom/public/react-logo.svg",
    icon: undefined
  },
  {
    id: 2,
    project: "Tailwind CSS",
    description: "Created plugins and contributed to the documentation to help improve the developer experience.",
    link: "https://github.com/tailwindlabs/tailwindcss",
    category: "CSS Framework",
    stars: 47000,
    pullRequests: 12,
    image: "https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.e8b47d8e.svg",
    icon: undefined
  },
  {
    id: 3,
    project: "Flask",
    description: "Fixed issues related to routing and contributed to the testing framework.",
    link: "https://github.com/pallets/flask",
    category: "Backend",
    stars: 60000,
    pullRequests: 7,
    image: "https://flask.palletsprojects.com/en/2.2.x/_images/flask-logo.png",
    icon: undefined
  }
];
    

export const awards: Award[] = [
  {
    id: 1,
    title: "Developer of the Year",
    issuer: "TechAwards",
    date: "2022",
    description: "Recognized for outstanding contributions to open-source software and technical innovation."
  },
  {
    id: 2,
    title: "Best Web Application",
    issuer: "WebDevConference",
    date: "2021",
    description: "Awarded for developing an innovative e-commerce platform with exceptional user experience."
  },
  {
    id: 3,
    title: "Hackathon Champion",
    issuer: "Global Code Challenge",
    date: "2020",
    description: "First place in a 48-hour hackathon for creating a solution to improve remote learning."
  }
];

export const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing landscapes and street photography during travels.",
    icon: "camera"
  },
  {
    id: 2,
    title: "Reading",
    description: "Enjoy reading technical books and articles in my free time.",
    icon: "book-open"
  },
  {
    id: 3,
    title: "Hiking",
    description: "Exploring nature trails and mountains whenever possible. Specially hilly areas of Bangladesh.",
    icon: "mountain"
  },
  {
    id: 4,
    title: "Cricket",
    description: "Playing cricket with friends and family on weekends.",
    icon: "chess-knight"
  }
];