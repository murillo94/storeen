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

const Tab = ({
  text = '',
  icon = '',
  href = '',
  onClick = null,
  selected = false
}) => (
  <>
    <li role="tab" aria-selected={selected}>
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
          background-color: white;
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
        }

        li:hover > :global(a) > :global(svg) {
          stroke: white;
        }
      `}
    </style>
  </>
);

export default Tab;
