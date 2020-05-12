import { Box } from '@storeen/components';

const Page = ({ children }) => (
  <Box
    as="section"
    sx={{
      textAlign: 'center',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Box as="main" padding={6}>
      <Box sx={{ width: '300px' }}>{children}</Box>
    </Box>
  </Box>
);

export default Page;
