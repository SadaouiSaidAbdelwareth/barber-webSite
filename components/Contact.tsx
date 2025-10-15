import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800 dark:text-white">
    {children}
  </h2>
);

const Contact: React.FC = () => {
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent! (Simulation)');
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('contact.title')}</SectionTitle>
                <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">{t('contact.form.name')}</label>
                            <input type="text" name="name" id="name" placeholder={t('contact.form.name')} required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">{t('contact.form.email')}</label>
                            <input type="email" name="email" id="email" placeholder={t('contact.form.email')} required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">{t('contact.form.message')}</label>
                            <textarea name="message" id="message" rows={5} placeholder={t('contact.form.message')} required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-gold text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300">
                            {t('contact.form.cta')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;