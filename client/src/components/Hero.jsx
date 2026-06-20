import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import heroImage from '../assets/senior-dev-hero.svg';

const tags = ['react', 'node.js', 'mongodb', 'typescript'];

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-14">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_78%_48%,rgba(139,92,246,0.14),transparent_28%),linear-gradient(180deg,#070811_0%,#060608_100%)]" />
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <motion.div
              className="mb-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold lowercase text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              className="max-w-xl text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-text-primary leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
            >
              Hello, I'm{' '}
              <span className="block bg-gradient-to-r from-primary via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                Prathamesh.
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-md text-sm sm:text-base leading-7 text-text-secondary"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45 }}
            >
              A MERN stack engineer crafting clean interfaces, dependable APIs, and production-ready web
              experiences with a sharp eye for detail.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
            >
              <button
                onClick={scrollToContact}
                className="gradient-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:scale-[1.02] transition-transform duration-300"
              >
                Get in touch <FiArrowRight size={16} />
              </button>
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-text-primary hover:border-primary/30 hover:bg-white/[0.07] transition-colors"
              >
                Learn more
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[560px] rounded-[14px] border border-white/10 bg-black/40 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
              <motion.div
                className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src={heroImage}
                alt="Neon developer workspace illustration"
                className="relative w-full h-auto rounded-[10px]"
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
