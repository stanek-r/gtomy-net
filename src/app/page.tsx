import { ColumnPage, Typography } from 'gtomy-lib';
import { PROJECTS } from '@/lib/constants';
import { ProjectImage } from '@/components/ProjectImage';

export default function Home() {
  return (
    <ColumnPage className="gap-16">
      <section className="hero text-center relative block" style={{ backgroundImage: 'url(/imgs/banner.jpg)' }}>
        <div className="hero-overlay absolute bg-opacity-60"></div>
        <div className="hero-content relative py-16 text-neutral-content">
          <Typography as="h1" size="7xl" weight="bold">
            GTomy
          </Typography>
        </div>
      </section>
      <section className="text-center space-y-4">
        <div className="flex flex-col">
          <Typography size="3xl" weight="semibold" className="mb-4">
            O mě
          </Typography>
          <Typography size="lg">
            Ahoj, jsem GTomy a toto je můj web. Jsem programátor a tento web je místem, kde budu sdílet své projekty.
          </Typography>
        </div>
      </section>
      <div className="divider"></div>
      <section className="text-center mb-40">
        <div className="flex flex-col">
          <Typography size="3xl" weight="semibold">
            Projekty
          </Typography>
          <Typography size="lg">Zde jsou odkazy na některé z mých projektů, na kterých pracuji/pracoval.</Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {PROJECTS.map((project, index) => (
            <a key={index} href={project.link} className="shadow-lg rounded-lg overflow-hidden hover:opacity-75">
              <ProjectImage project={project} />
              <div className="p-4">
                <Typography size="lg" decoration="underline">
                  {project.name}
                </Typography>
              </div>
            </a>
          ))}
        </div>
      </section>
    </ColumnPage>
  );
}
