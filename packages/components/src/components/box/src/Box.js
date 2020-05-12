import styled from 'styled-components';

import { margin, padding, sx } from '@storeen/system';

import { theming } from '../../../theme/theming';

export const Box = styled.div`${sx(theming)} ${margin} ${padding}`;
