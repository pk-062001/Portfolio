import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { fadeInUp } from '../utils/animations';
import { FiCheck } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background orbs - Violet and Green mood */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-green-500/6 blur-[100px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          My{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
        </motion.h2>

        <div className="space-y-8 md:space-y-10">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              {/* Card with gradient border on left */}
              <div
                className="glass-card p-6 sm:p-8 relative border-l-4 hover:scale-[1.01] transition-all duration-300"
                style={{ borderLeftColor: entry.accent }}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    {/* Date and Current Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-mono font-semibold" style={{ color: entry.accent }}>
                        {entry.period}
                      </span>
                      {entry.extra && (
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${entry.accent}25`,
                            color: entry.accent,
                          }}
                        >
                          {entry.extra === 'CGPA: 9.09' ? 'CGPA: 9.09' : 'Current'}
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${entry.accent}, ${entry.accent}cc)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {entry.role}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 mt-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: `${entry.accent}20`,
                          color: entry.accent,
                        }}
                      >
                        {entry.company[0]}
                      </div>
                      <p className="text-base font-semibold text-text-primary">
                        {entry.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                  {entry.type === 'work' && (
                    index === 0
                      ? 'Leading a team of developers in building complex web applications using React and Node.js. Developing advanced user interfaces and optimizing performance.'
                      : 'Built 10+ RESTful APIs and optimized React components. Improved performance metrics and deployment efficiency.'
                  )}
                  {entry.type === 'education' && (
                    'Pursued comprehensive computer engineering degree with focus on data structures, databases, and software engineering principles.'
                  )}
                </p>

                {/* Dark inner box with achievements */}
                <motion.div
                  className="bg-black/30 rounded-2xl p-5 sm:p-6 mb-6 border border-white/5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="space-y-3">
                    {entry.points.map((point, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-3 items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <FiCheck
                          className="shrink-0 mt-0.5 w-5 h-5"
                          style={{ color: entry.accent }}
                        />
                        <span className="text-sm text-text-secondary leading-relaxed">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Tech Stack Tags */}
                {entry.type === 'work' && (
                  <div className="flex flex-wrap gap-2">
                    {index === 0
                      ? ['React', 'Node.js', 'MongoDB', 'AWS', 'DigitalOcean', 'JavaScript'].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="text-xs font-medium px-3 py-1.5 rounded-full border"
                              style={{
                                backgroundColor: `${entry.accent}10`,
                                borderColor: `${entry.accent}40`,
                                color: entry.accent,
                              }}
                            >
                              {tech}
                            </span>
                          )
                        )
                      : ['Node.js', 'React.js', 'Express.js', 'JavaScript', 'REST APIs'].map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium px-3 py-1.5 rounded-full border"
                            style={{
                              backgroundColor: `${entry.accent}10`,
                              borderColor: `${entry.accent}40`,
                              color: entry.accent,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
