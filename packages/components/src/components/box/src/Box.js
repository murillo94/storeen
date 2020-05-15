import styled from 'styled-components';

import { margin, padding, sx } from '@storeen/system';

import { theming } from '../../../theme/theming';

import { getVariant } from '../utils/variant';

export const Box = styled.div`
  ${sx(theming)}
  ${margin}
  ${padding}
  ${getVariant}
`;
