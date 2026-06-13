import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/30 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {experience.map((entry, index) => {
              const isLeft = index % 2 === 0;
              const animVariant = isLeft ? fadeInLeft : fadeInRight;

              return (
                <motion.div
                  key={entry.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={animVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 mt-6"
                    style={{ backgroundColor: entry.accent, boxShadow: `0 0 12px ${entry.accent}40` }}
                  />

                  <div className={`w-full md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } pl-10 md:pl-0`}>
                    <div className="glass-card p-5 sm:p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                          style={{ backgroundColor: `${entry.accent}15`, color: entry.accent }}
                        >
                          {entry.company[0]}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-text-primary leading-tight">
                            {entry.role}
                          </h3>
                          <p
                            className="text-sm font-medium leading-tight"
                            style={{ color: entry.accent }}
                          >
                            {entry.company}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span
                          className="glass-pill px-3 py-1 text-xs font-medium inline-block"
                          style={{ color: entry.accent }}
                        >
                          {entry.period}
                        </span>
                        {entry.extra && (
                          <span className="glass-pill px-3 py-1 text-xs font-medium inline-block ml-2 text-text-secondary">
                            {entry.extra}
                          </span>
                        )}
                      </div>

                      <ul className="space-y-2">
                        {entry.points.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
                            <span
                              className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: entry.accent }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
