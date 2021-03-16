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

export const Inline = ({
  children,
  isProportional = true,
  isCollapse = true,
  spaceY = 'small',
  spaceX = 'medium',
  ...props
}) => (
  <Box
    className="form-group"
    styleConfig={{
      display: 'flex',
      flexDirection: [isCollapse ? 'column' : 'row', 'row'],
      flexWrap: 'initial',
      '> button': {
        flexGrow: 'initial'
      },
      '> *': {
        flexGrow: isProportional ? '1' : '0',
        flexShrink: '1',
        flexBasis: !isProportional ? 'auto' : '0',
        '+ *': {
          marginLeft: [!isCollapse ? spaces[spaceX] : 0, spaces[spaceX]]
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
