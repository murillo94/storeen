import { memo } from 'react';

import { Box } from '../../box';

import useFont from '../utils/useFont';

export const Text = memo(({ children, color = 'inherit', ...props }) => {
  const fontColor = useFont(color);

  return (
    <Box
      as="span"
      styleConfig={{
        fontSize: 0,
        lineHeight: '20px',
        color: fontColor
      }}
      {...props}
    >
      {children}
    </Box>
  );
});
