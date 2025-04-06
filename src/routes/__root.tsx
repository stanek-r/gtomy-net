import { Menu } from '@/components/Menu';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Footer } from '@/components/Footer.tsx';
import { NotFound } from '@/components/NotFound.tsx';
import { ColumnPage } from 'gtomy-lib';
import { Providers } from '@/components/Providers.tsx';

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <ColumnPage MenuComponent={Menu} FooterComponent={Footer}>
        <Outlet />
      </ColumnPage>
    </Providers>
  ),
  notFoundComponent: () => {
    return <NotFound />;
  },
});
