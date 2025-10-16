import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../contexts/LanguageContext';
import { Page } from '../App';

interface ServicesProps {
    navigate: (page: Page) => void;
}

const ScissorsIcon = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6l12 12M6 18L18 6M7 11a4 4 0 11-8 0 4 4 0 018 0zM17 11a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const RazorIcon = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 2v2M5 6v2M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M5 10h14" /></svg>
);
const BeardIcon = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 3h6m-8-9l2-2 6 6-2 2-6-6zM5 19v-4a2 2 0 012-2h10a2 2 0 012 2v4" /></svg>
);
const MoustacheIcon = () => (
    <svg className="w-12 h-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10s2-4 7-4 7 4 7 4" /></svg>
);

const serviceIcons: { [key: string]: React.ReactNode } = {
    scissors: <ScissorsIcon />,
    razor: <RazorIcon />,
    beard: <BeardIcon />,
    moustache: <MoustacheIcon />
};

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

const Services: React.FC<ServicesProps> = ({ navigate }) => {
    const { t, language } = useLanguage();
    const serviceItems = t('services.items');
    const [currentIndex, setCurrentIndex] = useState(0);
    

    const nextSlide = () => setCurrentIndex(prev => (prev + 1) % serviceItems.length);
    const prevSlide = () => setCurrentIndex(prev => (prev - 1 + serviceItems.length) % serviceItems.length);
  
    return (
        <section id="services" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-serif font-black uppercase tracking-wider">{t('services.title')}</h2>
                        <div className="flex items-center mt-2 mb-10">
                             <div className="h-px w-16 bg-brand-gold"></div>
                             <p className="mx-4 text-lg font-sans uppercase tracking-widest">{t('services.subtitle')}</p>
                        </div>

                        <div className="space-y-8">
                            {serviceItems.map((service: any, index: number) => (
                                <div key={index} className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        {serviceIcons[service.icon]}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase">{service[language as Language].name}</h3>
                                        <p className="text-gray-400 mt-1">{service[language as Language].description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button
                          onClick={() => navigate('booking')}
                          className="mt-12 inline-flex items-center bg-transparent text-white font-bold py-3 px-8 border border-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            {t('services.cta')}
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </div>

                    {/* Right Column: Image Slider */}
                    <div className="relative w-full h-[70vh] overflow-hidden">
                         <div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            <img src="/assets/service1.jpg" alt="Service 1" className="w-full h-full object-cover flex-shrink-0" />
                            <img src="/assets/service2.jpg" alt="Service 2" className="w-full h-full object-cover flex-shrink-0" />
                            <img src="/assets/service3.jpg" alt="Service 3" className="w-full h-full object-cover flex-shrink-0" />
                            <img src="/assets/service4.jpg" alt="Service 4" className="w-full h-full object-cover flex-shrink-0" />
                        </div>
                        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors" aria-label="Previous image"><ChevronLeft /></button>
                        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors" aria-label="Next image"><ChevronRight /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
