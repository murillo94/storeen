import React from 'react';

import useStyle from '../../../hooks/theme/useStyle';

export const Box = useStyle(
  ({ is = 'div', className, styles, children, ...props }) =>
    React.createElement(is, { className, ...props }, [children, ...styles])
);
