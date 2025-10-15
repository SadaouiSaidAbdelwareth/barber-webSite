import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800 dark:text-white">
    {children}
  </h2>
);

const Gallery: React.FC = () => {
    const { t } = useLanguage();
    const images: string[] = t('galleryImages');

    return (
        <section id="gallery" className="py-20 bg-white dark:bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('gallery.title')}</SectionTitle>
                <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scrollbar-thin scrollbar-thumb-brand-gold scrollbar-track-gray-200 dark:scrollbar-track-dark-card">
                    {images.map((src, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-4/5 md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src={src} 
                                alt={`Gallery image ${index + 1}`} 
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* FIX: Removed the non-standard `jsx` prop from the <style> tag, as it's not a valid attribute in standard React and was causing a TypeScript error. */}
            <style>{`
                .scrollbar-thin::-webkit-scrollbar {
                    height: 8px;
                }
                .scrollbar-thumb-brand-gold::-webkit-scrollbar-thumb {
                    background-color: #c59d5f;
                    border-radius: 4px;
                }
                .scrollbar-track-gray-200::-webkit-scrollbar-track {
                    background-color: #e5e7eb;
                }
                .dark .scrollbar-track-dark-card::-webkit-scrollbar-track {
                    background-color: #1e1e1e;
                }
            `}</style>
        </section>
    );
};

export default Gallery;