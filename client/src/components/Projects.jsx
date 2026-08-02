import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import { projects, projectCategories } from '../data/projects';
import { fadeInUp } from '../utils/animations';
import ProjectModal from './sections/ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Selected work spanning full stack, AI, and product delivery</h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                  : 'border border-white/10 bg-white/[0.04] text-text-secondary hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-black/20 to-transparent" />
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      Featured
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
                    {project.status}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                    <span className="text-sm text-text-secondary">{project.year}</span>
                  </div>
                  <p className="text-sm leading-7 text-text-secondary">{project.shortDescription}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                    >
                      Read more <FiArrowRight size={14} />
                    </button>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text-secondary transition hover:text-primary">
                        <FiGithub size={14} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text-secondary transition hover:text-primary">
                        <FiExternalLink size={14} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
