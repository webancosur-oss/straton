import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

import ProjectGrid from '@/components/projects/ProjectGrid';

import { projects } from '@/data/projects';

import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.status !== 'ENTREGADO')
    .slice(0, 4);

  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <div className={styles.header}>
            <SectionTitle
              eyebrow="Proyectos"
              title={
                <>
                  Lo que
                  <br />
                  <span>construimos.</span>
                </>
              }
              description="Una selección de proyectos donde ingeniería, planificación y ejecución se convierten en resultados."
            />

            <Button
              href="/proyectos"
              variant="outline"
            >
              Ver todos
            </Button>
          </div>
        </Reveal>

        {featuredProjects.length > 0 && (
          <Reveal delay={0.12}>
            <ProjectGrid projects={featuredProjects} />
          </Reveal>
        )}
      </Container>
    </section>
  );
}