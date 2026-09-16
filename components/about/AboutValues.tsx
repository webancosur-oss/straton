import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './AboutValues.module.css';

const values = [
  {
    title: 'Rigor',
    text: 'Analizamos cada variable antes de tomar decisiones.',
  },
  {
    title: 'Integración',
    text: 'Conectamos personas, especialidades y objetivos.',
  },
  {
    title: 'Precisión',
    text: 'Trabajamos con información y procesos claros.',
  },
  {
    title: 'Visión',
    text: 'Pensamos cada proyecto desde una perspectiva de largo plazo.',
  },
];

export default function AboutValues() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <span className={styles.eyebrow}>
            Lo que nos define
          </span>

          <h2>
            Una forma distinta
            <br />
            de <span>construir.</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.08}
            >
              <article className={styles.item}>
                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}