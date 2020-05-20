import { Box } from '../../box';

export const Header = ({ children, ...props }) => (
  <Box
    as="header"
    padding={2}
    styleConfig={{
      backgroundColor: 'gray0',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray400',
      position: 'sticky',
      top: '0',
      left: '0',
      zIndex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}
    {...props}
  >
    {children}
  </Box>
);
