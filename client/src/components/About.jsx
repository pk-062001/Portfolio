import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren } from '../utils/animations';
import { FiCode, FiServer, FiCloud, FiShield } from 'react-icons/fi';

const stats = [
  { label: 'Years', value: 3, suffix: '+' },
  { label: 'APIs', value: 10, suffix: '+' },
  { label: 'Companies', value: 2, suffix: '' },
  { label: 'CGPA', value: 9.09, suffix: '', isDecimal: true },
];

const whatIDo = [
  { icon: FiServer, label: 'Backend Engineering', color: '#3b82f6' },
  { icon: FiCode, label: 'Frontend Development', color: '#8b5cf6' },
  { icon: FiCloud, label: 'Cloud & DevOps', color: '#22c55e' },
  { icon: FiShield, label: 'Auth & Security Systems', color: '#f59e0b' },
];

// TypeScript-free StatCard — props are plain JS, no interface needed
function StatCard({ label, value, suffix, isDecimal }) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(isDecimal ? 909 : value, 2000, isVisible);
  const display = isDecimal ? (count / 100).toFixed(2) : count;

  return (
    <div ref={ref} className="glass-card p-4 text-center hover:scale-[1.03] hover:border-primary/30 hover:shadow-glow transition-all duration-300">
      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {display}{suffix}
      </div>
      <div className="text-sm text-text-secondary mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px] animate-float-slower" />
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col items-center"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="relative group mb-8">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-lg group-hover:opacity-75 group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-[3px] animate-spin-slow" />
              <div className="relative w-[280px] h-[280px] rounded-full bg-dark flex items-center justify-center overflow-hidden shadow-glow">
                <span className="text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  PK
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['React.js', 'Node.js', 'MongoDB'].map((chip) => (
                <span key={chip} className="glass-pill px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-primary/20 transition-all duration-300">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <p className="text-text-secondary leading-relaxed mb-6">
              I'm a Senior Full Stack Developer based in Mumbai, specializing in the MERN stack.
              Over the past 3 years, I've worked as the primary engineer on live, revenue-generating
              B2B platforms — owning everything from API architecture and payment integrations to cloud
              infrastructure and production incident response.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              I was promoted to Senior Developer at BXI for independently delivering business-critical
              features — including a multi-gateway payment system (Juspay), RBAC with JWT, real-time
              admin dashboards, and full AWS/DigitalOcean deployment pipelines.
            </p>
            <p className="text-text-secondary leading-relaxed mb-10">
              I don't just write code — I build and maintain systems that real businesses depend on.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {whatIDo.map((item) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-4 flex items-center gap-3 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
