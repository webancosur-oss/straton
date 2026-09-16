import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <Reveal>
            <p className={styles.eyebrow}>Contacto</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              Hablemos de
              <span> tu proyecto.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={styles.description}>
              Cuéntanos qué necesitas. Nuestro equipo evaluará tu
              requerimiento y te contactará para conocer los detalles
              de tu proyecto.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}