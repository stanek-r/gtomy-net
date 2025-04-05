import { Menu } from '@/components/Menu';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Footer } from '@/components/Footer.tsx';
import { NotFound } from '@/components/NotFound.tsx';

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="max-w-7xl mx-auto px-4 pt-8 pb-40 flex flex-col gap-y-16 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => {
    return <NotFound />;
  },
});
