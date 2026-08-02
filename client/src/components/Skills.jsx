import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { fadeInUp } from '../utils/animations';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-8%] w-[450px] h-[450px] rounded-full bg-secondary/8 blur-[110px] animate-float-slow" />
        <div className="absolute bottom-[15%] left-[-8%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">A modern stack shaped for product delivery and applied AI</h2>
        </motion.div>

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'border border-white/10 bg-white/[0.04] text-text-secondary hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {skills[activeCategory].map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="glass-card border border-white/10 p-5 transition hover:border-primary/30 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{skill.name}</h3>
                    <p className="text-sm text-text-secondary">{activeCategory} capability</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
