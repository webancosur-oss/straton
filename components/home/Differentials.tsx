import {
  Layers3,
  ClipboardCheck,
  Activity,
  TrendingUp,
} from 'lucide-react';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './Differentials.module.css';

const items = [
  {
    icon: Layers3,
    title: 'Visión integral',
    text: 'Entendemos el proyecto como un sistema donde cada decisión está conectada.',
  },
  {
    icon: ClipboardCheck,
    title: 'Planificación',
    text: 'Anticipamos variables para reducir incertidumbre antes de llegar a campo.',
  },
  {
    icon: Activity,
    title: 'Control',
    text: 'Medimos el avance y las variables críticas durante la ejecución.',
  },
  {
    icon: TrendingUp,
    title: 'Valor',
    text: 'Buscamos que cada decisión contribuya al resultado final del proyecto.',
  },
];

export default function Differentials() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <Reveal>
            <span className={styles.eyebrow}>
              Lo que nos diferencia
            </span>

            <h2>
              Construir mejor
              <br />
              empieza <em>antes.</em>
            </h2>

            <p className={styles.introText}>
              Nuestra forma de trabajar parte de una visión
              integral del proyecto, donde anticipar, coordinar
              y controlar permite construir con mayor claridad.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.08}
              >
                <article className={styles.item}>
                  <div className={styles.icon}>
                    <Icon
                      size={25}
                      strokeWidth={1.35}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.content}>
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}