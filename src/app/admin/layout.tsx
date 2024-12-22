import { ReactNode } from 'react';
import { RequireAuth } from 'gtomy-lib';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <RequireAuth minimalRole="admin">{children}</RequireAuth>;
}
