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
  ({ children, is = 'h1', color = 'inherit', ...props }) => {
    return (
      <Text
        as={is}
        color={color}
        size={headings[is]}
        margin={0}
        sx={{ fontWeight: 2 }}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
