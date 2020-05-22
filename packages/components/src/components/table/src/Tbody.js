import { Box } from '../../box';

export const Tbody = ({ children, ...props }) => (
  <Box as="tbody" {...props}>
    {children}
  </Box>
);
