import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const testimonialItems = t('testimonials.items');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transform, setTransform] = useState<string>('rotateY(0deg) rotateX(0deg)');

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialItems.length);
  }, [testimonialItems.length]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  if (!testimonialItems || testimonialItems.length === 0) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = ((y / offsetHeight) - 0.5) * -10;
    const rotateY = ((x / offsetWidth) - 0.5) * 10;
    setTransform(`rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateY(0deg) rotateX(0deg)');
  };

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl font-serif font-black uppercase tracking-wider">
            {t('testimonials.mainTitle')}
          </h2>
          <div className="flex items-center justify-center mt-2">
            <div className="h-px w-16 bg-brand-gold"></div>
            <p className="mx-4 text-lg font-sans uppercase tracking-widest">
              {t('testimonials.subtitle')}
            </p>
          </div>
        </div>

        <div
          className="relative w-full h-64 perspective"
          style={{ perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {testimonialItems.map((testimonial: any, index: number) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: index === currentIndex ? transform : 'rotateY(0deg) rotateX(0deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.25s ease-out, opacity 1s ease-in-out',
              }}
            >
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "{testimonial[language as Language].quote}"
              </blockquote>
              <div className="mt-8 flex flex-col items-center">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial[language as Language].name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-brand-gold shadow-xl"
                />
                <cite className="text-xl font-bold text-white not-italic">
                  {testimonial[language as Language].name}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
