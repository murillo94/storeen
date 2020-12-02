import { Box } from '../../box';

export const Footer = ({ children, align = 'left', ...props }) => (
  <>
    <Box
      as="footer"
      className={align}
      marginTop={9}
      styleConfig={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
        button: {
          paddingY: 2,
          paddingX: 4
        }
      }}
      {...props}
    >
      {children}
    </Box>
  </>
);
