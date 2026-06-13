import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/pk-062001', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/prathameshkokkula', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:kprathamesh2001@gmail.com', label: 'Email' },
];

export default function SocialSidebar() {
  return (
    <motion.div
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
    >
      {/* Top glowing line */}
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 hover:shadow-glow transition-all duration-300"
          aria-label={s.label}
        >
          <s.icon size={16} />
        </a>
      ))}

      {/* Bottom glowing line */}
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
    </motion.div>
  );
}
