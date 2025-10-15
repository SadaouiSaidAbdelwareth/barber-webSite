import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../contexts/LanguageContext';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-800 dark:text-white">
    {children}
  </h2>
);

interface Testimonial {
    quote: string;
    name: string;
    imageUrl: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, imageUrl }) => (
    <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
        <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full object-cover -mt-20 mb-4 border-4 border-brand-gold shadow-xl" />
        <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">"{quote}"</p>
        <cite className="font-bold text-gray-800 dark:text-white not-italic">- {name}</cite>
    </div>
);

const Testimonials: React.FC = () => {
    const { t, language } = useLanguage();
    const testimonialItems = t('testimonials.items');

    return (
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('testimonials.title')}</SectionTitle>
                <div className="grid md:grid-cols-3 gap-16 pt-10">
                    {testimonialItems.map((testimonial: any, index: number) => (
                         <TestimonialCard 
                            key={index}
                            quote={testimonial[language as Language].quote}
                            name={testimonial[language as Language].name}
                            imageUrl={testimonial.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;