import { Box } from '../../box';

export const Td = ({ children, ...props }) => (
  <Box as="td" padding={4} {...props}>
    {children}
  </Box>
);
