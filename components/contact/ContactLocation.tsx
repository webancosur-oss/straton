import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './ContactLocation.module.css';

export default function ContactLocation() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <Reveal>
            <div className={styles.info}>
              <p className={styles.eyebrow}>Dónde estamos</p>

              <h2>
                Una conversación
                <span> comienza aquí.</span>
              </h2>

              <p className={styles.description}>
                Visítanos previa coordinación con nuestro equipo
                para conocer más sobre nuestros servicios y
                proyectos.
              </p>

              <div className={styles.address}>
                <strong>STRATON</strong>
                <span>Huancayo, Junín, Perú</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.8682830617314!2d-75.2020051389788!3d-12.050914920745582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97117ed21c81%3A0x7a0c068a1ec166a6!2sAncosur%20Inmobiliaria!5e0!3m2!1ses-419!2spe!4v1789594346856!5m2!1ses-419!2spe"
                title="Ubicación de STRATON"
                className={styles.map}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}