import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';

import ServiceCard from '@/components/services/ServiceCard';

import styles from './ServicesPreview.module.css';

const services = [
  {
    number: '01',
    title: 'Preconstrucción',
    description:
      'Analizamos el proyecto desde sus primeras etapas para anticipar riesgos, oportunidades y variables críticas.',
  },
  {
    number: '02',
    title: 'Construcción',
    description:
      'Ejecutamos cada etapa bajo criterios de calidad, seguridad, planificación y control.',
  },
  {
    number: '03',
    title: 'Gestión',
    description:
      'Integramos equipos, especialidades, recursos y objetivos para mantener el proyecto alineado.',
  },
  {
    number: '04',
    title: 'Postventa',
    description:
      'Acompañamos el proyecto después de su entrega para mantener una relación de largo plazo.',
  },
];

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <div className={styles.header}>
            <SectionTitle
              eyebrow=""
              title={
                <>
                  Una solución
                  <br />
                  <span>integral.</span>
                </>
              }
              description="Acompañamos cada proyecto desde la estrategia inicial hasta su entrega, conectando planificación, ingeniería y ejecución."
            />

            <div className={styles.headerNumber}>
              <small>ÁREAS DE SERVICIO</small>
            </div>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={index * 0.08}
            >
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}