import { Box, Heading, Paragraph } from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const University = () => (
  <Box as="section" paddingY={4} paddingX={3} sx={{ textAlign: 'center' }}>
    <Wrapper>
      <Heading marginBottom={4}>Universidade</Heading>
      <Paragraph marginBottom={10} color="muted">
        Aprenda tudo sobre e-commerce e não tenha dúvidas sobre nossa
        plataforma.
      </Paragraph>
      <Box as="section" paddingY={4}>
        <Heading is="h3">
          Novidades saindo do forno logo mais, fique atento!
        </Heading>
      </Box>
    </Wrapper>
  </Box>
);

export default useLayout(University);
