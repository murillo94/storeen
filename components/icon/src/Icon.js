/* eslint-disable global-require, import/no-dynamic-require */

const Icon = ({ name = 'help-circle', size = 18, color = 'gray' }) => {
  const IconDynamic = require(`react-feather/dist/icons/${name}`).default;

  return <IconDynamic size={size} color={color} />;
};

export default Icon;
