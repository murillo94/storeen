import { Box } from '@storeen/components';

const Page = ({ children }) => (
  <Box
    as="main"
    padding={[14, 10]}
    sx={{
      textAlign: 'center',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Box sx={{ width: '410px' }}>{children}</Box>
  </Box>
);

export default Page;
