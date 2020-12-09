import { Box } from '../../box';

export const Inline = ({ children, isProportional = true, ...props }) => (
  <Box
    className="form-group"
    styleConfig={{
      display: 'flex',
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      '> button': {
        flexGrow: 'initial'
      },
      '> *': {
        flexGrow: isProportional ? '1' : '0',
        flexShrink: '0',
        flexBasis: !isProportional ? '1' : '0',
        '+ *': {
          marginLeft: [0, 4]
        }
      },
      '> *:not(:last-child)': {
        marginBottom: [4, 0]
      }
    }}
    {...props}
  >
    {children}
  </Box>
);
