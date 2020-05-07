import { Box } from '../../box';

export const TableHeadCell = ({ children, ...props }) => (
  <Box as="th" padding={4} {...props}>
    {children}
  </Box>
);
