import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import ServiceCard from './ServiceCard';

import styles from './ServicesList.module.css';

const services = [
  {
    number: 'Preconstrucción',
    title: 'Preconstrucción',
    description:
      'Analizamos las variables del proyecto desde sus primeras etapas para anticipar riesgos y oportunidades.',
  },
  {
    number: 'Construcción',
    title: 'Construcción',
    description:
      'Ejecutamos el proyecto bajo criterios de planificación, seguridad, calidad y control.',
  },
  {
    number: 'Gestión',
    title: 'Gestión de proyectos',
    description:
      'Coordinamos equipos, especialidades y recursos para mantener los objetivos alineados.',
  },
  {
    number: 'Postventa',
    title: 'Acompañamiento',
    description:
      'Mantenemos una relación de largo plazo después de la entrega del proyecto.',
  },
];

export default function ServicesList() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <Reveal>
            <span className={styles.eyebrow}>
              Lo que hacemos
            </span>

            <h2>
              Capacidades que
              <br />
              trabajan <span>juntas.</span>
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
            >
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}