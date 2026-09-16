import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';

import MethodologySteps from '@/components/methodology/MethodologySteps';

import styles from './MethodologyPreview.module.css';

const steps = [
  {
    number: '1',
    title: 'Planificar',
    description:
      'Analizamos el proyecto desde sus primeras etapas para identificar variables críticas, riesgos y oportunidades.',
  },
  {
    number: '2',
    title: 'Integrar',
    description:
      'Conectamos equipos, especialidades y objetivos para construir una visión común del proyecto.',
  },
  {
    number: '3',
    title: 'Optimizar',
    description:
      'Buscamos oportunidades para utilizar mejor los recursos, reducir incertidumbres y mejorar procesos.',
  },
  {
    number: '4',
    title: 'Ejecutar',
    description:
      'Llevamos la planificación a campo con disciplina, coordinación y seguimiento permanente.',
  },
  {
    number: '5',
    title: 'Controlar',
    description:
      'Medimos avances y variables críticas para mantener el proyecto alineado con sus objetivos.',
  },
  {
    number: '6',
    title: 'Entregar',
    description:
      'Cerramos cada proyecto con foco en calidad, cumplimiento y generación de valor.',
  },
];

export default function MethodologyPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <div className={styles.header}>
            <SectionTitle
              eyebrow="Nuestra metodología"
              title={
                <>
                  Pensamos antes
                  <br />
                  <span>de construir.</span>
                </>
              }
              description="Nuestra metodología conecta planificación, personas, información y ejecución para tomar mejores decisiones durante todo el ciclo del proyecto."
              light
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <MethodologySteps steps={steps} />
        </Reveal>
      </Container>
    </section>
  );
}