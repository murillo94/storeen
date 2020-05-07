import { Box } from '../../box';

export const TabList = ({ children, ariaLabel = 'Menu lateral', ...props }) => (
  <Box
    as="ul"
    role="tablist"
    aria-orientation="vertical"
    aria-label={ariaLabel}
    padding={0}
    margin={0}
    styleConfig={{
      backgroundColor: 'transparent',
      listStyle: 'none'
    }}
    {...props}
  >
    {children}
  </Box>
);
