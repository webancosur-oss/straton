import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Imagen referencial */}
      <div className={styles.background}>
        <div className={styles.backgroundImage} />
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Grid arquitectónico sutil */}
      <div className={styles.grid} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.eyebrow}>
              Ingeniería · Construcción · Gestión
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className={styles.title}>
              Ingeniería que
              <br />
              <span className={styles.titleMuted}>
                transforma.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={styles.description}>
              Integramos estrategia, ingeniería y ejecución
              para desarrollar proyectos sólidos, eficientes
              y preparados para trascender.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className={styles.actions}>
              <Button href="/proyectos">
                Ver proyectos
              </Button>

              <a
                href="#nosotros"
                className={styles.scrollButton}
              >
                <span>Descubrir STRATON</span>
                <span className={styles.scrollArrow}>↓</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Información lateral */}
      <div className={styles.sideInfo}>
        <span>STRATON</span>
        <span>PERÚ</span>
      </div>

      {/* Indicador tipo mouse */}
      <div className={styles.scrollIndicator}>
        <span className={styles.mouse}>
          <span className={styles.mouseWheel} />
        </span>

        <span className={styles.scrollText}>
          Scroll
        </span>
      </div>

      {/* Statement inferior */}
      <div className={styles.bottomStatement}>
        <p>
          Ingeniería · Precisión · Propósito
        </p>
      </div>
    </section>
  );
}