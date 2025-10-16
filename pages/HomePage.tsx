import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Appointment from '../components/Appointment';
import Boutique from '../components/Boutique';
import Contact from '../components/Contact';
import { Page } from '../App';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <>
      <Hero navigate={navigate} />
      <Services navigate={navigate} />
      <Gallery />
      <Testimonials />
      <Appointment navigate={navigate} />
      <Boutique />
      <Contact />
    </>
  );
};

export default HomePage;
