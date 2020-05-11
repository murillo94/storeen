import { Box } from '../../box';

export const SideNavigation = ({ children, ...props }) => (
  <Box
    as="nav"
    styleConfig={{
      overflow: 'auto',
      '-webkit-overflow-scrolling': 'touch',
      '-ms-overflow-style': '-ms-autohiding-scrollbar'
    }}
    {...props}
  >
    {children}
  </Box>
);
