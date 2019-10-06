/* eslint-disable global-require, import/no-dynamic-require */
import { mono800 } from 'utils/themes/colors';

const Icon = ({ name = 'help-circle', size = 18, color = mono800 }) => {
  const IconDynamic = require(`react-feather/dist/icons/${name}`).default;

  return <IconDynamic size={size} color={color} />;
};

export default Icon;
