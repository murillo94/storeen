import { memo } from 'react';

import { Text } from './Text';

const headings = {
  h1: 800,
  h2: 600,
  h3: 400,
  h4: 300,
  h5: 200
};

export const Heading = memo(
  ({ children, is = 'h1', color = 'inherit', ...props }) => (
    <Text
      as={is}
      color={color}
      size={headings[is]}
      fontWeight={2}
      margin={0}
      {...props}
    >
      {children}
    </Text>
  )
);
