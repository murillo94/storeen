import withStyledSystem from 'styled-jsx-with-system';

import { margin, padding, sx } from '@storeen/system';

const useStyle = Component =>
  withStyledSystem(Component, [sx, margin, padding]);

export default useStyle;
