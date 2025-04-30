import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-64 bg-blue-100 dark:bg-blue-900/20 transform -skew-y-6 translate-y-20 opacity-50"></div>
        {/* <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-teal-100 dark:bg-teal-900/20 opacity-60"></div> */}
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-yellow-100 dark:bg-yellow-700/20 opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 dark:text-white inline-block">
            <span className="animate-fade-in-1">Camilo Andrés Jaramillo</span>
          </h1>
          <h2 className="text-2xl md:text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-2">
            Analista y Desarrollador de software
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed animate-fade-in-3">
            Creacion de soluciones digitales innovadoras que combinan una funcionalidad potente con un diseño atractivo.
            Especializado en React, Node.js y experiencia de usuario.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-800 dark:text-white border border-blue-800 dark:border-gray-600 rounded-lg shadow-sm transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Contactarme
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 transform -translate-x-1/2 animate-bounce text-blue-800 dark:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;