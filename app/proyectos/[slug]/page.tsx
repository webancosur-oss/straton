import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import ProjectHero from '@/components/projects/ProjectHero';
import ProjectStats from '@/components/projects/ProjectStats';
import ProjectGallery from '@/components/projects/ProjectGallery';


import { getProjectBySlug } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <Header />

        <main>
          <section
            style={{
              minHeight: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1>Proyecto no encontrado</h1>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main>
        <ProjectHero slug={slug} />

        <ProjectStats slug={slug} />

        <ProjectGallery slug={slug} />

      </main>

      <Footer />
    </>
  );
}