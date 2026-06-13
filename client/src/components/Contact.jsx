import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiCopy, FiSend, FiLoader } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const contactInfo = [
  { icon: FiMail, label: 'kprathamesh2001@gmail.com', href: 'mailto:kprathamesh2001@gmail.com', copyable: true },
  { icon: FiPhone, label: '+91 8779099074', href: 'tel:+918779099074', copyable: false },
  { icon: FiLinkedin, label: 'linkedin.com/in/prathameshkokkula', href: 'https://linkedin.com/in/prathameshkokkula', copyable: false, external: true },
  { icon: FiGithub, label: 'github.com/pk-062001', href: 'https://github.com/pk-062001', copyable: false, external: true },
];

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  // errors: plain object (no TypeScript Record<string, string> needed)
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.from_name.trim()) e.from_name = 'Name is required';
    if (!formData.from_email.trim()) e.from_email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.from_email)) e.from_email = 'Invalid email';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Sends form data to Express API POST /api/contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Server returned validation errors
        if (data.errors) {
          setErrors(data.errors);
        }
        throw new Error(data.message || 'Something went wrong');
      }

      toast.success("Message sent! I'll get back soon.");
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Email me directly.');
    } finally {
      setSending(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const inputClass = (field) =>
    `w-full bg-white/[0.04] border ${
      errors[field]
        ? 'border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.15)]'
        : 'border-white/[0.08] focus:border-primary/50 focus:shadow-[0_0_16px_rgba(59,130,246,0.15)]'
    } rounded-btn px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 outline-none transition-all duration-300 backdrop-blur-sm`;

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-8%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] animate-float-slow" />
        <div className="absolute bottom-[10%] left-[-8%] w-[450px] h-[450px] rounded-full bg-secondary/8 blur-[110px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Together</span>
        </motion.h2>
        <motion.p
          className="text-text-secondary text-center max-w-xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Open to full-time roles, freelance projects, and collaborations. Based in Mumbai — available remotely.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="space-y-4"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon size={18} />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                  {item.label}
                </span>
                {item.copyable && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyToClipboard(item.label);
                    }}
                    className="ml-auto text-text-secondary hover:text-primary transition-colors shrink-0"
                    aria-label="Copy to clipboard"
                  >
                    <FiCopy size={14} />
                  </button>
                )}
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                  className={inputClass('from_name')}
                />
                {errors.from_name && <p className="text-xs text-red-400 mt-1">{errors.from_name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                  className={inputClass('from_email')}
                />
                {errors.from_email && <p className="text-xs text-red-400 mt-1">{errors.from_email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClass('subject')}
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="gradient-button w-full px-6 py-3 rounded-btn font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <FiLoader className="animate-spin" size={16} /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
