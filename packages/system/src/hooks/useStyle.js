import withStyledSystem from 'styled-jsx-system';

import { margin } from '../system/space/margin';
import { padding } from '../system/space/padding';
import { sx } from '../utils/sx';

export const useStyle = Component =>
  withStyledSystem(Component, [margin, padding, sx]);
