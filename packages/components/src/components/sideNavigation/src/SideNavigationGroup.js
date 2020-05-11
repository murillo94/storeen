import { Box } from '../../box';

export const SideNavigationGroup = ({
  children,
  ariaLabel = 'Menu lateral',
  ...props
}) => (
  <Box
    as="ul"
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
