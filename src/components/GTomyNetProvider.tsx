'use client';
import { ReactNode, useMemo } from 'react';
import { GTomyLibInitConfig, GTomyProvider } from 'gtomy-lib';
import { GTomyMenu } from '@/components/GTomyMenu';
import { GTomyFooter } from '@/components/GTomyFooter';

export interface GTomyNetProviderProps {
  children?: ReactNode;
}

export function GTomyNetProvider({ children }: GTomyNetProviderProps) {
  const config: GTomyLibInitConfig = useMemo(
    () => ({
      appName: 'main',
      appDisplayName: 'GTomy',
      authUrl: 'https://auth.gtomy.net',
      storageUrl: 'https://services.gtomy.net/storage',
      themes: ['corporate', 'business'],
      nextJs: true,
      // sentryConfig: {
      //   enabled: process.env.SENTRY_ENABLED === 'true',
      //   dsn: process.env.SENTRY_DSN!,
      //   release: pkg.version,
      //   environment: process.env.SENTRY_ENVIRONMENT!,
      //   additionalTracePropagationTargets: [],
      // },
      // googleConfig: {
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      //   googleMeasurementId: process.env.GOOGLE_MEASUREMENT_ID,
      // },
    }),
    []
  );

  return (
    <GTomyProvider config={config} MenuComponent={GTomyMenu} FooterComponent={GTomyFooter}>
      {children}
    </GTomyProvider>
  );
}
