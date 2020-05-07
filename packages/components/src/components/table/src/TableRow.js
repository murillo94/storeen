import { Box } from '../../box';

export const TableRow = ({
  children,
  isBody = true,
  isHover = true,
  onClick = null,
  ...props
}) => (
  <Box
    as="tr"
    onClick={onClick}
    styleConfig={{
      backgroundColor: 'gray0',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray100',
      height: '64px',
      cursor: onClick ? 'pointer' : 'default',
      '&:last-child': {
        borderBottom: isBody && 'none'
      },
      '&:hover': {
        backgroundColor: isHover && 'gray75'
      }
    }}
    {...props}
  >
    {children}
  </Box>
);
