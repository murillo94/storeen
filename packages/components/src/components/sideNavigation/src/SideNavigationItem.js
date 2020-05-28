import { Box } from '../../box';

import useTheme from '../../../hooks/theme/useTheme';

export const SideNavigationItem = ({
  children,
  appearance = 'minimal',
  isActive = false,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <Box
      as="li"
      aria-selected={isActive}
      marginY={1}
      marginX={2}
      styleConfig={{
        backgroundColor: theme.backgroundColor,
        color: 'inherit',
        borderRadius: 3,
        textAlign: 'left',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '&[aria-selected=true]': {
          backgroundColor: theme.hover.backgroundColor,
          opacity: '1 !important'
        },
        '&:hover': {
          backgroundColor: theme.hover.backgroundColor,
          opacity: 0.85
        }
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
