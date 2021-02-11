import { Box, Heading, Paragraph } from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const Carrers = () => (
  <Box
    as="section"
    paddingX={3}
    paddingY={4}
    marginBottom={15}
    sx={{ textAlign: 'center' }}
  >
    <Wrapper>
      <Heading marginBottom={4}>Política de privacidade</Heading>
      <Paragraph marginBottom={10}>todo</Paragraph>
    </Wrapper>
  </Box>
);

export default useLayout(Carrers);
