import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { fadeInUp, staggerChildren } from '../utils/animations';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-8%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] animate-float-slow" />
        <div className="absolute bottom-[15%] left-[-8%] w-[450px] h-[450px] rounded-full bg-secondary/8 blur-[110px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Tech{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stack</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((cat) => (
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={activeCategory}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                className="glass-card p-4 flex flex-col items-center gap-3 group cursor-default hover:-translate-y-1 transition-transform duration-300"
                variants={fadeInUp}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                <skill.icon
                  className="text-2xl text-text-secondary group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                />
                <span className="font-mono text-xs text-text-secondary text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
