import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements';
import { fadeInUp } from '../../utils/animations';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_35%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Outcomes that matter to users and teams</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              className="glass-card p-6 border border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-4">0{index + 1}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{item.title}</h3>
              <p className="text-sm leading-7 text-text-secondary mb-4">{item.description}</p>
              <p className="text-sm font-medium text-primary">{item.impact}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
