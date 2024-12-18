'use client';

import {
  addTranslationResources,
  ColumnPage,
  CookiesProvider,
  initGTomyLib,
  LayoutProvider,
  ToastProvider,
  Typography,
  useTranslation,
} from 'gtomy-lib';
import { GTomyFooter } from '@/components/GTomyFooter';
import { useEffect, useState } from 'react';
import { PROJECTS } from '@/common/constants';
import { twMerge } from 'tailwind-merge';
import { CS } from '@/locales/cs';
import { EN } from '@/locales/en';
import { GTomyMenu } from '@/components/GTomyMenu';

initGTomyLib({
  appName: 'main',
  appDisplayName: 'GTomy',
  authUrl: 'https://auth.gtomy.net',
  storageUrl: 'https://services.gtomy.net/storage',
  themes: ['corporate', 'business'],
});

addTranslationResources('gtomy', { cs: CS, en: EN });

export default function App() {
  const { t } = useTranslation('gtomy');
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setBgImageLoaded(true);
    image.src = '/imgs/banner.jpg';
  }, []);

  return (
    <LayoutProvider MenuComponent={GTomyMenu} FooterComponent={GTomyFooter}>
      <ToastProvider />
      <CookiesProvider />
      <ColumnPage className="gap-16">
        <section
          className="hero text-center relative block"
          style={{ backgroundImage: bgImageLoaded ? 'url(/imgs/banner.jpg)' : undefined }}
        >
          <div className="hero-overlay absolute bg-opacity-60"></div>
          <div className="hero-content relative py-16 text-neutral-content">
            <Typography as="h1" size="7xl" weight="bold">
              {t('title')}
            </Typography>
          </div>
        </section>
        <section className="text-center space-y-4">
          <div className="flex flex-col">
            <Typography size="3xl" weight="semibold" className="mb-4">
              {t('aboutMe.title')}
            </Typography>
            <Typography size="lg">{t('aboutMe.subtitle')}</Typography>
          </div>
        </section>
        <div className="divider"></div>
        <section className="text-center mb-40">
          <div className="flex flex-col">
            <Typography size="3xl" weight="semibold">
              {t('projects.title')}
            </Typography>
            <Typography size="lg">{t('projects.subtitle')}</Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {PROJECTS.map((project, index) => (
              <a key={index} href={project.link} className="shadow-lg rounded-lg overflow-hidden hover:opacity-75">
                <img src={project.imageUrl} alt={project.name} className={twMerge('w-full h-48', project.className)} />
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
    </LayoutProvider>
  );
}
