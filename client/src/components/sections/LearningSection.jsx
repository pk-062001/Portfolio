import { motion } from 'framer-motion';
import { learningPath } from '../../data/learning';
import { fadeInUp } from '../../utils/animations';

export default function LearningSection() {
  return (
    <section id="learning" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_35%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">Currently Learning</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Deepening the systems behind modern AI products</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {learningPath.map((item, index) => (
            <motion.div
              key={item}
              className="glass-card border border-white/10 px-5 py-4 text-sm text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="mr-2 text-primary">•</span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
