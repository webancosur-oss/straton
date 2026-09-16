import ProjectCard from './ProjectCard';

import type { Project } from '@/data/projects';

import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  if (!projects.length) {
    return (
      <div className={styles.empty}>
        <span>STRATON</span>

        <p>
          Próximamente presentaremos nuestros
          proyectos.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={index === 0}
        />
      ))}
    </div>
  );
}