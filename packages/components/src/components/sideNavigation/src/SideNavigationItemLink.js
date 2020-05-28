import { Box } from '../../box';
import { Icon } from '../../icon';
import { Text } from '../../typography';

export const SideNavigationItemLink = ({
  children,
  href = '',
  icon = '',
  isExternal = false,
  ...props
}) => {
  const defaultExternal = isExternal && {
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  return (
    <Box
      as="a"
      href={href}
      aria-label={children}
      paddingY={2}
      paddingX={1}
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
      {...defaultExternal}
      {...props}
    >
      {icon && <Icon name={icon} size={20} />}
      <Text marginLeft={icon ? 2 : 0} sx={{ fontWeight: 1 }}>
        {children}
      </Text>
    </Box>
  );
};
