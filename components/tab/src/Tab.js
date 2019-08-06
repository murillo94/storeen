import { withRouter } from 'next/router';

import TabLink from './TabLink';
import TabButton from './TabButton';
import Icon from '../../icon';
import { Text } from '../../typography';

const Content = ({ text, icon }) => (
  <>
    {icon && <Icon name={icon} size={20} />}
    <Text text={text} margin={icon && '0 0 0 10px'} fontWeight={500} />
  </>
);

const Tab = withRouter(
  ({
    text = '',
    icon = '',
    href = '',
    onClick = null,
    selected = false,
    router
  }) => {
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
              background-color: ${isActive ? 'gray' : 'white'};
              color: ${isActive ? 'white' : 'inherit'};
              border-radius: 8px;
              text-align: left;
              margin: 6px 10px;
              cursor: pointer;
              display: flex;
              align-items: center;
            }

            li:hover {
              background-color: gray;
              color: white;
              opacity: ${isActive ? '1' : '.6'};
            }

            li:hover > :global(a) > :global(svg) {
              stroke: white;
            }

            li > :global(a) > :global(svg) {
              stroke: ${isActive ? 'white' : 'gray'};
            }
          `}
        </style>
      </>
    );
  }
);

export default Tab;
