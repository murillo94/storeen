import styled from 'styled-components';

import { margin, padding, sx, variant } from '@storeen/system';

import { theming } from '../../../theme/theming';

// dar for no restante das variants e spread para juntar todos os css
export const Box = styled.div`${sx(theming)} ${margin} ${padding} ${props => {
  if (props.styleConfig && props.styleConfig.variants) {
    const key = Object.keys(props.styleConfig.variants)[0];

    return variant({
      [key]: props.styleConfig.variants[key]
    })(props);
  }
}}`;
