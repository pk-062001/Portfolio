import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-3xl rounded-[28px] border border-white/10 bg-[#06070b] p-6 sm:p-8 shadow-2xl"
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 24, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-text-secondary transition hover:text-primary"
            aria-label="Close project details"
          >
            <FiX size={18} />
          </button>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              {project.featured && (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Featured
                </span>
              )}
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                {project.category}
              </span>
              <span className="text-sm text-text-secondary">{project.year}</span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-primary">{project.title}</h3>
              <p className="mt-3 text-sm leading-8 text-text-secondary">{project.longDescription}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Tech stack</div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text-primary transition hover:border-primary/30 hover:text-primary">
                  <FiGithub size={16} /> GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text-primary transition hover:border-primary/30 hover:text-primary">
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
