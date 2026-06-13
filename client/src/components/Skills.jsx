import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { skills } from '../data/skills';
import { fadeInUp } from '../utils/animations';

export default function Skills() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [dist1, setDist1] = useState(0);
  const [dist2, setDist2] = useState(0);

  // Duplicate items so CSS infinite scroll is seamless
  const firstRow = skills.filter((_, i) => i % 2 === 0);
  const secondRow = skills.filter((_, i) => i % 2 !== 0);

  // Ensure enough copies to fill the track
  const makeLoop = (arr) => {
    let looped = [...arr];
    while (looped.length < 12) looped = [...looped, ...arr];
    return [...looped, ...looped]; // double for seamless loop
  };

  const firstRowLooped = makeLoop(firstRow);
  const secondRowLooped = makeLoop(secondRow);

  useEffect(() => {
    const resize = () => {
      if (row1Ref.current) {
        // scrollWidth includes duplicated content; move half for seamless loop
        setDist1(row1Ref.current.scrollWidth / 2 || 0);
      }
      if (row2Ref.current) {
        setDist2(row2Ref.current.scrollWidth / 2 || 0);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [firstRowLooped.length, secondRowLooped.length]);

  useEffect(() => {
    if (dist1 > 0) {
      controls1.start({
        x: [0, -dist1],
        transition: { x: { repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 30 } },
      });
    }
    if (dist2 > 0) {
      controls2.start({
        x: [-dist2, 0],
        transition: { x: { repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 30 } },
      });
    }
  }, [dist1, dist2]);

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-8%] w-[450px] h-[450px] rounded-full bg-secondary/8 blur-[110px] animate-float-slow" />
        <div className="absolute bottom-[15%] left-[-8%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            My Tech{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stack
            </span>
          </motion.h2>
          <motion.p
            className="text-center text-text-secondary text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            Tools and technologies I work with daily
          </motion.p>
        </div>

        {/* Marquee rows */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Side fade masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark via-dark/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark via-dark/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1 — scrolls left (Framer Motion) */}
          <motion.div
            ref={row1Ref}
            className="flex gap-4 mb-6 w-max"
            animate={controls1}
            onMouseEnter={() => controls1.stop()}
            onMouseLeave={() => {
              if (dist1 > 0) controls1.start({ x: [0, -dist1], transition: { x: { repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 30 } } });
            }}
          >
            {firstRowLooped.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </motion.div>

          {/* Row 2 — scrolls right (Framer Motion) */}
          <motion.div
            ref={row2Ref}
            className="flex gap-4 w-max"
            animate={controls2}
            onMouseEnter={() => controls2.stop()}
            onMouseLeave={() => {
              if (dist2 > 0) controls2.start({ x: [-dist2, 0], transition: { x: { repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 30 } } });
            }}
          >
            {secondRowLooped.map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div
      className="glass-card group
                 flex items-center gap-3
                 px-5 py-3.5 w-56 shrink-0
                 rounded-2xl cursor-default
                 border border-white/5
                 hover:border-primary/40
                 hover:bg-white/[0.04]
                 hover:-translate-y-0.5
                 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]
                 transition-all duration-300"
    >
      {/* Icon box */}
      <div
        className="w-10 h-10 shrink-0
                   rounded-xl
                   bg-white/[0.03] border border-white/[0.05]
                   group-hover:border-primary/30
                   group-hover:bg-primary/10
                   group-hover:scale-105
                   flex items-center justify-center
                   transition-all duration-300"
      >
        <skill.icon
          className="text-xl text-text-secondary
                     group-hover:text-primary
                     transition-colors duration-300"
        />
      </div>

      {/* Label */}
      <span
        className="text-sm font-semibold truncate
                   text-text-primary
                   group-hover:text-primary
                   transition-colors duration-300"
      >
        {skill.name}
      </span>
    </div>
  );
}