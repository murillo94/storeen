import { Box } from '../../box';

const spaces = {
  small: 2,
  medium: 3,
  large: 4,
  xlarge: 9
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
