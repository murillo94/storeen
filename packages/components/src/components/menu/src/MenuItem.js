import { Box } from '../../box';

import useTheme from '../../../hooks/theme/useTheme';

export const MenuItem = ({ children, appearance = 'minimal', ...props }) => {
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
        {children}
      </Box>
    </>
  );
};
