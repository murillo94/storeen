import React from 'react';

import useStyle from '../../../hooks/theme/useStyle';

export const Box = useStyle(
  ({ as = 'div', className, styles, children, ...props }) =>
    React.createElement(as, { className, ...props }, [children, ...styles])
);
