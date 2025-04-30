import { Project } from '../types';
import cofilm from '../../img/cofilm.png';
import bikestore from '../../img/bikestore.png';
import SGMI from '../../img/SGMI.png';

export const projects: Project[] = [
  {
    id: 1,
    title: "Cofilm",
    description: "Plataforma web que se conecta a una API de películas, permitiendo buscar películas y series, ver trailers y explorar detalles de cada título.",
    technologies: ["HTML", "Javascript", "API", "Bootstrap"],
    imageUrl: cofilm,
    githubUrl: "https://github.com/camiloJara0/Cofilm.git"
  },
  {
    id: 2,
    title: "Pagina E-commerce",
    description: "Tienda en línea especializada en bicicletas, con frontend y backend integrados para la gestión de productos, visualización de catálogo y compras.",
    technologies: ["React", "Redux", "Firebase", "Tailwind CSS", "Node.js"],
    imageUrl: bikestore,
    githubUrl: "https://github.com/Luiis24/Bike-Store.git"
  },
  {
    id: 3,
    title: "Gestor de mantenimientos",
    description: "Sistema web para estudiantes que permite registrar hojas de vida, reportar mantenimientos a maquinaria industrial y gestionar insumos y herramientas.",
    technologies: ["React", "Javascript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    imageUrl: SGMI,
    githubUrl: "https://github.com/Luiis24/Sistema-Para-La-Gestion-De-Mantenimiento.git"
  }
];