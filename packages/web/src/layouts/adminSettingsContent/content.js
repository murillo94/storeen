import AdminPage from '../adminContent';

import {
  Box,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem
} from '@storeen/components';

const Content = ({ children, options }) => (
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
            display: 'flex',
            flexDirection: ['row', '', 'column']
          }}
        >
          {options.map(item => (
            <SideNavigationItem
              key={item.name}
              icon={item.icon}
              href={item.href}
            >
              {item.name}
            </SideNavigationItem>
          ))}
        </SideNavigationGroup>
      </SideNavigation>
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Box>
  </AdminPage>
);

export default Content;
