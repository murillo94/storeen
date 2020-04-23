import withStyledSystem from 'styled-jsx-with-system';

import { margin, padding, sx } from '@storeen/system';

const useStyle = Component =>
  withStyledSystem(Component, [margin, padding, sx]);

export default useStyle;
