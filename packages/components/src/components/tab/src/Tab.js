import { withRouter } from 'next/router';
import Link from 'next/link';

import { Box } from '../../box';
import { Icon } from '../../icon';
import { Text } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';

export const Tab = withRouter(
  ({
    children,
    appearance = 'minimal',
    icon = '',
    href = '',
    isExternal = false,
    router,
    ...props
  }) => {
    const theme = useTheme(appearance);
    const isActive = !!router.pathname.match(href);
    const defaultExternal = isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer'
    };

    return (
      <Box
        as="li"
        role="tab"
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
        <Link href={href} passHref>
          <Box
            as="a"
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
                borderColor: 'purple700'
              }
            }}
            {...defaultExternal}
          >
            {icon && <Icon name={icon} size={20} />}
            <Text marginLeft={icon ? 2 : 0} sx={{ fontWeight: 1 }}>
              {children}
            </Text>
          </Box>
        </Link>
      </Box>
    );
  }
);
