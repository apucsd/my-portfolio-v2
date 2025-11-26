import { Github, ExternalLink, Calendar, Eye, Star, Users } from 'lucide-react';
import Section from '../ui/Section';
import { useGetProjectsQuery } from '../../store/apiSlice';

const Projects = () => {

  // const projects = [
  //   {
  //     id: 1,
  //     title: "Barcelona Weed",
  //     description: "Barcelona Weed is the ultimate guide to the best cannabis clubs in Barcelona. Read reviews, find cannabis clubs near your location, check out what are the best weed clubs in Barcelona today. Barcelona Weed is no# 1 the most popular & trusted guide to cannabis in Barcelona.",
  //     tags: ["Next.js", "Node.js", "MongoDB", "Express", "Redux"],
  //     image: "https://i.ibb.co.com/LdHzHJN0/weed.png",
  //     demoLink: "https://weedinbarcelona.com/en",
  //     codeLink: "",
  //     year: "2025",
  //     category: "Web Dev",
  //     stats: { stars: 45, forks: 12, views: 1200 }
  //   },
  //   {
  //     id: 2,
  //     title: "Cove Valley",
  //     description: "Cove Valley products are versatile and can be enjoyed as a simple puree or mixed into a variety of other meals as your baby grows. Here are some easy recipe ideas to get you started",
  //     tags: ["Next.js", "ShadCN", "Node.js", "Express", "MongoDB"],
  //     image: "https://i.ibb.co.com/RpxJPM51/baby.png",
  //     demoLink: "https://www.covevalleybaby.com",
  //     codeLink: "",
  //     year: "2025",
  //     category: "Web Dev",
  //     stats: { stars: 32, forks: 8, views: 890 }
  //   },
  //   {
  //     id: 3,
  //     title: "PIM (CRM)",
  //     description: "PIM (Product Information Management) is a web application that allows users to manage their products and their information in a centralized and efficient way.",
  //     tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
  //     image: "https://i.ibb.co.com/JwwJWtyc/pim.png",
  //     demoLink: "https://pim-sable.vercel.app",
  //     codeLink: "",
  //     year: "2024",
  //     category: "Web Dev",
  //     stats: { stars: 0, forks: 0, views: 332 }
  //   },
  //   {
  //     id: 4,
  //     title: "MedSpace Connect (Dashboard)",
  //     description: "MedSpace Connect is a dashboard application that allows users to manage their medical appointments and their information in a centralized and efficient way.",
  //     tags: ["React", "Antd", "Tailwind CSS", "Redux"],
  //     image: "https://i.ibb.co.com/Z1dKD50p/2025-09-08-10-26.png",
  //     demoLink: "https://medspace-connect-dashboard.vercel.app/",
  //     codeLink: "",
  //     year: "2025",
  //     category: "Web Dev",
  //     stats: { stars: 0, forks: 0, views: 44 }
  //   },

  //   {
  //     id: 5,
  //     title: "Cannasseur Hemp",
  //     description: "Cannasseur Hemp is a cannabis website that provides information about cannabis strains, products, and news.",
  //     tags: ["React", "Antd", "Tailwind CSS", "Redux"],
  //     image: "https://i.ibb.co.com/C5jwbTWy/weed2.png",
  //     demoLink: "https://cannasseurhemp.com/",
  //     codeLink: "",
  //     year: "2025",
  //     category: "Web Dev",
  //     stats: { stars: 0, forks: 0, views: 86 }
  //   },
  //   {
  //     id: 6,
  //     title: "MEHOR",
  //     description: "At Mehor, we believe that fashion is more than clothing—it's a global language of self-expression, creativity, and culture. We've created this platform as a space where designers, manufacturers, students, and style enthusiasts from all backgrounds can come together to share knowledge, spark ideas, and grow together.",
  //     tags: ["React", "Antd", "Tailwind CSS", "Redux"],
  //     image: "https://i.ibb.co.com/HD0Jx9Kh/mehor.png",
  //     demoLink: "https://mehor.com/",
  //     codeLink: "",
  //     year: "2025",
  //     category: "Web Dev",
  //     stats: { stars: 0, forks: 0, views: 44 }
  //   },
  // ];

  const { data: projectss } = useGetProjectsQuery()
  // console.log(projectss)


  return (
    <Section id="projects" title="Projects That Make a Difference" subtitle="Explore my latest projects that showcase innovation, creativity, and technical excellence" className="py-20 px-4 bg-white dark:bg-[radial-gradient(circle,_#1C254B,_#030C1C)]">
      <div className="container mx-auto max-w-7xl">

        <div className="relative z-10 flex justify-center items-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 dark:bg-primary/20 border border-primary/20 dark:border-primary/20">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-primary dark:text-primary font-medium text-center">
              <span className="hidden sm:inline">Start of Projects</span>

            </span>
          </div>
        </div>

        {/* Projects Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-items-center">
          {projectss?.map((project, index) => (
            <div
              key={project?.id}
              className="group relative bg-[#0c1b36]  rounded-xl overflow-hidden shadow-lg  hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-white backdrop-blur-sm">
                    {"Web App"}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-zinc-800 backdrop-blur-sm">
                    <Calendar size={10} className="mr-1" />
                    {project?.createdAt?.split("T")[0]}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ExternalLink size={14} className="text-zinc-800" />
                      </a>
                    )}
                    {project?.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <Github size={14} className="text-zinc-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techs.slice(0, 5).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-700 dark:hover:text-orange-300 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project?.techs?.length > 5 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-600 text-zinc-600 dark:text-zinc-400">
                      +{project?.techs?.length - 5}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star size={12} className="mr-1" />

                    </div>
                    <div className="flex items-center">
                      <Users size={12} className="mr-1" />

                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye size={12} className="mr-1" />

                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-primary/70 text-white text-sm font-medium hover:bg-primary/80 transition-colors duration-200"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      Demo
                    </a>
                  ) : (
                    <button className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-sm font-medium cursor-not-allowed">
                      <ExternalLink size={14} className="mr-1.5" />
                      Not Live
                    </button>
                  )}

                  {project?.repoLink ? (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200"
                    >
                      <Github size={14} className="mr-1.5" />
                      Code
                    </a>
                  ) : (
                    <button className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-500 dark:text-zinc-400 text-sm font-medium cursor-not-allowed">
                      <Github size={14} className="mr-1.5" />
                      Private Repo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#112240] rounded-2xl p-10 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Ready to work together?
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
              I'm available for freelance projects and full-time opportunities. Let's discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary/70 text-white font-medium hover:bg-primary/80 transition-colors duration-200"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/apucsd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                <Github size={16} className="mr-2" />
                View projects
              </a>
            </div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 dark:bg-primary/20 border border-primary/20 dark:border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-primary dark:text-primary font-medium text-center">
                <span className="hidden sm:inline">Available for: Freelance projects, full-time opportunities, and collaborations</span>
                <span className="sm:hidden">Available for new projects</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
