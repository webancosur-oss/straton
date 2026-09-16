import Image from 'next/image';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import { getProjectBySlug } from '@/data/projects';

import styles from './ProjectGallery.module.css';

interface ProjectGalleryProps {
  slug: string;
}

export default function ProjectGallery({
  slug,
}: ProjectGalleryProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  const images =
    project.gallery?.length
      ? project.gallery
      : project.image
        ? [project.image]
        : [];

  return (
    <section className={styles.section}>
      <Container>

        <Reveal>
          <div className={styles.header}>
            <span className={styles.eyebrow}>
              El proyecto
            </span>

            <h2>
              Una mirada
              <br />
              al <span>proyecto.</span>
            </h2>
          </div>
        </Reveal>

        {images.length > 0 ? (
          <div className={styles.gallery}>
            {images.map((image, index) => (
              <Reveal
                key={`${image}-${index}`}
                delay={index * 0.06}
              >
                <figure className={styles.image}>
                  <Image
                    src={image}
                    alt={`${project.name} — imagen referencial`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <figcaption className={styles.reference}>
                    Imagen referencial
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className={styles.empty}>
              <span>STRATON</span>

              <p>
                La galería del proyecto se
                incorporará próximamente.
              </p>
            </div>
          </Reveal>
        )}

      </Container>
    </section>
  );
}