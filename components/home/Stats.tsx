import {
  Cog,
  Crosshair,
  ShieldCheck,
  Zap,
} from 'lucide-react';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './Stats.module.css';

const stats = [
  {
    icon: Cog,
    title: 'Ingeniería',
    description:
      'Decisiones técnicas basadas en análisis y planificación.',
  },
  {
    icon: Crosshair,
    title: 'Precisión',
    description:
      'Control de cada etapa para mantener el proyecto alineado.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    description:
      'La prevención como parte integral de nuestra operación.',
  },
  {
    icon: Zap,
    title: 'Eficiencia',
    description:
      'Procesos diseñados para generar mayor valor.',
  },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.title}
                delay={index * 0.08}
              >
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <Icon
                      size={25}
                      strokeWidth={1.35}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.content}>
                    <h3>{stat.title}</h3>

                    <p>{stat.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}