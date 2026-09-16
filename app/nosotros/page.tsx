import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import AboutApproach from '@/components/about/AboutApproach';

export const metadata = {
  title: 'Nosotros',
  description:
    'Conoce la visión, filosofía y forma de trabajo de STRATON.',
};

export default function NosotrosPage() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />

        <AboutStory />

        <AboutValues />

        <AboutApproach />

      </main>

      <Footer />
    </>
  );
}