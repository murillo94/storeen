import { memo } from 'react';

import { Text } from './Text';

export const Anchor = memo(
  ({ children, href = '', color = 'inherit', ariaLabel = null, ...props }) => (
    <Text
      as="a"
      href={href}
      aria-label={ariaLabel}
      color={color}
      size={100}
      sx={{
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
    </Text>
  )
);
