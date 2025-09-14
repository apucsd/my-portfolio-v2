import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

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

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate developer with a love for creating impactful solutions"
      className="block xl:hidden bg-white dark:bg-[radial-gradient(circle,_#1C254B,_#030C1C)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-[radial-gradient(circle,_#1C254B,_#030C1C)] rounded-2xl p-8 border border-primary dark:border-primary">
              <div className="text-center mb-6">
                <div className="w-24 border  h-24 bg-[radial-gradient(circle,_#1C254B,_#030C1C)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white ">ASD</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Apu Sutra Dhar</h3>
                <p className="text-primary font-medium">Software Engineer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-primary" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-primary" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={18} className="text-primary" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">5+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Story */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-lg">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">My Journey</h3>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  My coding journey began in 2020 when I wrote my first line of code. What started as curiosity quickly 
                  turned into a passion as I discovered the joy of bringing ideas to life through programming. I spent 
                  countless hours learning the fundamentals, making mistakes, and growing with each challenge.
                </p>
                <p>
                  I'm currently working as a Full Stack Developer at BDCalling IT Ltd, where I've been able to apply 
                  my technical skills to real-world projects. This role has been instrumental in honing my abilities 
                  in both frontend and backend development, while also teaching me the importance of teamwork and 
                  effective communication in a professional setting.
                </p>
                <p>
                  I've recently completed my Diploma in Computer Science and Engineering, and I'm excited to 
                  continue my academic journey by pursuing a BSc. Each step of this journey has been about pushing 
                  forward, learning from every experience, and staying true to my passion for technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
