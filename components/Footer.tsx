import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Page } from '../App';

const SocialIcon: React.FC<{ href: string; 'aria-label': string; children: React.ReactNode }> = ({ href, 'aria-label': ariaLabel, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-gray-400 hover:text-brand-gold transition-colors">
    {children}
  </a>
);

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({navigate}) => {
    const { t } = useLanguage();

    return (
        <footer className="bg-dark-card text-gray-400 border-t-4 border-brand-gold">
            <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    {/* Column 1: Brand & Social */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-3xl font-serif font-bold text-brand-gold">{t('brand')}</h2>
                        <p className="mt-2 max-w-xs">{t('footer.description')}</p>
                        <div className="mt-6 flex justify-center md:justify-start space-x-6">
                            <SocialIcon href="https://www.instagram.com/perfecto_coiffe" aria-label="Instagram">
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2h.001zm-1.04 2.268c-1.02.047-1.634.21-2.188.437a2.668 2.668 0 00-1.033.803 2.668 2.668 0 00-.803 1.033c-.227.554-.39 1.168-.437 2.188-.047 1.02-.058 1.352-.058 3.272s.011 2.252.058 3.272c.047 1.02.21 1.634.437 2.188a2.668 2.668 0 00.803 1.033 2.668 2.668 0 001.033.803c.554.227 1.168.39 2.188.437 1.02.047 1.352.058 3.272.058s2.252-.011 3.272-.058c1.02-.047 1.634-.21 2.188-.437a2.668 2.668 0 001.033-.803 2.668 2.668 0 00.803-1.033c.227-.554.39-1.168.437-2.188.047-1.02.058-1.352.058-3.272s-.011-2.252-.058-3.272c-.047-1.02-.21-1.634-.437-2.188a2.668 2.668 0 00-.803-1.033 2.668 2.668 0 00-1.033-.803c-.554-.227-1.168-.39-2.188-.437-1.02-.047-1.352-.058-3.272-.058s-2.252.011-3.272.058zm2.14 2.316a4.402 4.402 0 100 8.804 4.402 4.402 0 000-8.804zm-3.08 4.402a3.08 3.08 0 116.16 0 3.08 3.08 0 01-6.16 0z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#" aria-label="Facebook">
                               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t('contact.title')}</h3>
                        <ul className="mt-4 space-y-2">
                            <li><p><strong className="text-brand-gold">{t('location.addressLabel')}:</strong> {t('location.address')}</p></li>
                            <li><p><strong className="text-brand-gold">{t('contact.phoneLabel')}:</strong> {t('contact.phone')}</p></li>
                            <li><p><strong className="text-brand-gold">{t('contact.emailLabel')}:</strong> {t('contact.email')}</p></li>
                        </ul>
                    </div>
                     {/* Column 3: Hours */}
                    <div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t('location.hours')}</h3>
                        <ul className="mt-4 space-y-2">
                             <li>{t('location.schedule')}</li>
                        </ul>
                    </div>
                </div>

                <div className="my-8 h-80 rounded-lg overflow-hidden shadow-2xl border-2 border-brand-gold">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204505.4249110486!2d2.910385311656911!3d36.75979213193855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb21da3929e33%3A0x4c2323a77d337424!2sAlgiers!5e0!3m2!1sen!2sdz!4v1689252512345!5m2!1sen!2sdz"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Barber Shop Location"
                    ></iframe>
                </div>
                
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-base text-gray-400">{t('footer.copyright')}
                     <button onClick={() => navigate('dashboard')} className="ml-4 text-xs text-gray-600 hover:text-brand-gold">Admin</button>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;