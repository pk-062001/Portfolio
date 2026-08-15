import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { fadeInUp } from '../utils/animations';
import { FiCheck } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-green-500/6 blur-[100px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">A timeline of building software and shaping product outcomes</h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((entry, index) => (
            <motion.article
              key={entry.id}
              className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold" style={{ color: entry.accent }}>{entry.period}</span>
                    {entry.current && (
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Current</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-text-primary">{entry.role}</h3>
                  <p className="mt-2 text-lg font-medium text-text-secondary">{entry.company} · {entry.location}</p>
                </div>
                {entry.extra && <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-text-secondary">{entry.extra}</span>}
              </div>

              <p className="mt-5 text-sm leading-8 text-text-secondary">{entry.summary}</p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="space-y-3">
                  {entry.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start gap-3">
                      <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-7 text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {entry.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
