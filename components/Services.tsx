import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../contexts/LanguageContext';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800 dark:text-white">
    {children}
  </h2>
);

interface Service {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

const ServiceCard: React.FC<Service> = ({ name, description, price, imageUrl }) => (
    <div className="group relative rounded-lg overflow-hidden shadow-lg h-80">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-75 transition-all duration-300"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">{name}</h3>
            <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-500 overflow-hidden">{description}</p>
            <div className="text-xl font-bold text-white border-t border-brand-gold pt-2">{price}</div>
        </div>
    </div>
);

const Services: React.FC = () => {
    const { t, language } = useLanguage();
    const serviceItems = t('services.items');
  
    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('services.title')}</SectionTitle>
                <div className="grid md:grid-cols-2 gap-8">
                    {serviceItems.map((service: any, index: number) => (
                        <ServiceCard 
                            key={index}
                            name={service[language as Language].name}
                            description={service[language as Language].description}
                            price={service[language as Language].price}
                            imageUrl={service.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;