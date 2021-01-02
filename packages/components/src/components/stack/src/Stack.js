import { Box } from '../../box';

const spaces = {
  xsmall: 1,
  small: 2,
  medium: 3,
  large: 4,
  xlarge: 7,
  xxlarge: 10
};

export const Stack = ({ children, space = 'large', ...props }) => (
  <Box
    styleConfig={{
      '> *:not(:last-child)': {
        marginBottom: spaces[space]
      }
    }}
    {...props}
  >
    {children}
  </Box>
);
