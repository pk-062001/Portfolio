import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const roles = [
  'Senior Full Stack Developer',
  'MERN Stack Engineer',
  'Production Systems Builder',
  'Backend Architect',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] animate-float-slower" />
      </div>

      <div className="absolute inset-0 grain-texture pointer-events-none" />

      {particlesReady && (
        <Particles
          id="tsparticles-hero"
          options={{
            fullScreen: false,
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              color: { value: '#ffffff' },
              number: { value: 40, density: { enable: true } },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 2 } },
              move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                outModes: 'out',
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
      )}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          className="inline-flex items-center gap-2 glass-pill px-4 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
          <span className="text-sm font-medium text-text-secondary">Available for Opportunities</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Prathamesh Kokkula
          </span>
        </motion.h1>

        <motion.div
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span
            className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {roles[roleIndex]}
          </span>
        </motion.div>

        <motion.p
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
        >
          I build production-grade, scalable web applications — from REST APIs and payment systems
          to real-time infrastructure. 3 years of shipping real products at scale.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
        >
          <button
            onClick={scrollToProjects}
            className="gradient-button px-8 py-3 rounded-btn font-semibold text-white"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="glass-button px-8 py-3 rounded-btn font-semibold"
          >
            Let's Connect
          </button>
        </motion.div>

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
