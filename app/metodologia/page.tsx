import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import MethodologyHero from '@/components/methodology/MethodologyHero';
import MethodologySteps from '@/components/methodology/MethodologySteps';
import MethodologyPrinciples from '@/components/methodology/MethodologyPrinciples';

import Container from '@/components/ui/Container';

const steps = [
  {
    number: 'Planificar',
    title: 'Planificar',
    description:
      'Analizamos el proyecto, sus variables críticas, riesgos y oportunidades antes de comenzar la ejecución.',
  },
  {
    number: 'Integrar',
    title: 'Integrar',
    description:
      'Conectamos equipos, especialidades, información y objetivos bajo una misma visión.',
  },
  {
    number: 'Optimizar',
    title: 'Optimizar',
    description:
      'Identificamos oportunidades para utilizar mejor los recursos y reducir incertidumbre.',
  },
  {
    number: 'Ejecutar',
    title: 'Ejecutar',
    description:
      'Convertimos la planificación en acción mediante coordinación y disciplina operativa.',
  },
  {
    number: 'Controlar',
    title: 'Controlar',
    description:
      'Seguimos las variables críticas del proyecto para detectar desviaciones oportunamente.',
  },
  {
    number: 'Entregar',
    title: 'Entregar',
    description:
      'Cerramos cada proyecto con foco en calidad, cumplimiento y generación de valor.',
  },
];

export const metadata = {
  title: 'Metodología',
};

export default function MetodologiaPage() {
  return (
    <>
      <Header />

      <main>
        <MethodologyHero />

        <section
          style={{
            background: '#0b3440',
            color: '#fff',
            padding: 'clamp(80px, 10vw, 150px) 0',
          }}
        >
          <Container>
            <MethodologySteps steps={steps} />
          </Container>
        </section>

        <MethodologyPrinciples />

      </main>

      <Footer />
    </>
  );
}