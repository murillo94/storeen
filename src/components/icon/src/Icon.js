import FeatherIcon from 'feather-icons-react';

import { mono800 } from 'utils/theme/colors';

const Icon = ({ name = 'help-circle', size = 18, color = mono800 }) => (
  <FeatherIcon icon={name} size={size} stroke={color} />
);

export default Icon;
