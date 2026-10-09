import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';

import styles from './AboutPreview.module.css';

export default function AboutPreview() {
  return (
    <section
      id="nosotros"
      className={styles.section}
    >
      <Container>
        <div className={styles.grid}>
          {/* =================================================
              HEADING
          ================================================= */}

          <div className={styles.heading}>
            <Reveal>
              <SectionTitle
                eyebrow="Nuestra esencia"
                title={
                  <>
                    Construimos
                    <br />
                    <span>mucho más</span>
                    <br />
                    que estructuras.
                  </>
                }
                description="Integramos ingeniería, planificación y ejecución para convertir cada proyecto en una solución eficiente, sólida y preparada para trascender."
              />
            </Reveal>
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className={styles.content}>
            {/* IMAGE */}

            <Reveal delay={0.1}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/about/ingeniero-supervisando-obra.webp"
                  alt="Ingeniero de STRATON supervisando una obra en construcción"
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={styles.image}
                  priority={false}
                />

                <div className={styles.imageOverlay} />

                <span className={styles.imageLabel}>
                  Engineering & Construction
                </span>
              </div>
            </Reveal>

            {/* TEXT */}

            <Reveal delay={0.18}>
              <div className={styles.text}>
                <p>
                  En STRATON entendemos la construcción
                  como un proceso integral. Cada decisión
                  tomada antes de construir define la calidad
                  del resultado.
                </p>

                <p>
                  Por eso conectamos estrategia, ingeniería,
                  gestión y ejecución bajo una misma visión:
                  desarrollar proyectos que generen valor
                  desde su concepción hasta su entrega.
                </p>
              </div>
            </Reveal>

            {/* LINK */}

            <Reveal delay={0.26}>
              <Link
                href="/nosotros"
                className={styles.link}
              >
                <span>
                  Conoce nuestra visión
                </span>

                <span className={styles.linkIcon}>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                  />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}