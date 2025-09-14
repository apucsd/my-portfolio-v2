import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '', 
  iconSize = 20 
}) => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={iconSize} />, url: 'https://github.com/apucsd' },
    { name: 'LinkedIn', icon: <Linkedin size={iconSize} />, url: 'https://linkedin.com/in/apusutradhar77' },
    { name: 'Email', icon: <Mail size={iconSize} />, url: 'mailto:apusutradhar77@gmail.com' },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;