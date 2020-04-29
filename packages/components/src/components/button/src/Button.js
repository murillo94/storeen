import { Icon } from '../../icon';
import { Text } from '../../typography';
import { Box } from '../../box';

import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

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
      is="button"
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={children || icon}
      onClick={onClick}
      styleConfig={{
        fontSize: theming.fontSizes[0],
        fontWeight:
          appearance !== 'minimal'
            ? theming.fontWeights[1]
            : theming.fontWeights[0],
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        border: hasBorder ? `1px solid ${theme.borderColor}` : 'none',
        borderRadius: theming.radii[3],
        padding: theming.space[2],
        width: 'auto',
        outline: 0,
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
        {children && (
          <Text sx={{ marginLeft: icon ? theming.space[1] : theming.space[0] }}>
            {children}
          </Text>
        )}
      </>
    </Box>
  );
};
