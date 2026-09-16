import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './MethodologyHero.module.css';

export default function MethodologyHero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.eyebrow}>
              Nuestra metodología
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Pensamos antes
              <br />
              <span>de construir.</span>
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