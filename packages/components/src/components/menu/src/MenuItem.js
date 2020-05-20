import Link from 'next/link';

import { Box } from '../../box';
import { Button } from '../../button';

import useTheme from '../../../hooks/theme/useTheme';

const MenuItemLink = ({ children, href }) => (
  <Link href={href} passHref>
    <Box
      as="a"
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
    >
      {children}
    </Box>
  </Link>
);

const MenuItemButton = ({ children, appearance, onClick }) => (
  <Button
    appearance={appearance}
    hasBorder={false}
    paddingY={1}
    paddingX={2}
    sx={{ width: '100%', justifyContent: 'flex-start' }}
    onClick={onClick}
  >
    {children}
  </Button>
);

export const MenuItem = ({
  children,
  appearance = 'minimal',
  href = '',
  onClick = null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <Box
        as="li"
        role="menuitem"
        marginY={1}
        marginX={0}
        styleConfig={{
          backgroundColor: 'gray0',
          borderRadius: 2,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: theme.hover.backgroundColor,
            color: theme.hover.color
          }
        }}
        {...props}
      >
        {href ? (
          <MenuItemLink href={href}>{children}</MenuItemLink>
        ) : (
          <MenuItemButton appearance={appearance} onClick={onClick}>
            {children}
          </MenuItemButton>
        )}
      </Box>
    </>
  );
};
