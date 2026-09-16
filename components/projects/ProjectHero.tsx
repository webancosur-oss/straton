import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import { getProjectBySlug } from '@/data/projects';

import styles from './ProjectHero.module.css';

interface ProjectHeroProps {
  slug: string;
}

export default function ProjectHero({
  slug,
}: ProjectHeroProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className={styles.notFound}>
        <Container>
          <span className={styles.eyebrow}>
            Proyecto
          </span>

          <h1>
            Proyecto no encontrado
          </h1>

          <Link href="/proyectos">
            Volver a proyectos
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("${project.image}")`,
        }}
        aria-hidden="true"
      >
        {!project.image && (
          <div className={styles.placeholder}>
            <span>STRATON</span>
          </div>
        )}

        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>

          <Reveal>
            <span className={styles.eyebrow}>
              {project.type}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1>
              {project.name}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={styles.location}>
              {project.city}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className={styles.meta}>
              <span>
                {project.status}
              </span>

              <span>
                {project.address}
              </span>
            </div>
          </Reveal>

        </div>

        <div className={styles.bottom}>
          <span>
            Ver proyecto
          </span>

          <ArrowDown
            size={18}
            strokeWidth={1.5}
          />
        </div>
      </Container>
    </section>
  );
}