import { Box } from '@storeen/components';

export const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: ['100%', '50em', '62em', '78em']
      }}
      marginX="auto"
      paddingX={3}
    >
      {children}
    </Box>
  );
};
