import { Box } from '../../box';
import { Icon } from '../../icon';
import { Text } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

export const Button = ({
  children,
  appearance = 'default',
  type = 'button',
  icon = '',
  hasBorder = true,
  isDisabled = false,
  onClick = null,
  ...props
}) => {
  const theme = useTheme(appearance);

  return (
    <Box
      as="button"
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={children || icon}
      onClick={onClick}
      padding={2}
      styleConfig={{
        fontSize: 0,
        fontWeight: appearance !== 'minimal' ? 1 : 0,
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        border: hasBorder ? `1px solid ${theme.borderColor}` : 'none',
        borderRadius: 3,
        width: 'auto',
        outline: '0',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        '&:hover': {
          color: theme.hover.color,
          backgroundColor: theme.hover.backgroundColor,
          borderColor: theme.hover.borderColor
        },
        '&:focus': {
          boxShadow: theme.focus.boxShadow,
          borderColor: theme.focus.borderColor
        }
      }}
      {...props}
    >
      <>
        {icon && <Icon name={icon} size={17} color={theme.color} />}
        {children && <Text marginLeft={icon ? 1 : 0}>{children}</Text>}
      </>
    </Box>
  );
};
