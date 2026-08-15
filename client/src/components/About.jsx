import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren } from '../utils/animations';
import { personalInfo } from '../constants/personalInfo';

function StatCard({ label, value, suffix }) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(Number(value.replace('+', '')), 1800, isVisible);
  const display = value.includes('+') ? `${count}+` : value;

  return (
    <motion.div ref={ref} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center" variants={fadeInUp}>
      <div className="text-3xl sm:text-4xl font-bold text-primary">{display}</div>
      <div className="mt-2 text-sm text-text-secondary">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[100px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          About{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="glass-card p-7 border border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-4">My story</p>
              {personalInfo.aboutStory.map((paragraph) => (
                <p key={paragraph} className="text-text-secondary leading-8 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="glass-card p-7 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">What I bring to the table</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {personalInfo.strengths.map((strength) => (
                  <div key={strength} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-text-secondary">
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="glass-card p-7 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-5">At a glance</h3>
              <motion.div
                className="grid gap-4"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                {personalInfo.stats.map((stat) => (
                  <StatCard key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
                ))}
              </motion.div>
            </div>

            <div className="glass-card p-7 border border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">Location & availability</p>
              <p className="text-text-primary font-medium">{personalInfo.location}</p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{personalInfo.availability}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
