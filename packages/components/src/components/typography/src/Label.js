import { memo } from 'react';

import { Text } from './Text';

export const Label = memo(
  ({ children, id = null, htmlFor = null, color = 'inherit', ...props }) => (
    <Text
      as="label"
      id={id}
      htmlFor={htmlFor}
      color={color}
      size={100}
      sx={{
        textAlign: 'left',
        display: 'block'
      }}
      {...props}
    >
      {children}
    </Text>
  )
);
