import React from 'react';
import { Code, Server, Database, Layout, Command, Globe } from 'lucide-react';
import { useGetSkillsQuery } from '../../store/apiSlice';

// Simple Section component included directly to avoid external dependencies
interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, className, children }) => {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">{title}</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

const Skills = () => {

  const { data: skills } = useGetSkillsQuery()
  console.log(skills)
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-10 h-10 text-zinc-700 dark:text-primary transition-colors duration-300" />,
      skills: skills?.[0]?.frontend || ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Context API", "React Query", "Tailwind CSS", "ShadCN/UI", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Server className="w-10 h-10 text-zinc-700 dark:text-primary transition-colors duration-300" />,
      skills: skills?.[0]?.backend || ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Authentication (JWT, OAuth)", "WebSockets", "API Documentation", "Serverless Functions"]
    },
    {
      title: "Database",
      icon: <Database className="w-10 h-10 text-zinc-700 dark:text-primary transition-colors duration-300" />,
      skills: skills?.[0]?.database || ["MongoDB", "Mongoose ODM", "Database Design", "Indexing", "Aggregation", "Transactions", "Data Modeling", "Redis (Caching)"]
    },
    {
      title: "DevOps & Tools",
      icon: <Command className="w-10 h-10 text-zinc-700 dark:text-primary transition-colors duration-300" />,
      skills: skills?.[0]?.devOps || ["Docker", "Git/GitHub", "CI/CD", "AWS (EC2, S3, Lambda)", "Vercel/Netlify", "Postman", "VPS (DigitalOcean)", "ESLint/Prettier"]
    },
    {
      title: "Core Concepts",
      icon: <Code className="w-10 h-10 text-zinc-700 dark:text-primary transition-colors duration-300" />,
      skills: skills?.[0]?.tools || ["RESTful Architecture", "State Management", "Component Architecture", "Performance Optimization", "Security Best Practices", "Clean Code", "Agile/Scrum"]
    },
    {
      title: "Additional Skills",
      icon: <Globe className="w-10 h-10 text-zinc-700 dark:text-primary transition-colors duration-300" />,
      skills: skills?.[0]?.other || ["TypeScript", "GraphQL", "Webpack/Vite", "PWA", "Jest/Testing", "Microservices", "Problem Solving", "Team Collaboration"]
    }
  ];

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I work with"
      className="bg-white dark:bg-[radial-gradient(circle,_#1C254B,_#030C1C)] "
    >
      <div className="relative z-10 flex justify-center items-center mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 dark:bg-primary/20 border border-primary/20 dark:border-primary/20">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm text-primary dark:text-primary font-medium text-center">
            <span className="hidden sm:inline">Start of Skills</span>

          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="relative  rounded-lg p-6 border border-zinc-200 dark:border-zinc-700 group overflow-hidden transition-all duration-300 hover:border-primary dark:hover:border-primary hover:bg-primary/30 dark:hover:bg-primary/10 shadow-sm hover:shadow-md"
          >
            {/* Gradient accent in the corner */}
            {/* <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-900 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div> */}

            <div className="flex items-center mb-5 space-x-4">
              <div className="flex-shrink-0 p-3 bg-zinc-100 dark:bg-primary/5 hover:bg-primary/30 dark:hover:bg-primary/10 text-primary rounded-lg shadow-md">
                {category.icon}
              </div>
              <h3 className="text-xl font-medium text-zinc-800 dark:text-primary">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className=" text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;