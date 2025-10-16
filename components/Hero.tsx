import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Page } from '../App';

interface HeroProps {
  navigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const rotateY = ((x / offsetWidth) - 0.5) * 30; // rotate max 15° each side
    const rotateX = ((y / offsetHeight) - 0.5) * -30; // inverse for correct direction
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${t('heroImage')}')` }}
      ></div>

      <div className="relative z-20 text-center px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-lg md:text-xl font-sans tracking-widest text-brand-gold uppercase animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* 🌟 3D Tilt Title */}
          <div
            className="inline-block perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black font-serif my-4 transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            >
              {t('hero.title')}
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {t('hero.description')}
          </p>

          <button
            onClick={() => navigate('booking')}
            className="inline-block bg-brand-gold text-white font-bold py-4 px-10 rounded-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '1.1s' }}
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
