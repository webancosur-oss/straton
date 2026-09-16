import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './AboutApproach.module.css';

export default function AboutApproach() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.eyebrow}>
              Nuestra forma de trabajar
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2>
              La calidad de un proyecto
              <br />
              comienza con la calidad
              <br />
              de sus <em>decisiones.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p>
              Nuestro enfoque combina visión estratégica,
              conocimiento técnico y disciplina operativa
              para acompañar cada etapa del proyecto.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}