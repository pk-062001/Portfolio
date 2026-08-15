import { motion } from 'framer-motion';
import { FiLayers, FiCpu, FiZap, FiGlobe } from 'react-icons/fi';
import { personalInfo } from '../../constants/personalInfo';
import { fadeInUp } from '../../utils/animations';

const buildAreas = [
  {
    title: 'Scalable web products',
    description: 'Full-stack experiences for teams that need fast delivery and dependable architecture.',
    icon: FiLayers,
  },
  {
    title: 'AI-enabled workflows',
    description: 'Practical AI features that save time, improve decision-making, and feel natural.',
    icon: FiCpu,
  },
  {
    title: 'Reliable backend systems',
    description: 'APIs, auth, integrations, and infrastructure that keep products running smoothly.',
    icon: FiZap,
  },
  {
    title: 'Thoughtful product experiences',
    description: 'Interfaces and flows designed to feel clear, polished, and easy to use.',
    icon: FiGlobe,
  },
];

export default function WhatIBuild() {
  return (
    <section id="build" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">What I Build</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Products that balance speed, clarity, and scale</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            {personalInfo.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {buildAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-card p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm leading-7 text-text-secondary">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
