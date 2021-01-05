import { Box } from '../../box';

const spaces = {
  xxsmall: 1,
  xsmall: 2,
  small: 3,
  medium: 5,
  large: 7,
  xlarge: 10,
  xxlarge: 15
};

export const Stack = ({ children, space = 'small', ...props }) => (
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
