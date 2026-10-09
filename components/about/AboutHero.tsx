import Image from 'next/image';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/about/fachada-edificio.webp"
          alt="Arquitectura contemporánea"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />

        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.eyebrow}>
              Nuestra esencia
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Construimos
              <br />
              <span>con propósito.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p>
              Somos una firma orientada al desarrollo de
              proyectos donde la ingeniería, la planificación
              y la construcción trabajan bajo una misma visión.
            </p>
          </Reveal>
        </div>

        <div className={styles.bottom}>
          <span>Engineering & Construction</span>
        </div>
      </Container>
    </section>
  );
}