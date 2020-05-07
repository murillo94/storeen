import { memo } from 'react';

import { Box } from '../../box';

import useFont from '../utils/useFont';

export const Label = memo(
  ({ children, id = null, htmlFor = null, color = 'inherit', ...props }) => {
    const fontColor = useFont(color);

    return (
      <Box
        as="label"
        id={id}
        htmlFor={htmlFor}
        marginBottom={1}
        styleConfig={{
          fontSize: 0,
          color: fontColor,
          textAlign: 'left',
          display: 'block'
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
