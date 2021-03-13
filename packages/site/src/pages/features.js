import { Box, Heading, Paragraph } from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const Features = () => (
  <Box as="section" paddingX={3} paddingY={4} sx={{ textAlign: 'center' }}>
    <Wrapper>
      <Heading marginBottom={4}>Funcionalidades</Heading>
      <Paragraph color="muted" marginBottom={10}>
        todo
      </Paragraph>
    </Wrapper>
  </Box>
);

export default useLayout(Features);
