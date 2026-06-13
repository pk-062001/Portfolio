import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import abcImage from '../assets/abc.png';

const roles = [
  'Senior Full Stack Developer',
  'MERN Stack Engineer',
  'Production Systems Builder',
  'Backend Architect',
];

export default function Hero() {
  const [displayRole, setDisplayRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setDisplayRole(roles[(roleIndex + 1) % roles.length]);
        setFade(true);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, [roleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-secondary/6 blur-[120px] animate-float-slower" />
      </div>

      <div className="absolute inset-0 grain-texture pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/3 left-10 w-32 h-32 border border-white/5 rounded-lg animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/4 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '25s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {/* Hello greeting */}
            <div className="flex items-center gap-3">
              <motion.span
                className="text-4xl sm:text-5xl font-bold text-text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hello
              </motion.span>
              <motion.span
                className="text-4xl sm:text-5xl text-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
              >
                .
              </motion.span>
            </div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
            >
              I'm Prathamesh Kokkula
            </motion.h1>

            {/* Role with typewriter effect */}
            <motion.div
              className="min-h-16 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                key={roleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: fade ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {displayRole}
              </motion.h2>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
            >
              <button
                onClick={scrollToProjects}
                className="gradient-button px-8 py-4 rounded-btn font-semibold text-white hover:scale-105 transition-transform duration-300"
              >
                Got a project?
              </button>
              <button
                onClick={scrollToContact}
                className="glass-button px-8 py-4 rounded-btn font-semibold hover:scale-105 transition-transform duration-300"
              >
                My Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo Area */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="relative w-72 h-96 flex items-end justify-center">
              {/* Glowing ring background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Animated border ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary/60 via-secondary/40 to-primary/30 bg-clip-border"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Profile image */}
              <motion.div
                className="relative w-64 h-80 rounded-3xl bg-gradient-to-br from-primary/10 via-dark to-secondary/10 border border-white/10 overflow-hidden group cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={abcImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:opacity-100 opacity-0"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
