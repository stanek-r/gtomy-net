'use client';
import { twMerge } from 'tailwind-merge';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface ProjectImageProps {
  project: {
    name: string;
    link: string;
    imageUrl: string;
    className: string;
  };
}

export function ProjectImage({ project }: ProjectImageProps) {
  return (
    <LazyLoadImage src={project.imageUrl} alt={project.name} className={twMerge('w-full h-48', project.className)} />
  );
}
