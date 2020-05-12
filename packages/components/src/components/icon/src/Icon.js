import FeatherIcon from 'feather-icons-react';

import { theming } from '../../../theme/theming';

export const Icon = ({
  name = 'help-circle',
  size = 18,
  color = theming.colors.gray800
}) => (
  <FeatherIcon
    role="img"
    icon={name}
    size={size}
    stroke={color}
    alt={name}
    aria-label={name}
  />
);
