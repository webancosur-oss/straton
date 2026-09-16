import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './Differentials.module.css';

const items = [
  {
    number: '01',
    title: 'Visión integral',
    text: 'Entendemos el proyecto como un sistema donde cada decisión está conectada.',
  },
  {
    number: '02',
    title: 'Planificación',
    text: 'Anticipamos variables para reducir incertidumbre antes de llegar a campo.',
  },
  {
    number: '03',
    title: 'Control',
    text: 'Medimos el avance y las variables críticas durante la ejecución.',
  },
  {
    number: '04',
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
              05 — Diferenciales
            </span>

            <h2>
              Construir mejor
              <br />
              empieza <em>antes.</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 0.08}
            >
              <article className={styles.item}>
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}