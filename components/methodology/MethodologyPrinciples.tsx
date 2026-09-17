import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './MethodologyPrinciples.module.css';

const principles = [
  {
    title: 'Información',
    text: 'Entender antes de decidir.',
  },
  {
    title: 'Coordinación',
    text: 'Conectar antes de ejecutar.',
  },
  {
    title: 'Control',
    text: 'Medir antes de corregir.',
  },
  {
    title: 'Mejora',
    text: 'Aprender antes de repetir.',
  },
];

export default function MethodologyPrinciples() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>
              Principios de trabajo
            </span>

            <h2>
              Una metodología
              <br />
              pensada para
              <br />
              <span>reducir incertidumbre.</span>
            </h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {principles.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
            >
              <article className={styles.item}>
                <div className={styles.marker} />

                <div className={styles.content}>
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}