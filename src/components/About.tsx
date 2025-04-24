import React from 'react';
import { Code, Palette, Server, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">Sobre Mi</h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tecnólogo en analisis y desarrollo de software, apasionado por crear soluciones que resuelvan problemas del mundo real. Con experiencia en frontend, backend y diseño, aporto un enfoque holístico a cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              <Code size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creación de interfaces de usuario intuitivas y receptivas con frameworks modernos como React y Angular
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              <Server size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Backend</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creación de API y aplicaciones del lado del servidor utilizando bases de datos Node.js, Express y SQL/NoSQL.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              <Palette size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Diseñador UI/UX</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experiencia diseñando interfaces de usuario con funcionales que prioricen la usabilidad y la estética.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Aplicaciones Web</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Desarrollar aplicaciones web completas que sean escalables, seguras y optimizadas para el rendimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;