import { Box } from '../../box';

export const Inline = ({ children, ...props }) => (
  <Box
    className="form-group"
    styleConfig={{
      display: 'flex',
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      '> div': {
        flex: ['0.5', '1'],
        minWidth: ['175px', 'auto'],
        '+ div': {
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
