import { Box } from '../../box';

const spaces = {
  xsmall: 1,
  small: 2,
  medium: 3,
  large: 4,
  xlarge: 7,
  xxlarge: 10
};

export const Inline = ({
  children,
  isProportional = true,
  isCollapse = true,
  spaceX = 'large',
  spaceY = 'large',
  ...props
}) => (
  <Box
    className="form-group"
    styleConfig={{
      display: 'flex',
      flexDirection: [isCollapse ? 'column' : 'row', 'row'],
      flexWrap: 'wrap',
      alignItems: 'center',
      '> button': {
        flexGrow: 'initial'
      },
      '> *': {
        flexGrow: isProportional ? '1' : '0',
        flexShrink: '0',
        flexBasis: !isProportional ? '1' : '0',
        '+ *': {
          marginLeft: [0, spaces[spaceX]]
        }
      },
      '> *:not(:last-child)': {
        marginBottom: [isCollapse ? spaces[spaceY] : 0, 0]
      }
    }}
    {...props}
  >
    {children}
  </Box>
);
