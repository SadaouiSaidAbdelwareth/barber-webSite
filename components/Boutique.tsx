import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../contexts/LanguageContext';

interface Product {
    imageUrl: string;
    price: string;
    [key: string]: any;
}

const ProductCard: React.FC<{ product: Product, language: Language, ctaText: string }> = ({ product, language, ctaText }) => (
    <div className="group text-center">
        <div className="relative bg-gray-100 dark:bg-dark-card p-4 overflow-hidden">
            <img src={product.imageUrl} alt={product[language].name} className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="p-4 bg-white dark:bg-black">
             <button className="w-full bg-transparent text-gray-800 dark:text-white font-bold py-3 px-6 border border-gray-800 dark:border-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                {ctaText}
            </button>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wider">{product[language].name}</h3>
            {product[language].tag && <p className="text-xs text-brand-gold mt-1">{product[language].tag}</p>}
            <p className="mt-2 text-lg font-serif font-bold">{product.price}</p>
        </div>
    </div>
);

const Boutique: React.FC = () => {
    const { t, language } = useLanguage();
    const boutiqueItems: Product[] = t('boutique.items');
  
    return (
        <section id="boutique" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-serif font-black uppercase tracking-wider text-gray-800 dark:text-white">{t('boutique.title')}</h2>
                    <div className="flex items-center justify-center mt-2">
                        <div className="h-px w-16 bg-brand-gold"></div>
                        <p className="mx-4 text-lg font-sans uppercase tracking-widest text-gray-600 dark:text-gray-400">{t('boutique.subtitle')}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {boutiqueItems.map((product, index) => (
                        <ProductCard key={index} product={product} language={language as Language} ctaText={t('boutique.cta')} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Boutique;
