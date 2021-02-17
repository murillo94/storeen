import { Box, Heading, Paragraph } from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const FAQ = () => (
  <Box
    as="section"
    paddingX={3}
    paddingY={4}
    marginBottom={15}
    sx={{ textAlign: 'center' }}
  >
    <Wrapper>
      <Heading marginBottom={4}>Perguntas frequentes</Heading>
      <Paragraph marginBottom={10} color="muted">
        todo
      </Paragraph>
    </Wrapper>
  </Box>
);

export default useLayout(FAQ);
