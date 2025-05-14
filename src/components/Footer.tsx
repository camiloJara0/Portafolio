import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Camilo Jaramillo</h3>
            <p className="text-blue-200 dark:text-gray-400 mb-4 max-w-md">
              Desarrollador Frontend apasionado por crear aplicaciones web funcionales que brinden experiencias de usuario excepcionales.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/camiloJara0?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank" className="text-blue-200 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/camilo-jaramillo-ramirez-68100833a/" target="_blank" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://mailto:camilojara0000@gmail.com" target="_blank" className="text-blue-200 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">Sobre mi</a>
              </li>
              <li>
                <a href="#projects" className="text-blue-200 hover:text-white transition-colors">Proyectos</a>
              </li>
              <li>
                <a href="#skills" className="text-blue-200 hover:text-white transition-colors">Habilidades</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="not-italic text-blue-200 dark:text-gray-400 space-y-2">
              <p>Palmira, Valle del cauca</p>
              <p>+57 3027440719</p>
              <p>camilojara0000@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-800 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 dark:text-gray-400 text-sm">
            &copy; {currentYear} Camilo Jaramillo. Todos los derechos reservados.
          </p>
          <p className="text-blue-200 dark:text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Hecho con <Heart size={16} className="mx-1 text-red-400" /> y React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;