import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import ProjectGrid from '@/components/projects/ProjectGrid';

import { projects } from '@/data/projects';

import styles from './projects.module.css';

export const metadata = {
  title: 'Proyectos | STRATON',
  description:
    'Conoce los proyectos de STRATON en ingeniería, construcción y gestión.',
};

export default function ProyectosPage() {
  const availableProjects = projects.filter(
    (project) => project.status !== 'ENTREGADO'
  );

  const deliveredProjects = projects.filter(
    (project) => project.status === 'ENTREGADO'
  );

  return (
    <>
      <Header />

      <main>

        {/* =========================================
            HERO
        ========================================== */}

        <section className={styles.hero}>
          <Container>
            <Reveal>
              <span className={styles.eyebrow}>
                Proyectos
              </span>

              <h1>
                Espacios
                <br />
                <span>que trascienden.</span>
              </h1>

              <p>
                Una selección de proyectos desarrollados
                desde una visión integral de ingeniería,
                construcción y gestión.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* =========================================
            PROYECTOS DISPONIBLES
        ========================================== */}

        {availableProjects.length > 0 && (
          <section className={styles.projects}>
            <Container>

              <Reveal>
                <div className={styles.sectionHeader}>
                  <span className={styles.eyebrow}>
                    En desarrollo
                  </span>

                  <h2>
                    Proyectos
                    <span> disponibles.</span>
                  </h2>
                </div>
              </Reveal>

              <ProjectGrid
                projects={availableProjects}
              />

            </Container>
          </section>
        )}

        {/* =========================================
            PROYECTOS ENTREGADOS
        ========================================== */}

        {deliveredProjects.length > 0 && (
          <section className={styles.delivered}>
            <Container>

              <Reveal>
                <div className={styles.sectionHeader}>
                  <span className={styles.eyebrow}>
                    Experiencia
                  </span>

                  <h2>
                    Proyectos
                    <span> entregados.</span>
                  </h2>
                </div>
              </Reveal>

              <ProjectGrid
                projects={deliveredProjects}
              />

            </Container>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}