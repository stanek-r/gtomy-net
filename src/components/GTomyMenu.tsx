import { Menu } from './Menu';

export function GTomyMenu() {
  // const { t } = useTranslation('gtomy');
  // const { isAuthenticated } = useAuth();
  //
  // if (isAuthenticated) {
  //   return (
  //     <Menu showIcon showAuth dropdownActions={<Link href="/profile">{t('profile')}</Link>}>
  //       <MenuItem as={Link} href="/">
  //         Home
  //       </MenuItem>
  //       <RequirePermission minimalRole="admin">
  //         <MenuItem as={Link} href="/admin">
  //           Admin
  //         </MenuItem>
  //       </RequirePermission>
  //     </Menu>
  //   );
  // }

  return <Menu showIcon />;
}
