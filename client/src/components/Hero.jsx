import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown, FiCode } from 'react-icons/fi';
import heroImage from '../assets/senior-dev-hero.svg';
import { personalInfo } from '../constants/personalInfo';

const highlights = ['React', 'Node.js', 'MongoDB', 'AI'];

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_78%_48%,rgba(139,92,246,0.14),transparent_28%),linear-gradient(180deg,#070811_0%,#060608_100%)]" />
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <motion.h1
              className="mt-6 max-w-2xl text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.04em] text-text-primary leading-[0.95]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
            >
              {personalInfo.headline}
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-sm sm:text-base leading-8 text-text-secondary"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45 }}
            >
              {personalInfo.intro}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
            >
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-text-secondary">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="gradient-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:scale-[1.02] transition-transform duration-300"
              >
                View Projects <FiArrowRight size={16} />
              </button>
              <a
                href={personalInfo.resumeHref}
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-text-primary hover:border-primary/30 hover:bg-white/[0.07] transition-colors"
              >
                Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[560px] rounded-[18px] border border-white/10 bg-black/40 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
              <motion.div
                className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src={heroImage}
                alt="Developer workspace illustration"
                className="relative w-full h-auto rounded-[12px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiChevronDown className="w-6 h-6 text-text-secondary" />
      </motion.div>
    </section>
  );
}
