import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects, projectCategories } from '../data/projects';
import { fadeInUp } from '../utils/animations';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          Things I've{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Built</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-pill text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow'
                  : 'glass-pill text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className={project.featured ? 'md:col-span-2' : ''}
              >
                <Tilt
                  options={{
                    max: 8,
                    scale: 1.02,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.05,
                  }}
                >
                  <div
                    className={`glass-card overflow-hidden group relative hover:border-primary/30 hover:shadow-glow transition-all duration-300 ${
                      project.featured ? 'shadow-glow border-primary/20' : ''
                    }`}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-card pointer-events-none">
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    </div>

                    <div className="relative h-44 sm:h-52 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.08]">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      </div>
                      <div className="flex items-center justify-center h-full">
                        <span className="text-4xl font-bold bg-gradient-to-r from-primary/30 to-secondary/30 bg-clip-text text-transparent">
                          {project.title.split(' ').map((w) => w[0]).join('')}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-10 right-4 glass-pill px-3 py-1 text-xs font-semibold text-primary">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="glass-pill px-2.5 py-1 text-xs font-mono text-text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <FiExternalLink size={14} /> Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                        >
                          <FiGithub size={14} /> GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <a
            href="https://github.com/pk-062001"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-2 px-6 py-3 font-medium"
          >
            View All on GitHub <FiExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
