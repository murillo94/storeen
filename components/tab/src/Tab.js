import Icon from '../../icon';
import { Text } from '../../typography';

const Tab = ({ text, icon }) => (
  <>
    <li>
      {icon && <Icon name={icon} size={20} />}
      <Text text={text} margin={icon && '0 0 0 10px'} fontWeight={500} />
    </li>

    <style jsx>
      {`
        li {
          background-color: white;
          text-align: left;
          padding: 6px;
          margin: 5px 8px;
          display: flex;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default Tab;
