import { withRouter } from 'next/router';
import Link from 'next/link';

import Icon from 'components/icon';
import { Text } from 'components/typography';
import Button from 'components/button';

import useTheme from 'hooks/theme/useTheme';

import { primary700 } from 'utils/theme/colors';
import { radius600 } from 'utils/theme/radius';
import { primary } from 'utils/theme/shadows';

const buttonStyle = {
  width: '100%'
};

const TabButton = ({ children, onClick }) => (
  <Button hasBorder={false} customStyle={buttonStyle} onClick={onClick}>
    {children}
  </Button>
);

const TabLink = ({ children, href, text }) => (
  <>
    <Link href={href}>
      <a aria-label={text}>{children}</a>
    </Link>

    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration: none;
          padding: 8px 6px;
          outline: 0;
          width: 100%;
          display: flex;
          align-items: center;
        }

        :focus {
          box-shadow: ${primary};
          border-color: ${primary700};
        }
      `}
    </style>
  </>
);

const Content = ({ text, icon }) => (
  <>
    {icon && <Icon name={icon} size={20} />}
    <Text
      text={text}
      customStyle={{ margin: icon && '0 0 0 10px', fontWeight: 500 }}
    />
  </>
);

const Tab = withRouter(
  ({
    appearance = 'minimal',
    text = '',
    icon = '',
    href = '',
    onClick = null,
    selected = false,
    router
  }) => {
    const theme = useTheme(appearance);
    const isActive = router.pathname.match(href);

    return (
      <>
        <li role="tab" aria-selected={href ? !!isActive : selected}>
          {href ? (
            <TabLink href={href} text={text}>
              <Content text={text} icon={icon} />
            </TabLink>
          ) : (
            <TabButton onClick={onClick}>
              <Content text={text} icon={icon} />
            </TabButton>
          )}
        </li>

        <style jsx>
          {`
            li {
              background-color: ${theme.backgroundColor};
              color: inherit;
              border-radius: ${radius600};
              text-align: left;
              white-space: nowrap;
              margin: 6px 10px;
              cursor: pointer;
              display: flex;
              align-items: center;
            }

            li[aria-selected='true'] {
              background-color: ${theme.hover.backgroundColor};
              opacity: 1 !important;
            }

            :hover {
              background-color: ${theme.hover.backgroundColor};
              opacity: 0.85;
            }
          `}
        </style>
      </>
    );
  }
);

export default Tab;
