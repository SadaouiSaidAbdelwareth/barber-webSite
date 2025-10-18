import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800 dark:text-white">
    {children}
  </h2>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const images: string[] = t('galleryImages');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transform, setTransform] = useState<string>('rotateY(0deg) rotateX(0deg)');

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // 3D tilt effect handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = ((y / offsetHeight) - 0.5) * -10; // tilt up/down
    const rotateY = ((x / offsetWidth) - 0.5) * 10;   // tilt left/right
    setTransform(`rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateY(0deg) rotateX(0deg)');
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{t('gallery.title')}</SectionTitle>
        <div
          className="relative w-full max-w-4xl mx-auto h-[60vh] overflow-hidden rounded-lg shadow-2xl perspective"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: '1000px',
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%) ${transform}`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.2s ease-out',
            }}
          >
            <img src="/assets/img1.jpg" alt="img 1" className="w-full h-full object-cover flex-shrink-0" />
            <img src="/assets/img2.jpg" alt="img 2" className="w-full h-full object-cover flex-shrink-0" />
            <img src="/assets/img3.jpg" alt="img 3" className="w-full h-full object-cover flex-shrink-0" />
            <img src="/assets/img4.jpg" alt="img 4" className="w-full h-full object-cover flex-shrink-0" />
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index
                  ? 'bg-brand-gold'
                  : 'bg-white/50 hover:bg-white/75'
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
