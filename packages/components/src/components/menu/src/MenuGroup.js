import { Box } from '../../box';

import useTheme from '../../../hooks/theme/useTheme';

export const MenuGroup = ({
  children,
  appearance = 'minimal',
  id = null,
  isVisible = true,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <Box
        as="ul"
        role="menu"
        id={id}
        aria-orientation="vertical"
        hidden={isVisible}
        padding={1}
        marginTop={1}
        marginBottom={0}
        styleConfig={{
          backgroundColor: 'gray0',
          border: `1px solid ${theme.borderColor}`,
          borderRadius: 2,
          listStyle: 'none',
          minWidth: '120px',
          width: '100%',
          position: 'absolute',
          right: '0',
          left: 'auto'
        }}
        {...props}
      >
        {children}
      </Box>
    </>
  );
};
