import { memo } from 'react';

import { Box } from '../../box';

import useFont from '../utils/useFont';

export const Paragraph = memo(({ children, color = 'inherit', ...props }) => {
  const fontColor = useFont(color);

  return (
    <Box
      as="p"
      margin={0}
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
