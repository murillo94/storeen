import { memo } from 'react';

import { Box } from '../../box';

import useFont from '../utils/useFont';

const headings = {
  h1: {
    fontSize: 3,
    fontWeight: 2
  },
  h2: {
    fontSize: 2,
    fontWeight: 2
  },
  h3: {
    fontSize: 1,
    fontWeight: 2
  },
  h4: {
    fontSize: 0,
    fontWeight: 2
  }
};

export const Heading = memo(
  ({ children, is = 'h1', color = 'inherit', ...props }) => {
    const fontColor = useFont(color);

    return (
      <Box
        as={is}
        margin={0}
        styleConfig={{ ...headings[is], color: fontColor }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
