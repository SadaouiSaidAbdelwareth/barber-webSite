import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800 dark:text-white">
    {children}
  </h2>
);

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [sent, setSent] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = ((x / offsetWidth) - 0.5) * 10;
    const rotateX = ((y / offsetHeight) - 0.5) * -10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
    alert('Message sent! (Simulation)');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{t('contact.title')}</SectionTitle>

        {/* 🌟 Animated Card */}
        <div
          className="relative bg-white dark:bg-dark-card p-8 rounded-2xl shadow-2xl transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            boxShadow: `0 20px 40px rgba(0,0,0,0.3), inset 0 0 15px rgba(255,215,0,${Math.abs(rotation.x) / 20})`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-brand-gold/30 via-transparent to-brand-gold/30 opacity-0 hover:opacity-100 blur-sm transition-opacity duration-700"></div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t('contact.form.name')}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-transform duration-300 transform group-focus-within:-translate-y-1"
              />
            </div>
            <div className="group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t('contact.form.email')}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-transform duration-300 transform group-focus-within:-translate-y-1"
              />
            </div>
            <div className="group">
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder={t('contact.form.message')}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-transform duration-300 transform group-focus-within:-translate-y-1"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full bg-brand-gold text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${
                sent ? 'animate-pulse' : ''
              }`}
            >
              {sent ? t('contact.form.sent') || '✔ Sent!' : t('contact.form.cta')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
