import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-900 dark:text-white">
            MiPortafolio<span className="text-teal-600">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white transition-colors">Sobre Mi</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white transition-colors">Proyectos</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white transition-colors">Habilidades</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white transition-colors">Contacto</a>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode} 
                className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <div className="flex items-center space-x-3">
                <a href="https://github.com/camiloJara0?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/camilo-jaramillo-ramirez-68100833a/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode} 
              className="mr-4 text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre Mi
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Habilidades
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
            
            <div className="flex items-center space-x-4 py-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;