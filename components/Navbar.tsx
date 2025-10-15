import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../contexts/LanguageContext';
import type { Page } from '../App';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface NavbarProps {
  navigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ navigate, currentPage }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home'), page: 'home', showOnHome: true },
    { href: '#services', label: t('nav.services'), page: 'home', showOnHome: true },
    { href: '#gallery', label: t('nav.gallery'), page: 'home', showOnHome: true },
    { href: '#testimonials', label: t('nav.testimonials'), page: 'home', showOnHome: true },
    { href: '#contact', label: t('nav.contact'), page: 'home', showOnHome: true },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, page: Page) => {
    if (page === 'home' && currentPage === 'home') {
       e.preventDefault();
       document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
       navigate(page);
    }
    setIsOpen(false);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => navigate('home')} className="text-2xl font-serif font-bold text-brand-gold tracking-wider">
            {t('brand')}
          </button>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              (link.showOnHome && currentPage === 'home') && (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href, link.page as Page)} className="text-gray-700 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium">
                  {link.label}
                </a>
              )
            ))}
             {currentPage !== 'home' && (
                <button onClick={() => navigate('home')} className="text-gray-700 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium">
                  {t('nav.home')}
                </button>
             )}
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-gray-700 dark:text-gray-300 border-none focus:ring-0 cursor-pointer"
              aria-label="Language selector"
            >
              <option value="en" className="bg-white dark:bg-dark-bg">EN</option>
              <option value="fr" className="bg-white dark:bg-dark-bg">FR</option>
              <option value="ar" className="bg-white dark:bg-dark-bg">AR</option>
            </select>
            <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300" aria-label="Open menu">
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white dark:bg-dark-bg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
             (link.showOnHome && currentPage === 'home') && (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.page as Page)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card"
              >
                {link.label}
              </a>
             )
          ))}
          {currentPage !== 'home' && (
             <button onClick={() => navigate('home')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card">
                {t('nav.home')}
              </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;