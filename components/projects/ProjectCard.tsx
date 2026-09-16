import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import type { Project } from '@/data/projects';

import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const isExternal = project.href.startsWith('http');

  return (
    <article
      className={`
        ${styles.card}
        ${featured ? styles.featured : ''}
      `}
    >
      <Link
        href={
          isExternal
            ? project.href
            : `/proyectos/${project.slug}`
        }
        className={styles.link}
        target={isExternal ? '_blank' : undefined}
        rel={
          isExternal
            ? 'noopener noreferrer'
            : undefined
        }
      >
        <div className={styles.image}>
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} — imagen referencial`}
              fill
              sizes={
                featured
                  ? '(max-width: 650px) 100vw, 70vw'
                  : '(max-width: 650px) 100vw, 50vw'
              }
              className={styles.imageElement}
            />
          ) : (
            <div className={styles.placeholder}>
              <span>STRATON</span>
            </div>
          )}

          <div className={styles.overlay} />

          <div className={styles.status}>
            {project.status}
          </div>

          <div className={styles.view}>
            <ArrowUpRight
              size={24}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.mainInfo}>
            <div className={styles.top}>
              <span className={styles.category}>
                {project.type}
              </span>

              <span className={styles.city}>
                {project.city}
              </span>
            </div>

            <h3>{project.name}</h3>

            <p>{project.address}</p>

            <div className={styles.details}>
              <span>{project.area}</span>

              <span>{project.bedrooms}</span>

              <span>{project.price}</span>
            </div>
          </div>

          <span className={styles.number}>
            / PROJECT
          </span>
        </div>
      </Link>
    </article>
  );
}