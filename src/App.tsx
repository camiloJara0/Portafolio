import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Camilo Jaramillo | Desarrollador de Software';

    // Add animation classes
    document.documentElement.style.setProperty('--animate-duration', '0.8s');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <style jsx>{`
        .animate-fade-in-1 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.1s forwards;
        }
        
        .animate-fade-in-2 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-3 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.5s forwards;
        }
        
        .animate-fade-in-4 {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.7s forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;