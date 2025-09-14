import React from 'react';
import Section from '../ui/Section';
import { hobbies } from '../../data';
import { Camera, BookOpen, Mountain, ChevronRight as ChessKnight } from 'lucide-react';

const Hobbies: React.FC = () => {
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'camera':
        return <Camera size={size} />;
      case 'book-open':
        return <BookOpen size={size} />;
      case 'mountain':
        return <Mountain size={size} />;
      case 'chess-knight':
        return <ChessKnight size={size} />;
      default:
        return null;
    }
  };

  return (
    <Section 
      id="hobbies" 
      title="Hobbies & Interests" 
      subtitle="What I enjoy outside of coding"
      className="bg-white dark:bg-[radial-gradient(circle,_#1C254B,_#030C1C)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="group relative rounded-xl border border-zinc-200 dark:border-zinc-700 bg-[#0c1b36] p-6 transition-all duration-300 hover:cursor-pointer hover:border-primary dark:hover:border-primary hover:bg-primary/30 dark:hover:bg-primary/10"
          >
            {/* Icon with hover scale */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary dark:bg-primary/20 text-primary mb-4 transition-transform duration-300 group-hover:scale-105">
              {getIcon(hobby.icon, 28)}
            </div>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              {hobby.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
