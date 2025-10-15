import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Page } from '../App';

interface AppointmentProps {
  navigate: (page: Page) => void;
}

const Appointment: React.FC<AppointmentProps> = ({ navigate }) => {
  const { t } = useLanguage();

  return (
    <section id="appointment" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up">
          {t('appointment.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {t('appointment.description')}
        </p>
        <button
          onClick={() => navigate('booking')}
          className="inline-block bg-brand-gold text-white font-bold py-4 px-10 rounded-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {t('appointment.cta')}
        </button>
      </div>
    </section>
  );
};

export default Appointment;