import { Box } from '../../box';

export const TableBody = ({ children, ...props }) => (
  <Box as="tbody" {...props}>
    {children}
  </Box>
);
