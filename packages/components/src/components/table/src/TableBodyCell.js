import { Box } from '../../box';

export const TableBodyCell = ({ children, ...props }) => (
  <Box as="td" padding={4} {...props}>
    {children}
  </Box>
);
