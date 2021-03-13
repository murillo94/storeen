import { memo } from 'react';

import { Text } from './Text';

export const Paragraph = memo(
  ({ children, color = 'inherit', size = 100, ...props }) => (
    <Text as="p" margin={0} color={color} size={size} {...props}>
      {children}
    </Text>
  )
);
