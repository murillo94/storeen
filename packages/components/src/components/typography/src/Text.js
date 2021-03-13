import { memo } from 'react';

import { Box } from '../../box';

import useFont from '../utils/useFont';

const sizes = {
  100: {
    fontSize: 0,
    lineHeight: '21px'
  },
  200: {
    fontSize: 1,
    lineHeight: '24px'
  },
  300: {
    fontSize: 2,
    lineHeight: '27px'
  },
  400: {
    fontSize: 3,
    lineHeight: '30px'
  },
  500: {
    fontSize: 4,
    lineHeight: '33px'
  },
  600: {
    fontSize: 5,
    lineHeight: '36px'
  },
  700: {
    fontSize: 6,
    lineHeight: '39px'
  },
  800: {
    fontSize: 7,
    lineHeight: '42px'
  }
};

export const Text = memo(
  ({ as = 'span', children, color = 'inherit', size = 100, ...props }) => {
    const fontColor = useFont(color);

    return (
      <Box
        as={as}
        styleConfig={{
          ...sizes[size],
          color: fontColor
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
