import { withRouter } from 'next/router';
import Link from 'next/link';

import { Box } from '../../box';
import { Icon } from '../../icon';
import { Text } from '../../typography';
import { Button } from '../../button';

import useTheme from '../../../hooks/theme/useTheme';

const TabButton = ({ children, onClick }) => (
  <Button hasBorder={false} sx={{ width: '100%' }} onClick={onClick}>
    {children}
  </Button>
);

const TabLink = ({ children, href, text, isExternal }) => {
  const defaultExternal = isExternal && {
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  return (
    <Link href={href} passHref>
      <Box
        as="a"
        aria-label={text}
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
        {children}
      </Box>
    </Link>
  );
};

const Content = ({ text, icon }) => (
  <>
    {icon && <Icon name={icon} size={20} />}
    <Text marginLeft={icon ? 2 : 0} sx={{ fontWeight: 1 }}>
      {text}
    </Text>
  </>
);

export const Tab = withRouter(
  ({
    appearance = 'minimal',
    text = '',
    icon = '',
    href = '',
    isSelected = false,
    isExternal = false,
    onClick = null,
    router,
    ...props
  }) => {
    const theme = useTheme(appearance);
    const isActive = router.pathname.match(href);

    return (
      <Box
        as="li"
        role="tab"
        aria-selected={href ? !!isActive : isSelected}
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
        {href ? (
          <TabLink href={href} text={text} isExternal={isExternal}>
            <Content text={text} icon={icon} />
          </TabLink>
        ) : (
          <TabButton onClick={onClick}>
            <Content text={text} icon={icon} />
          </TabButton>
        )}
      </Box>
    );
  }
);
