import { Box } from '../../box';

export const Tr = ({ children, hasHover = true, onClick = null, ...props }) => (
  <Box
    as="tr"
    onClick={onClick}
    styleConfig={{
      backgroundColor: 'gray0',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray200',
      height: '64px',
      cursor: onClick ? 'pointer' : 'default',
      '&:hover': {
        backgroundColor: hasHover && 'gray100'
      },
      '&:last-child': {
        borderBottom: 'none'
      }
    }}
    {...props}
  >
    {children}
  </Box>
);
