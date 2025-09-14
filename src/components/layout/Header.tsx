import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    // { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? ' backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="font-bold text-gray-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            Apu Sutra Dhar<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden text-[13px] md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                <span className="text-primary">0{i + 1}. </span>
                {item.name}
              </a>

              
            ))}
               <button onClick={() => window.open('https://drive.google.com/file/d/1X_n1X-Z1oeJPsu4Cecc0CYJJGL3yttww/view?usp=sharing', '_blank')} className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded border border-primary bg-transparent px-6 text-primary hover:bg-primary/10 transition-colors duration-300">
                 <span className="relative inline-flex overflow-hidden">
                   <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                    Download
                   </div>
                   <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">Resume</div>
                 </span>
               </button>

            {/* <ThemeToggle /> */}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            {/* <ThemeToggle /> */}
            <button
              className="text-gray-700 hover:text-primary dark:hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden  bg-[radial-gradient(circle,_#1C254B,_#030C1C)] shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, i) => (
                 <a
                 key={item.name}
                 href={item.href}
                 className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
                 onClick={(e) => {
                   e.preventDefault();
                   scrollToSection(item.href);
                 }}
               >
                 <span className="text-primary">0{i + 1}. </span>
                 {item.name}
               </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;