import Image from 'next/image';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './MethodologyHero.module.css';

export default function MethodologyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/methodology/plano-lotizacion.webp"
          alt="Plano maestro de lotización"
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
              Nuestra metodología
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Planificamos
              <br />
              <span>para construir mejor.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p>
              Un proceso estructurado para transformar
              información en decisiones y decisiones en
              resultados.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}