import { useRouter } from 'next/router';
import Link from 'next/link';

import AdminPage from '../adminContent';

import {
  Box,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  SideNavigationItemLink
} from '@storeen/components';

const Content = ({ children, options }) => {
  const { pathname } = useRouter();

  return (
    <AdminPage>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', '', 'row']
        }}
      >
        <SideNavigation
          marginRight={['-10px', '', 6]}
          marginLeft={['-10px', '', 0]}
          marginBottom={[4, '', 0]}
          sx={{
            width: ['100%', '', '225px']
          }}
        >
          <SideNavigationGroup
            sx={{
              display: ['flex', '', 'block']
            }}
          >
            {options.map(item => (
              <SideNavigationItem
                key={item.name}
                isActive={pathname === item.href}
              >
                <Link href={item.href} passHref>
                  <SideNavigationItemLink icon={item.icon}>
                    {item.name}
                  </SideNavigationItemLink>
                </Link>
              </SideNavigationItem>
            ))}
          </SideNavigationGroup>
        </SideNavigation>
        <Box sx={{ width: '100%' }}>{children}</Box>
      </Box>
    </AdminPage>
  );
};

export default Content;
