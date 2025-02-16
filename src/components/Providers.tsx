import { PropsWithChildren } from 'react';
import { GTomyContext, GTomyProvider } from 'gtomy-lib';

export function Providers({ children }: PropsWithChildren) {
  const gtomyContext: GTomyContext = {
    translation: {
      close: 'Zavřít',
      confirm: 'Potvrdit',
      cancel: 'Zrušit',
      retry: 'Zkusit znovu',
      loading: 'Načítání',
      error: 'Při načítání došlo k chybě.',
      noPermission: 'Nemáte přístup k této části.',
      badGateway: 'Backendové služby nejsou dostupné.',
    },
  };
  return <GTomyProvider value={gtomyContext}>{children}</GTomyProvider>;
}
