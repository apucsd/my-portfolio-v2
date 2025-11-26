import React from "react";
import Section from "../ui/Section";
// import { education } from "../../data";
import { GraduationCap } from "lucide-react";
import { useGetEducationsQuery } from "../../store/apiSlice";

const Education: React.FC = () => {
  const { data: educations } = useGetEducationsQuery()
  // console.log(educations)
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My journey in the education industry"
      className="bg-white dark:bg-[radial-gradient(circle,_#1C254B,_#030C1C)]"
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-[2.5%] top-6 h-full w-0.5 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-200 dark:from-primary dark:via-primary dark:to-primary/5 rounded-full"></div>

        {/* Career start marker at the top */}
        <div className="relative z-10 flex justify-center items-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 dark:bg-primary/20 border border-primary/20 dark:border-primary/20">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-primary dark:text-primary font-medium text-center">
              <span className="hidden sm:inline">Start of Education</span>
            </span>
          </div>
        </div>

        {/* Experience items in reverse order */}
        {educations?.map((edu) => (
          <div key={edu?.id} className="mb-10 last:mb-0">
            <div className="flex flex-col sm:flex-row sm:items-start">
              {/* Timeline dot and year */}
              <div className="flex flex-row sm:flex-col items-center sm:items-start mb-4 sm:mb-0">
                <div className="relative z-10">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <GraduationCap size={16} />
                  </div>
                </div>

                <div className="z-[90] ml-3 sm:ml-0 sm:mt-3 relative text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {edu?.passingYear.split("-")[0]}
                </div>
              </div>

              {/* Content */}
              <div className="sm:ml-10 flex-1">
                <div className="dark:bg-[#112240] hover:bg-primary/30 dark:hover:bg-primary/10 rounded-lg shadow-sm p-5 border border-zinc-200 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-colors duration-300">
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {edu?.name}
                      </h3>
                      <span className="hidden sm:flex text-xs px-2 py-1 bg-zinc-100 dark:bg-primary/5 text-zinc-600 dark:text-primary rounded-full">
                        {edu?.passingYear}
                      </span>
                    </div>

                    <div className="flex items-center text-orange-600 dark:text-primary mt-1 text-sm space-x-4 font-medium">
                      <div className="flex items-center">
                        {/* <Building size={14} className="mr-1" /> */}
                        <span>{edu?.institution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                      {edu?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
