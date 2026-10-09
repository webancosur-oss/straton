import Image from 'next/image';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';

import styles from './AboutStory.module.css';

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <Reveal>
            <SectionTitle
              eyebrow="Nuestra visión"
              title={
                <>
                  Pensar.
                  <br />
                  Diseñar.
                  <br />
                  Construir.
                </>
              }
              description="Tres acciones que forman parte de una misma manera de entender el desarrollo de proyectos."
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className={styles.content}>
              <div className={styles.visual}>
                <Image
                  src="/images/about/fachada-jardineras.webp"
                  alt="Arquitectura contemporánea y construcción"
                  fill
                  sizes="(max-width: 850px) 100vw, 55vw"
                  className={styles.image}
                />

                <div className={styles.overlay} />
              </div>

              <div className={styles.copy}>
                <p>
                  Creemos que un buen proyecto comienza
                  mucho antes de llegar a obra.
                </p>

                <p>
                  Comienza con preguntas, análisis,
                  planificación y decisiones capaces de
                  anticipar lo que ocurrirá durante la
                  ejecución.
                </p>

                <p>
                  STRATON integra estas etapas para crear
                  procesos más claros, coordinados y
                  eficientes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}