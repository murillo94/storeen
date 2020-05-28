import { Box } from '../../box';

export const MenuItemLink = ({ children, href, ...props }) => (
  <Box
    as="a"
    href={href}
    paddingY={1}
    paddingX={2}
    styleConfig={{
      color: 'inherit',
      textDecoration: 'none',
      outline: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      '&:focus': {
        boxShadow: 0,
        borderColor: 'blue700'
      }
    }}
    {...props}
  >
    {children}
  </Box>
);
