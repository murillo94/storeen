import { memo } from 'react';
import { withRouter } from 'next/router';

import Icon from 'components/icon';
import { Text } from 'components/typography';
import TabLink from './TabLink';
import TabButton from './TabButton';

import useTheme from 'themes/useTheme';
import { radius600 } from 'themes/radius';

const Content = ({ text, icon }) => (
  <>
    {icon && <Icon name={icon} size={20} />}
    <Text
      text={text}
      customStyle={{ margin: icon && '0 0 0 10px', fontWeight: 500 }}
    />
  </>
);

const Tab = memo(
  withRouter(
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
              <TabLink href={href}>
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
  )
);

export default Tab;
