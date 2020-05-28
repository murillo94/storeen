import { memo } from 'react';

import { Box } from '../../box';

import useFont from '../utils/useFont';

export const Anchor = memo(
  ({ children, href = '', color = 'inherit', ariaLabel = null, ...props }) => {
    const fontColor = useFont(color);

    return (
      <Box
        as="a"
        href={href}
        aria-label={ariaLabel}
        styleConfig={{
          fontSize: 0,
          color: fontColor,
          textDecoration: 'none',
          outline: 0,
          '&:focus': {
            boxShadow: 0,
            borderColor: 'blue700'
          }
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
