import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { fadeInUp } from '../utils/animations';
import { socials } from '../data/socials';
import { personalInfo } from '../constants/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass-card p-6 sm:p-8 flex flex-col items-center gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className="text-sm text-text-secondary text-center">
            Designed &amp; Built by{' '}
            <span className="text-text-primary font-medium">{personalInfo.name}</span>
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 hover:shadow-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-text-secondary/60">
            &copy; {new Date().getFullYear()} — All rights reserved
          </p>

          <button
            onClick={scrollToTop}
            className="glass-pill px-4 py-2 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
          >
            Back to top <FiArrowUp className="inline ml-1" size={12} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
