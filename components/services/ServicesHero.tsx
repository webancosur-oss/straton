import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.eyebrow}>
              Capacidades
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Del concepto
              <br />
              <span>al resultado.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p>
              Una visión integral para planificar, ejecutar
              y gestionar proyectos con mayor control y
              claridad.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}