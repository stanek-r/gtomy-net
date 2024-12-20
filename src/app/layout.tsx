import type { Metadata } from 'next';
import { ReactNode, useMemo } from 'react';
import { GTomyProvider } from 'gtomy-lib';

import './globals.css';

export const metadata: Metadata = {
  title: 'GTomy',
  description:
    "Hello, I'm GTomy and this is my website. I'm a Youtuber, Programmer and AI fan, this website is a place where I can show my projects and have fun with them.",
  keywords: ['GTomy', 'Youtuber', 'Programmer', 'Services', 'OpenSource'],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const config = useMemo(
    () => ({
      appName: 'main',
      appDisplayName: 'GTomy',
      themes: ['corporate', 'business'],
      nextJs: true,
    }),
    []
  );

  return (
    <html lang="en">
      <body className="text-base text-base-content">
        <GTomyProvider config={config}>{children}</GTomyProvider>
      </body>
    </html>
  );
}
