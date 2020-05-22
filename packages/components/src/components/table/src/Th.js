import { Box } from '../../box';

export const Th = ({ children, ...props }) => (
  <Box as="th" padding={4} {...props}>
    {children}
  </Box>
);
