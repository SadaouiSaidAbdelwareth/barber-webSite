import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../contexts/LanguageContext';
import { Page } from '../App';

interface BookingPageProps {
  navigate: (page: Page) => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ navigate }) => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  
  const serviceItems = t('services.items');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 pt-40 min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('booking.title')}
        </h2>
        
        {submitted ? (
            <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-serif text-brand-gold mb-4">{t('booking.form.success')}</h3>
                <button onClick={() => navigate('home')} className="mt-4 inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300">
                    {t('nav.home')}
                </button>
            </div>
        ) : (
            <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">{t('booking.form.name')}</label>
                  <input type="text" name="name" id="name" placeholder={t('booking.form.name')} required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition"/>
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">{t('booking.form.phone')}</label>
                  <input type="tel" name="phone" id="phone" placeholder={t('booking.form.phone')} required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition"/>
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">{t('booking.form.service')}</label>
                  <select id="service" name="service" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition">
                    <option value="">{t('booking.form.service')}</option>
                    {serviceItems.map((service: any, index: number) => (
                      <option key={index} value={service[language as Language].name}>{service[language as Language].name}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="sr-only">{t('booking.form.date')}</label>
                    <input type="date" name="date" id="date" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition"/>
                  </div>
                  <div>
                    <label htmlFor="time" className="sr-only">{t('booking.form.time')}</label>
                    <input type="time" name="time" id="time" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 focus:ring-brand-gold focus:border-brand-gold transition"/>
                  </div>
                </div>
                <button type="submit" className="w-full bg-brand-gold text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300">
                  {t('booking.form.cta')}
                </button>
              </form>
            </div>
        )}
         <div className="text-center mt-8">
            <button onClick={() => navigate('home')} className="text-brand-gold hover:underline">
               &larr; Back to Home
            </button>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;