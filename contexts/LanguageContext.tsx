import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { SiteDataContext } from './SiteDataContext';

export type Language = 'en' | 'ar' | 'fr';

const get = (obj: any, path: string) => {
    const keys = path.split('.');
    return keys.reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const siteDataContext = useContext(SiteDataContext);

  if (!siteDataContext) {
    throw new Error('LanguageProvider must be used within a SiteDataProvider');
  }

  const { siteData } = siteDataContext;

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): any => {
    // 1. Try to get content for the current language
    const translatedContent = get(siteData[language], key);
    if (translatedContent !== undefined) {
      return translatedContent;
    }

    // 2. Fallback for nested array data (e.g., services, testimonials)
    // which is structured with all languages but only stored under 'en'
    const englishFallbackContent = get(siteData.en, key);
    if (englishFallbackContent !== undefined) {
        return englishFallbackContent;
    }

    // 3. Fallback for root-level common data (e.g., galleryImages)
    const commonContent = get(siteData, key);
    return commonContent || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};