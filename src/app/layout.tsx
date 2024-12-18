import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'GTomy',
  description:
    "Hello, I'm GTomy and this is my website. I'm a Youtuber, Programmer and AI fan, this website is a place where I can show my projects and have fun with them.",
  keywords: ['GTomy', 'Youtuber', 'Programmer', 'Services', 'OpenSource'],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="text-base text-base-content">{children}</body>
    </html>
  );
}
