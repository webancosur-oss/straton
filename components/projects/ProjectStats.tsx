import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import { getProjectBySlug } from '@/data/projects';

import styles from './ProjectStats.module.css';

interface ProjectStatsProps {
  slug: string;
}

export default function ProjectStats({
  slug,
}: ProjectStatsProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  const stats = [
    {
      label: 'Ubicación',
      value: project.city,
    },
    {
      label: 'Tipo',
      value: project.type,
    },
    {
      label: 'Estado',
      value: project.status,
    },
    {
      label: 'Área',
      value: project.area,
    },
    {
      label: 'Dormitorios',
      value: project.bedrooms,
    },
    {
      label: 'Precio',
      value: project.price,
    },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
            >
              <div className={styles.item}>
                <span>{stat.label}</span>

                <strong>
                  {stat.value}
                </strong>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}