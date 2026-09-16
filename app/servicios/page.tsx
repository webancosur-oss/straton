import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';

export const metadata = {
  title: 'Servicios',
  description:
    'Servicios de ingeniería, construcción y gestión de proyectos de STRATON.',
};

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <main>
        <ServicesHero />

        <ServicesList />

      </main>

      <Footer />
    </>
  );
}