import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactLocation from '@/components/contact/ContactLocation';

export const metadata = {
  title: 'Contacto | STRATON',
  description:
    'Conversemos sobre tu próximo proyecto de ingeniería y construcción.',
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />

        <ContactInfo />

        <ContactForm />

        <ContactLocation />
      </main>

      <Footer />
    </>
  );
}