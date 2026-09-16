import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import MethodologyPreview from '@/components/home/MethodologyPreview';
import Stats from '@/components/home/Stats';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Differentials from '@/components/home/Differentials';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutPreview />

        <ServicesPreview />

        <MethodologyPreview />

        <Stats />

        <FeaturedProjects />

        <Differentials />

      </main>

      <Footer />
    </>
  );
}