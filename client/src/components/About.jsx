import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren } from '../utils/animations';
import { FiCode, FiServer, FiCloud, FiShield } from 'react-icons/fi';

const stats = [
  { label: 'Years of Experience', value: 3, suffix: '+' },
  { label: 'APIs Built', value: 10, suffix: '+' },
  { label: 'Companies', value: 2, suffix: '' },
  { label: 'CGPA', value: 9.09, suffix: '', isDecimal: true },
];

const whatIDo = [
  { icon: FiServer, label: 'Backend Engineering', color: '#3b82f6' },
  { icon: FiCode, label: 'Frontend Development', color: '#8b5cf6' },
  { icon: FiCloud, label: 'Cloud & DevOps', color: '#22c55e' },
  { icon: FiShield, label: 'Auth & Security Systems', color: '#f59e0b' },
];

function StatCard({ label, value, suffix, isDecimal }) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(isDecimal ? 909 : value, 2000, isVisible);
  const display = isDecimal ? (count / 100).toFixed(2) : count;

  return (
    <motion.div
      ref={ref}
      className="text-center"
      variants={fadeInUp}
    >
      <div className="text-3xl sm:text-4xl font-bold">
        <span className="text-primary">{display}</span>
        <span className="text-primary ml-1">{suffix}</span>
      </div>
      <div className="text-sm text-text-secondary mt-2">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background orbs - Blue and Teal mood */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[100px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          About{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: What I Do - Vertical Timeline Style */}
          <motion.div
            className="flex flex-col gap-0 relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Orange vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent pointer-events-none" />

            {whatIDo.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative flex gap-6 mb-8 last:mb-0"
                variants={fadeInUp}
              >
                {/* Dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center mt-1 shrink-0 relative z-10"
                    style={{ backgroundColor: `${item.color}25`, border: `2px solid ${item.color}` }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {index === 0 && 'APIs, databases, and scalable architectures'}
                    {index === 1 && 'React, responsive UI, and smooth interactions'}
                    {index === 2 && 'AWS, Docker, CI/CD pipelines'}
                    {index === 3 && 'JWT, OAuth, and system protection'}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: About me Bio & Stats */}
          <motion.div
            className="flex flex-col gap-8"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">About me</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I'm a Senior Full Stack Developer based in Mumbai, specializing in the MERN stack.
                Over the past 3 years, I've worked as the primary engineer on live, revenue-generating
                B2B platforms — owning everything from API architecture and payment integrations to cloud
                infrastructure and production incident response.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                I was promoted to Senior Developer at BXI for independently delivering business-critical
                features — including a multi-gateway payment system (Juspay), RBAC with JWT, real-time
                admin dashboards, and full AWS/DigitalOcean deployment pipelines.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I don't just write code — I build and maintain systems that real businesses depend on.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 gap-8 pt-4"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
