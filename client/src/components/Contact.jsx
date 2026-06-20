import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiCopy, FiSend, FiLoader } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const contactInfo = [
  { icon: FiMail, label: 'kprathamesh2001@gmail.com', href: 'mailto:kprathamesh2001@gmail.com', copyable: true },
  { icon: FiPhone, label: '+91 8779099074', href: 'tel:+918779099074', copyable: false },
  { icon: FiLinkedin, label: 'linkedin.com/in/prathameshkokkula', href: 'https://linkedin.com/in/prathameshkokkula', copyable: false, external: true },
  { icon: FiGithub, label: 'github.com/pk-062001', href: 'https://github.com/pk-062001', copyable: false, external: true },
];

const initialFormData = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
};

const cleanEnv = (value) => value?.trim().replace(/^["']|["']$/g, '');

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const emailJsConfig = {
    serviceId: cleanEnv(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    templateId: cleanEnv(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    publicKey: cleanEnv(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
    toEmail: cleanEnv(import.meta.env.VITE_CONTACT_TO_EMAIL) || 'kprathamesh2001@gmail.com',
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.from_name.trim()) nextErrors.from_name = 'Name is required';
    else if (formData.from_name.trim().length < 2) nextErrors.from_name = 'Name must be at least 2 characters';

    if (!formData.from_email.trim()) nextErrors.from_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.from_email)) {
      nextErrors.from_email = 'Enter a valid email address';
    }

    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required';
    else if (formData.subject.trim().length < 3) nextErrors.subject = 'Subject must be at least 3 characters';

    if (!formData.message.trim()) nextErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      const message = 'Email service is not configured yet. Please email me directly at kprathamesh2001@gmail.com.';
      setStatus({ type: 'error', message });
      toast.error('EmailJS configuration is missing.');
      return;
    }

    setSending(true);
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.from_name.trim(),
          from_email: formData.from_email.trim(),
          reply_to: formData.from_email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          to_email: emailJsConfig.toEmail,
          submitted_at: new Date().toLocaleString(),
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      toast.success("Message sent! I'll get back soon.");
      setStatus({ type: 'success', message: "Message sent successfully. I'll get back soon." });
      setFormData(initialFormData);
      setErrors({});
      formRef.current?.reset();
    } catch (err) {
      const message = err?.text || err?.message || 'Something went wrong. Email me directly at kprathamesh2001@gmail.com.';
      setStatus({ type: 'error', message });
      toast.error('Could not send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setStatus({ type: '', message: '' });
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: '' }));
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
        <div className="absolute bottom-[10%] left-[-8%] w-[450px] h-[450px] rounded-full bg-emerald-500/8 blur-[110px] animate-float-slower" />
      </div>
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-primary to-emerald-300 bg-clip-text text-transparent">Together</span>
        </motion.h2>
        <motion.p
          className="text-text-secondary text-center max-w-xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          Open to full-time roles, freelance projects, and collaborations. Based in Mumbai, available remotely.
        </motion.p>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <motion.div
            className="space-y-4"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={18} />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                  {item.label}
                </span>
                {item.copyable && (
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      copyToClipboard(item.label);
                    }}
                    className="ml-auto text-text-secondary hover:text-primary transition-colors shrink-0"
                    aria-label="Copy to clipboard"
                    type="button"
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
            viewport={{ once: false, amount: 0.1 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-5 sm:p-6 space-y-4">
              {status.message && (
                <div
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
                      : status.type === 'error'
                        ? 'border-red-400/30 bg-red-400/10 text-red-200'
                        : 'border-primary/30 bg-primary/10 text-blue-100'
                  }`}
                  role="status"
                >
                  {status.message}
                </div>
              )}
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={(event) => updateField('from_name', event.target.value)}
                  className={inputClass('from_name')}
                  autoComplete="name"
                />
                {errors.from_name && <p className="text-xs text-red-400 mt-1">{errors.from_name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={(event) => updateField('from_email', event.target.value)}
                  className={inputClass('from_email')}
                  autoComplete="email"
                />
                {errors.from_email && <p className="text-xs text-red-400 mt-1">{errors.from_email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(event) => updateField('subject', event.target.value)}
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
                  onChange={(event) => updateField('message', event.target.value)}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="gradient-button w-full px-6 py-3 rounded-btn font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
