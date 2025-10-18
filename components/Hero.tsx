import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { Page } from "../App";

interface HeroProps {
  navigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const rotateY = ((x / offsetWidth) - 0.5) * 25;
    const rotateX = ((y / offsetHeight) - 0.5) * -25;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
        <img
        src="/assets/logo.png"
        alt="Company logo"
        className="w-40 h-auto  mb-4 md:mt-20 animate-[spin_10s_linear_infinite] hover:[animation-play-state:paused]"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url('${t("heroImage")}')` }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      {/* Content */}
      
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          

          {/* Title with 3D tilt */}
          <motion.div
            className="inline-block mt-4 perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black font-serif my-4 transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            >
              {t("hero.title")}
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Button */}
          <motion.button
            onClick={() => navigate("booking")}
            className="inline-block bg-brand-gold text-white font-bold py-4 px-10 rounded-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {t("hero.cta")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
