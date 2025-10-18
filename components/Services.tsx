import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { Language } from "../contexts/LanguageContext";
import { Page } from "../App";

interface ServicesProps {
  navigate: (page: Page) => void;
}

const iconClass = "w-12 h-12 text-brand-gold";

// 🟡 SVG ICONS
const ScissorsIcon = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 6l12 12M6 18L18 6M7 11a4 4 0 11-8 0 4 4 0 018 0zM17 11a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
const RazorIcon = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 2v2M5 6v2M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M5 10h14"
    />
  </svg>
);
const BeardIcon = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12h6m-6 3h6m-8-9l2-2 6 6-2 2-6-6zM5 19v-4a2 2 0 012-2h10a2 2 0 012 2v4"
    />
  </svg>
);
const MoustacheIcon = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10s2-4 7-4 7 4 7 4" />
  </svg>
);

const serviceIcons: { [key: string]: React.ReactNode } = {
  scissors: <ScissorsIcon />,
  razor: <RazorIcon />,
  beard: <BeardIcon />,
  moustache: <MoustacheIcon />,
};

// 🟢 Arrow Icons
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

const Services: React.FC<ServicesProps> = ({ navigate }) => {
  const { t, language } = useLanguage();
  const serviceItems = t("services.items");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % serviceItems.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + serviceItems.length) % serviceItems.length);

  return (
    <section id="services" className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {/* Left Column */}
          <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <motion.h2
              className="text-5xl md:text-6xl font-serif font-black uppercase tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("services.title")}
            </motion.h2>

            <motion.div
              className="flex items-center mt-2 mb-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-16 bg-brand-gold"></div>
              <p className="mx-4 text-lg font-sans uppercase tracking-widest">{t("services.subtitle")}</p>
            </motion.div>

            <div className="space-y-8">
              {serviceItems.map((service: any, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6 p-3 rounded-md hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex-shrink-0">{serviceIcons[service.icon]}</div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase">{service[language as Language].name}</h3>
                    <p className="text-gray-400 mt-1">{service[language as Language].description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => navigate("booking")}
              className="mt-12 inline-flex items-center bg-transparent text-white font-bold py-3 px-8 border border-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {t("services.cta")}
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Column: Image Slider */}
          <motion.div
            className="relative w-full h-[70vh] overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={`/assets/service${currentIndex + 1}.jpg`}
                alt={`Service ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronRight />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
