import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { fadeInUp, staggerChildren } from '../utils/animations';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const firstRow = filtered.filter((_, i) => i % 2 === 0);
  const secondRow = filtered.filter((_, i) => i % 2 !== 0);

  const makeRowLoop = (arr) => {
    if (arr.length === 0) return [];
    let looped = [...arr];
    while (looped.length < 12) {
      looped = [...looped, ...arr];
    }
    return [...looped, ...looped];
  };

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-8%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] animate-float-slow" />
        <div className="absolute bottom-[15%] left-[-8%] w-[450px] h-[450px] rounded-full bg-secondary/8 blur-[110px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            My Tech{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stack</span>
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
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
        </div>

        {/* Marquee Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          key={activeCategory}
          className="flex flex-col gap-6 overflow-hidden py-4 relative w-full"
        >
          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark via-dark/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark via-dark/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Left to Right */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left flex gap-4 pr-4">
              {makeRowLoop(firstRow).map((skill, index) => (
                <div
                  key={`${skill.name}-row1-${index}`}
                  className="glass-card flex items-center gap-4 px-5 py-3.5 w-60 shrink-0 border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 shadow-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] group rounded-2xl cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:border-primary/20 flex items-center justify-center transition-all duration-500 group-hover:scale-105 shrink-0">
                    <skill.icon className="text-xl text-text-secondary group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors duration-500 truncate">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-text-secondary/50 uppercase tracking-wider mt-0.5">
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-right flex gap-4 pr-4">
              {makeRowLoop(secondRow).map((skill, index) => (
                <div
                  key={`${skill.name}-row2-${index}`}
                  className="glass-card flex items-center gap-4 px-5 py-3.5 w-60 shrink-0 border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 shadow-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] group rounded-2xl cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:border-primary/20 flex items-center justify-center transition-all duration-500 group-hover:scale-105 shrink-0">
                    <skill.icon className="text-xl text-text-secondary group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors duration-500 truncate">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-text-secondary/50 uppercase tracking-wider mt-0.5">
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
